import React from "react";
import "../../css/game.css";

export default class Cell extends React.Component{

  getCellClass = (cellContent) => {
    switch (cellContent) {
      case 0:
        return "empty";
      case 1:
        return "my-snake";
      case 3:
        return "food";
      default:
        console.log("sad 😞");
        return null;
    }
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      // TODO: Fill in the div to render cell
      <div />
    );
  }
}
