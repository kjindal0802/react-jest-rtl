import { logRoles, render, screen } from "@testing-library/react";
import Options from "../Options";

test("displays images for each scoop option", async () => {
  render(<Options optionType={"scoops"} />);

  //find images
  const scoopImages = await screen.findAllByRole("img", { name: /scoop$/i });
  expect(scoopImages).toHaveLength(2);

  //confirm alt text of images
  const altText = scoopImages.map((ele) => ele.alt);
  expect(altText).toEqual(["Chocolate scoop", "Vanilla scoop"]);
});

test("displays images for each topping options", async () => {
  let {container} = render(<Options optionType={"toppings"} />);

  //find images
  const toppingImages = await screen.findAllByRole("img", {
    name: /topping$/i,
  });
  expect(toppingImages).toHaveLength(3);

    //confirm alt text of images
    const altText = toppingImages.map((ele) => ele.alt);
    expect(altText).toEqual(["Cherries topping", "M&MS topping", "Hot Fudge topping"]);
});
