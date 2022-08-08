import React, { Component } from "react";
import Chart from "react-apexcharts";

class Areachart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Admins",
          data: [31, 40, 28, 51, 42, 109, 100]
        },
        {
          name: "Managers",
          data: [11, 32, 45, 32, 34, 52, 41]
        },
        {
          name: "Players",
          data: [4, 22, 65, 78, 30, 40, 50]
        },
        {
          name: "Total",
          data: [23, 16, 8, 60, 50, 47, 33]
        }
      ],
      options: {
        chart: {
          height: 350,
          type: "area",
          background: "#fff",
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
        colors: ["#88A9D8", "#D4A858", "#A261FF", "#34ABAB"],
        stroke: {
          curve: "straight",
          width: 2
        },
        grid: {
          show: true,
          borderColor: "#4f4f4f",
          strokeDashArray: 20
        },
        xaxis: {
          type: "datetime",
          categories: [
            "2018-09-19T00:00:00.000Z",
            "2018-09-19T01:30:00.000Z",
            "2018-09-19T02:30:00.000Z",
            "2018-09-19T03:30:00.000Z",
            "2018-09-19T04:30:00.000Z",
            "2018-09-19T05:30:00.000Z",
            "2018-09-19T06:30:00.000Z"
          ]
        },
        tooltip: {
          x: {
            format: "dd/MM/yy HH:mm"
          }
        },
        title: {
          text: "Guild Population Growth & Distibution",
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
          offsetY: 0,
          markers: {
            radius: 12,
            strokeWidth: 0,
            strokeColor: "#4f4f4f",
            width: 12,
            height: 12,
            offsetX: -5,
            offsetY: -1
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
      <div class="rounded apexcharts-theme-dark p-2">
        cxcvxcv
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="area"
          height={300}
        />
      </div>
    );
  }
}

export default Areachart;
