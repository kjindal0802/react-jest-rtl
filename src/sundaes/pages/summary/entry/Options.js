import { useEffect, useState } from "react";
import ScoopOption from "./ScoopOption";
import { Alert, Row } from "react-bootstrap";
import axios from "axios";
import ToppingOption from "./ToppingOption";

export default function Options({ optionType }) {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get(`https://localhost:3030/${optionType}`)
      .then((res) => {
        setItems(res.data);
      })
      .catch((err) => setError(true));
  }, [optionType]);

  const getItems = () => {
    let renderData = [];
    if (error) {
      renderData.push(
        <Alert key={"danger"} variant={"danger"}>
          An unexpected error occured. Please try again after sometime.
        </Alert>
      );
    } else {
      items.forEach(({ name, imagePath }) => {
        if (optionType === "scoops") {
          renderData.push(
            <ScoopOption key={name} name={name} imagePath={imagePath} />
          );
        } else {
          renderData.push(
            <ToppingOption key={name} name={name} imagePath={imagePath} />
          );
        }
      });
    }
    return renderData;
  };

  return <Row>{getItems()}</Row>;
}
