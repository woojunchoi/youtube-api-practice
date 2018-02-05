import React, {Component} from 'react'

class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            term:''
        }
    }

    inputchange = (value) => {
        this.setState({term:value});
        console.log(this.state)
        this.props.changeTerm(value)
    }

    render() {
        return(
            <input 
                valued = {this.state.term}
                placeholder = {this.state.term}
                onChange = {(event) => this.inputchange(event.target.value)}
            />
        )
    }
}
export default SearchBar