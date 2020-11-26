import React from "react";
import Menu from "./menu.js";
import AllCategories from "./allCategories.js";
import Cart from "./cart.js";
import "../styles/app.scss";
import "antd/dist/antd.css";

export default class App extends React.Component {
	debugOrder = true;
	state = {
		chosenCategory: null,
		order: {},
	};
	setCategory = (id) => {
		this.setState({
			chosenCategory: id,
		});
	};

	setOrder = (appendOrder) => {
		this.setState(
			{
				order: { ...this.state.order, ...appendOrder },
			},
			() =>
				this.debugOrder
					? console.log("order: ", this.state.order)
					: null
		);
	};

	removeItem = (id) => {
		let tmporder = this.state.order;
		delete tmporder[id];
		this.setState({ order: tmporder }, () =>
			this.debugOrder ? console.log("order: ", this.state.order) : null
		);
	};

	render() {
		return (
			<div>
				<AllCategories setCategory={this.setCategory} />
				<Cart
					order={this.state.order}
					setOrder={this.setOrder}
					removeItem={this.removeItem}
				/>
				<Menu
					chosenCategory={this.state.chosenCategory}
					setOrder={this.setOrder}
					order={this.state.order}
				/>
			</div>
		);
	}
}
