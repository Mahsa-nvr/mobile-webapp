export const pieData = (data , label)=> {
    return {
        labels:[...label],
        datasets: [
            {
                data: [...data],
				backgroundColor: ['#ff6b6b', '#006266', '#2980b9','#55efc4', '#fa983a', '#6D214F',
			        '#f6e58d','#ff7979','#22a6b3', '#95afc0', '#2980b9', '#22a6b3', '#20bf6b', '#45aaf2'],
                hoverBackgroundColor: ['#ff6b6b', '#006266', '#2980b9']
            }
        ]
    }
    
}

export const optionsPieChart = (content) => {
    return {
        padding: "0px",
        responsive: true,
        maintainAspectRatio: false,
        // defaultFontSize: "14px",
        // width: "300",
        // height: "200",
        title: {
          display: true,
          text: content,
          fontSize: 14,
          position: "bottom",
          fontColor: "#636e72"
        },
        legend: {
          display: false,
          position: "bottom"
        }
      };
}


export const lineData = ( incomeData, spendData , label ) => {
    return {
    labels: [...label],
	datasets: [
		{
			label: 'روند مخارج',
			fill: false,
			lineTension: 0.1,
			backgroundColor: 'rgba(75,192,192,0.4)',
			borderColor: '#00a8ff',
			borderCapStyle: 'butt',
			borderDash: [],
			borderDashOffset: 0.0,
			borderJoinStyle: 'miter',
			pointBorderColor: 'rgba(75,192,192,1)',
			pointBackgroundColor: '#fff',
			pointBorderWidth: 1,
			pointHoverRadius: 5,
			pointHoverBackgroundColor: 'rgba(75,192,192,1)',
			pointHoverBorderColor: 'rgba(220,220,220,1)',
			pointHoverBorderWidth: 2,
			pointRadius: 1,
			pointHitRadius: 10,
			data:[...spendData],		
		},
		{
			label: 'روند درآمدها',
			fill: false,
			lineTension: 0.1,
			backgroundColor: 'rgba(75,192,192,0.4)',
			borderColor: '#ff6b6b',
			borderCapStyle: 'butt',
			borderDash: [],
			borderDashOffset: 0.0,
			borderJoinStyle: 'miter',
			pointBorderColor: '#ff6b6b',
			pointBackgroundColor: '#fff',
			pointBorderWidth: 1,
			pointHoverRadius: 5,
			pointHoverBackgroundColor: 'rgba(75,192,192,1)',
			pointHoverBorderColor: 'rgba(220,220,220,1)',
			pointHoverBorderWidth: 2,
			pointRadius: 1,
			pointHitRadius: 10,
			data:[...incomeData],		
        }
    
    ]
  }
}