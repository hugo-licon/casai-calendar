import { CalendarDate } from "types/calendar-date";
import { toUTC } from "utils/dates";

export const dates = [
  {
    status: "booked",
    date: "2021-07-30",
    price: "100.00",
    can_be_checkout: false,
    can_be_checkin: false,
    min_nights: 1
  },
  {
    status: "booked",
    date: "2021-07-31",
    price: "100.00",
    can_be_checkout: false,
    can_be_checkin: false,
    min_nights: 1
  },
  {
    status: "booked",
    date: "2021-08-01",
    price: "100.00",
    can_be_checkout: false,
    can_be_checkin: false,
    min_nights: 1
  },
  {
    status: "booked",
    date: "2021-08-02",
    price: "100.00",
    can_be_checkout: false,
    can_be_checkin: false,
    min_nights: 1
  },
  {
    status: "booked",
    date: "2021-08-03",
    price: "100.00",
    can_be_checkout: false,
    can_be_checkin: false,
    min_nights: 1
  },
  {
    status: "booked",
    date: "2021-08-04",
    price: "100.00",
    can_be_checkout: false,
    can_be_checkin: false,
    min_nights: 1
  },
  {
    status: "booked",
    date: "2021-08-05",
    price: "100.00",
    can_be_checkout: false,
    can_be_checkin: false,
    min_nights: 1
  },
  {
    status: "booked",
    date: "2021-08-06",
    price: "100.00",
    can_be_checkout: false,
    can_be_checkin: false,
    min_nights: 1
  },
  {
    status: "booked",
    date: "2021-08-07",
    price: "100.00",
    can_be_checkout: false,
    can_be_checkin: false,
    min_nights: 1
  },
  {
    status: "booked",
    date: "2021-08-08",
    price: "100.00",
    can_be_checkout: false,
    can_be_checkin: false,
    min_nights: 1
  },
  {
    status: "booked",
    date: "2021-08-09",
    price: "100.00",
    can_be_checkout: false,
    can_be_checkin: false,
    min_nights: 1
  },
  {
    status: "booked",
    date: "2021-08-10",
    price: "100.00",
    can_be_checkout: false,
    can_be_checkin: false,
    min_nights: 1
  },
  {
    status: "booked",
    date: "2021-08-11",
    price: "100.00",
    can_be_checkout: false,
    can_be_checkin: false,
    min_nights: 1
  },
  {
    status: "booked",
    date: "2021-08-12",
    price: "100.00",
    can_be_checkout: false,
    can_be_checkin: false,
    min_nights: 1
  },
  {
    status: "booked",
    date: "2021-08-13",
    price: "100.00",
    can_be_checkout: false,
    can_be_checkin: false,
    min_nights: 1
  },
  {
    status: "booked",
    date: "2021-08-14",
    price: "100.00",
    can_be_checkout: false,
    can_be_checkin: false,
    min_nights: 1
  },
  {
    status: "booked",
    date: "2021-08-15",
    price: "100.00",
    can_be_checkout: false,
    can_be_checkin: false,
    min_nights: 1
  },
  {
    status: "booked",
    date: "2021-08-16",
    price: "100.00",
    can_be_checkout: false,
    can_be_checkin: false,
    min_nights: 1
  },
  {
    status: "booked",
    date: "2021-08-17",
    price: "100.00",
    can_be_checkout: false,
    can_be_checkin: false,
    min_nights: 1
  },
  {
    status: "available",
    date: "2021-08-18",
    price: "100.00",
    can_be_checkout: false,
    can_be_checkin: false,
    min_nights: 2
  },
  {
    status: "booked",
    date: "2021-08-19",
    price: "100.00",
    can_be_checkout: true,
    can_be_checkin: false,
    min_nights: 1
  },
  {
    status: "booked",
    date: "2021-08-20",
    price: "100.00",
    can_be_checkout: false,
    can_be_checkin: false,
    min_nights: 1
  },
  {
    status: "booked",
    date: "2021-08-21",
    price: "100.00",
    can_be_checkout: false,
    can_be_checkin: false,
    min_nights: 1
  },
  {
    status: "booked",
    date: "2021-08-22",
    price: "100.00",
    can_be_checkout: false,
    can_be_checkin: false,
    min_nights: 1
  },
  {
    status: "booked",
    date: "2021-08-23",
    price: "100.00",
    can_be_checkout: false,
    can_be_checkin: false,
    min_nights: 1
  },
  {
    status: "booked",
    date: "2021-08-24",
    price: "100.00",
    can_be_checkout: false,
    can_be_checkin: false,
    min_nights: 1
  },
  {
    status: "booked",
    date: "2021-08-25",
    price: "100.00",
    can_be_checkout: false,
    can_be_checkin: false,
    min_nights: 1
  },
  {
    status: "booked",
    date: "2021-08-26",
    price: "100.00",
    can_be_checkout: false,
    can_be_checkin: false,
    min_nights: 1
  },
  {
    status: "booked",
    date: "2021-08-27",
    price: "100.00",
    can_be_checkout: false,
    can_be_checkin: false,
    min_nights: 1
  },
  {
    status: "booked",
    date: "2021-08-28",
    price: "100.00",
    can_be_checkout: false,
    can_be_checkin: false,
    min_nights: 1
  },
  {
    status: "booked",
    date: "2021-08-29",
    price: "100.00",
    can_be_checkout: false,
    can_be_checkin: false,
    min_nights: 1
  },
  {
    status: "booked",
    date: "2021-08-30",
    price: "100.00",
    can_be_checkout: false,
    can_be_checkin: false,
    min_nights: 1
  },
  {
    status: "booked",
    date: "2021-08-31",
    price: "100.00",
    can_be_checkout: false,
    can_be_checkin: false,
    min_nights: 1
  },
  {
    status: "booked",
    date: "2021-09-01",
    price: "100.00",
    can_be_checkout: false,
    can_be_checkin: false,
    min_nights: 1
  },
  {
    status: "booked",
    date: "2021-09-02",
    price: "100.00",
    can_be_checkout: false,
    can_be_checkin: false,
    min_nights: 1
  },
  {
    status: "booked",
    date: "2021-09-03",
    price: "100.00",
    can_be_checkout: false,
    can_be_checkin: false,
    min_nights: 1
  },
  {
    status: "available",
    date: "2021-09-04",
    price: "100.00",
    can_be_checkout: true,
    can_be_checkin: false,
    min_nights: 2
  },
  {
    status: "booked",
    date: "2021-09-05",
    price: "100.00",
    can_be_checkout: true,
    can_be_checkin: false,
    min_nights: 1
  },
  {
    status: "booked",
    date: "2021-09-06",
    price: "100.00",
    can_be_checkout: false,
    can_be_checkin: false,
    min_nights: 1
  },
  {
    status: "booked",
    date: "2021-09-07",
    price: "100.00",
    can_be_checkout: false,
    can_be_checkin: false,
    min_nights: 1
  },
  {
    status: "booked",
    date: "2021-09-08",
    price: "100.00",
    can_be_checkout: false,
    can_be_checkin: false,
    min_nights: 1
  },
  {
    status: "available",
    date: "2021-09-09",
    price: "100.00",
    can_be_checkout: true,
    can_be_checkin: true,
    min_nights: 2
  },
  {
    status: "available",
    date: "2021-09-10",
    price: "100.00",
    can_be_checkout: true,
    can_be_checkin: true,
    min_nights: 1
  },
  {
    status: "available",
    date: "2021-09-11",
    price: "100.00",
    can_be_checkout: true,
    can_be_checkin: true,
    min_nights: 1
  },
  {
    status: "booked",
    date: "2021-09-12",
    price: "100.00",
    can_be_checkout: true,
    can_be_checkin: false,
    min_nights: 1
  },
  {
    status: "available",
    date: "2021-09-13",
    price: "100.00",
    can_be_checkout: true,
    can_be_checkin: true,
    min_nights: 1
  },
  {
    status: "available",
    date: "2021-09-14",
    price: "100.00",
    can_be_checkout: true,
    can_be_checkin: true,
    min_nights: 1
  },
  {
    status: "available",
    date: "2021-09-15",
    price: "100.00",
    can_be_checkout: true,
    can_be_checkin: true,
    min_nights: 1
  },
  {
    status: "available",
    date: "2021-09-16",
    price: "100.00",
    can_be_checkout: true,
    can_be_checkin: true,
    min_nights: 1
  },
  {
    status: "available",
    date: "2021-09-17",
    price: "100.00",
    can_be_checkout: true,
    can_be_checkin: true,
    min_nights: 1
  },
  {
    status: "available",
    date: "2021-09-18",
    price: "100.00",
    can_be_checkout: true,
    can_be_checkin: true,
    min_nights: 1
  },
  {
    status: "available",
    date: "2021-09-19",
    price: "100.00",
    can_be_checkout: true,
    can_be_checkin: true,
    min_nights: 1
  },
  {
    status: "booked",
    date: "2021-09-20",
    price: "100.00",
    can_be_checkout: true,
    can_be_checkin: false,
    min_nights: 1
  },
  {
    status: "booked",
    date: "2021-09-21",
    price: "100.00",
    can_be_checkout: false,
    can_be_checkin: false,
    min_nights: 1
  },
  {
    status: "available",
    date: "2021-09-22",
    price: "100.00",
    can_be_checkout: true,
    can_be_checkin: true,
    min_nights: 1
  },
  {
    status: "available",
    date: "2021-09-23",
    price: "100.00",
    can_be_checkout: true,
    can_be_checkin: true,
    min_nights: 1
  },
  {
    status: "available",
    date: "2021-09-24",
    price: "100.00",
    can_be_checkout: true,
    can_be_checkin: true,
    min_nights: 1
  },
  {
    status: "available",
    date: "2021-09-25",
    price: "100.00",
    can_be_checkout: true,
    can_be_checkin: true,
    min_nights: 1
  },
  {
    status: "available",
    date: "2021-09-26",
    price: "100.00",
    can_be_checkout: true,
    can_be_checkin: true,
    min_nights: 1
  },
  {
    status: "available",
    date: "2021-09-27",
    price: "100.00",
    can_be_checkout: true,
    can_be_checkin: true,
    min_nights: 1
  },
  {
    status: "available",
    date: "2021-09-28",
    price: "100.00",
    can_be_checkout: true,
    can_be_checkin: true,
    min_nights: 1
  },
  {
    status: "available",
    date: "2021-09-29",
    price: "100.00",
    can_be_checkout: true,
    can_be_checkin: true,
    min_nights: 1
  },
  {
    status: "available",
    date: "2021-09-30",
    price: "100.00",
    can_be_checkout: true,
    can_be_checkin: true,
    min_nights: 1
  },
  {
    status: "booked",
    date: "2021-10-01",
    price: "100.00",
    can_be_checkout: true,
    can_be_checkin: false,
    min_nights: 1
  },
  {
    status: "booked",
    date: "2021-10-02",
    price: "100.00",
    can_be_checkout: false,
    can_be_checkin: false,
    min_nights: 1
  },
  {
    status: "booked",
    date: "2021-10-03",
    price: "100.00",
    can_be_checkout: false,
    can_be_checkin: false,
    min_nights: 1
  },
  {
    status: "booked",
    date: "2021-10-04",
    price: "100.00",
    can_be_checkout: false,
    can_be_checkin: false,
    min_nights: 1
  },
  {
    status: "unavailable",
    date: "2021-10-05",
    price: "100.00",
    can_be_checkout: false,
    can_be_checkin: false,
    min_nights: 1
  },
  {
    status: "unavailable",
    date: "2021-10-06",
    price: "100.00",
    can_be_checkout: false,
    can_be_checkin: false,
    min_nights: 1
  },
  {
    status: "unavailable",
    date: "2021-10-07",
    price: "100.00",
    can_be_checkout: false,
    can_be_checkin: false,
    min_nights: 1
  },
  {
    status: "unavailable",
    date: "2021-10-08",
    price: "100.00",
    can_be_checkout: false,
    can_be_checkin: false,
    min_nights: 1
  },
  {
    status: "unavailable",
    date: "2021-10-09",
    price: "100.00",
    can_be_checkout: false,
    can_be_checkin: false,
    min_nights: 1
  },
  {
    status: "unavailable",
    date: "2021-10-10",
    price: "100.00",
    can_be_checkout: false,
    can_be_checkin: false,
    min_nights: 1
  },
  {
    status: "unavailable",
    date: "2021-10-11",
    price: "100.00",
    can_be_checkout: false,
    can_be_checkin: false,
    min_nights: 1
  },
  {
    status: "unavailable",
    date: "2021-10-12",
    price: "100.00",
    can_be_checkout: false,
    can_be_checkin: false,
    min_nights: 1
  },
  {
    status: "unavailable",
    date: "2021-10-13",
    price: "100.00",
    can_be_checkout: false,
    can_be_checkin: false,
    min_nights: 1
  },
  {
    status: "unavailable",
    date: "2021-10-14",
    price: "100.00",
    can_be_checkout: false,
    can_be_checkin: false,
    min_nights: 1
  },
  {
    status: "unavailable",
    date: "2021-10-15",
    price: "100.00",
    can_be_checkout: false,
    can_be_checkin: false,
    min_nights: 1
  },
  {
    status: "unavailable",
    date: "2021-10-16",
    price: "100.00",
    can_be_checkout: false,
    can_be_checkin: false,
    min_nights: 1
  },
  {
    status: "unavailable",
    date: "2021-10-17",
    price: "100.00",
    can_be_checkout: false,
    can_be_checkin: false,
    min_nights: 1
  },
  {
    status: "unavailable",
    date: "2021-10-18",
    price: "100.00",
    can_be_checkout: false,
    can_be_checkin: false,
    min_nights: 1
  },
  {
    status: "unavailable",
    date: "2021-10-19",
    price: "100.00",
    can_be_checkout: false,
    can_be_checkin: false,
    min_nights: 1
  },
  {
    status: "available",
    date: "2021-10-20",
    price: "100.00",
    can_be_checkout: true,
    can_be_checkin: true,
    min_nights: 1
  },
  {
    status: "available",
    date: "2021-10-21",
    price: "100.00",
    can_be_checkout: true,
    can_be_checkin: true,
    min_nights: 1
  },
  {
    status: "available",
    date: "2021-10-22",
    price: "100.00",
    can_be_checkout: true,
    can_be_checkin: true,
    min_nights: 1
  },
  {
    status: "available",
    date: "2021-10-23",
    price: "100.00",
    can_be_checkout: true,
    can_be_checkin: true,
    min_nights: 1
  },
  {
    status: "available",
    date: "2021-10-24",
    price: "100.00",
    can_be_checkout: true,
    can_be_checkin: true,
    min_nights: 1
  },
  {
    status: "available",
    date: "2021-10-25",
    price: "100.00",
    can_be_checkout: true,
    can_be_checkin: true,
    min_nights: 1
  },
  {
    status: "booked",
    date: "2021-10-26",
    price: "100.00",
    can_be_checkout: true,
    can_be_checkin: false,
    min_nights: 1
  },
  {
    status: "booked",
    date: "2021-10-27",
    price: "100.00",
    can_be_checkout: false,
    can_be_checkin: false,
    min_nights: 1
  },
  {
    status: "booked",
    date: "2021-10-28",
    price: "100.00",
    can_be_checkout: false,
    can_be_checkin: false,
    min_nights: 1
  },
  {
    status: "available",
    date: "2021-10-29",
    price: "100.00",
    can_be_checkout: true,
    can_be_checkin: true,
    min_nights: 1
  },
  {
    status: "available",
    date: "2021-10-30",
    price: "100.00",
    can_be_checkout: true,
    can_be_checkin: true,
    min_nights: 1
  },
  {
    status: "available",
    date: "2021-10-31",
    price: "100.00",
    can_be_checkout: true,
    can_be_checkin: true,
    min_nights: 1
  },
  {
    status: "available",
    date: "2021-11-01",
    price: "300.00",
    can_be_checkout: true,
    can_be_checkin: true,
    min_nights: 1
  },
  {
    status: "available",
    date: "2021-11-02",
    price: "300.00",
    can_be_checkout: true,
    can_be_checkin: true,
    min_nights: 1
  },
  {
    status: "available",
    date: "2021-11-03",
    price: "100.00",
    can_be_checkout: true,
    can_be_checkin: true,
    min_nights: 1
  },
  {
    status: "available",
    date: "2021-11-04",
    price: "100.00",
    can_be_checkout: true,
    can_be_checkin: true,
    min_nights: 1
  },
  {
    status: "available",
    date: "2021-11-05",
    price: "100.00",
    can_be_checkout: true,
    can_be_checkin: true,
    min_nights: 1
  },
  {
    status: "available",
    date: "2021-11-06",
    price: "100.00",
    can_be_checkout: true,
    can_be_checkin: true,
    min_nights: 1
  },
  {
    status: "available",
    date: "2021-11-07",
    price: "100.00",
    can_be_checkout: true,
    can_be_checkin: true,
    min_nights: 1
  },
  {
    status: "available",
    date: "2021-11-08",
    price: "100.00",
    can_be_checkout: true,
    can_be_checkin: true,
    min_nights: 1
  },
  {
    status: "available",
    date: "2021-11-09",
    price: "100.00",
    can_be_checkout: true,
    can_be_checkin: true,
    min_nights: 1
  },
  {
    status: "available",
    date: "2021-11-10",
    price: "100.00",
    can_be_checkout: true,
    can_be_checkin: true,
    min_nights: 1
  },
  {
    status: "available",
    date: "2021-11-11",
    price: "100.00",
    can_be_checkout: true,
    can_be_checkin: true,
    min_nights: 1
  },
  {
    status: "available",
    date: "2021-11-12",
    price: "100.00",
    can_be_checkout: true,
    can_be_checkin: true,
    min_nights: 1
  },
  {
    status: "available",
    date: "2021-11-13",
    price: "100.00",
    can_be_checkout: true,
    can_be_checkin: true,
    min_nights: 1
  },
  {
    status: "available",
    date: "2021-11-14",
    price: "100.00",
    can_be_checkout: true,
    can_be_checkin: true,
    min_nights: 1
  },
  {
    status: "available",
    date: "2021-11-15",
    price: "100.00",
    can_be_checkout: true,
    can_be_checkin: true,
    min_nights: 1
  },
  {
    status: "available",
    date: "2021-11-16",
    price: "100.00",
    can_be_checkout: true,
    can_be_checkin: true,
    min_nights: 1
  },
  {
    status: "available",
    date: "2021-11-17",
    price: "100.00",
    can_be_checkout: true,
    can_be_checkin: true,
    min_nights: 1
  },
  {
    status: "available",
    date: "2021-11-18",
    price: "100.00",
    can_be_checkout: true,
    can_be_checkin: true,
    min_nights: 1
  },
  {
    status: "available",
    date: "2021-11-19",
    price: "100.00",
    can_be_checkout: true,
    can_be_checkin: true,
    min_nights: 1
  },
  {
    status: "available",
    date: "2021-11-20",
    price: "100.00",
    can_be_checkout: true,
    can_be_checkin: true,
    min_nights: 1
  },
  {
    status: "available",
    date: "2021-11-21",
    price: "100.00",
    can_be_checkout: true,
    can_be_checkin: true,
    min_nights: 1
  },
  {
    status: "available",
    date: "2021-11-22",
    price: "100.00",
    can_be_checkout: true,
    can_be_checkin: true,
    min_nights: 1
  },
  {
    status: "available",
    date: "2021-11-23",
    price: "100.00",
    can_be_checkout: true,
    can_be_checkin: true,
    min_nights: 1
  },
  {
    status: "available",
    date: "2021-11-24",
    price: "100.00",
    can_be_checkout: true,
    can_be_checkin: true,
    min_nights: 1
  },
  {
    status: "available",
    date: "2021-11-25",
    price: "100.00",
    can_be_checkout: true,
    can_be_checkin: true,
    min_nights: 1
  },
  {
    status: "available",
    date: "2021-11-26",
    price: "100.00",
    can_be_checkout: true,
    can_be_checkin: true,
    min_nights: 1
  },
  {
    status: "available",
    date: "2021-11-27",
    price: "100.00",
    can_be_checkout: true,
    can_be_checkin: true,
    min_nights: 1
  },
  {
    status: "available",
    date: "2021-11-28",
    price: "100.00",
    can_be_checkout: true,
    can_be_checkin: true,
    min_nights: 1
  },
  {
    status: "available",
    date: "2021-11-29",
    price: "100.00",
    can_be_checkout: true,
    can_be_checkin: true,
    min_nights: 1
  },
  {
    status: "available",
    date: "2021-11-30",
    price: "100.00",
    can_be_checkout: true,
    can_be_checkin: true,
    min_nights: 1
  },
  {
    status: "unavailable",
    date: "2021-12-01",
    price: "100.00",
    can_be_checkout: true,
    can_be_checkin: false,
    min_nights: 1
  },
  {
    status: "available",
    date: "2021-12-02",
    price: "100.00",
    can_be_checkout: true,
    can_be_checkin: true,
    min_nights: 4
  },
  {
    status: "available",
    date: "2021-12-03",
    price: "100.00",
    can_be_checkout: true,
    can_be_checkin: true,
    min_nights: 4
  },
  {
    status: "available",
    date: "2021-12-04",
    price: "100.00",
    can_be_checkout: true,
    can_be_checkin: true,
    min_nights: 4
  },
  {
    status: "available",
    date: "2021-12-05",
    price: "100.00",
    can_be_checkout: true,
    can_be_checkin: true,
    min_nights: 1
  },
  {
    status: "available",
    date: "2021-12-06",
    price: "100.00",
    can_be_checkout: true,
    can_be_checkin: true,
    min_nights: 1
  },
  {
    status: "available",
    date: "2021-12-07",
    price: "100.00",
    can_be_checkout: true,
    can_be_checkin: true,
    min_nights: 1
  },
  {
    status: "available",
    date: "2021-12-08",
    price: "100.00",
    can_be_checkout: true,
    can_be_checkin: true,
    min_nights: 1
  },
  {
    status: "available",
    date: "2021-12-09",
    price: "100.00",
    can_be_checkout: true,
    can_be_checkin: true,
    min_nights: 1
  },
  {
    status: "available",
    date: "2021-12-10",
    price: "100.00",
    can_be_checkout: true,
    can_be_checkin: true,
    min_nights: 1
  },
  {
    status: "available",
    date: "2021-12-11",
    price: "100.00",
    can_be_checkout: true,
    can_be_checkin: true,
    min_nights: 1
  },
  {
    status: "available",
    date: "2021-12-12",
    price: "100.00",
    can_be_checkout: true,
    can_be_checkin: true,
    min_nights: 1
  },
  {
    status: "available",
    date: "2021-12-13",
    price: "100.00",
    can_be_checkout: true,
    can_be_checkin: true,
    min_nights: 1
  },
  {
    status: "available",
    date: "2021-12-14",
    price: "100.00",
    can_be_checkout: true,
    can_be_checkin: true,
    min_nights: 1
  },
  {
    status: "available",
    date: "2021-12-15",
    price: "100.00",
    can_be_checkout: true,
    can_be_checkin: true,
    min_nights: 1
  },
  {
    status: "available",
    date: "2021-12-16",
    price: "100.00",
    can_be_checkout: true,
    can_be_checkin: true,
    min_nights: 1
  },
  {
    status: "available",
    date: "2021-12-17",
    price: "100.00",
    can_be_checkout: true,
    can_be_checkin: true,
    min_nights: 1
  },
  {
    status: "available",
    date: "2021-12-18",
    price: "100.00",
    can_be_checkout: true,
    can_be_checkin: true,
    min_nights: 1
  },
  {
    status: "available",
    date: "2021-12-19",
    price: "100.00",
    can_be_checkout: true,
    can_be_checkin: true,
    min_nights: 1
  },
  {
    status: "available",
    date: "2021-12-20",
    price: "100.00",
    can_be_checkout: true,
    can_be_checkin: true,
    min_nights: 1
  },
  {
    status: "available",
    date: "2021-12-21",
    price: "100.00",
    can_be_checkout: true,
    can_be_checkin: true,
    min_nights: 1
  },
  {
    status: "available",
    date: "2021-12-22",
    price: "100.00",
    can_be_checkout: true,
    can_be_checkin: true,
    min_nights: 1
  },
  {
    status: "available",
    date: "2021-12-23",
    price: "100.00",
    can_be_checkout: true,
    can_be_checkin: true,
    min_nights: 1
  },
  {
    status: "available",
    date: "2021-12-24",
    price: "100.00",
    can_be_checkout: true,
    can_be_checkin: true,
    min_nights: 1
  },
  {
    status: "available",
    date: "2021-12-25",
    price: "100.00",
    can_be_checkout: true,
    can_be_checkin: true,
    min_nights: 1
  },
  {
    status: "available",
    date: "2021-12-26",
    price: "100.00",
    can_be_checkout: true,
    can_be_checkin: true,
    min_nights: 1
  },
  {
    status: "available",
    date: "2021-12-27",
    price: "100.00",
    can_be_checkout: true,
    can_be_checkin: true,
    min_nights: 1
  },
  {
    status: "available",
    date: "2021-12-28",
    price: "100.00",
    can_be_checkout: true,
    can_be_checkin: true,
    min_nights: 1
  },
  {
    status: "available",
    date: "2021-12-29",
    price: "100.00",
    can_be_checkout: true,
    can_be_checkin: true,
    min_nights: 1
  },
  {
    status: "available",
    date: "2021-12-30",
    price: "100.00",
    can_be_checkout: true,
    can_be_checkin: true,
    min_nights: 1
  },
  {
    status: "available",
    date: "2021-12-31",
    price: "100.00",
    can_be_checkout: true,
    can_be_checkin: true,
    min_nights: 1
  },
  {
    status: "available",
    date: "2022-01-01",
    price: "100.00",
    can_be_checkout: true,
    can_be_checkin: true,
    min_nights: 1
  },
  {
    status: "available",
    date: "2022-01-02",
    price: "100.00",
    can_be_checkout: true,
    can_be_checkin: true,
    min_nights: 1
  },
  {
    status: "available",
    date: "2022-01-03",
    price: "100.00",
    can_be_checkout: true,
    can_be_checkin: true,
    min_nights: 1
  },
  {
    status: "available",
    date: "2022-01-04",
    price: "100.00",
    can_be_checkout: true,
    can_be_checkin: true,
    min_nights: 1
  },
  {
    status: "available",
    date: "2022-01-05",
    price: "100.00",
    can_be_checkout: true,
    can_be_checkin: true,
    min_nights: 1
  },
  {
    status: "available",
    date: "2022-01-06",
    price: "100.00",
    can_be_checkout: true,
    can_be_checkin: true,
    min_nights: 1
  },
  {
    status: "available",
    date: "2022-01-07",
    price: "100.00",
    can_be_checkout: true,
    can_be_checkin: true,
    min_nights: 1
  },
  {
    status: "available",
    date: "2022-01-08",
    price: "100.00",
    can_be_checkout: true,
    can_be_checkin: true,
    min_nights: 1
  },
  {
    status: "available",
    date: "2022-01-09",
    price: "100.00",
    can_be_checkout: true,
    can_be_checkin: true,
    min_nights: 1
  },
  {
    status: "available",
    date: "2022-01-10",
    price: "100.00",
    can_be_checkout: true,
    can_be_checkin: true,
    min_nights: 1
  },
  {
    status: "available",
    date: "2022-01-11",
    price: "100.00",
    can_be_checkout: true,
    can_be_checkin: true,
    min_nights: 1
  },
  {
    status: "available",
    date: "2022-01-12",
    price: "100.00",
    can_be_checkout: true,
    can_be_checkin: true,
    min_nights: 1
  },
  {
    status: "available",
    date: "2022-01-13",
    price: "100.00",
    can_be_checkout: true,
    can_be_checkin: true,
    min_nights: 1
  },
  {
    status: "available",
    date: "2022-01-14",
    price: "100.00",
    can_be_checkout: true,
    can_be_checkin: true,
    min_nights: 1
  },
  {
    status: "available",
    date: "2022-01-15",
    price: "100.00",
    can_be_checkout: true,
    can_be_checkin: true,
    min_nights: 1
  },
  {
    status: "available",
    date: "2022-01-16",
    price: "100.00",
    can_be_checkout: true,
    can_be_checkin: true,
    min_nights: 1
  },
  {
    status: "available",
    date: "2022-01-17",
    price: "100.00",
    can_be_checkout: true,
    can_be_checkin: true,
    min_nights: 1
  },
  {
    status: "available",
    date: "2022-01-18",
    price: "100.00",
    can_be_checkout: true,
    can_be_checkin: true,
    min_nights: 1
  },
  {
    status: "available",
    date: "2022-01-19",
    price: "100.00",
    can_be_checkout: true,
    can_be_checkin: true,
    min_nights: 1
  },
  {
    status: "available",
    date: "2022-01-20",
    price: "100.00",
    can_be_checkout: true,
    can_be_checkin: true,
    min_nights: 1
  },
  {
    status: "available",
    date: "2022-01-21",
    price: "100.00",
    can_be_checkout: true,
    can_be_checkin: true,
    min_nights: 1
  },
  {
    status: "available",
    date: "2022-01-22",
    price: "100.00",
    can_be_checkout: true,
    can_be_checkin: true,
    min_nights: 1
  },
  {
    status: "available",
    date: "2022-01-23",
    price: "100.00",
    can_be_checkout: true,
    can_be_checkin: true,
    min_nights: 1
  },
  {
    status: "available",
    date: "2022-01-24",
    price: "100.00",
    can_be_checkout: true,
    can_be_checkin: true,
    min_nights: 1
  },
  {
    status: "available",
    date: "2022-01-25",
    price: "100.00",
    can_be_checkout: true,
    can_be_checkin: true,
    min_nights: 1
  }
];

export const parsedDates: CalendarDate[] = dates.map(calendarDate => ({
  ...calendarDate,
  date: toUTC(calendarDate.date)
}));
