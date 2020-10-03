import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import darayi from './../../assets/icons/darayi.png';
import { API } from './../../Services/Config';
import axios from 'axios';

//import css files 
import './AssetPage.css';

//access file
// import { data2 } from './../../Services/Access';


//components
import Header from './../../components/Header/Header';
import AssetList from './../../components/AssetListItem/AssetList';


class AssetPage extends React.Component {


    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        this.state = {
            assetCat: [],
            totalAssetAmount : '',
           
        }
    }

    componentDidMount() {
        axios.get(`${API}incomecategory/index`,{
            params: {
              user_id : 1,
              type: 2,
          }
          }).then(res => {
           this.setState({
            assetCat : res.data.data
           })
          }).catch(err =>
             console.log('asset page' , err))


             axios.get(`${API}income/index`, {
                params: {
                    user_id : 1,
                    type: 1
                }
              }
              ).then(res => {
               this.setState({ 
                totalAssetAmount : res.data.sum
               })
              }).catch(err => {
              console.log(err)
              })
    
    }
    render() {
    
       
        return (
            <div className="asset_page">
                <Header />
                 <div className="asset_list">
                     <ListGroup className="asset_list_group">
                     <ListGroupItem className="asset_list_group_item title"><img src={darayi} height={40} alt=""/><span className="title_list">دارایی</span></ListGroupItem>
                     <ListGroupItem className="asset_list_group_item"><span className="title_whole">دارایی کل:</span><span className="title_amount">{this.state.totalAssetAmount} ریال</span></ListGroupItem>
                     {this.state.assetCat.map(item => {             
                         return <div key={item.id}><AssetList mainTitle={item.title} catId={item.id} />  </div>
                     })}
                     </ListGroup>
                 </div>
            
            </div>
        )
    }
}

export default AssetPage;