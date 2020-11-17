import React from 'react';


export default class Item extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          visible: props.visible
        };
    }
    render() {
        return (
            <div className={this.state.visible ? "visible" : "hidden"}>
                <h2>{this.props.name}</h2>
                <h3>price: {this.props.price}</h3>
                <h4>category: {this.props.category}</h4>
                <h5>description: {this.props.description}</h5>
            </div>
        )
    }
}
