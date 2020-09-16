import React from 'react';
import './HomeCrud.css';

import { Button } from 'reactstrap';

class HomeCrud extends React.Component {
    render() {
        return (
            <div className="home_crud">
               <Button className="default_btn first">اطلاعات عمومی  </Button>
               <Button className="default_btn second"> گزارش ها  </Button>
            </div>
        )
    }
}

export default HomeCrud;