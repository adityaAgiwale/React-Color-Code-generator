import { useEffect, useState } from "react";
import "./styles.css";

export default function ColorGrid({ rgb, weight, index, hexColor }) {
  const [alert, setAlert] = useState(false);
  const rgbColor = rgb.join(",");
  const hexString = `#${hexColor}`;
  // console.log(rgbColor);

  useEffect(() => {
    const interval = setInterval(() => {
      setAlert(false);
    }, 2000);
    return () => clearInterval(interval);
  }, [alert]);

  return (
    <main
      style={{ background: `rgb(${rgbColor})` }}
      className={`box ${index > 10 && "ColorBoX"}`}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hexString);
      }}
    >
      <p className="color__weight">{weight}%</p>
      <p className="color__code">{hexString}</p>
      {alert ? <p className="alert">Copied to Clipboard</p> : null}
    </main>
  );
}
