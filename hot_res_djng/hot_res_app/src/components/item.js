import React from "react";

export default class Item extends React.Component {
  constructor(props) {
    super(props);
  }

  addItem = () => {
    if (this.props.order[this.props.id] != null) {
      this.props.setOrder({
        [this.props.id]: {
          number: this.props.order[this.props.id].number + 1,
          name: this.props.name,
        },
      });
    } else {
      this.props.setOrder({
        [this.props.id]: {
          number: 1,
          name: this.props.name,
        },
      });
    }
  };

  render() {
    if (this.props.chosenCategory) {
      if (this.props.category !== this.props.chosenCategory) {
        return <div />;
      }
    }
    return (
      <div className="menu-item">
        <h2>{this.props.name}</h2>
        <h3>price: {this.props.price}</h3>
        <h4>category: {this.props.category}</h4>
        <h5>description: {this.props.description}</h5>
        <button className="add-to-cart" onClick={this.addItem}>
          +
        </button>
      </div>
    );
  }
}
