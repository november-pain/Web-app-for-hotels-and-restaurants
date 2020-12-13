import React, { useContext } from "react";
import { Collapse } from "antd";
import CartItem from "./cartItem";
import { OrderContext } from "./сontext";
import { message } from "antd";

const { Panel } = Collapse;

export default (props) => {
	const { order } = useContext(OrderContext);

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
			<Collapse className="cart-button">
				<Panel
					className="cart-button"
					showArrow={false}
					header="Your cart"
					key="1"
				>
					<div className="order">{renderOrder()}</div>
					<button className="order-button" onClick={sendOrder}>
						order
					</button>
				</Panel>
			</Collapse>
		</div>
	);
};
