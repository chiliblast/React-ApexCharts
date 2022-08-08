import React, { Component } from "react";
import Piechart from "./piechart";
import Areachart from "./areachart";
class Main extends Component {
  render() {
    return (
      <div>
        <Piechart />
        <Areachart />
      </div>
    );
  }
}
export default Main;
