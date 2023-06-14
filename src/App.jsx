import { useState } from "react";

// Write your Color component here
const Color = ({ color, selectedColor, selectColor }) => {
  const isSelected = selectedColor === color ? "selected" : "";
  return (
    <div
      className={`${color} ${isSelected}`}
      onClick={() => selectColor(color)}
    ></div>
  );
};

const App = () => {
  const [selectedColor, setSelectedColor] = useState("");
  const selectColor = (colorName) => {
    setSelectedColor(colorName);
  };

  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>

        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">
        <Color
          color="green"
          selectedColor={selectedColor}
          selectColor={selectColor}
        />

        <Color
          color="yellow"
          selectedColor={selectedColor}
          selectColor={selectColor}
        />
        <Color
          color="red"
          selectedColor={selectedColor}
          selectColor={selectColor}
        />
      </div>
    </div>
  );
};

export default App;
