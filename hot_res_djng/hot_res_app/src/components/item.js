import React from 'react';


export default class Item extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          item: {
              name: props.name,
              description: props.description,
              price: props.price,
              category: props.category
          },
        };
    }
    render() {
        return (
            <div>
                <h2>{this.state.item.name}</h2>
                <h3>price: {this.state.item.price}</h3>
                <h4>category: {this.state.item.category}</h4>
                <h5>description: {this.state.item.description}</h5>
            </div>
        )
    }
}
