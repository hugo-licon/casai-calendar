import React from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import {
  DateRange,
  DayContentRendererProps,
  OnChangeProps,
  Range,
  RangeFocus,
  RangeWithKey
} from "react-date-range";
import {
  findFirstAvailableDate,
  getArrayOfMinimumOfNights,
  getDisabledDates
} from "utils/dates";
import { CalendarDate } from "types/calendar-date";
import { format } from "date-fns";
import { Popover } from "react-tiny-popover";

type Props = {
  calendarDates: CalendarDate[];
};

enum FocusedRange {
  StartDate = 0,
  EndDate = 1
}

const DATE_FORMAT = "yyyy-MM-dd";

const DEFAULT_SELECTION = 0;

function arrayToObject(arr: Date[]): Record<string, boolean> {
  return arr.reduce((obj: Record<string, boolean>, date) => {
    const key = format(date, DATE_FORMAT);
    obj[key] = true;
    return obj;
  }, {});
}

type DayCellProps = {
  blockedMinimumNights: Record<string, boolean> | undefined;
} & DayContentRendererProps;

function DayCell({
  blockedMinimumNights,
  className,
  tabIndex,
  style,
  renderPreviewPlaceholder,
  renderSelectionPlaceholders,
  date,
  dayNumberStyles,
  ...events
}: DayCellProps) {
  const [isHoverOpen, setIsHoverOpen] = React.useState<boolean>(false);
  const key = format(date, DATE_FORMAT);
  const isBlockedDate = blockedMinimumNights && blockedMinimumNights[key];
  let color = "black";
  if (isBlockedDate) {
    color = "red";
  }
  return (
    <Popover
      isOpen={isHoverOpen}
      // positions={["top"]} // if you'd like, you can limit the positions
      padding={0} // adjust padding here!
      // reposition={false} // prevents automatic readjustment of content position that keeps your popover content within its parent's bounds
      onClickOutside={() => setIsHoverOpen(false)} // handle click events outside of the popover/target here!
      content={(
        { position, nudgedLeft, nudgedTop } // you can also provide a render function that injects some useful stuff!
      ) => (
        <div
          style={{
            background: "rgb(255,255,255)",
            border: "1px solid rgb(235, 235, 235)",
            boxShadow: "rgb(0 0 0 / 10%) 0px 0px 5px",
            padding: 8,
            borderRadius: 8
          }}
        >
          4-nighs minimum
        </div>
      )}
    >
      <button
        // {...events}
        type="button"
        className={className}
        {...events}
        data-testid={key}
        tabIndex={tabIndex}
        disabled={isBlockedDate}
        style={style}
      >
        {renderSelectionPlaceholders()}
        {renderPreviewPlaceholder()}
        <span
          className={dayNumberStyles}
          style={{ color }}
          onClick={() => {
            if (isBlockedDate) {
              setIsHoverOpen(true);
            }
          }}
          onMouseEnter={() => {
            if (isBlockedDate) {
              setIsHoverOpen(true);
            }
          }}
          onMouseOut={() => {
            if (isBlockedDate) {
              setIsHoverOpen(false);
            }
          }}
        >
          {date.getDate()}
        </span>
      </button>
    </Popover>
  );
}

