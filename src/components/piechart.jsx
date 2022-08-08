import React, { Component } from "react";
import Chart from "react-apexcharts";

class Piechart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [43, 26, 31],

      options: {
        chart: {
          type: "donut"
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: "bottom"
              }
            }
          }
        ],
        labels: ["Axie", "Pegaxy", "Other"],
        dataLabels: { enabled: false },
        colors: ["#d4a858", "#a261ff", "#2dd2d2"],
        legend: {
          show: true,
          fontSize: "14px",
          fontFamily: "Helvetica, Arial",
          markers: {
            radius: 1,
            strokeWidth: 0,
            strokeColor: "#4f4f4f"
          }
        }
      }
    };
  }

  render() {
    return (
      <div id="chart">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="donut"
        />
      </div>
    );
  }
}

export default Piechart;
