import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import daramad from './../../assets/icons/daramad.png'



//components
import Header from './../../components/Header/Header';

class AssetPage extends React.Component {
    render() {
        return (
            <div className="asset_page">
                <Header />
                 {/* <div className="asset_list">
                     <ListGroup className="asset_list_group">
                     <ListGroupItem className="asset_list_group_item title"><img src={daramad} height={40} alt=""/><span className="title_list">درآمد</span></ListGroupItem>
                     </ListGroup>
                 </div> */}
            
            </div>
        )
    }
}

export default AssetPage;