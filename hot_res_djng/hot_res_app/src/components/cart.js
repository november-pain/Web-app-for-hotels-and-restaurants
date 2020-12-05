import React, { useContext } from "react";
import { Collapse } from "antd";
import CartItem from "./cartItem";
import { OrderContext } from "./orderContext";

const { Panel } = Collapse;

export default (props) => {
    const {order, setOrder} = useContext(OrderContext)
	const { appendOrder, removeItem } = props;
	const renderOrder = () => {
		const orderList = [];

		for (let itemid in order) {
			orderList.push(
				<CartItem
					id={itemid}
                    appendOrder={appendOrder}
                    removeItem={removeItem}
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
