import React from "react";
import { Collapse } from "antd";
import CartItem from "./cartItem";

const { Panel } = Collapse;

export default (props) => {
	const { order, appendOrder, setOrder } = props;
	const renderOrder = () => {
		const orderList = [];

		for (let itemid in order) {
			orderList.push(
				<CartItem
					order={order}
					id={itemid}
					appendOrder={appendOrder}
					setOrder={setOrder}
					key={itemid}
				/>
			);
		}

		return orderList;
	};

	const sendOrder = () => {
		fetch(window.location.href + "post/order", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(order),
		});
		// appendOrder(or)
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
