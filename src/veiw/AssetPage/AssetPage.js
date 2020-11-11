import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import darayi from './../../assets/icons/darayi.png';
import { API } from './../../Services/Config';
import axios from 'axios';
import NumberFormat from 'react-number-format';
import { checkStorageId } from './../../share/Utility';

//import css files 
import './AssetPage.css';

//access file
// import { data2 } from './../../Services/Access';


//components
import Header from './../../components/Header/Header';
import Footer from './../../components/Footer/Footer';
import AssetList from './../../components/AssetListItem/AssetList';
import Loading from './../../components/Loading/Loading';

class AssetPage extends React.Component {


    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super();
        this.state = {
            assetCat: [],
            totalAssetAmount : '', 
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

        axios.get(`${API}incomecategory/index`,{
            params: {
              user_id : userId,
              type: 2,
          }
          }).then(res => {
           this.setState({
            assetCat :res.data.data ,
           })
          }).catch(err =>
             console.log('asset page' , err))
    
    }



    handleGetData = (data) => {
       this.setState({
        totalAssetAmount : data
       })
    }
    render() {
  
        return (
            <div>
            <div className="asset_page">
                <Header />
                { this.state.flag ? <Loading/> : 

                 <div className="asset_list">
                     <ListGroup className="asset_list_group">
                     <ListGroupItem className="asset_list_group_item title"><img src={darayi} height={40} alt=""/><span className="title_list">دارایی</span></ListGroupItem>
                     <ListGroupItem className="asset_list_group_item"><span className="title_whole">دارایی کل:</span><span className="title_amount">
                       <NumberFormat value={this.state.totalAssetAmount} displayType={'text'} thousandSeparator={true}  renderText={value => <div>{value} ریال</div>} />                     
                         </span></ListGroupItem>
                     {this.state.assetCat.map(item => {             
                         return <div key={item.id}><AssetList mainTitle={item.title} catId={item.id} onGetData={this.handleGetData} />  </div>
                     })}
                     </ListGroup>
                 </div>
               }
            
            </div>
                <div><Footer /></div>
            </div>
        )
    }
}

export default AssetPage;