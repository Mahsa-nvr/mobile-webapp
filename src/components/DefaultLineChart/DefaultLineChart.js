import React from 'react';
import './DefaultLineChart.css';
import axios from 'axios';
import { API } from './../../Services/Config.js';

//components
import Linechart from '../Charts/Linechart';
import { lineData } from './../../share/ChartData';


import { checkStorageId } from './../../share/Utility';

class DefaultLineChart extends React.Component { 
   state = {
       incomeLineChartData: [],
       spendLineChartData: [],
       lineChartLabels: []
   }

componentDidMount() {
    
    checkStorageId()
        let userId = checkStorageId() 

    axios.get(`${API}report/index`, {
        params: {
            user_id : userId
        },
    }).then(response => {
      
      let totalSpend = response.data.expenditures;
      let totalIncome =  response.data.income;

    //   console.log(totalSpend,totalIncome)

      // eslint-disable-next-line array-callback-return
      totalSpend.map(data => {
          this.setState({
            spendLineChartData : [...this.state.spendLineChartData, data.sum],
            lineChartLabels: [...this.state.lineChartLabels, data.name]
          })
      })

      // eslint-disable-next-line array-callback-return
      totalIncome.map(data => {
          this.setState({
            incomeLineChartData : [...this.state.incomeLineChartData , data.sum] 
          })
      })

    }).catch(err => {
        console.log(err)
    })
}

    render() {
        const { incomeLineChartData , spendLineChartData, lineChartLabels} = this.state
        const styles = {
            width: "100%",
            padding: "0",
            align: "center",
            height: "50%",
            // eslint-disable-next-line no-dupe-keys
            padding: "3%"
         }
        return(
            <div className="default_line_chart">
                  <div className="row">
                     
                     <div className="col col_chart_line">
                            <div style={styles}>
                             <Linechart
                             data={lineData(incomeLineChartData, spendLineChartData, lineChartLabels)}
                             options={{ maintainAspectRatio: false }}/>
                             </div>
                            
                     </div>
                     </div>
                    {/* <div className="row">
                        <div className="col col_part">
                        <div className="col_point1" ></div>
                            روند درآمدها
                        </div>
                        <div className="col col_part">
                        <div className="col_point2" ></div>
                            روند مخارج
                        </div>
                    </div> */}
                     
                
            </div>
        )
    }
}

export default DefaultLineChart;