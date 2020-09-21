export const pieData = (data , label)=> {
    console.log([...data])
    return {
        labels:[...label],
        datasets: [
            {
                data: [...data],
                backgroundColor: ['#ff6b6b', '#006266', '#2980b9'],
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