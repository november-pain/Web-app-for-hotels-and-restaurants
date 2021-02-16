import React, { useContext, useReducer, useRef, useState } from "react";
import CartItem from "./cartItem";
import { MenuContext, OrderContext } from "./сontext";
import { message, Modal } from "antd";
import { getCookie } from "./getCookie";
import { OrderView } from "./OrderView";
import Notification from './Notification'

export default (props) => {
    const { order, setOrder } = useContext(OrderContext);
	const [isCartVisible, setIsCartVisible] = useState(false);
	const { menu } = useContext(MenuContext);
    const [typeOfNotification, setTypeOfNotification] = useState("none");

    const key = "updatable";
    const csrftoken = getCookie("csrftoken");

	const showCart = () => {
		setIsCartVisible(true);
		document.body.classList.add("noscroll");
	};
	const hideCart = () => {
		setIsCartVisible(false);
		document.body.classList.remove("noscroll");
	};
	const orderTotal = () => {
		if (menu) {
			return menu.reduce((sum, i) => {
				if (order[i.id] != null)
					return sum + Number(i.price) * order[i.id].number;
				else {
					return sum;
				}
			}, 0);
		} else {
			return 0;
		}
	};
	const findPicturePath = (id) => {
		if (menu) {
			return menu.find((i) => i.id == id).image;
		}
	};
	const renderOrder = () => {
		const orderList = [];

		for (let itemid in order) {
			orderList.push(
				<CartItem
					id={itemid}
					key={itemid}
					picture={findPicturePath(itemid)}
				/>
			);
		}
		return orderList;
	};


	const orderSuccess = () => {
        setTypeOfNotification("success")
	};
    
	const orderError = () => {
        setTypeOfNotification("error")
		message.error({
			content: "sorry, something went wrong, try again later",
			key,
		});
	};
    
	const cartIsEmpty = () => {
		message.error("You cannot make order if the cart is empty");
	};


	const sendOrder = () => {
		if (Object.keys(order).length === 0) {
			cartIsEmpty();
		} else {
			// message.loading({ content: "loading...", key });
			fetch(window.location.href + "post/order", {
				credentials: "include",
				method: "POST",
				mode: "same-origin",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
					"X-CSRFToken": csrftoken,
				},
				body: JSON.stringify(order),
			}).then((response) => {
				if (response.ok) {
					orderSuccess();
					setOrder({});
                    hideCart();

				} else {
					orderError();
				}
			});
		}
	};


	return (
		<div className="cart">
			<button onClick={showCart} id="open-cart-button">
				<img
					src="../../static/hot_res_app/images/icons/shopping-bag.svg"
					alt=""
				/>
				<div className="total">₴{orderTotal()}</div>
			</button>

			<OrderView
					isCartVisible={isCartVisible}
					hideCart={hideCart}
					sendOrder={sendOrder}
                    renderOrder={renderOrder}
                    orderTotal={orderTotal}
			/>
            <Notification type={typeOfNotification} setType={setTypeOfNotification}/>
		</div>
	);
};
