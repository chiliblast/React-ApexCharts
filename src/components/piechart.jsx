import React, { Component } from "react";
import Chart from "react-apexcharts";

class Piechart extends Component {
  constructor(props) {
    super(props);

    let series = [43, 26, 31];

    this.state = {
      series: series,

      options: {
        chart: {
          type: "donut"
        },
        theme: {
          mode: "dark"
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                size: 200
              },
              legend: {
                position: "bottom"
              }
            }
          }
        ],
        labels: [
          series[0] + "% <span style='color:#8D826C'>Axie</span>",
          series[1] + "% <span style='color:#8D826C'>Pegaxy</span>",
          series[2] + "% <span style='color:#8D826C'>Other</span>"
        ],
        dataLabels: {
          enabled: false
        },
        colors: ["#d4a858", "#a261ff", "#2dd2d2"],
        stroke: {
          show: false
        },
        title: {
          text: "Population",
          align: "left",
          margin: 10,
          offsetX: 0,
          offsetY: 0,
          floating: false,
          style: {
            fontSize: "14px",
            fontFamily: "Poppins",
            color: "#ffffff"
          }
        },
        legend: {
          show: true,
          fontSize: "11px",
          fontFamily: "Poppins",
          fontWeight: 100,
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
            colors: ["#EFE5D2"],
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
      <div class="rounded apexcharts-theme-dark">
        xzcz
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
