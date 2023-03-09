import { rest } from "msw";

const host = "https://localhost:3030";

export const handlers = [
  rest.get(`${host}/scoops`, (req, res, ctx) => {
    return res(
      ctx.json([
        { name: "Chocolate", imagePath: "/images/chocolate.png" },
        { name: "Vanilla", imagePath: "/images/vanilla.png" },
      ])
    );
  }),
  rest.get(`${host}/toppings`, (req, res, ctx) => {
    return res(
      ctx.json([
        {
          name: "Cherries",
          imagePath: "/images/cherries.png",
        },
        {
          name: "M&MS",
          imagePath: "/images/m-and-ms.png",
        },
        {
          name: "Hot Fudge",
          imagePath: "/images/hot-fudge.png",
        },
      ])
    );
  }),
];
