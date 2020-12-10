import React from "react";
import Order from "./order.js";

export default class ListOfOrders extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      orders: null,
      loading: true,
    };
  }

  async componentDidMount() {
    const url_orders = window.location.origin + "/db/orders";
    const orders_response = await fetch(url_orders);
    const orders_data = await orders_response.json();
    const orders_json = JSON.parse(orders_data);

    this.setState({
      orders: orders_json,
      loading: false,
    }); // , () => {console.log(typeof(this.state.orders[0]["pk"]))}
    console.log(this.state.orders);
  }

  renderOrders = () => {
    const ordersList = this.state.orders.map((ord) => (
      <Order
        order={ord["fields"]["order"]}
        date_time={ord["fields"]["date_time"]}
        key={ord["pk"]}
      />
    ));
    return ordersList;
  };

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    } else {
      return <div className="listOfOrders">{this.renderOrders()}</div>;
    }
  }
}
