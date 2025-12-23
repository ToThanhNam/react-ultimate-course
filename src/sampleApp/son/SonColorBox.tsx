import { useState } from "react";
import "./style.css";

export default function SonColorBox() {
  const [selectedColor, setSelectedColor] = useState<string>("");
  const colors = ["red", "yellow", "aqua", "purple"];

  const handleColorChange = (color: string) => {
    setSelectedColor(color !== selectedColor ? color : "");
  };

  return (
    <div>
      <h4>Sample App: SonColorBox</h4>
      <p>Current color: {selectedColor || "Default"}</p>
      <div className="color-box">
        {colors.map((color) => (
          <div
            key={color}
            onClick={() => handleColorChange(color)}
            className={`color-box-item ${color}`}
            style={{ backgroundColor: selectedColor }}
          >
            {color}
          </div>
        ))}
      </div>
    </div>
  );
}
