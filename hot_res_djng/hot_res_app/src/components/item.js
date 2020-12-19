import React, { useContext } from "react";
import { MenuContext, OrderContext } from "./сontext";

export default (props) => {
  const { name, price, category, description, id } = props;

  const { order, appendOrder } = useContext(OrderContext);
  const { chosenCategory } = useContext(MenuContext);

  const addItem = () => {
    if (order[id] != null) {
      appendOrder({
        [id]: {
          number: order[id].number + 1,
          name: name,
        },
      });
    } else {
      appendOrder({
        [id]: {
          number: 1,
          name: name,
        },
      });
    }
  };

  if (chosenCategory) {
    if (category !== chosenCategory) {
      return null;
    }
  }
  return (
    <div className="menu-item">
      <div className="image">
        <img src="static/images/pizza.png" alt="" />
      </div>
      <div className="info">
        <h2>{name}</h2>
        <div className="mass">220kg</div>
        <div className="kkal">2123kkal</div>
        <div className="description">{description}</div>
      </div>
      <div className="buy">
        <h2>₴{price}</h2>
        <button className="add-to-cart" onClick={addItem}>
          <img src="static/images/plus-button-thicker.svg" alt="" />
        </button>
      </div>
    </div>
  );
};
