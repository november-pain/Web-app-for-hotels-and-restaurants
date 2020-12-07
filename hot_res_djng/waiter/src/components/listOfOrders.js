import React from "react";
import Order from "./order.js";

const OOOrders = [
  { 1: { name: "Fried eggs", number: 3 } },
  { 1: { name: "Fried chef eggs", number: 4 } },
  { 1: { name: "Fried eggs", number: 5 } },
  { 1: { name: "Fried Naruto's eggs", number: 6 } },
];

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

    this.setState({
      orders: JSON.parse(orders_data).map((o) => o.fields), // .map((o) => o.fields)
      loading: false,
    });
    // console.log(this.state.orders);
  }

  renderOrders = () => {
    console.log(this.state.orders);
    const ordersList = [];
    for (let i = 0; i < this.state.orders.length; i++) {
      let id = this.state.orders[i]["pk"];
      let date_time = this.state.orders[i]["fields"]["date_time"];
      let order = this.state.orders[i]["fields"]["order"];

      ordersList.push(
        <Order order={order} date_time={date_time} id={id} key={id} /> // key={id}
      );
    }
    return ordersList;
  };

  render() {
    // return OOOrders.map((o, index) => <p key={index}>{JSON.stringify(o)}</p>);
    if (!this.state.loading) {
      return <div className="orders">{this.renderOrders()}</div>;
    }
  }
}
