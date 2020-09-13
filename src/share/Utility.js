

export function HandleChange(e) {
    const {name, value } = e.target;
    this.setState({
        [name] : value
    })
}