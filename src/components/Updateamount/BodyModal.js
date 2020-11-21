import React from 'react';
import NumberFormat from 'react-number-format';
import { Row } from 'reactstrap';

import { HandleChange } from './../../share/Utility';

class BodyModal extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      inputPrice: ''
    }
  }

  componentDidMount() {
    const { test } = this.props;
    console.log(test, 'hhhh')
    // if(test == 'gg') {
    //   console.log(test)
    //   // this.setState({
    //   //   inputPrice:''
    //   // })
    // }else {
    //   console.log('no yyyyy')
    // }
  }


    
  


    render() {
      console.log(this.props.test,'testttttt')
      const totalAmount = this.state.inputPrice
      const {getData } =  this.props
      getData(totalAmount)

     
     
        return (
            <div>
             <Row>
               <div style={{float:"right", display:"block", marginBottom: "5px"}}> <span>نام : {this.props.firstData} </span> <span>{this.props.mainName}</span></div>
            </Row>
            <Row><span style={{float:"right", marginTop: "5px"}}>قیمت :</span>
         
            <NumberFormat
                className="input_number_fomat"
                name="inputPrice"
                value={this.state.inputPrice}
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