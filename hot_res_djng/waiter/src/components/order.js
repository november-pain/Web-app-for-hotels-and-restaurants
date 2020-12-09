import React from "react";

const formOrder = (smth) => {
  let order = [];
  for (var i in smth) {
    order.push(
      JSON.stringify(i),
      " name:",
      JSON.stringify(smth[i].name),
      " number:",
      JSON.stringify(smth[i].number),
      " "
    );
  }
  return order;
};

export default class Order extends React.Component {
  constructor(props) {
    super(props);
    // this.state.order = null;
    this.state = {
      order: null,
      loading: true,
    };
  }

  async componentDidMount() {
    this.setState({ order: formOrder(this.props.order), loading: false });
  }

  render() {
    if (this.state.loading) {
      return null;
    } else {
      return (
        <div className="order">order: {this.state.order.map((ord) => ord)}</div>
      );
    }
  }
}
