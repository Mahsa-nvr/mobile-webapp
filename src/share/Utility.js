

export function HandleChange(e) {
    
    const {name, value } = e.target;
    this.setState({
        [name] : value
    })
    
}

export function handlePriceChange(e) {
    // eslint-disable-next-line no-unused-vars
    let str1= "";
    //  str1 = e.target.value.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    console.log('testttt',e.target.value)

    //  e.target.value  =     e.target.value.replace(',', ''); 
  
   // str1 = new Intl.NumberFormat().format(e.target.value)
  
    const {name, value } = e.target;
    this.setState({
        [name] : value
    })
}