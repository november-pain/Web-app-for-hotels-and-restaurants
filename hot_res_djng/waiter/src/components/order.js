import React from "react";

const formOrder = (smth) => {
  let order = [];
  for (var i in smth) {
    order.push(
      <h4 key={i}>
        {i}) {smth[i].name} x {JSON.stringify(smth[i].number)}
      </h4>
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
        <div className="order">
          <h3>order:</h3>
          {this.state.order.map((ord) => ord)}
        </div>
      );
    }
  }
}
