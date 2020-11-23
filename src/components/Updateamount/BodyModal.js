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

  // componentDidUpdate() {

  //   console.log(this.props.test, 'prop in life')

  // if(this.props.test) {
  //   this.setState({inputPrice : ''})
  // }
    
  // }


  handleInputChange = (e) => {
    const {name , value} = e.target;
    this.setState({
        [name] : value
    })
  }
    
  


    render() {
      console.log(this.props.test,'testttttt')
      const totalAmount = this.state.inputPrice
      const {getData } =  this.props
      getData(totalAmount)

     
     
        return (
            <div>
             <Row>
               <div style={{float:"right", display:"block", marginBottom: "5px"}}> <span>نام : {this.props.firstData} </span> </div>
            </Row>
            <Row><span style={{float:"right", marginTop: "5px"}}>قیمت :</span>
         
            <NumberFormat
                className="input_number_fomat"
                name="inputPrice"
                value={this.state.inputPrice}
                onChange={(e) => this.handleInputChange.call(this, e)}
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