import React from 'react';
import axios from 'axios';
import './Defaultchart.css';

//components
import Piechart from '../Charts/Piechart';


class Defaultchart extends React.Component {

    state = {
        data1 : [50,20,60],
        data2 : [100,10,40],
        labels1: [],
        labels2: ["uu","lpp","qq"]
    }

    componentDidMount() {
        console.log('//get data in default home page for pie chart')
        axios.get('http://192.168.22.48/ipfm/frontend/web/index.php/income/index', {
            params: {
                user_id : 1
            }
        }).then(response => {
            console.log(response.data.data)
            // console.log(response.data.data[2].name)
            const incomeLabel = response.data.data
        
            this.setState({
                ...this.state,
                labels1 : incomeLabel
            })
        }).catch(err => {
            console.log(err )
        })
    }
 
  
    render() {
       
        const styles = {
           width: "100%",
           padding: "0",
           align: "center",
           height: "50%",
        }
        return(
            <div className="default_chart">
                <div className="row">
                     
                    <div className="col-6 col_chart">
                           <div style={styles}>
                            <Piechart data={this.state.data1} labels={this.state.labels1} options={{ maintainAspectRatio: false }}/>
                            </div>
                            <div className="content_text">تفکیک درآمدها</div>
                    </div>
                   
                    <div className="col-6 col_chart">    
                          <div style={styles}>
                            <Piechart data={this.state.data2} labels={this.state.labels2} options={{ maintainAspectRatio: false }} />
                            </div>
                            <div className="content_text"> تفکیک مخارج</div>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default Defaultchart;