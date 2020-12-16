import React, { useState, useEffect, useRef } from "react";
import Menu from "./menu.js";
import AllCategories from "./allCategories.js";
import Cart from "./cart.js";
import "../styles/normalize.css";
import "antd/dist/antd.css";
import "../styles/app.scss";
import {
	OrderContext,
	MenuContext,
	CategoriesContext,
} from "./сontext.js";

const App = () => {
	const debugOrder = false;
	const readOrderFromStorage = () => {
		if (JSON.parse(localStorage.getItem("order"))) {
			return JSON.parse(localStorage.getItem("order"));
		} else {
			return {};
		}
	};

	const [order, setOrder] = useState(() => readOrderFromStorage());

	const [chosenCategory, setCategory] = useState(null);

	const renders = useRef(0);

	const appendOrder = (appendOrder) => {
		setOrder((currentOrder) => ({
			...currentOrder,
			...appendOrder,
		}));
	};

	const removeItem = (id) => {
		setOrder((o) => {
			let tmporder = { ...o };
			delete tmporder[id];
			return tmporder;
		});
	};

	useEffect(() => {
		localStorage.setItem("order", JSON.stringify(order));
	}, [order]);

	return (
		<div>
			<OrderContext.Provider
				value={{ order, setOrder, appendOrder, removeItem }}
			>
                <h1 className="name-header">Ficha</h1>
				<CategoriesContext.Provider value={{ chosenCategory, setCategory }}>
					<AllCategories />
				</CategoriesContext.Provider>

				{debugOrder ? (
					<div>
						<pre>{JSON.stringify(order)}</pre>
						<p>renders: {renders.current++}</p>
					</div>
				) : null}
				<Cart />
				<MenuContext.Provider value={{ chosenCategory }}>
					<Menu />
				</MenuContext.Provider>
			</OrderContext.Provider>
		</div>
	);
};

export default App;
