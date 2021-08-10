import React from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import {
  DateRange,
  DayContentRendererProps,
  OnChangeProps,
  Range,
  RangeWithKey
} from "react-date-range";
import {
  findFirstAvailableDate,
  findNextDisabledDate,
  getArrayOfMinimumOfNights,
  getDisabledDates,
  getDisabledDatesForSelectedRange
} from "utils/dates";
import { CalendarDate } from "types/calendar-date";
import { format, addDays } from "date-fns";
import DayCell from "./day-cell";

type Props = {
  calendarDates: CalendarDate[];
};

enum RangeElement {
  StartDate = 0,
  EndDate = 1,
  RangeSelected = 2
}

export const DATE_FORMAT = "yyyy-MM-dd";

const DEFAULT_SELECTION = 0;

function arrayToObject(arr: Date[]): Record<string, boolean> {
  return arr.reduce((obj: Record<string, boolean>, date) => {
    const key = format(date, DATE_FORMAT);
    obj[key] = true;
    return obj;
  }, {});
}

function CasaiCalendar({ calendarDates }: Props) {
  /**
   * Represents range focus `[range, rangeElement]`. `range` represents the index of the range
   * that's focused and the `rangeElement` the element of the range that's
   * focused, `0` for start date and `1` for end date
   */
  const [rangeElement, setRangeElement] = React.useState<RangeElement>(
    RangeElement.StartDate
  );
  const [minDate, setMinDate] = React.useState<Date>(new Date());
  const [maxDate, setMaxDate] = React.useState<Date | undefined>(new Date());

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
    if (calendarDates && rangeElement === RangeElement.StartDate) {
      const disabledDatesForCheckin =
        getDisabledDates("checkin")(calendarDates);
      setDisabledDates(disabledDatesForCheckin);
    }
  }, [calendarDates, rangeElement]);

  React.useEffect(() => {
    if (
      calendarDates &&
      state.endDate &&
      rangeElement === RangeElement.RangeSelected
    ) {
      const disabledDatesForCheckin = getDisabledDatesForSelectedRange({
        calendarDates,
        checkoutDate: state.endDate
      });
      setDisabledDates(disabledDatesForCheckin);
    }
  }, [calendarDates, rangeElement, state.endDate]);

  React.useEffect(() => {
    if (calendarDates && rangeElement === RangeElement.EndDate) {
      const disabledDatesForCheckout =
        getDisabledDates("checkout")(calendarDates);
      setDisabledDates(disabledDatesForCheckout);
    }
  }, [calendarDates, rangeElement]);

  /* :: find the first available date :: */
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

  /* :: Set the min date :: */
  React.useEffect(() => {
    if (rangeElement === RangeElement.RangeSelected) {
      const firstAvailableDate = findFirstAvailableDate(calendarDates);
      setMinDate(firstAvailableDate);
    } else if (state.startDate) {
      setMinDate(state.startDate);
    }
  }, [state.startDate, calendarDates, rangeElement]);

  /* :: Set the max date :: */
  React.useEffect(() => {
    if (rangeElement === RangeElement.EndDate && state.startDate) {
      const nextDisabledDate = findNextDisabledDate(
        calendarDates,
        state.startDate
      );
      setMaxDate(nextDisabledDate);
    } else {
      const maxDate = addDays(new Date(), 180);
      setMaxDate(maxDate);
    }
  }, [state.startDate, calendarDates, rangeElement]);

  function onChange(range: OnChangeProps) {
    const { selection } = range as { selection: RangeWithKey };
    if (selection.endDate && blockedMinimumNights) {
      const key = format(selection.endDate, DATE_FORMAT);
      if (rangeElement === RangeElement.EndDate && blockedMinimumNights[key]) {
        return;
      }
    }
    setState(selection);
    setRangeElement(rangeElement => {
      if (rangeElement === RangeElement.EndDate) {
        return RangeElement.RangeSelected;
      }
      return RangeElement.EndDate;
    });
  }

  React.useEffect(() => {
    if (rangeElement === RangeElement.EndDate) {
      const selectedCalendarDate = calendarDates.find(calendarDate => {
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
  }, [calendarDates, rangeElement, state.startDate]);

  React.useEffect(() => {
    if (rangeElement === RangeElement.RangeSelected) {
      setBlockedMinimumNights({});
    }
  }, [rangeElement]);

  function onResetDates() {
    const firstAvailableDate = findFirstAvailableDate(calendarDates);
    setState(s => ({
      ...s,
      startDate: firstAvailableDate,
      endDate: firstAvailableDate
    }));
    setRangeElement(RangeElement.StartDate);
    setBlockedMinimumNights({});
  }


  return (
    <>
      <DateRange
        onChange={onChange}
        focusedRange={[
          DEFAULT_SELECTION,
          rangeElement === RangeElement.EndDate ? 1 : 0
        ]}
        disabledDates={disabledDates}
        showMonthAndYearPickers={false}
        minDate={minDate}
        ariaLabels={{
          nextButton: "Next month"
        }}
        maxDate={maxDate}
        dayContentRenderer={(props: DayContentRendererProps) => {
          return (
            <DayCell {...props} blockedMinimumNights={blockedMinimumNights} />
          );
        }}
        ranges={[state]}
      />
      <button onClick={onResetDates}>Reset Dates</button>
    </>
  );
}

export default CasaiCalendar;
