import React from 'react';
import './HomeCrud.css';
import { withRouter } from "react-router-dom";
import { Button } from 'reactstrap';

class HomeCrud extends React.Component {

    profileBtn = (props) => {
       this.props.history.push('/profile');
    }


    render() {
        return (
            <div className="home_crud">
               <Button className="default_btn first" onClick={this.profileBtn}>اطلاعات عمومی  </Button>
               <Button className="default_btn second"> گزارش ها  </Button>
            </div>
        )
    }
}

export default withRouter(HomeCrud);