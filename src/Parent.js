import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  // creating a variable to call the function easier 
  const randomColor = getRandomColor();
  //initial value for color state
  const [color, setColor] = useState(randomColor); 
  const [childrenColor, setChildrenColor] = useState("#FFF"); 

  function handleChangeColor(newChildColor) {
    const newRandomColor = getRandomColor();
    //update color with a new value
    setColor(newRandomColor);  
    setChildrenColor(newChildColor);

  }

  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child color={childrenColor} onChangeColor={handleChangeColor}/>
      <Child color={childrenColor} onChangeColor={handleChangeColor}/>
    </div>
  );
}

export default Parent;
