import { Divider } from "antd";
import React, { useState, useEffect, useReducer } from "react";
import Order from "./order.js";

const orderObjectFromDb = (o) =>
  // console.log(o),
  ({
    order: { ...o.order },
    info: {
      dateTimeCreated: new Date(o.date_time),
      id: o.id,
      place: o.place,
      active: true,
    },
  });

const archivedOrderObjectFromDb = (o) => ({
  order: { ...o.order },
  info: {
    dateTimeCreated: new Date(o.date_time_started),
    dateTimeEnded: new Date(o.date_time_completed),
    id: o.id,
    place: o.place,
    active: false,
  },
});

const transformListOfOrders = (l) => l.map((o) => orderObjectFromDb(o));

const transformListOfArchivedOrders = (l) =>
  l.map((o) => archivedOrderObjectFromDb(o));

const newestToOldest = (a, b) =>
  b.info.dateTimeCreated - a.info.dateTimeCreated;
const oldestToNewest = (a, b) =>
  a.info.dateTimeCreated - b.info.dateTimeCreated;

const loadOrders = async (payload, transformFunction) => {
  const url_orders = window.location.href + "db/" + payload + "/";
  try {
    const orders_response = await fetch(url_orders);
    const orders_data = await orders_response.json();
    const orders_json_raw = JSON.parse(orders_data);
    return transformFunction(orders_json_raw);
  } catch (e) {
    console.log("incorrect payload", e);
    return;
  }
};

const ListOfOrders = () => {
  const [archivedOrders, setArchivedOrders] = useState(null);
  const [activeOrders, setActiveOrders] = useState(null);
  const [activeWaiterCalls, setActiveWaiterCalls] = useState(null);

  const reducer = (s, action) => {
    switch (action.type) {
      case "newest to oldest":
        return {
          ...s,
          orders: [...s.orders].sort(newestToOldest),
          sortingF: newestToOldest,
        };
      case "oldest to newest":
        return {
          ...s,
          orders: [...s.orders].sort(oldestToNewest),
          sortingF: oldestToNewest,
        };
      case "set":
        return { ...s, orders: action.orders.sort(s.sortingF) };
      case "update":
        if (s.display == "active" && activeOrders != null) {
          return { ...s, orders: activeOrders.sort(s.sortingF) };
        } else if (s.display == "archived" && archivedOrders != null) {
          return { ...s, orders: archivedOrders.sort(s.sortingF) };
        } else {
          return s;
        }
      case "display active":
        if (activeOrders != null) {
          return {
            ...s,
            orders: activeOrders.sort(s.sortingF),
            display: "active",
          };
        } else {
          return s;
        }
      case "display archived":
        if (archivedOrders != null) {
          return {
            ...s,
            orders: archivedOrders.sort(s.sortingF),
            display: "archived",
          };
        } else {
          return s;
        }
    }
  };
  const [{ orders, sortingF }, dispatch] = useReducer(reducer, {
    orders: null,
    sortingF: newestToOldest,
    display: "active",
  });

  const fetchOrders = () => {
    loadOrders("orders", transformListOfOrders).then((newOrders) =>
      setActiveOrders(newOrders)
    );
    loadOrders(
      "completed_orders",
      transformListOfArchivedOrders
    ).then((newOrders) => setArchivedOrders(newOrders));
  };

  const updateOrdersWithInterval = async (interval) => {
    setInterval(async () => {
      fetchOrders();
    }, interval);
  };

  const onMount = async () => {
    fetchOrders();
    updateOrdersWithInterval(15000);
  };

  useEffect(() => {
    onMount();
  }, []);

  useEffect(() => {
    dispatch({ type: "update" });
  }, [activeOrders, archivedOrders]);

  const renderOrders = () =>
    [...orders].map((ord) => (
      <Order
        order={ord.order}
        dateTimeCreated={ord.info.dateTimeCreated}
        active={ord.info.active}
        place={ord.info.place}
        key={ord.info.id}
        id={ord.info.id}
      />
    ));

  if (orders == null || archivedOrders == null || activeOrders == null) {
    return <div>loading...</div>;
  } else {
    return (
      <div className="everything">
        <div className="listOfFeatures">
          <button
            className="newToOld"
            onClick={() => dispatch({ type: "newest to oldest" })}
          >
            Newest to oldest
          </button>
          <button
            className="oldToNew"
            onClick={() => dispatch({ type: "oldest to newest" })}
          >
            Oldest to newest
          </button>
          <button
            className="active"
            onClick={() => dispatch({ type: "display active" })}
          >
            Active
          </button>
          <button
            className="archived"
            onClick={() => dispatch({ type: "display archived" })}
          >
            Archived
          </button>
          <a className="logout" href={window.location.href + "logout"}>
            Logout
          </a>
        </div>
        <div className="listOfOrders">{renderOrders()}</div>
      </div>
    );
  }
};

export default ListOfOrders;
