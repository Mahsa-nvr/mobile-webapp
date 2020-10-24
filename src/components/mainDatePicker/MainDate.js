import React from 'react';
import momentJalaali from 'moment-jalaali';
import  DatePicker from 'react-datepicker2';
import moment from 'moment-jalaali';
import './MainDate.css';
import { dateConvertFormat } from './../../share/Utility'

export default class MainDate extends React.Component {
    constructor(props) {
        super(props);
          
          this.state = {
            value: null
          }
      
      }

    

      hello = (value) => {
      
        let todayDate = moment().format('jYYYY/jM/jD')
        
        const test = momentJalaali(todayDate, 'jYYYY/jM/jD')
       
        this.setState({
          value : test
        })
 
      }

      changeValueInput = value => { 
       const { onGetDate } = this.props;

        let formatDate = dateConvertFormat(value._d)
        onGetDate(formatDate)
        this.setState({ value }) 
        this.hello()
       
      }
        

     
    

  
  render() {

   
    return (
    <div ><DatePicker
      timePicker={false}
      isGregorian={false}
      value={this.state.value}
      onChange={this.changeValueInput}
    />
    </div>)
  }
}