import React, { Component } from "react";
import Piechart from "./piechart";
import Areachart from "./areachart";
class Main extends Component {
  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col p-2">
            <Piechart />
          </div>
          <div class="col p-2">
            <Piechart />
          </div>
        </div>
        <div class="row">
          <div class="col p-2">
            <Areachart />
          </div>
          <div class="col p-2">
            <Areachart />
          </div>
        </div>
      </div>
    );
  }
}
export default Main;
