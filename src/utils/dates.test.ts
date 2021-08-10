import { CalendarDate } from "types/calendar-date";
import {
  findFirstAvailableDate,
  findNextDisabledDate,
  getArrayOfMinimumOfNights,
  getDisabledDatesForSelectedRange,
  toUTC
} from "./dates";

describe("getArrayOfMinimumOfNights fn", () => {
  it("should return an array following dates based on the minimum of nights", () => {
    const calendarDate: CalendarDate = {
      date: toUTC("2021-09-09"),
      price: "100.00",
      can_be_checkout: true,
      can_be_checkin: true,
      min_nights: 3
    };
    const result = getArrayOfMinimumOfNights(calendarDate);
    expect(result).toEqual([toUTC("2021-09-10"), toUTC("2021-09-11")]);
  });

  it("should return an empty array when the minimum of nights is one", () => {
    const calendarDate: CalendarDate = {
      date: toUTC("2021-09-09"),
      price: "100.00",
      can_be_checkout: true,
      can_be_checkin: true,
      min_nights: 1
    };
    const result = getArrayOfMinimumOfNights(calendarDate);
    expect(result).toEqual([]);
  });
});

describe("findFirstAvailableDate fn", () => {
  it("should return the first available date", () => {
    const calendarDates: CalendarDate[] = [
      {
        date: toUTC("2021-09-01"),
        price: "100.00",
        can_be_checkout: true,
        can_be_checkin: false,
        min_nights: 3
      },
      {
        date: toUTC("2021-09-02"),
        price: "100.00",
        can_be_checkout: true,
        can_be_checkin: false,
        min_nights: 2
      },
      {
        date: toUTC("2021-09-03"),
        price: "100.00",
        can_be_checkout: true,
        can_be_checkin: false,
        min_nights: 3
      },
      {
        date: toUTC("2021-09-04"),
        price: "100.00",
        can_be_checkout: true,
        can_be_checkin: false,
        min_nights: 2
      },
      {
        date: toUTC("2021-09-05"),
        price: "100.00",
        can_be_checkout: true,
        can_be_checkin: false,
        min_nights: 3
      },
      {
        date: toUTC("2021-09-06"),
        price: "100.00",
        can_be_checkout: true,
        can_be_checkin: false,
        min_nights: 2
      },
      {
        date: toUTC("2021-09-07"),
        price: "100.00",
        can_be_checkout: true,
        can_be_checkin: false,
        min_nights: 2
      },
      {
        date: toUTC("2021-09-08"),
        price: "100.00",
        can_be_checkout: true,
        can_be_checkin: false,
        min_nights: 2
      },
      {
        date: toUTC("2021-09-09"),
        price: "100.00",
        can_be_checkout: true,
        can_be_checkin: true,
        min_nights: 2
      },
      {
        date: toUTC("2021-09-10"),
        price: "100.00",
        can_be_checkout: true,
        can_be_checkin: false,
        min_nights: 2
      }
    ];
    const result = findFirstAvailableDate(calendarDates);
    expect(result).toEqual(toUTC("2021-09-09"));
  });
});

