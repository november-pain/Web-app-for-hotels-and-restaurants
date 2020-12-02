import React from "react";
import { Collapse } from "antd";
import CartItem from "./cartItem";

const { Panel } = Collapse;

export default class Cart extends React.Component {
	constructor(props) {
		super(props);
	}

	renderOrder = () => {
		const orderList = [];

		for (let itemid in this.props.order) {
			orderList.push(
				<CartItem
					order={this.props.order}
					id={itemid}
					key={itemid}
					setOrder={this.props.setOrder}
					removeItem={this.props.removeItem}
				/>
			);
		}

		return orderList;
	};

	sendOrder = () => {
		fetch(window.location.href + 'waiter/post/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(this.props.order),
		});
	}

	render() {
		return (
			<div className="cart">
				<Collapse className="cart-button">
					<Panel
						className="cart-button"
						showArrow={false}
						header="Your cart"
						key="1"
					>
						<div className="order">{this.renderOrder()}</div>
						<button className="order-button" onClick={this.sendOrder}>
							order
						</button>
					</Panel>
				</Collapse>
			</div>
		);
	}
}
