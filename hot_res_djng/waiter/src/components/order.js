import React from "react";

export default class Order extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    <div className="listOfOrders-order">
      <h2>{this.props.name}</h2>
      <h3>price: {this.props.number}</h3>
      <h4>date_time: {this.props.date_time}</h4>
      <h5>order: {this.props.order}</h5>
    </div>;
  }
}