describe("findNextDisabledDate fn", () => {
  it("should return the next disabled date", () => {
    const calendarDates: CalendarDate[] = [
      {
        date: toUTC("2021-09-01"),
        price: "100.00",
        can_be_checkout: true,
        can_be_checkin: true,
        min_nights: 3
      },
      {
        date: toUTC("2021-09-02"),
        price: "100.00",
        can_be_checkout: true,
        can_be_checkin: true,
        min_nights: 2
      },
      {
        date: toUTC("2021-09-03"),
        price: "100.00",
        can_be_checkout: true,
        can_be_checkin: true,
        min_nights: 3
      },
      {
        date: toUTC("2021-09-04"),
        price: "100.00",
        can_be_checkout: true,
        can_be_checkin: true,
        min_nights: 2
      },
      {
        date: toUTC("2021-09-05"),
        price: "100.00",
        can_be_checkout: true,
        can_be_checkin: true,
        min_nights: 3
      },
      {
        date: toUTC("2021-09-06"),
        price: "100.00",
        can_be_checkout: true,
        can_be_checkin: true,
        min_nights: 2
      },
      {
        date: toUTC("2021-09-07"),
        price: "100.00",
        can_be_checkout: true,
        can_be_checkin: true,
        min_nights: 2
      },
      {
        date: toUTC("2021-09-08"),
        price: "100.00",
        can_be_checkout: true,
        can_be_checkin: true,
        min_nights: 2
      },
      {
        date: toUTC("2021-09-09"),
        price: "100.00",
        can_be_checkout: true,
        can_be_checkin: true,
        min_nights: 2
      },
      {
        date: toUTC("2021-09-10"),
        price: "100.00",
        can_be_checkout: true,
        can_be_checkin: true,
        min_nights: 2
      }
    ];
    const result = findNextDisabledDate(calendarDates, toUTC("2021-09-03"));
    expect(result).toBeUndefined();
  });

  it("should return undefined when it can find a disabled date", () => {
    const calendarDates: CalendarDate[] = [
      {
        date: toUTC("2021-09-01"),
        price: "100.00",
        can_be_checkout: true,
        can_be_checkin: true,
        min_nights: 3
      },
      {
        date: toUTC("2021-09-02"),
        price: "100.00",
        can_be_checkout: true,
        can_be_checkin: true,
        min_nights: 2
      },
      {
        date: toUTC("2021-09-03"),
        price: "100.00",
        can_be_checkout: true,
        can_be_checkin: true,
        min_nights: 3
      },
      {
        date: toUTC("2021-09-04"),
        price: "100.00",
        can_be_checkout: true,
        can_be_checkin: true,
        min_nights: 2
      },
      {
        date: toUTC("2021-09-05"),
        price: "100.00",
        can_be_checkout: true,
        can_be_checkin: true,
        min_nights: 3
      },
      {
        date: toUTC("2021-09-06"),
        price: "100.00",
        can_be_checkout: true,
        can_be_checkin: false,
        min_nights: 2
      },
      {
        date: toUTC("2021-09-07"),
        price: "100.00",
        can_be_checkout: true,
        can_be_checkin: false,
        min_nights: 2
      },
      {
        date: toUTC("2021-09-08"),
        price: "100.00",
        can_be_checkout: true,
        can_be_checkin: false,
        min_nights: 2
      },
      {
        date: toUTC("2021-09-09"),
        price: "100.00",
        can_be_checkout: true,
        can_be_checkin: true,
        min_nights: 2
      },
      {
        date: toUTC("2021-09-10"),
        price: "100.00",
        can_be_checkout: true,
        can_be_checkin: false,
        min_nights: 2
      }
    ];
    const result = findNextDisabledDate(calendarDates, toUTC("2021-09-03"));
    expect(result).toEqual(toUTC("2021-09-06"));
  });
});

describe("getDisabledDatesForSelectedRange fn", () => {
  it("should return an array of disabled dates", () => {
    const calendarDates: CalendarDate[] = [
      {
        date: toUTC("2021-09-01"),
        price: "100.00",
        can_be_checkout: false,
        can_be_checkin: false,
        min_nights: 1
      },
      {
        date: toUTC("2021-09-02"),
        price: "100.00",
        can_be_checkout: false,
        can_be_checkin: false,
        min_nights: 1
      },
      {
        date: toUTC("2021-09-03"),
        price: "100.00",
        can_be_checkout: false,
        can_be_checkin: false,
        min_nights: 1
      },
      {
        date: toUTC("2021-09-04"),
        price: "100.00",
        can_be_checkout: true,
        can_be_checkin: false,
        min_nights: 2
      },
      {
        date: toUTC("2021-09-05"),
        price: "100.00",
        can_be_checkout: true,
        can_be_checkin: false,
        min_nights: 1
      },
      {
        date: toUTC("2021-09-06"),
        price: "100.00",
        can_be_checkout: false,
        can_be_checkin: false,
        min_nights: 1
      },
      {
        date: toUTC("2021-09-07"),
        price: "100.00",
        can_be_checkout: false,
        can_be_checkin: false,
        min_nights: 1
      },
      {
        date: toUTC("2021-09-08"),
        price: "100.00",
        can_be_checkout: false,
        can_be_checkin: false,
        min_nights: 1
      },
      {
        date: toUTC("2021-09-09"),
        price: "100.00",
        can_be_checkout: true,
        can_be_checkin: true,
        min_nights: 2
      },
      {
        date: toUTC("2021-09-10"),
        price: "100.00",
        can_be_checkout: true,
        can_be_checkin: true,
        min_nights: 1
      },
      {
        date: toUTC("2021-09-11"),
        price: "100.00",
        can_be_checkout: true,
        can_be_checkin: true,
        min_nights: 1
      },
      {
        date: toUTC("2021-09-12"),
        price: "100.00",
        can_be_checkout: true,
        can_be_checkin: false,
        min_nights: 1
      },
      {
        date: toUTC("2021-09-13"),
        price: "100.00",
        can_be_checkout: true,
        can_be_checkin: true,
        min_nights: 1
      },
      {
        date: toUTC("2021-09-14"),
        price: "100.00",
        can_be_checkout: false,
        can_be_checkin: false,
        min_nights: 1
      }
    ];
    const disabledDates = getDisabledDatesForSelectedRange({
      calendarDates,
      checkoutDate: toUTC("2021-09-12")
    });
    expect(disabledDates).toEqual([
      toUTC("2021-09-01"),
      toUTC("2021-09-02"),
      toUTC("2021-09-03"),
      toUTC("2021-09-04"),
      toUTC("2021-09-05"),
      toUTC("2021-09-06"),
      toUTC("2021-09-07"),
      toUTC("2021-09-08"),
      toUTC("2021-09-14")
    ]);
  });
});
