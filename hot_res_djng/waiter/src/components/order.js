import React from "react";

export default class Order extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="listOfOrders-order">
        <h4>date time: {this.props.date_time}</h4>
        <h5>order: {JSON.stringify(this.props.order)}</h5>
      </div>
    )
  }
}
