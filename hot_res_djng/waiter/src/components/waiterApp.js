import React from "react";
import List_of_Orders from "./order";
import Clock from "./clock";

export default class App extends React.Component {
  render() {
    return (
      <h4>
        <div>
          <Clock></Clock>
          <List_of_Orders></List_of_Orders>
        </div>
      </h4>
    );
  }
}
