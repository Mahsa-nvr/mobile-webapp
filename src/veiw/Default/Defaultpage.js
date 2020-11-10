import React from 'react';
import './Default.css'
//components
import Header from './../../components/Header/Header';
import Maincards from './../../components/Maincards/Maincards';
import Defaultchart from '../../components/Defaultchart/Defaultchart';
import DefaultLineChart from './../../components/DefaultLineChart/DefaultLineChart';
// import HomeCrud from './../../components/Cruds/HomeCrud/HomeCrud';
import Footer from './../../components/Footer/Footer';

import { checkStorageId } from './../../share/Utility';

import Loading from './../../components/Loading/Loading';


class Deafultpage extends React.Component {

    constructor(props){
        super();
        this.state = {
            flag: true
        }
    }

    componentDidMount() {

        checkStorageId()
        let x = checkStorageId()  
        if(x == null) {
            return  window.location.href = '/';
        }else {
            this.setState({ flag:false})
        }
    }

    render() {
        return (
            <div>
            <div className="defaultt">
                <Header />
                { this.state.flag ? <Loading/> : 
                <div>
                <Maincards /> 
                <Defaultchart />
                <DefaultLineChart/>  
               </div>
                }  
            </div>
            <div>
            <Footer />  
            </div>   
            </div>
        )
    }
}

export default Deafultpage;