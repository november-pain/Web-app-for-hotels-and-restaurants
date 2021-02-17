import React, { useState, useEffect, useRef } from "react";
import Menu from "./menu.js";
import AllCategories from "./allCategories.js";
import CartManagement from "./CartManagement.js";
import { OrderContext, MenuContext, CategoriesContext } from "./сontext.js";
import {callWaiter} from "../tools/apiFunctions"

import "../styles/normalize.css";
import "../styles/menu.scss";
import "../styles/cart.scss";
import "../styles/notifications.scss";

const fetchMenu = async () => {
	const url_menu = window.location.origin + "/menu/db/menu";
	const menu_response = await fetch(url_menu);
	let menu_data = await menu_response.json();
	return JSON.parse(menu_data);
};

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
	const [menu, setMenu] = useState(null);
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

	// storing order
	useEffect(() => {
		localStorage.setItem("order", JSON.stringify(order));
	}, [order]);
	//fetching menu
	useEffect(() => {
		fetchMenu().then((v) => setMenu(v));
	}, []);

	return (
		<div>
			<OrderContext.Provider
				value={{ order, setOrder, appendOrder, removeItem }}
			>
				{/* <h1 className="name-header">Ficha</h1> */}
				<CategoriesContext.Provider
					value={{ chosenCategory, setCategory }}
				>
					<AllCategories />
				</CategoriesContext.Provider>

				{debugOrder ? (
					<div>
						<pre>{JSON.stringify(order)}</pre>
						<p>renders: {renders.current++}</p>
					</div>
				) : null}
				<MenuContext.Provider value={{ menu, chosenCategory }}>
					<Menu />
					<CartManagement />
				</MenuContext.Provider>
				<button id="call-waiter" onClick={callWaiter}>
					call waiter
				</button>
			</OrderContext.Provider>
		</div>
	);
};

export default App;
