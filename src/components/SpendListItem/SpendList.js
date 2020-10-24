import React from 'react';
import {  ListGroupItem, Button , Row, Col, Form, FormGroup, Label, Input} from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import axios from 'axios';
import {API} from './../../Services/Config';
import { HandleChange , handlePriceChange } from './../../share/Utility';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome , faCoffee, faBars , faBiking , faTshirt, faHeart } from '@fortawesome/free-solid-svg-icons';

//faHome ejare
//faBiking tafrih
//faTshirt pooshak
//salamat faHeart
import './SpendList.css';

//components
import DropDownInput from './../DropDown/DropDownInput';
import MainDate from './../mainDatePicker/MainDate'

class SpendList extends React.Component {

    constructor(props){
        super();
        this.state = {
            inputName: "",
            inputAmount: "",
            inputDate: "" ,
            totalSpend: [],
            inputDropDown:'',
            sumAmount: 0,
            show: false,
            emptyDrop: true
        }
    }

    componentDidMount(){
      const { onGetData } = this.props;
        axios.get(`${API}expenditures/index`, {
            params: {
                user_id : 1         
            }
           }
          ).then(res => {
          this.setState({
            totalSpend :[...res.data.data],
            sumAmount: res.data.sum
        })
        onGetData(this.state.sumAmount);
        
          }).catch(err => {
            console.log(err)
          })
    }

    btnClick = () => {
        this.setState({ 
          show : !this.state.show
        });
    }

    handleGetData = data => {
      console.log('get data from dropdown to spend page', data)
         this.setState({inputDropDown:data})   
    }

    handleGetFormatDate = formatDate => {
      this.setState({inputDate:formatDate})
    }

    send = async(props) => {

      const { onGetData } = this.props;

     if(this.state.inputAmount && this.state.inputName
       && this.state.inputDate && this.props.catId ) {

      var bodyFormData = new FormData();
      bodyFormData.append('amount', this.state.inputAmount);
      bodyFormData.append('name', this.state.inputName);
      bodyFormData.append('incomeCategoryID', this.state.inputDropDown.value);
      bodyFormData.append('date', this.state.inputDate );
      bodyFormData.append('expendituresCategoryID', this.props.catId);
      bodyFormData.append('userID', 1 );

      try {
        await axios({
        method: 'post',     //put
        url: `${API}expenditures/create`,
        headers:{
           'Content-Type':'multipart/form-data'
        },
        data: bodyFormData,
        }
        ).then(res => 
            console.log(res));
        }
        catch(err){
          console.log('errrr')
        }

       await axios.get(`${API}expenditures/index`, {
          params: {
              user_id : 1         
          }
         }
        ).then(res => {
        this.setState({
          totalSpend :[...res.data.data],
          sumAmount: res.data.sum,
          emptyDrop: true,
          show : false
      })
      onGetData(this.state.sumAmount);
        }).catch(err => {
          console.log(err)
        })

      }else {
        this.setState({
          emptyDrop : false
        })
      }
    }

    render() {
      let iconList;
      switch (this.props.mainTitle) {

        case 'اجاره' : 
        iconList = <FontAwesomeIcon icon={faHome} />
          break;

        case 'خوراک': 
        iconList = <FontAwesomeIcon icon={faCoffee} />
          break;

        case 'پوشاک':
        iconList = <FontAwesomeIcon icon={faTshirt} />
          break;

        case 'سلامت':
        iconList = <FontAwesomeIcon icon={faHeart} />
          break;

        case 'تفریح': 
        iconList = <FontAwesomeIcon icon={faBiking} />
          break;

        case 'سایر':
        iconList = <FontAwesomeIcon icon={faBars} />
          break;
          default:
            iconList = null
      }
     


        return (
            <div>
           
                  <ListGroupItem className="spend_list_group header">
                      <div className="asset_list_img">{iconList}</div>
                      
                      {this.props.mainTitle}
                      
                      <div className="base_list_btn">
                        <Button onClick={this.btnClick} className="list_btn">+</Button>
                      </div>

                 </ListGroupItem>

                 {this.state.show ? 
                  <div className="list_base_show">
                          
                  <Row >
                      <Col>
                
                        <FormGroup className="form_base_part">
                          <AvForm  onChange={(e) => HandleChange.call(this, e)} >
                            <AvField 
                             name="inputName"
                             label="نام" 
                             type="text" 
                             value={this.state.inputName}                                         
                             errorMessage="نام را وارد کنید" 
                             validate={{
                                        required: {value: true},
                                        pattern: {value: '^[A-Za-z0-9پچجحخهعغفقثصضشسیبلاتنمکگوئدذرزطظژؤإأءًٌٍَُِّs]+$'}, 
                                      }} />
                          </AvForm>
                        </FormGroup>
                     
                    </Col>
                    <Col>
                 
                        <FormGroup className="form_base_part">
                          <AvForm onChange={(e) => handlePriceChange.call(this, e)}>
                          
                            <AvField 
                             name="inputAmount"
                             label="قیمت" 
                             type="text" 
                             value={this.state.inputAmount}                                            
                             errorMessage="قیمت را وارد کنید" 
                             validate={{
                                        number: true,
                                        required: {value: true, errorMessage:"قیمت را وارد کنید"},
                                        pattern: {value: '^[0-9]+$'},                                                
                                      }} />
                            
                   
                          </AvForm>                                   
                             </FormGroup>
                             
                      </Col>
                  </Row>
                  <Row>
                      <Col>
                           <Form>
                             <FormGroup className="form_base_part">
                               <Label for="">تاریخ</Label>
                               <div >
                                  <MainDate onGetDate={this.handleGetFormatDate}/>
                             
                               </div>
                               {/* <Input type="text" 
                                      bsSize="sm" 
                                      width="50px"
                                      name="inputDate" 
                                      value={this.state.inputDate} 
                                      onChange={(e) => HandleChange.call(this, e)}  
                                      /> */}
                             </FormGroup>
                           </Form>
                      </Col>
                      <Col>
                         <div className="title_input_spend">نوع هزینه</div> 
                          <div className="drop">
                            <DropDownInput onGetData={this.handleGetData} emptyDrop={this.state.emptyDrop} /></div>                      
                        </Col>
                  </Row> 
                  <Row>
                        <Button className="send_btn_spend" color="primary" onClick={this.send}> ارسال</Button>
                  </Row>
                
              </div>
                 
                 : null }

                 {this.state.totalSpend.map(li => {
                     if(parseInt(li.category_id) === this.props.catId) 
                     return <ListGroupItem  key={li.id} className="spend_list_part">
                         {li.name}
                         <span className="asset_list_part_amount">{li.amount} ریال</span>
                         </ListGroupItem>
                 }  )}

{/* {this.state.totalSpend.map(li => {
                     if(parseInt(li.category_id) === this.props.catId) {

                     return <(ListGroupItem  key={li.id} className="spend_list_part">
                         {li.name}
                         <span className="asset_list_part_amount">{li.amount}</span>
                         </>)
                     }else{return(<React.Fragment></React.Fragment>)}
                 }  )}} */}
        

            </div>
        )
    }
}

export default SpendList;