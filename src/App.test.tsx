import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import MockDate from "mockdate";

test("it should select hte first available date as stard and end date", () => {
  render(<App />);
  const initialDate = "2021-09-09";
  const dayButton = screen.getByTestId(initialDate);
  const daySpan = dayButton.firstChild;
  expect(daySpan).toHaveClass("rdrStartEdge rdrEndEdge");
});

test("it should select start and end date", () => {
  render(<App />);
  const startDate = "2021-09-13";
  const endDate = "2021-09-15";
  const startDateButton = screen.getByTestId(startDate);
  userEvent.click(startDateButton);
  let startDaySpan = startDateButton.firstChild;
  expect(startDaySpan).toHaveClass("rdrStartEdge rdrEndEdge");

  const endDateButton = screen.getByTestId(endDate);
  userEvent.click(endDateButton);
  const endDaySpan = endDateButton.firstChild;
  // get the start date span again to update its value
  startDaySpan = startDateButton.firstChild;
  expect(startDaySpan).toHaveClass("rdrStartEdge");
  expect(endDaySpan).toHaveClass("rdrEndEdge");
});

test("it should disable the dates previous to the start date", () => {
  render(<App />);
  const expectedDisabledDates = [
    "2021-08-29",
    "2021-08-30",
    "2021-08-31",
    "2021-09-01",
    "2021-09-02",
    "2021-09-03",
    "2021-09-04",
    "2021-09-05",
    "2021-09-06",
    "2021-09-07",
    "2021-09-08",
    "2021-09-09",
    "2021-09-10",
    "2021-09-11",
    "2021-09-12"
  ];
  const startDate = "2021-09-13";
  const startDateButton = screen.getByTestId(startDate);
  userEvent.click(startDateButton);
  const startDaySpan = startDateButton.firstChild;
  expect(startDaySpan).toHaveClass("rdrStartEdge rdrEndEdge");
  expectedDisabledDates.forEach(date => {
    const dateButton = screen.getByTestId(date);
    expect(dateButton).toHaveClass("rdrDayDisabled");
  });
});

test("after selecting the start date, it should disable all the dates after the first disabled date", () => {
  render(<App />);
  const expectedDisabledDates = [
    "2021-08-29",
    "2021-08-30",
    "2021-08-31",
    "2021-09-01",
    "2021-09-02",
    "2021-09-03",
    "2021-09-04",
    "2021-09-05",
    "2021-09-06",
    "2021-09-07",
    "2021-09-08",
    "2021-09-13",
    "2021-09-14",
    "2021-09-15",
    "2021-09-16",
    "2021-09-17",
    "2021-09-18",
    "2021-09-19",
    "2021-09-20",
    "2021-09-21",
    "2021-09-22",
    "2021-09-23",
    "2021-09-24",
    "2021-09-25",
    "2021-09-26",
    "2021-09-27",
    "2021-09-28",
    "2021-09-29",
    "2021-09-30",
    "2021-10-01",
    "2021-10-02"
  ];

  // on 2021-09-12 we can only checkout but not checkin, so all the dates after this should be disabled
  const startDate = "2021-09-09";
  const startDateButton = screen.getByTestId(startDate);
  userEvent.click(startDateButton);
  const startDaySpan = startDateButton.firstChild;
  expect(startDaySpan).toHaveClass("rdrStartEdge rdrEndEdge");
  expectedDisabledDates.forEach(date => {
    const dateButton = screen.getByTestId(date);
    expect(dateButton).toHaveClass("rdrDayDisabled");
  });
});

test("after selecting the end date, it should have the initial disabled dates", () => {
  render(<App />);
  const expectedDisabledDates = [
    "2021-08-29",
    "2021-08-30",
    "2021-08-31",
    "2021-09-01",
    "2021-09-02",
    "2021-09-03",
    "2021-09-04",
    "2021-09-05",
    "2021-09-06",
    "2021-09-07",
    "2021-09-08",
    "2021-09-12",
    "2021-09-20",
    "2021-09-21",
    "2021-10-01",
    "2021-10-02"
  ];
  const startDate = "2021-09-17";
  const startDateButton = screen.getByTestId(startDate);
  userEvent.click(startDateButton);
  const endDate = "2021-09-19";
  const endDateButton = screen.getByTestId(endDate);
  userEvent.click(endDateButton);
  expectedDisabledDates.forEach(date => {
    const dateButton = screen.getByTestId(date);
    expect(dateButton).toHaveClass("rdrDayDisabled");
  });
});

