import React, { useState, useEffect } from "react";
import Menu from "./menu.js";
import AllCategories from "./allCategories.js";
import Cart from "./cart.js";
import "../styles/app.scss";
import "antd/dist/antd.css";

const App = () => {
	const debugOrder = true;
	const readOrderFromStorage = () => {
		let order = {};
		try {
			order = JSON.parse(localStorage.getItem("order"));
		} catch {
			order = {};
		}
		return order;
	};

	const [order, setOrder] = useState(() => readOrderFromStorage());

	const [chosenCategory, setCategory] = useState(null);

	const appendOrder = (appendOrder) => {
		setOrder((currentOrder) => ({
			...currentOrder,
			...appendOrder,
		}));
	};

	useEffect(() => {
		if (debugOrder) {
			console.log("order: ", order);
		}
		localStorage.setItem("order", JSON.stringify(order));
	}, [order]);

	return (
		<div>
			<AllCategories setCategory={setCategory} />
			<Cart order={order} appendOrder={appendOrder} setOrder={setOrder} />
			<Menu
				chosenCategory={chosenCategory}
				appendOrder={appendOrder}
				order={order}
			/>
		</div>
	);
};

export default App;
