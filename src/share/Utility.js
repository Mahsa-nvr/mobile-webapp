import React from 'react';

export function HandleChange(e) {
    
    const {name, value } = e.target;
    this.setState({
        [name] : value
    })
    
}

export function handlePriceChange(e) {
    // eslint-disable-next-line no-unused-vars

    //  str1 = e.target.value.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    //  e.target.value = e.target.value.replace(',', '');  
    //  str1 = new Intl.NumberFormat().format(e.target.value);
    const inputValue = e.target.value.split(',').join('');     
   e.target.value = new Intl.NumberFormat().format(inputValue);
  
   

    const {name, value } = e.target;
    this.setState({
        [name] : value
    })


}



export const dateConvertFormat = (gitDate)=>{
    let date = new Date(gitDate);
        return (((date.getDate() > 9) ? date.getDate() : ('0' + date.getDate()))
        + '/' + ((date.getMonth() > 8) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1)))  + '/' + 
        date.getFullYear());
}


export const checkStorageId = () => {
    const id = localStorage.getItem("User_Id")
    if(id) {
        return id
    }else{
       return null
    
    }
}


export const Icon = (props) => {
    const {icon, className, ...other} = props;
    return (
        <i {...other} className={`fa fa-${icon} ${className}`}/>
    )
}
