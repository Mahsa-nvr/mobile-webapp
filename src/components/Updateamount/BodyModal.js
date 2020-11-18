import React from 'react';
import NumberFormat from 'react-number-format';
import { Row } from 'reactstrap';

import { HandleChange } from './../../share/Utility';

class BodyModal extends React.Component {


    render() {
      console.log(this.props.firstData.name,';;')
      let items = this.props.firstData
        return (
            <div>
             <Row>
               <div style={{float:"right", display:"block", marginBottom: "5px"}}> <span>نام : {this.props.firstData.name} </span> <span>{this.props.mainName}</span></div>
            </Row>
            <Row><span style={{float:"right", marginTop: "5px"}}>قیمت :</span>
         
            <NumberFormat
                className="input_number_fomat"
                name="inputPrice"
                // value={this.state.inputPrice}
                onChange={(e) => HandleChange.call(this, e)}
                displayType="input" 
                thousandSeparator={true}
                allowEmptyFormatting 
                  />
           </Row>

   
            </div>
        )
    }
}

export default BodyModal;