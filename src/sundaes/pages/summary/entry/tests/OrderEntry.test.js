import { render, screen } from "@testing-library/react";
import OrderEntry from "../OrderEntry";
import { rest } from "msw";
import { server } from "../../../../../mocks/server";

const host = "https://localhost:3030";

test("handles error for scoops and toppings when there is error in server response", async () => {
  server.resetHandlers([
    rest.get(`${host}/scoops`, (req, res, ctx) => {
      return res(ctx.status(503));
    }),
    rest.get(`${host}/toppings`, (req, res, ctx) => {
      return res(ctx.status(503));
    }),
  ]);
  render(<OrderEntry />);

  const alerts = await screen.findAllByRole("alert", {
    name: "An unexpected error occured. Please try again after sometime.",
  });

  expect(alerts).toHaveLength(2);
});
