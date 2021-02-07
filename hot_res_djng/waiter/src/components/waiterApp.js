import React from "react";
import ListOfOrders from "./listOfOrders";
import Clock from "./clock";
import "../styles/waiter_app.scss";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Clock />
        <div className="phrases">
          <div className="phrase-1">Orders</div>
          <div className="phrase-2">Tables</div>
        </div>
        <div>
          <ListOfOrders />
        </div>
      </div>
    );
  }
}
