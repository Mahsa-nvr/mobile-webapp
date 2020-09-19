import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';



const legendOpts = {
	
	display: false,
	position: 'right',
	fullWidth: true,
	reverse: false,
	labels: {
		fontColor: 'rgb(255, 99, 132)'
	}
};

class Piechart extends Component {
	state = {
		legend: legendOpts,
        data : {
			labels: this.props.labels,
			datasets: [
				{
					data: this.props.data,
					backgroundColor: ['#ff6b6b', '#006266', '#2980b9','red'],
					hoverBackgroundColor: ['#ff6b6b', '#006266', '#2980b9']
				}
			]
		},
		testarr: []
	}


	applyLegendSettings() {
		const { value } = this.legendOptsInput;

		try {
			const opts = JSON.parse(value);
			this.setState({
				legend: opts
			});
		} catch (e) {
			alert(e.message);
			throw Error(e);
		}
	}

	render() {
		return (
			<div className="flex flex-col items-center w-full max-w-md">
				<Pie data={this.state.data}  legend={this.state.legend} redraw />
			</div>
           
		);
	}
}

export default Piechart;