import React from 'react';
import axios from 'axios';
import { API } from './../../Services/Config';
import Loading from './../../components/Loading/Loading'

class TestPage extends React.Component {



    render(){
        return (
        <div>   
          <Loading />
        </div>

        )
    }
}

export default TestPage;