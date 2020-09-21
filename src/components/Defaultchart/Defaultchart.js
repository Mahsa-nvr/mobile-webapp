import React from 'react';
import axios from 'axios';
import './Defaultchart.css';

//components
import Piechart from '../Charts/Piechart';
import { pieData } from './../../share/ChartData'

class Defaultchart extends React.Component {

    state = {
        incomeData : [],
        spendData : [],
        incomeLabel: [],
        spendLabel: []
    }

    componentDidMount() {
        
        axios.get('http://192.168.22.48/ipfm/frontend/web/index.php/income/index', {
            params: {
                user_id : 1
            },
        }).then(response => {
            // console.log('//get data in default home page for income pie chart', response)
           let  totalData = response.data.data;
          // eslint-disable-next-line array-callback-return
          totalData.map(data => {
            this.setState({
                incomeData: [...this.state.incomeData, data.amount],
                incomeLabel: [...this.state.incomeLabel , data.name]
            })
          })
        }).catch(err => {
            console.log(err)
        })

      
        axios.get('http://192.168.22.48/ipfm/frontend/web/index.php/report/index', {
            params: {
                user_id : 1
            },
        }).then(response => {
            // console.log('//get data in default home page for spend pie chart' , response)
           let  totalData = response.data.expendituresCategory;
          // eslint-disable-next-line array-callback-return
          totalData.map(data => {
            this.setState({
                spendData: [...this.state.spendData, data.amount],
                spendLabel: [...this.state.spendLabel , data.category]
            })
          })
        }).catch(err => {
            console.log(err)
        })


       
    }
 
  
    render() {
        const styles = {
           width: "100%",
           padding: "0",
           align: "center",
           height: "100%", 
        }

        return(
            <div className="default_chart">
                <div className="row">
                     
                    <div className="col-6 col_chart">
                           <div style={styles}>
                              
                            <Piechart data={  pieData(this.state.incomeData, this.state.incomeLabel)}
                                      options={{ maintainAspectRatio: false }}
                                      title="تفکیک درآمدها"
                                      />
                            </div>
                            {/* <div className="content_text">تفکیک درآمدها</div> */}
                    </div>
                   
                    <div className="col-6 col_chart">    
                          <div style={styles}>
                            <Piechart  data={pieData(this.state.spendData, this.state.spendLabel)}
                                       options={{ maintainAspectRatio: false }}
                                       title="تفکیک مخارج "
                             />
                            </div>
                            {/* <div className="content_text"> تفکیک مخارج</div> */}
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default Defaultchart;