import React from 'react';
import Header from './../../components/Header/Header';
import Footer from './../../components/Footer/Footer';
import Mainchat from './../../components/MainChat/Mainchat';
import { checkStorageId } from './../../share/Utility';
import Loading from './../../components/Loading/Loading';

class Chat extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            flag: true
        }
    }

    componentDidMount(){

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
                <Header/>
                { this.state.flag ? <Loading/> : 
                <Mainchat />
                }
                <Footer/>
            </div>
        )
    }
}

export default Chat;