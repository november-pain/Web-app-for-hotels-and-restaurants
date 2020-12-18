import React, { useState, useEffect, useReducer } from "react";
import Order from "./order.js";
import Completed_Order from "./completedOrder.js";

const orderObjectFromDb = (o) => ({
  order: { ...o.fields.order },
  info: {
    dateTime: new Date(o.fields.date_time),
    id: o.pk,
  },
});

const archivedOrderObjectFromDb = (o) => ({
  order: { ...o.fields.order },
  info: {
    dateTimeStarted: new Date(o.fields.date_time_started),
    dateTimeEnded: new Date(o.fields.date_time_completed),
    id: o.pk,
  },
});

const transformListOfOrders = (l) => l.map((o) => orderObjectFromDb(o));

const transformListOfArchivedOrders = (l) =>
  l.map((o) => archivedOrderObjectFromDb(o));

const newestToOldest = (a, b) => b.info.dateTime - a.info.dateTime;
const oldestToNewest = (a, b) => a.info.dateTime - b.info.dateTime;

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
    case "set_archived":
      return { ...s, archived_orders: action.archived_orders };
    case "archived":
      //   console.log(archived_orders);
      return { ...s, orders_list: [...s.archived_orders] };
  }
};

const ListOfOrders = () => {
  // const [{orders, sortingF}, setState] = useState({orders:null, sortingF:newestToOldest});
  var [
    { orders, archived_orders, orders_list, sortingF },
    dispatch,
  ] = useReducer(reducer, {
    orders: null,
    archived_orders: null,
    orders_list: null,
    sortingF: newestToOldest,
  });

  const onMount = async () => {
    loadData();
    loadArchivedData();
    setInterval(async () => {
      loadArchivedData();
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
    const orders_json_raw = JSON.parse(orders_data);
    const orders = transformListOfOrders(orders_json_raw);

    dispatch({ type: "set", orders: orders });
    // setState(s=>({...s, orders:orders}));
  };

  const loadArchivedData = async () => {
    const url_archived_orders = window.location.origin + "/db/completed_orders";
    const archived_orders_response = await fetch(url_archived_orders);
    const archived_orders_data = await archived_orders_response.json();
    const archived_orders_json_raw = JSON.parse(archived_orders_data);
    const archived_orders = transformListOfArchivedOrders(
      archived_orders_json_raw
    );
    // console.log(archived_orders);
    dispatch({ type: "set_archived", archived_orders: archived_orders });
  };

  const renderOrders = (sorting) =>
    (orders_list = [...orders]
      // .sort(sorting)
      .map((ord) => (
        <Order
          order={ord.order}
          date_time={ord.info.dateTime}
          key={ord.info.id}
          id={ord.info.id}
        />
      )));

  const renderArchivedOrders = () =>
    [...archived_orders]
      // .sort
      .map((ord) => (
        <Completed_Order
          order={ord.order}
          date_time_started={ord.info.dateTimeStarted}
          date_time_completed={ord.info.dateTimeEnded}
          key={ord.info.id}
          id={ord.info.id}
        />
      ));

  const showOrders = () => renderOrders();
  //   renderArchivedOrders();
  orders_list;

  if (orders == null) {
    return <div>loading...</div>;
  } else {
    // console.log
    return (
      <div className="everything">
        <div className="listOfFeatures">
          <button onClick={() => dispatch({ type: "newest to oldest" })}>
            {/* <button onClick={()=>setState(s=>({...s, sortingF: newestToOldest}))}> */}
            Newest to oldest
          </button>
          <button onClick={() => dispatch({ type: "oldest to newest" })}>
            {/* <button onClick={()=>setState(s=>({...s, sortingF: oldestToNewest}))}> */}
            Oldest to newest
          </button>
          <button onClick={() => dispatch({ type: "archived" })}>
            Archived
          </button>
          <div>Something</div>
          <div>Something</div>
          <div>Something</div>
        </div>
        <div className="listOfOrders">{showOrders()}</div>
        {/* <div className="listOfOrders">{renderOrders(sortingF)}</div> */}
      </div>
    );
  }
};

export default ListOfOrders;