/*
  when the user selects a start date, it will show all the availables dates until it finds a date
  where it can checkout but not checkin. If the user selects this date as the end date, it shouldn't 
  disable it.
*/
test("the selected range shouldn't have disabled dates", () => {
  render(<App />);
  const expectedAvailableDates = [
    "2021-09-09",
    "2021-09-10",
    "2021-09-11",
    "2021-09-12"
  ];
  const startDate = "2021-09-09";
  const startDateButton = screen.getByTestId(startDate);
  userEvent.click(startDateButton);
  const endDate = "2021-09-12";
  const endDateButton = screen.getByTestId(endDate);
  userEvent.click(endDateButton);

  expectedAvailableDates.forEach(date => {
    const dateButton = screen.getByTestId(date);
    expect(dateButton).not.toHaveClass("rdrDayDisabled");
  });
});

test("it should blocked the minimum nights styles nights dates", () => {
  render(<App />);
  const startDate = "2021-09-09";
  const startDateButton = screen.getByTestId(startDate);
  userEvent.click(startDateButton);
  expect(startDateButton.firstChild).toHaveClass("rdrStartEdge rdrEndEdge");
  // The start date has two minimum nights styles nights
  const blockedNights = ["2021-09-10"];
  blockedNights.forEach(date => {
    const blockedNightButton = screen.getByTestId(date);
    userEvent.click(blockedNightButton);
    // because 2021-09-10 and 2021-09-11 are blocked, 2021-09-09 should still be the start and end date
    expect(startDateButton.firstChild).toHaveClass("rdrStartEdge rdrEndEdge");
    expect(blockedNightButton.firstChild).toHaveClass("minimum-night-blocked");
  });
  const availableDate = "2021-09-12";
  const availableDateButton = screen.getByTestId(availableDate);
  userEvent.click(availableDateButton);
  expect(startDateButton.firstChild).toHaveClass("rdrStartEdge");
  expect(availableDateButton.firstChild).toHaveClass("rdrEndEdge");
});

test("The max date should be today + 180 days", () => {
  // mock the date to set always now to 2021-08-10
  MockDate.set("2021-07-30");
  render(<App />);

  // 2021-07-30 + 180 days = 2022-01-26
  const maxDate = "2022-01-26";
  const nextMonthButton = screen.getByLabelText("Next month");
  const numberOfMonthsUntilMaxDate = 4;
  // move to january
  for (let i = 0; i < numberOfMonthsUntilMaxDate; i++) {
    userEvent.click(nextMonthButton);
  }
  const maxDateButton = screen.getByTestId(maxDate);
  expect(maxDateButton).toHaveClass("rdrDayDisabled");
});

test("After selecting the range, it shouldn't have minimum nights styles", () => {
  render(<App />);
  const expectedAvailableDates = [
    "2021-09-09",
    "2021-09-10",
    "2021-09-11",
    "2021-09-12"
  ];
  const startDate = "2021-09-09";
  const startDateButton = screen.getByTestId(startDate);
  userEvent.click(startDateButton);
  const endDate = "2021-09-12";
  const endDateButton = screen.getByTestId(endDate);
  userEvent.click(endDateButton);

  expectedAvailableDates.forEach(date => {
    const dateButton = screen.getByTestId(date);
    expect(dateButton).not.toHaveClass("minimum-night-blocked");
  });
});

test("it should show the correct number of days", () => {
  render(<App />);
  const startDate = "2021-09-13";
  const endDate = "2021-09-15";
  const startDateButton = screen.getByTestId(startDate);
  userEvent.click(startDateButton);
  let startDaySpan = startDateButton.firstChild;
  expect(startDaySpan).toHaveClass("rdrStartEdge rdrEndEdge");

  const endDateButton = screen.getByTestId(endDate);
  userEvent.click(endDateButton);
  const endDaySpan = endDateButton.firstChild;
  // get the start date span again to update its value
  startDaySpan = startDateButton.firstChild;
  expect(startDaySpan).toHaveClass("rdrStartEdge");
  expect(endDaySpan).toHaveClass("rdrEndEdge");

  const newStartDate = "2021-09-17";
  const newStartDateButton = screen.getByTestId(newStartDate);
  userEvent.click(newStartDateButton);
  expect(newStartDateButton.firstChild).toHaveClass("rdrStartEdge rdrEndEdge");
  const newEndDate = "2021-09-19";
  const newEndDateButton = screen.getByTestId(newEndDate);
  userEvent.click(newEndDateButton);
  expect(newStartDateButton.firstChild).toHaveClass("rdrStartEdge");
  expect(newEndDateButton.firstChild).toHaveClass("rdrEndEdge");

});
// when reseting the dates, it should reset the blocked minimum nights too
