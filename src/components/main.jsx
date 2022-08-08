import React, { Component } from "react";
import Piechart from "./piechart";
import Areachart from "./areachart";
class Main extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col p-2">
            <Piechart />
          </div>
          <div className="col p-2">
            <Piechart />
          </div>
        </div>
        <div className="row">
          <div className="col p-2">
            <Areachart />
          </div>
          <div className="col p-2">
            <Areachart />
          </div>
        </div>
      </div>
    );
  }
}
export default Main;
