import React from "react";
import Prac from "./Prac";
import "./Prac2.css";
class Prac2 extends React.Component {
  render() {
    let row = [];
    for (let i = 0; i < 2; i++) {
      row.push(<Prac key={i} />);
    }
    return (
      <div>
        <h1 className="h1">
          <span>P</span>
          <span>H</span>
          <span>P</span>
          <span>C</span>
          <span>O</span>
          <span>D</span>
          <span>E</span>
          <span>R</span>
        </h1>

        {/* <h1 className=" prac">{row}</h1> */}
      </div>
    );
  }
}
export default Prac2;
