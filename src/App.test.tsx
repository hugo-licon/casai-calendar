import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("it should select hte first available date as stard and end date", () => {
  render(<App />);
  const initialDate = "2021-09-09";
  const dayButton = screen.getByTestId(initialDate);
  const daySpan = dayButton.firstChild;
  expect(daySpan).toHaveClass("rdrStartEdge rdrEndEdge");
});

test("it shoud select start and end date", () => {
  render(<App />);
  const startDate = "2021-09-13";
  const endDate = "2021-09-15";
  // screen.debug();
  const startDateButton = screen.getByTestId(startDate);
  userEvent.click(startDateButton);
  const startDaySpan = startDateButton.firstChild;
  expect(startDaySpan).toHaveClass("rdrStartEdge rdrEndEdge");

  const endDateButton = screen.getByTestId(endDate);
  userEvent.click(endDateButton);
  const endDaySpan = endDateButton.firstChild;
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
