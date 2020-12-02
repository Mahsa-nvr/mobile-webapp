import React from 'react';
import  { API } from './../../Services/Config.js';
import profile from './../../assets/icons/profile2.png'
import { ListGroup, ListGroupItem } from 'reactstrap';
import { checkStorageId } from './../../share/Utility';
import axios from 'axios';



import './Profile.css';
//components
import Header from './../../components/Header/Header';
import Footer from './../../components/Footer/Footer';
import Loading from './../../components/Loading/Loading';



class Profile extends React.Component {

    constructor(props){
        super();
        this.state= {
            totalprofile : {},
            phoneNum: '',
            flag: true
        }
    }

    componentDidMount() {

        checkStorageId()
        let userId = checkStorageId()  
        if(userId == null) {
            return  window.location.href = '/';
        }else {
            this.setState({ flag:false})
        }
            // if(x) {
            //     this.setState({flag:false})
            // }else{
            //     this.setState({flag:true})
            // }
       
       
        
        

        var getLocalValue= localStorage.getItem("inputPhone")
        this.setState({
            phoneNum: getLocalValue
        })

        axios.get(`${API}user/profile`,{
            params: {
              user_id : userId,
              
          }
          }).then(res => {
             console.log(res.data.data, 'profileeeee')
             this.setState({
                totalprofile : res.data.data
             })
          }).catch(err =>
             console.log('profile page' , err))

    }


    

    render() {
    
        return (
           
            <div className="profile_page">
                <Header />
                { this.state.flag ? <Loading/> : 

                <div className="profile_list">
                    <ListGroup className="profile_list_group">
                        <ListGroupItem className="profile_list_group_item title">
                            <img src={profile} height={40} alt=""/><span className="title_list">اطلاعات عمومی</span>
                        </ListGroupItem>
                        <ListGroupItem className="profile_list_group_item ">
                           <span className="title_partt">نام : </span><span>{this.state.totalprofile.name}</span>
                        </ListGroupItem>
                        <ListGroupItem className="profile_list_group_item even-child">
                          <span className="title_partt">نام خانوادگی : </span><span>{this.state.totalprofile.last_name}</span>
                        </ListGroupItem>
                        <ListGroupItem className="profile_list_group_item ">
                           <span className="title_partt"> روز و ماه تسویه خمسی : </span><span>{this.state.totalprofile.date_khoms}</span>
                        </ListGroupItem>
                        <ListGroupItem className="profile_list_group_item even-child">
                           <span className="title_partt">بازه تسویه خمسی : </span><span>{this.state.totalprofile.clearing_paykhoms}</span>
                        </ListGroupItem>
                        <ListGroupItem className="profile_list_group_item ">
                           <span className="title_partt">شماره موبایل : </span><span>{this.state.phoneNum}</span>
                        </ListGroupItem>
                        <ListGroupItem className="profile_list_group_item even-child">
                           <span className="title_partt"> نام مرجع تقلید : </span><span>{this.state.totalprofile.leader_name}</span>
                        </ListGroupItem>

                    </ListGroup>

                </div>

    }
                <Footer />
            </div>
        )
    }
}

export default Profile;