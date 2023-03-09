import {
  render,
  screen,
  logRoles,
  fireEvent,
  waitFor,
} from "@testing-library/react";
import SummaryForm from "../SummaryForm";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";

test("default loading conditions", () => {
  render(<SummaryForm />);

  const checkbox = screen.getByRole("checkbox", {
    name: /i agree to the terms and conditions/i,
  });

  const button = screen.getByRole("button", {
    name: "Confirm Order",
  });

  //default checkbox should be unchecked;
  expect(checkbox).not.toBeChecked();

  //button should be disabled by default
  expect(button).toBeDisabled();
});

test("button should be enabled on first click and get disabled on second click", async () => {
  render(<SummaryForm />);

  const user = userEvent.setup();

  const checkbox = screen.getByRole("checkbox", {
    name: /i agree to the terms and conditions/i,
  });
  const button = screen.getByRole("button", {
    name: "Confirm Order",
  });

  await user.click(checkbox);

  //checkbox should be checked and button should be enabled
  expect(checkbox).toBeChecked();
  expect(button).toBeEnabled();

  await user.click(checkbox);

  //checkbox should be unchecked and button should be disabled
  expect(checkbox).not.toBeChecked();
  expect(button).toBeDisabled();
});

test("popover responds to the hover", async () => {
  const user = userEvent.setup();
  render(<SummaryForm />);

  const nullPopover = screen.queryByText(
    /No ice cream will actually be delivered/
  );

  //popover is not loaded initially on page
  expect(nullPopover).not.toBeInTheDocument();

  const hoverText = screen.getByText(/terms and conditions/i);

  await user.hover(hoverText);
  const popover = screen.queryByText(/No ice cream will actually be delivered/);

  //popover appears on hover over terms and conditions
  expect(popover).toBeInTheDocument();

  await user.unhover(hoverText);

  //popover disappears when we mouse out
  expect(popover).not.toBeInTheDocument();
});
