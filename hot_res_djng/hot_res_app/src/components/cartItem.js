import React from 'react';
import Counter from './counter';


export default class CartItem extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            numOfItems: 1
        }
    }

    increment = () => {
        this.setState({
            numOfItems: this.state.numOfItems + 1
        })
    }

    decrement = () => {
        if (this.state.numOfItems > 0){
            this.setState({
                numOfItems: this.state.numOfItems - 1
            })
        }
    }

    render() {
        if (this.state.numOfItems > 0) {    
            return(
                <div>
                    <p>{this.props.name} : {this.state.numOfItems}</p>
                    <span><Counter increment={this.increment} decrement={this.decrement}/></span>
                </div>
            )
        }
        return (
            <div></div>
        )
    }
}