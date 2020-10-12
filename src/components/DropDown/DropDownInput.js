import React from 'react';
import Select from 'react-select';

const options = [
  { value: 1 , label: 'حقوق' },
  { value: 2 , label: 'هدیه' },
  { value: 3 , label: 'سایر' },
  
];

class DropDownInput extends React.Component {
  state = {
    selectedOption: null,
    test : 77,
  };
  componentDidMount(){
    // const { onGetData } =this.props
    // onGetData(this.state.test)
  }

  handleChange = selectedOption => {
    const { onGetData } =this.props
    this.setState(
      { selectedOption },
      () => onGetData(this.state.selectedOption),
    ); 
  };

  
  render() {
    
    const { selectedOption } = this.state;

    return (
      <div>
      <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
      />
      </div>
    );
  }
}

export default DropDownInput;