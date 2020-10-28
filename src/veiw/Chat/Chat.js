import React from 'react';
import Header from './../../components/Header/Header';
import Footer from './../../components/Footer/Footer';
import Mainchat from './../../components/MainChat/Mainchat';

class Chat extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Mainchat />

                <Footer/>
            </div>
        )
    }
}

export default Chat;