import React, { useState, useEffect } from "react";
import Order from "./order.js";
import { Button } from "antd";

const ListOfOrders = () => {
  const [{ orders, loading }, setState] = useState({
    orders: null,
    loading: true,
  });

  const onMount = async () => {
    loadData();
    setInterval(async () => {
      loadData();
    }, 15000);
  };

  useEffect(() => {
    onMount();
  }, []);

  const loadData = async () => {
    const url_orders = window.location.origin + "/db/orders";
    const orders_response = await fetch(url_orders);
    const orders_data = await orders_response.json();
    const orders_json = JSON.parse(orders_data);

    setState((state) => ({
      ...state,
      orders: orders_json,
      loading: false,
    }));
  };

  var ordersList = [];

  const renderOrders = () => {
    ordersList = orders.map((ord) => (
      <Order
        order={ord["fields"]["order"]}
        date_time={ord["fields"]["date_time"]}
        key={ord["pk"]}
        id={ord["pk"]}
      />
    ));
    return ordersList;
  };

  if (loading) {
    return <div>loading...</div>;
  } else {
    renderOrders();
    return (
      <div className="listOfOrders">
        <Button
          type="primary"
          onClick={() => {
            ordersList = ordersList.reverse();
            console.log(ordersList);
          }}
        >
          Sort by date
        </Button>
        {ordersList}
      </div>
    );
  }
};

export default ListOfOrders;
