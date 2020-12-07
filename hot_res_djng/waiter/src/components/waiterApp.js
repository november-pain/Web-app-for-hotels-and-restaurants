import React from "react";
import List_of_Orders from "./order";
import Clock from "./clock";
import "../styles/waiter_app.scss";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Clock></Clock>
        <div kry={1}>
          <List_of_Orders></List_of_Orders>
        </div>
      </div>
    );
  }
}
