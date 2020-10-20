import React from 'react';
import  { API } from './../../Services/Config.js';
import profile from './../../assets/icons/profile2.png'
import { ListGroup, ListGroupItem } from 'reactstrap';
import axios from 'axios';

import './Profile.css';
//components
import Header from './../../components/Header/Header';
import Footer from './../../components/Footer/Footer';

class Profile extends React.Component {

    constructor(props){
        super();
        this.state= {
            totalprofile : {}
        }
    }

    componentDidMount() {
        axios.get(`${API}user/profile`,{
            params: {
              user_id : 1,
              
          }
          }).then(res => {
             console.log(res.data.data, 'profileeeee')
             this.setState({
                totalprofile : res.data.data
             })
          }).catch(err =>
             console.log('asset page' , err))

    }

    render() {
      
       
        return (
            <div className="profile_page">
                <Header />
                <div className="profile_list">
                    <ListGroup className="profile_list_group">
                        <ListGroupItem className="profile_list_group_item title">
                            <img src={profile} height={40} alt=""/><span className="title_list">اطلاعات عمومی</span>
                        </ListGroupItem>
                        <ListGroupItem className="profile_list_group_item ">
                           <span className="title_part">نام : </span><span>{this.state.totalprofile.name}</span>
                        </ListGroupItem>
                        <ListGroupItem className="profile_list_group_item even-child">
                          <span className="title_part">نام کاربری : </span><span>{this.state.totalprofile.username}</span>
                        </ListGroupItem>
                        <ListGroupItem className="profile_list_group_item ">
                           <span className="title_part">سال خمسی : </span><span>{this.state.totalprofile.date_khoms}</span>
                        </ListGroupItem>
                        <ListGroupItem className="profile_list_group_item even-child">
                           <span className="title_part">دوره خمسی : </span><span>{this.state.totalprofile.last_clear_khoms}</span>
                        </ListGroupItem>
                        <ListGroupItem className="profile_list_group_item ">
                           <span className="title_part">شماره موبایل : </span><span>{this.state.totalprofile.mobile}</span>
                        </ListGroupItem>
                        <ListGroupItem className="profile_list_group_item even-child">
                           <span className="title_part"> نام مرجع تقلید : </span><span>{this.state.totalprofile.leader_name}</span>
                        </ListGroupItem>

                    </ListGroup>

                </div>
                <Footer />
            </div>
        )
    }
}

export default Profile;