import React from 'react';


export default class Item extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        if (this.props.chosenCategory) {
                if (this.props.category !== this.props.chosenCategory) {
                    return (<div/>)
                };

            };
        return (
            <div className="menu-item">
                <h2>{this.props.name}</h2>
                <h3>price: {this.props.price}</h3>
                <h4>category: {this.props.category}</h4>
                <h5>description: {this.props.description}</h5>
                <button className="add-to-cart">+</button>
            </div>
        )
    }
}
