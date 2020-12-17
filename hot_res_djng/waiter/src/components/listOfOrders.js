import React, { useState, useEffect } from "react";
import Order from "./order.js";
import { Button } from "antd";

const ListOfOrders = () => {
  const [{ orders, loading }, setState] = useState({
    orders: null,
    loading: true,
  });

  var [{ ordersList = [], allOrders = [] }, setUpdate] = useState({
    ordersList: null,
    allOrders: null,
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

  // var allOrders = [];

  const renderOrders = () => {
    ordersList = orders
      .reverse()
      .map((ord) => (
        <Order
          order={ord["fields"]["order"]}
          date_time={ord["fields"]["date_time"]}
          key={ord["pk"]}
          id={ord["pk"]}
        />
      ));
    // console.log(ordersList);
    return ordersList;
  };

  if (loading) {
    return <div>loading...</div>;
  } else {
    renderOrders();
    // allOrders = ordersList;
    return (
      <div className="everything">
        <div className="listOfFeatures">
          <Button
            type="primary"
            onClick={() => {
              setUpdate((currentOrdersList) => ({
                ...currentOrdersList,
                ordersList: ordersList.reverse(),
                // allOrders: ordersList,
              }));
              // console.log(ordersList);
            }}
          >
            Sort by date
          </Button>
          <div>Something</div>
          <div>Something</div>
          <div>Something</div>
        </div>
        <div className="listOfOrders">{ordersList}</div>
      </div>
    );
  }
};

export default ListOfOrders;
