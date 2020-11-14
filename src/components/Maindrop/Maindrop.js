import React from 'react';
import Select from 'react-select';
import axios from 'axios';
import {API} from './../../Services/Config';

// const a = [
//   { value: 1 , label: 'حقوق' },
//   { value: 2 , label: 'هدیه' },
//   { value: 3 , label: 'سایر' },
  
// ];




class Maindrop extends React.Component {
    state = {
        selectedOption: null,
        test : 77,
        totalLeader:[]
      };


      componentDidMount(){
        axios.get(`${API}leadership/index`)
        .then(res => {
          console.log(res.data.data, 'res in main modal')
        this.setState({
          totalLeader: [...res.data.data]
        })
        
        }).catch(err => {
          console.log(err)
        })
     
      }
    
      handleChange = selectedOption => {
        const { onGetData } =this.props
        this.setState(
          { selectedOption },
          () => onGetData(this.state.selectedOption),
        ); 
      };
    


    
    render() {
      console.log(this.state.totalLeader)

      const options = this.state.totalLeader.map(li => li.name)
        const { selectedOption } = this.state;

        return (
            <div>
            <Select
              placeholder={this.props.emptyDrop ? "انتخاب منبع..." : <span className="text-danger">انتخاب هزینه...</span>}
              value={selectedOption}
              onChange={this.handleChange}
              options={options}
              
            />
            <div></div>
            
            </div>
        )
    }
}

export default Maindrop;