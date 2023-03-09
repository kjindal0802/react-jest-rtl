import { render, screen, logRoles, fireEvent } from "@testing-library/react";
import App from "./App";
import { replaceCamelWithSpaces } from "./App";
import "@testing-library/jest-dom/extend-expect";

test("button has correct initial color", () => {
  const { container } = render(<App />);
  logRoles(container);
  let button = screen.getByRole("button", { name: "Change color to blue" });

  //check button's initial color
  expect(button).toHaveStyle({ "background-color": "red" });

  //click a button
  fireEvent.click(button);

  //check button's updated color
  expect(button).toHaveStyle({ "background-color": "blue" });

  //chck button text;
  expect(button).toHaveTextContent("Change color to red");
});

test("initial conditions", () => {
  render(<App />);
  let button = screen.getByRole("button", { name: "Change color to blue" });
  

  //button is enabled
  expect(button).toBeEnabled();

  let checkBox = screen.getByRole("checkbox", { name: "disabled the button" });

  //check box is not checked
  expect(checkBox).not.toBeChecked();

  fireEvent.click(checkBox);

  //expect button to be disabled
  expect(button).toBeDisabled();

  //expect button to be gray
  expect(button).toHaveStyle("background-color: grey");

  //checkbox is checked
  expect(checkBox).toBeChecked();
});

describe("test camelCase functions", () => {
  test("case when there is no inner capital characters", () => {
    expect(replaceCamelWithSpaces("red")).toEqual("red");
  });
  test("case when there is single inner capital character", () => {
    expect(replaceCamelWithSpaces("lightGray")).toEqual("light Gray");
  });
  test("case when there is more than one single inner capital characters", () => {
    expect(replaceCamelWithSpaces("midNightBlue")).toEqual("mid Night Blue");
  });
});
