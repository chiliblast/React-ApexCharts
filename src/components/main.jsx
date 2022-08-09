import React, { Component } from "react";
import Piechart from "./piechart";
import Areachart from "./areachart";
import Linechart from "./linechart";
class Main extends Component {

  state={
    
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col p-2">
            <Piechart value={1} />
          </div>
          <div className="col p-2">
            <Piechart value={2} />
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
        <div className="row">
        <div className="col p-2">
            <Linechart />
          </div>
        </div>
      </div>
    );
  }
}
export default Main;
