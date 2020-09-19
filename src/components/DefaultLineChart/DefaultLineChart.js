import React from 'react';
import './DefaultLineChart.css';

//components
import Linechart from '../Charts/Linechart';


class DefaultLineChart extends React.Component { 

    render() {
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
                             <Linechart  options={{ maintainAspectRatio: false }}/>
                             </div>
                            
                     </div>
                     </div>
                    <div className="row">
                        <div className="col col_part">
                        <div className="col_point1" ></div>
                            روند درآمدها
                        </div>
                        <div className="col col_part">
                        <div className="col_point2" ></div>
                            روند مخارج
                        </div>
                    </div>
                     
                
            </div>
        )
    }
}

export default DefaultLineChart;