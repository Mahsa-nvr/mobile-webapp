import React from 'react';
import axios from 'axios';
import { API } from './../../Services/Config';

class TestPage extends React.Component {

    state = {
   aa: "",
   bb: ''
    }


    componentDidMount() {
        axios.get(`${API}expenditurescategory/index`, {
            params: {
                user_id : 1         
            }
           }
          ).then(res => {
        console.log('header', res)
        
          }).catch(err => {
            console.log(err)
          })

          axios.get(`${API}expenditures/index`, {
            params: {
                user_id : 1         
            }
           }
          ).then(res => {
        console.log('listtt', res)
        
          }).catch(err => {
            console.log(err)
          })
    }


    render(){
        return (
        <div>این صفحه تستی می باشد </div>
        )
    }
}

export default TestPage;