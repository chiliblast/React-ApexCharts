import React, { Component } from "react";
import Piechart from "./piechart";
import Areachart from "./areachart";
import Linechart from "./linechart";
class Main extends Component {
	state = {
		piechart: [
			{
				data: {
					type: "Population",
					icon: require(`../assets/Multi-People-Ic.svg`).default,
					title: "Population",
					fields: [
						{ id: 0, name: "Adimns", value: 3 },
						{ id: 1, name: "Managers", value: 5 },
						{ id: 2, name: "Players", value: 120 },
						{ id: 3, name: "Unassigned", value: 8 },
					],
				},
				series: [43, 26, 31],
			},
			{
				data: {
					type: "Earning",
					icon: require(`../assets/Coin-Icon.svg`).default,
					title: "Earnings Distribution",
					fields: [
						{ id: 0, name: "Axie Infinity", value: 259657 },
						{ id: 1, name: "Pegaxy", value: 179654 },
						{ id: 2, name: "Others", value: 112544 },
					],
				},
				series: [48, 32, 20],
			},
		],
		areachart: [
			{
				data: {
					type: "Guild Population Growth & Distibution",
					fields: [
						{ id: 0, name: "Adimns", value: 3 },
						{ id: 1, name: "Managers", value: 5 },
						{ id: 2, name: "Players", value: 120 },
						{ id: 3, name: "Unassigned", value: 8 },
					],
				},
				series: [43, 26, 31],
			},
			{
				data: {
					type: "Earnings",
					fields: [
						{ id: 0, name: "Axie Infinity", value: 259657 },
						{ id: 1, name: "Pegaxy", value: 179654 },
						{ id: 2, name: "Others", value: 112544 },
					],
				},
				series: [48, 32, 20],
			},
		],
	};

	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col p-2">
						<Piechart chart={this.state.piechart[0]} />
					</div>
					<div className="col p-2">
						<Piechart chart={this.state.piechart[1]} />
					</div>
				</div>
				<div className="row">
					<div className="col p-2">
						<Areachart chart={this.state.areachart[0]} />
					</div>
					<div className="col p-2">
						<Areachart chart={this.state.areachart[1]} />
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
