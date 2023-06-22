//The first line of code says we want to use something called "useState" from a library called "react". It's like asking for a special tool to use in our app.
import { useState } from "react";

// Write your Color component here
//The "Color" component is a special part of the app that will show a colored square. It takes three things as input: "color," "selectedColor," and "selectColor." These are like pieces of information that the component needs to work properly.
const Color = ({ color, selectedColor, selectColor }) => {
  // Inside the "Color" component, there is a line that checks if the "selectedColor" is the same as the "color." If they are the same, it adds the word "selected" to the class name. It's like putting a special mark on the color.
  const isSelected = selectedColor === color ? "selected" : "";
  // The "return" statement tells us what the component should display. It's like saying, "Here's what you should see on the screen." In this case, it's a <div> (a container) with a class name that represents the color. If the color is selected, it also has the class name "selected." When you click on this <div>, it will call the "selectColor" function and pass the color as an argument.
  return (
    <div
      className={`${color} ${isSelected}`}
      onClick={() => selectColor(color)}
    ></div>
  );
};
// The next part defines another component called "App." This component is like the main part of the app.
const App = () => {
  // Inside the "App" component, there is a special tool called "useState." It helps us keep track of the currently selected color. Initially, it's set to an empty value.
  const [selectedColor, setSelectedColor] = useState("");
  // Then, there is a function called "selectColor" that takes a "colorName" as input. When this function is called, it will update the "selectedColor" with the new color.
  const selectColor = (colorName) => {
    setSelectedColor(colorName);
  };
  // The "return" statement for the "App" component defines what the app will look like. It's like describing the different parts of the app's interface.
  return (
    // There is a <div> with the id "container." It's a big box that holds everything else in the app.
    <div id="container">
      {/* Inside the "container," there is another <div> with the id "navbar." It's like a navigation bar where some text and the currently selected color will be shown. */}
      <div id="navbar">
        {/* Inside the "navbar," there are two more <div>s. One of them shows the text "Currently selected," and the other shows the value of the "selectedColor" variable. */}
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>

      {/* After the "navbar," there is another <div> with the id "colors-list." It's like a list where the colors will be displayed. */}
      <div id="colors-list">
        {/* For each "Color" component, we provide the color name, the current
        selected color, and the "selectColor" function. These values help the
        "Color" component know what to show and how to behave. */}
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

// Finally, the last line says we want to export the "App" component so that it can be used in other parts of the app.
export default App;
