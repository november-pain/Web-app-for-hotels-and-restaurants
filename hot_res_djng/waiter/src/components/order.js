import React, { useState } from "react";
import { format } from "date-fns";
import { getCookie } from "../../../hot_res_app/src/tools/getCookie";
// import { Button } from "antd";
// import { ClockCircleOutlined } from "@ant-design/icons";

export default (props) => {
  const { order, dateTimeCreated, active, id, place } = props;

  const [loading, setLoading] = useState(false);

  const renderItems = () =>
    Object.entries(order).map((item, i) => (
      <li className="item" key={i}>
        <div className="item-number">{item[1].number}</div>
        <div className="item-group">
          <div>{item[1].name}</div>
        </div>
      </li>
    ));

  const renderWaitingTime = () => {
    let result;
    let time =
      Math.ceil(Math.abs(new Date() - new Date(dateTimeCreated)) / 1000) / 60;
    if (time < 1.0) {
      result = "<1m";
    } else if (time > 60) {
      result = "h+";
    } else {
      result = Math.ceil(time) + "m";
    }
    return result;
  };

  const formatDate = () => {
    return format(dateTimeCreated, "HH:mm"); //MM/dd/yyyy HH:mm
  };

  const csrftoken = getCookie("csrftoken");

  const completeOrder = async () => {
    fetch(window.location.href + "post/orderdone/", {
      credentials: "include",
      method: "POST",
      mode: "same-origin",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-CSRFToken": csrftoken,
      },
      body: JSON.stringify(id),
    });
  };

  const deleteOrder = async () => {
    fetch(window.location.href + "post/delete_order/", {
      credentials: "include",
      method: "DELETE",
      mode: "same-origin",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-CSRFToken": csrftoken,
      },
      body: JSON.stringify(id),
    });
  };

  const handleCheckboxClick = () => {
    console.log("checkbox clicked");
    setLoading(true);
    completeOrder().then(setLoading(false));
    ///toota shos' robit's'a
  };

  return (
    <div className="order">
      <div className="elements">
        {/* <span className="order_name">order:</span> */}
        <div className="table-number">
          <img
            className="table-image"
            src="../static/waiter/images/location.svg"
            alt=""
          />
          <div className="number">{place}</div>
        </div>
        <div className="date-time">
          <img
            className="clock-image"
            src="../static/waiter/images/clock.svg"
            alt=""
          />
          <a className="date">{formatDate()}</a>
        </div>
        <div className="people-amount">
          <img
            className="person-image"
            src="../static/waiter/images/comment.svg"
            alt=""
          />
          <div className="amount">comment</div>
        </div>
        {/* <div className="care-type">
          <img
            className="care-image"
            src="../static/waiter/images/care.svg"
            alt=""
          />
          <div className="type">з собою</div>
        </div> */}
      </div>
      <ol className="item_list">{renderItems()}</ol>
      <div className="waitAndComplete">
        <div className="waitingTime">
          waiting
          <div className="wait-time">{renderWaitingTime()}</div>
        </div>
        <label className="checkbox">
          <span className="checkbox__input">
            {/* <input type="checkbox" className="checkbox"></input> */}
            <input
              id="one"
              type="checkbox"
              className="checkbox"
              onChange={() => handleCheckboxClick()}
              name="toArchive"
              checked={!active}
            ></input>
            <span className="checkbox__control">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 50 50"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  d="M43.392 13.9039L42.1473 12.6403C41.7562 12.243 41.2347 12.0244 40.678 12.0244C40.1213 12.0244 39.5994 12.243 39.2083 12.6403L21.7181 30.3951L10.7905 19.3017C10.3994 18.9049 9.87755 18.686 9.32083 18.686C8.76443 18.686 8.24293 18.9049 7.8515 19.3017L6.60646 20.5649C6.21502 20.9629 6 21.4929 6 22.0575C6 22.6223 6.21502 23.152 6.60646 23.5493L18.9444 36.0735C18.9608 36.097 18.9781 36.119 18.9982 36.139L20.2432 37.3819C20.6343 37.7777 21.1561 37.9756 21.7172 37.9756H21.7237C22.2807 37.9756 22.8025 37.7777 23.193 37.3819L24.4384 36.1281C24.4584 36.108 24.4754 36.0914 24.4856 36.0744L43.3917 16.884C44.2027 16.0626 44.2027 14.7262 43.392 13.9039Z"
                  fill="#7B7B7B"
                />
              </svg>
            </span>
          </span>
        </label>
        {active ? null : (
          <button
            className="deleteButton"
            type="primary"
            // loading={loading}
            onClick={() => {
              setLoading(true);
              deleteOrder().then(setLoading(false));
            }}
          >
            Delete
          </button>
        )}
        {/* {active ? "Done" : "Undo"} */}
      </div>
    </div>
  );
};
