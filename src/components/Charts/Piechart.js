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

// const Piechart=props =>{
//     console.log(props)
// 	return <div></div>
// }

class Piechart extends Component {
	
	state = {
		legend: legendOpts,
        data : {
			labels: [],
			datasets: [
				{
					data: this.props.data,
					backgroundColor: ['#ff6b6b', '#006266', '#2980b9','red'],
					hoverBackgroundColor: ['#ff6b6b', '#006266', '#2980b9']
				}
			]
		},
	}

	// eslint-disable-next-line no-useless-constructor
	
	static getDerivedStateFromProps(props, state) {
		console.log('getdrived  props',props)
		console.log('getdrived',state.data.labels)
		
	}
	

	// applyLegendSettings() {
	// 	const { value } = this.legendOptsInput;

	// 	try {
	// 		const opts = JSON.parse(value);
	// 		this.setState({
	// 			legend: opts
	// 		});
	// 	} catch (e) {
	// 		alert(e.message);
	// 		throw Error(e);
	// 	}
	// }

	render() {

		
		
		return (
			<div className="flex flex-col items-center w-full max-w-md">
				<Pie data={this.state.data} labels={this.state.labels1} legend={this.state.legend} redraw />
			</div>
           
		);
	}
}

 export default Piechart;