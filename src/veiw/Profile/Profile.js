import React from 'react';
import  { API } from './../../Services/Config.js';
import axios from 'axios';

class Profile extends React.Component {

    componentDidMount() {
        axios.get(`${API}user/profile`,{
            params: {
              user_id : 1,
              
          }
          }).then(res => {
             console.log(res.data.data, 'profileeeee')
          }).catch(err =>
             console.log('asset page' , err))

    }

    render() {
        return (
            <div>this is profile page </div>
        )
    }
}

export default Profile;