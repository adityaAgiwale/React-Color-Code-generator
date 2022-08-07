import "./styles.css";
import Values from "values.js";
import { useState } from "react";
import ColorGrid from "./ColorGrid";

export default function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const colors = new Values(color).all(10);
      setList(colors);
      // console.log(list);
      // console.log(colors);
    } catch (error) {
      setError(true);
      setList([]);
      console.log(`Error is ${error}`);
    }
  };

  return (
    <div className="App">
      <div className="main">
        <h1>Color Generator</h1>
        <form onSubmit={handleSubmit}>
          <input
            className="input"
            value={color}
            placeholder="#ffffff"
            type="text"
            onChange={(e) => setColor(e.target.value)}
          />
          <button className="btn" type="submit">
            Generate
          </button>
          {error ? (
            <p className="errorMsg">
              Enter valid value e.g.{" "}
              <span
                onClick={() => navigator.clipboard.writeText("#ffffff")}
                style={{ cursor: "pointer" }}
              >
                #ffffff
              </span>
              ,
              <span
                onClick={() => navigator.clipboard.writeText("#000000")}
                style={{ cursor: "pointer" }}
              >
                #000000
              </span>
              ,
              <span
                onClick={() => {
                  navigator.clipboard.writeText("#ff0000");
                }}
                style={{ cursor: "pointer" }}
              >
                #ff0000
              </span>
            </p>
          ) : null}
        </form>
      </div>
      <section>
        {list.map((value, index) => {
          const hexColor = value.hex;
          return <ColorGrid key={index} {...value} hexColor={hexColor} />;
        })}
      </section>
    </div>
  );
}
