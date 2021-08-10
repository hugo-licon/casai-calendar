import { CalendarDate } from "types/calendar-date";
import { add } from "date-fns";

export function toUTC(date: string | number | Date): Date {
  const offDate = new Date(date);
  const offset = offDate.getTimezoneOffset() * 60 * 1000;
  const toDate = new Date(date);
  toDate.setTime(toDate.getTime() + offset);
  return toDate;
}

export function findFirstAvailableDate(calendarDates: CalendarDate[]): Date {
  const calendarDate = calendarDates.find(calendar => calendar.can_be_checkin);
  return calendarDate?.date ?? toUTC(new Date());
}

/**
 * Based on a start date, find the next disabled date
 *
 * @export
 * @param {CalendarDate[]} calendarDates
 * @param {Date} startDate
 * @return {*}  {Date[]}
 */
export function findNextDisabledDate(
  calendarDates: CalendarDate[],
  startDate: Date
): Date | undefined {
  const filteredDates = calendarDates
    .filter(calendar => calendar.date > startDate)
    .find(calendar => !calendar.can_be_checkin);
  return filteredDates?.date;
}

export function getDisabledDatesForSelectedRange({
  calendarDates,
  checkoutDate
}: {
  calendarDates: CalendarDate[];
  checkoutDate: Date;
}): Date[] {
  const disabledDates = getDisabledDates("checkin")(calendarDates).filter(
    date => date.getTime() !== checkoutDate.getTime()
  );
  return disabledDates;
}

export function getDisabledDates(disabledFor: "checkin" | "checkout") {
  return function (calendarDates: CalendarDate[]): Date[] {
    const filteredCalendarDates = calendarDates.filter(calendarDate => {
      if (disabledFor === "checkin") {
        return calendarDate.can_be_checkin === false;
      }
      return calendarDate.can_be_checkout === false;
    });
    return filteredCalendarDates.map(calendarDate => calendarDate.date);
  };
}

export function getArrayOfMinimumOfNights(calendarDate: CalendarDate): Date[] {
  const minNights = calendarDate.min_nights - 1;
  const initialDate = calendarDate.date;
  const dates: Date[] = new Array(minNights);

  for (let index = 0; index < dates.length; index++) {
    const daysToAdd = index + 1;
    const newDate = add(initialDate, { days: daysToAdd });
    dates[index] = newDate;
  }

  return dates;
}
