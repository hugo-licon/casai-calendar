import { CalendarDate } from "types/calendar-date";
import {
  findFirstAvailableDate,
  getArrayOfMinimumOfNights,
  toUTC
} from "./dates";

describe("getArrayOfMinimumOfNights", () => {
  it("should return an array following dates based on the minimum of nights", () => {
    const calendarDate: CalendarDate = {
      date: toUTC("2021-09-09"),
      price: "100.00",
      can_be_checkout: true,
      can_be_checkin: true,
      min_nights: 3
    };
    const result = getArrayOfMinimumOfNights(calendarDate);
    expect(result).toEqual([
      toUTC("2021-09-10"),
      toUTC("2021-09-11"),
      toUTC("2021-09-12")
    ]);
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
