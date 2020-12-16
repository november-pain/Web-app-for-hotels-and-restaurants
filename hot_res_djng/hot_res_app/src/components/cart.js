import React, { useContext, useState } from "react";
import CartItem from "./cartItem";
import { OrderContext } from "./сontext";
import { message, Modal } from "antd";

export default (props) => {
	const { order } = useContext(OrderContext);
	const [isCartVisible, setIsCartVisible] = useState(false);

	const showCart = () => {
		setIsCartVisible(true);
	};
	const handleCancel = () => {
		setIsCartVisible(false);
	};
	const orderTotal = () => 42;

	const renderOrder = () => {
		const orderList = [];

		for (let itemid in order) {
			orderList.push(<CartItem id={itemid} key={itemid} />);
		}
		return orderList;
	};

	const key = "updatable";

	const orderSuccess = () => {
		message.success({ content: "your order is sent successfully", key });
	};

	const orderError = () => {
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
			message.loading({ content: "loading...", key });
			fetch(window.location.href + "post/order", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(order),
			}).then((response) => {
				if (response.ok) {
					orderSuccess();
				} else {
					orderError();
				}
			});
		}
	};

	return (
		<div className="cart">
			<button onClick={showCart}>
				<img src="static/images/shopping-bag.svg" alt="" />
				<div className="total">₴{orderTotal()}</div>
			</button>
			<Modal visible={isCartVisible} onCancel={handleCancel} footer={null}>
				<div className="order">{renderOrder()}</div>
				<button className="order-button" onClick={sendOrder}>
					order
				</button>
			</Modal>
		</div>
	);
};
