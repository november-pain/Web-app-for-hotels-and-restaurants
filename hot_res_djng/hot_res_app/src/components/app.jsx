import React, { useState, useEffect, useRef } from "react";
import Menu from "./Menu.jsx";
import AllCategories from "./AllCategories.jsx";
import Cart from "./CartManagement.jsx";
// import "antd/dist/antd.css";
import "../styles/menu.scss";
import "../styles/cart.scss";
import "../styles/notifications.scss";
import {
	OrderContext,
	MenuContext,
	CategoriesContext,
	NotificationsContext,
} from "./сontext.js";
import { getCookie } from "../tools/getCookie.js";
import { fetchMenu } from "../tools/apiFunctions.js";
import { handleCallWaiter } from "./Notifications.jsx";

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
	const [typeOfNotification, setTypeOfNotification] = useState("none");
	const csrftoken = getCookie("csrftoken");

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

				<NotificationsContext.Provider
					value={{ typeOfNotification, setTypeOfNotification }}
				>
					<MenuContext.Provider value={{ menu, chosenCategory }}>
						<Menu />
						<Cart />
					</MenuContext.Provider>
					<button
						id="call-waiter"
						onClick={ handleCallWaiter }
					>
						call waiter
					</button>
				</NotificationsContext.Provider>
			</OrderContext.Provider>
		</div>
	);
};

export default App;
