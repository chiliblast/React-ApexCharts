import React, { Component } from "react";
import Chart from "react-apexcharts";

class Linechart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
            data: [31, 40, 28, 51, 42, 109, 100]
        }
      ],
      options: {
        chart: {
          type: "area",
          height: 100,
          sparkline: {
            enabled: true
          },
          zoom: {
            enabled: false
          },
          toolbar: {
            show: false
          }
        },
        theme: {
          mode: "dark"
        },
        dataLabels: {
          enabled: false
        },
        colors: ["#ff7272"],
        stroke: {
          curve: "straight",
          width: 2
        },
        grid: {
          show: false
        }
        
      }
    };
  }

  render() {
    return (
      <div className="rounded apexcharts-theme-dark p-1 m-1 row">
        <div className="col-1 mt-3">
          Axie Infinity
        </div>
        <div className="col-1 mt-3">
          Pikachu
        </div>
        <div className="col-1 mt-3">
          JuanJuy
        </div>
        <div className="col-1 mt-3">
          84 SLP
        </div>
        <div className="col-1 mt-3">
          5 SLP
        </div>
        <div className="col-1 mt-3">
        <span style={{color:'#ff8888'}}>14%</span>
        </div>
        <div className="col-1 mt-3">
          Sep 7, 2021
        </div>
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="area"
          height={50}
          className="col-3"
        />
        <div className="col-1 mt-3">
          <span style={{color:'#ff8888'}}>Inactive</span>
        </div>
        <div className="col-1 mt-3">
          <input type='checkbox' defaultChecked={false}  />
        </div>
      </div>
    );
  }
}

export default Linechart;
