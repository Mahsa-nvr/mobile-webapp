import React from 'react';
import Select from 'react-select';
// import axios from 'axios';
// import {API} from './../../Services/Config';


const options = [
  { value: 1 , label: ' سید علی خامنه ای' },
  { value: 5 , label: ' سیستانی' },
  { value: 6 , label: ' مکارم' },
  { value: 7 , label: ' صافی گلپایگانی' },
  { value: 8 , label: ' نوری همدانی' },
  { value: 9 , label: ' سبحانی' },
];



class Maindrop extends React.Component {
    state = {
        selectedOption: null,
        totalLeader:[]
      };


      componentDidMount(){
        // axios.get(`${API}leadership/index`)
        // .then(res => {
        //   console.log(res.data.data, 'res in main modal')
        // this.setState({
        //   totalLeader: [...res.data.data]
        // })
        
        // }).catch(err => {
        //   console.log(err)
        // })
     
      }
    
      handleChange = selectedOption => {
        const { onGetData } =this.props
        this.setState(
          { selectedOption },
          () => onGetData(this.state.selectedOption),
        ); 
      };
    


    
    render() {
     
     
      // const options=this.state.totalLeader.map(el => {
      //   return el.name
      // })



     
        const { selectedOption } = this.state;

        return (
            <div>
            <Select
              placeholder={this.props.empShow ? "انتخاب مرجع..." : <span className="text-danger">انتخاب مرجع...</span>}
              value={selectedOption}
              onChange={this.handleChange}  
              options={options}          
            />

              
           
           
            
            </div>
        )
    }
}

export default Maindrop;