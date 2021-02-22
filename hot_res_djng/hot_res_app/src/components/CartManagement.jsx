import React, {
	useContext,
	useReducer,
	useRef,
	useState,
	useEffect,
} from "react";
import CartItem from "./CartItem.jsx";
import { MenuContext, NotificationsContext, OrderContext } from "./сontext.js";
import { message, Modal } from "antd";
import { getCookie } from "../tools/getCookie.js";
import { OrderView } from "./OrderView.jsx";
import Notification from "./Notifications.jsx";
import { findPicturePath, orderTotal } from "../tools/helperFunctions.js";

const CartManagement = (props) => {
	const { order, setOrder } = useContext(OrderContext);
	const [isCartVisible, setIsCartVisible] = useState(false);
	const { menu } = useContext(MenuContext);
	const { typeOfNotification, setTypeOfNotification } = useContext(
		NotificationsContext
	);
	// const [typeOfNotification, setTypeOfNotification] = useState("error");

	//manage background scrolling
	useEffect(() => {
		if (typeOfNotification != "none" || isCartVisible) {
			document.body.classList.add("noscroll");
		} else {
			document.body.classList.remove("noscroll");
		}
	}, [typeOfNotification, isCartVisible]);

	const key = "updatable";
	const csrftoken = getCookie("csrftoken");

	const showCart = () => {
		setIsCartVisible(true);
	};
	const hideCart = () => {
		setIsCartVisible(false);
	};

	const renderOrder = () =>
		Object.keys(order).map((itemid) => (
			<CartItem
				id={itemid}
				key={itemid}
				picture={findPicturePath(itemid, menu)}
			/>
		));

	const orderSuccess = () => {
		setTypeOfNotification("order success");
	};

	const orderError = () => {
		setTypeOfNotification("error");
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
				<div className="total">₴{orderTotal(menu, order)}</div>
			</button>

			<OrderView
				isCartVisible={isCartVisible}
				hideCart={hideCart}
				sendOrder={sendOrder}
				renderOrder={renderOrder}
				menu={menu}
				order={order}
			/>
			<Notification
				type={typeOfNotification}
				setTypeOfNotification={setTypeOfNotification}
			/>
		</div>
	);
};

export default CartManagement;
