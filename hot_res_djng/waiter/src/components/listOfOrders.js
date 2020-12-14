import React, { useState, useEffect } from "react";
import Order from "./order.js";

const ListOfOrders = () => {
	const [{ orders, loading }, setState] = useState({
		orders: null,
		loading: true,
	});

	const onMount = async () => {
		loadData();
		setInterval(async () => {
			loadData();
		}, 15000);
	};

	useEffect(() => {
		onMount();
	}, []);

	const loadData = async () => {
		const url_orders = window.location.origin + "/db/orders";
		const orders_response = await fetch(url_orders);
		const orders_data = await orders_response.json();
		const orders_json = JSON.parse(orders_data);

		setState((state) => ({
			...state,
			orders: orders_json,
			loading: false,
		}));
	};

	const renderOrders = () => {
		const ordersList = orders
			.reverse()
			.map((ord) => (
				<Order
					order={ord["fields"]["order"]}
					date_time={ord["fields"]["date_time"]}
					key={ord["pk"]}
					id={ord["pk"]}
				/>
			));
		return ordersList;
	};

	if (loading) {
		return <div>loading...</div>;
	} else {
		return <div className="listOfOrders">{renderOrders()}</div>;
	}
};

export default ListOfOrders;
