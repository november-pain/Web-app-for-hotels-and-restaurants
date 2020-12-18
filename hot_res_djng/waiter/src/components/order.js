import React, { useState } from "react";
import { format } from "date-fns";
import { Button } from "antd";

export default (props) => {
  const { order, date_time, id } = props;

  const [loading, setLoading] = useState(false);

  const renderItems = () =>
    Object.entries(order).map((item, i) => (
      <li className="item" key={i}>
        {item[1].name} x {item[1].number}
      </li>
    ));

  const formatDate = () => {
    let dateString = Date.parse(date_time);
    let date = new Date(dateString);
    return format(date, "MM/dd/yyyy HH:mm");
  };

  const completeOrder = async () => {
    fetch(window.location.origin + "/post/orderdone/", {
      method: "POST",
      headers: { "Content-Type": "application/text" },
      body: JSON.stringify(id),
    });
  };

  return (
    <div className="order">
      <div className="elements">
        <span className="order_name">order:</span>
        <a className="date">{formatDate()}</a>
      </div>
      <ol className="item_list">{renderItems()}</ol>
      <Button
        type="primary"
        loading={loading}
        onClick={() => {
          setLoading(true);
          completeOrder().then(setLoading(false));
        }}
      >
        Done
      </Button>
    </div>
  );
};
