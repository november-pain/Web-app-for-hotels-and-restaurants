import React from 'react';


export default class Counter extends React.Component {
    constructor(props) {
        super(props)

    }


    render() {
        return(
            <div>
                {this.props.count}
                <button onClick={this.props.increment}>+</button>
                <button onClick={this.props.decrement}>-</button>
            </div>
        )
    }
}