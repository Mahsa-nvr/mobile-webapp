
import { API } from './Config';
import axios from 'axios';


export const data2 = () => {
    console.log('rfrfr')
     
    axios.get(`${API}incomecategory/index` ,{ 
        params: {
            user_id : 1,
            type: 1,
        }
         }).then(res => {
            let test;
             console.log('res', res.data.data) 
              test = res.data.data
              return test
         }).catch( err => {
        console.log(err)
        })
    
}
