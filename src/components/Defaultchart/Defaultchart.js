import React from 'react';
import Piechart from '../Charts/Piechart';
import './Defaultchart.css';

class Defaultchart extends React.Component {

  
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
                            <Piechart   options={{ maintainAspectRatio: false }}/>
                            </div>
                            <div className="content_text">تفکیک درآمدها</div>
                    </div>
                   
                    <div className="col-6 col_chart">    
                          <div style={styles}>
                            <Piechart  options={{ maintainAspectRatio: false }} />
                            </div>
                            <div className="content_text"> تفکیک مخارج</div>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default Defaultchart;