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
          offsetX: 0,
          offsetY: 100,
          markers: {
            radius: 1,
            strokeWidth: 0,
            strokeColor: "#4f4f4f",
            width: 12,
            height: 12,
            offsetX: -5,
            offsetY: 1
          },
          labels: {
            colors: ["#efe5d2"],
            useSeriesColors: false
          },
          itemMargin: {
            horizontal: 10,
            vertical: 10
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
