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
         }
        return(
            <div className="default_line_chart">
                  <div className="row">
                     
                     <div className="col col_chart_line">
                            <div style={styles}>
                             <Linechart  options={{ maintainAspectRatio: false }}/>
                             </div>
                             <div className="content_text">روند درآمدها</div>
                     </div>
                    {/* <div className="row">
                        <div>
                            tgt
                        </div>
                        <div>
                            frfrf
                        </div>
                    </div> */}
                     
                 </div>
            </div>
        )
    }
}

export default DefaultLineChart;