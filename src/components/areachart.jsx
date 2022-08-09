import React, { Component } from "react";
import Chart from "react-apexcharts";

class Areachart extends Component {
	constructor(props) {
		super(props);

		this.state = {
			series: props.chart.series,
			options: {
				chart: {
					type: "area",
					zoom: {
						enabled: false,
					},
					toolbar: {
						show: false,
					},
				},
				theme: {
					mode: "dark",
				},
				dataLabels: {
					enabled: false,
				},
				colors: ["#88A9D8", "#D4A858", "#A261FF", "#34ABAB"],
				stroke: {
					curve: "straight",
					width: 2,
				},
				grid: {
					show: true,
					borderColor: "#4f4f4f",
					strokeDashArray: 20,
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
						"2018-09-19T06:30:00.000Z",
					],
				},
				tooltip: {
					x: {
						format: "dd/MM/yy HH:mm",
					},
				},
				title: {
					text: props.chart.data.type,
					align: "left",
					margin: 10,
					offsetX: 0,
					offsetY: 0,
					floating: false,
					style: {
						fontSize: "14px",
						fontFamily: "Poppins",
						color: "#efe5d2",
					},
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
						offsetY: -1,
					},
					labels: {
						colors: ["#EFE5D2"],
						useSeriesColors: false,
					},
					itemMargin: {
						horizontal: 10,
						vertical: 10,
					},
				},
			},
		};
	}

	render() {
		return (
			<div
				className="areachart rounded apexcharts-theme-dark p-1 m-1"
				style={{ position: "relative" }}
			>
				<div
					style={{
						position: "absolute",
						right: 20,
						top: 10,
						zIndex: 1,
						color: "#efe5d2",
					}}
				>
					Year to Date&nbsp;&nbsp;
					<img src={require(`../assets/Path-1963.png`).default} />
				</div>

				<Chart
					options={this.state.options}
					series={this.state.series}
					type="area"
					height={250}
				/>

				<div
					style={{
						position: "absolute",
						right: 20,
						bottom: 40,
						zIndex: 1,
						color: "#efe5d2",
					}}
				>
					Export&nbsp;&nbsp;
					<img
						src={require(`../assets/signout-outline.svg`).default}
						height={12}
						style={{ marginTop: -5 }}
					/>
				</div>
			</div>
		);
	}
}

export default Areachart;
