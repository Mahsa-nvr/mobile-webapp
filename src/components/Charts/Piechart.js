import React from 'react';
import { Pie } from 'react-chartjs-2';
import { optionsPieChart } from './../../share/ChartData';

const Piechart = ({data, title}) => 
 <Pie data={data} options={optionsPieChart(title)} />


export default Piechart
