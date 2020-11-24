import React from 'react';


export default class Cart extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div className="cart">
                <button className="order-button">Cart</button>
            </div>
        )
    }
}