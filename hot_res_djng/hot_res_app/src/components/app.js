import React, { useState, useEffect, useRef } from "react";
import Menu from "./menu.js";
import AllCategories from "./allCategories.js";
import Cart from "./cart.js";
import "../styles/app.scss";
import "antd/dist/antd.css";
import { OrderContext } from "./orderContext.js";

const App = () => {
	const debugOrder = true;
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
			<OrderContext.Provider value={{ order, setOrder }}>
				<AllCategories setCategory={setCategory} />
				{debugOrder ? (
					<div>
						<pre>{JSON.stringify(order)}</pre>
						<p>renders: {renders.current++}</p>
					</div>
				) : null}
				<Cart appendOrder={appendOrder} removeItem={removeItem} />
				<Menu
					chosenCategory={chosenCategory}
					appendOrder={appendOrder}
					order={order}
				/>
			</OrderContext.Provider>
		</div>
	);
};

export default App;
