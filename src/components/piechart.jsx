import React, { Component } from "react";
import Chart from "react-apexcharts";
class Piechart extends Component {
	constructor(props) {
		super(props);

		this.state = {
			series: props.chart.series,

			data: props.chart.data,

			options: {
				chart: {
					type: "donut",
				},
				theme: {
					mode: "dark",
				},
				labels: [
					props.chart.series[0] + "% <span style='color:#8d826c'>Axie</span>",
					props.chart.series[1] + "% <span style='color:#8d826c'>Pegaxy</span>",
					props.chart.series[2] + "% <span style='color:#8d826c'>Other</span>",
				],
				dataLabels: {
					enabled: false,
				},
				colors: ["#d4a858", "#a261ff", "#2dd2d2"],
				stroke: {
					show: false,
				},
				title: {
					text: props.chart.data.title,
					align: "left",
					margin: 0,
					offsetX: 150,
					offsetY: 10,
					floating: false,
					style: {
						fontSize: "10px",
						fontFamily: "Poppins",
						color: "#efe5d2",
					},
				},
				legend: {
					show: true,
					fontSize: "10px",
					fontFamily: "Poppins",
					offsetX: 0,
					offsetY: 20,
					markers: {
						radius: 1,
						strokeWidth: 0,
						strokeColor: "#4f4f4f",
						width: 12,
						height: 12,
						offsetX: -5,
						offsetY: 1,
					},
					labels: {
						colors: ["#EFE5D2"],
						useSeriesColors: false,
					},
					itemMargin: {
						horizontal: 10,
						vertical: 3,
					},
				},
			},
		};
	}

	getTotal() {
		let total = 0;
		let fields = this.state.data.fields;
		for (let i = 0; i < fields.length; i++) {
			total = total + fields[i].value;
		}
		if (this.props.chart.data.type == "Earning") {
			return "$" + Number(total).toLocaleString();
		} else {
			return Number(total).toLocaleString();
		}
	}

	render() {
		return (
			<div className="rounded apexcharts-theme-dark p-1 m-1 row">
				<div className="col-5">
					<div style={{ fontSize: 14 }}>Total {this.state.data.type}:</div>
					<div>
						<img
							style={{ marginTop: -10, height: 20 }}
							src={this.state.data.icon}
						/>
						<span style={{ fontSize: 21, marginLeft: 10 }}>
							{this.getTotal()}
						</span>
					</div>
					{this.state.data.fields.map((field) => (
						<div key={field.id}>
							<span style={{ color: "#8d826c" }}>{field.name}:</span>{" "}
							{Number(field.value).toLocaleString()}
						</div>
					))}
				</div>
				<Chart
					options={this.state.options}
					series={this.state.series}
					type="donut"
					className="col-7"
				/>
			</div>
		);
	}
}

export default Piechart;
