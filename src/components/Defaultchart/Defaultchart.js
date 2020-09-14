import React from 'react';
import Piechart from '../Charts/Piechart';
import './Defaultchart.css';

class Defaultchart extends React.Component {
    render() {
        return(
            <div className="default_chart">
                <div className="row">
                    <div className="col content_chart">
                        <Piechart />
                    </div>
                    {/* <div className="content_text">تفکیک درآمدها</div> */}
                    <div className="col content_chart">
                        
                    </div>
                    {/* <div className="content_text"> تفکیک مخارج</div> */}
                </div>
            </div>
        )
    }
}

export default Defaultchart;