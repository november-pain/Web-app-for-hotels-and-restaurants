import React, { useState } from "react";
import { format } from "date-fns";
import { Button } from "antd";

export default (props) => {
  const { order, date_time_started, date_time_completed, id } = props;

  const renderItems = () =>
    Object.entries(order).map((item, i) => (
      <li className="item" key={i}>
        {item[1].name} x {item[1].number}
      </li>
    ));

  const formatDate1 = () => {
    let dateStringStart = Date.parse(date_time_started);
    let dateStart = new Date(dateStringStart);
    let dateStringEnded = Date.parse(date_time_completed);
    let dateEnd = new Date(dateStringEnded);
    return format(dateStart, "MM/dd/yyyy HH:mm");
  };

  const formatDate2 = () => {
    let dateStringEnded = Date.parse(date_time_completed);
    let dateEnd = new Date(dateStringEnded);
    return format(dateEnd, "MM/dd/yyyy HH:mm");
  };

  return (
    <div className="order">
      <div className="elements">
        <span className="order_name">order:</span>
        <a className="date">
          {formatDate1()},{formatDate2()}
        </a>
      </div>
      <ol className="item_list">{renderItems()}</ol>
    </div>
  );
};
