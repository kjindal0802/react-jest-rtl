import "./App.css";
import { useState } from "react";

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, " $1");
}

function App() {
  const [color, setColor] = useState("red");
  const [checked, setChecked] = useState(false);
  const text = color === "red" ? "blue" : "red";

  const changeColor = () => {
    color === "red" ? setColor("blue") : setColor("red");
  };

  const getBackgroundColor = () => {
    if (checked) {
      return "grey";
    } else {
      return color;
    }
  };

  return (
    <>
      <button
        onClick={changeColor}
        style={{ backgroundColor: getBackgroundColor() }}
        disabled={checked}
      >
        Change color to {text}
      </button>
      <input
        checked={checked}
        type="checkbox"
        onChange={() => setChecked(!checked)}
        id="disabled-checkbox"
      />
      <label htmlFor="disabled-checkbox">disabled the button</label>
    </>
  );
}

export default App;