function CasaiCalendar({ calendarDates }: Props) {
  /**
   * Represents range focus `[range, rangeElement]`. `range` represents the index of the range
   * that's focused and the `rangeElement` the element of the range that's
   * focused, `0` for start date and `1` for end date
   */
  const [focusedRange, setFocusedRange] = React.useState<RangeFocus>([
    DEFAULT_SELECTION,
    FocusedRange.StartDate
  ]);
  const [minDate, setMinDate] = React.useState<Date>(new Date());
  const [blockedMinimumNights, setBlockedMinimumNights] =
    React.useState<Record<string, boolean>>();

  const [state, setState] = React.useState<Range>({
    startDate: new Date(),
    endDate: new Date(),
    showDateDisplay: false,
    key: "selection"
  });

  const [disabledDates, setDisabledDates] = React.useState<Date[]>();

  React.useEffect(() => {
    const [, rangeElement] = focusedRange;
    if (calendarDates && rangeElement === FocusedRange.StartDate) {
      const disabledDatesForCheckin =
        getDisabledDates("checkin")(calendarDates);
      setDisabledDates(disabledDatesForCheckin);
    }
  }, [calendarDates, focusedRange]);

  React.useEffect(() => {
    const [, rangeElement] = focusedRange;
    if (calendarDates && rangeElement === FocusedRange.EndDate) {
      const disabledDatesForCheckout =
        getDisabledDates("checkout")(calendarDates);
      setDisabledDates(disabledDatesForCheckout);
    }
  }, [calendarDates, focusedRange]);

  React.useEffect(() => {
    if (calendarDates) {
      const firstAvailableDate = findFirstAvailableDate(calendarDates);
      setState(s => ({
        ...s,
        startDate: firstAvailableDate,
        endDate: firstAvailableDate
      }));
    }
  }, [calendarDates]);

  React.useEffect(() => {
    // const [, rangeElement] = focusedRange;
    // if (rangeElement === FocusedRange.RangeSelected) {
    //   const firstAvailableDate = findFirstAvailableDate(calendarDates);
    //   setMinDate(firstAvailableDate);
    // } else {
    //   setMinDate(state.startDate);
    // }
  }, [focusedRange, state.startDate, calendarDates]);

  function onChange(range: OnChangeProps) {
    const { selection } = range as { selection: RangeWithKey };
    const [, rangeElement] = focusedRange;
    if (selection.endDate && blockedMinimumNights) {
      const key = format(selection.endDate, DATE_FORMAT);
      if (rangeElement === FocusedRange.EndDate && blockedMinimumNights[key]) {
        return;
      }
    }
    setState(selection);
    setFocusedRange(([, rangeElement]) => {
      if (rangeElement === FocusedRange.StartDate) {
        return [DEFAULT_SELECTION, FocusedRange.EndDate];
      }
      // if (rangeElement === FocusedRange.EndDate) {
      // }
      return [DEFAULT_SELECTION, FocusedRange.StartDate];
    });
  }

  React.useEffect(() => {
    const [, rangeElement] = focusedRange;
    if (rangeElement === FocusedRange.EndDate) {
      const selectedCalendarDate = calendarDates.find(calendarDate => {
        // console.log(format(calendarDate.date, "yyyy-MM-dd"));
        if (!state.startDate) return false;
        return (
          format(calendarDate.date, DATE_FORMAT) ===
          format(state.startDate, DATE_FORMAT)
        );
      });
      if (selectedCalendarDate) {
        const newDisabledDays = getArrayOfMinimumOfNights(selectedCalendarDate);
        setBlockedMinimumNights(arrayToObject(newDisabledDays));
      }
    }
  }, [calendarDates, focusedRange, state.startDate]);

  function onResetDates() {
    const firstAvailableDate = findFirstAvailableDate(calendarDates);
    setState(s => ({
      ...s,
      startDate: firstAvailableDate,
      endDate: firstAvailableDate
    }));
    setFocusedRange([DEFAULT_SELECTION, FocusedRange.StartDate]);
  }

  return (
    <>
      <DateRange
        // editableDateInputs={true}
        // twoStepChange
        onChange={onChange}
        focusedRange={focusedRange}
        disabledDates={disabledDates}
        showMonthAndYearPickers={false}
        minDate={state.startDate}
        dayContentRenderer={(props: DayContentRendererProps) => {
          return (
            <DayCell {...props} blockedMinimumNights={blockedMinimumNights} />
          );
        }}
        // moveRangeOnFirstSelection={false}
        ranges={[state]}
      />
      <button onClick={onResetDates}>Reset Dates</button>
    </>
  );
}

export default CasaiCalendar;
