import React from "react";
import ListOfOrders from "./listOfOrders";
import Clock from "./clock";
import "../styles/waiter_app.scss";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Clock />
        <h1 className="phrase">Orders</h1>
        <div>
          <ListOfOrders />
        </div>
      </div>
    );
  }
}
