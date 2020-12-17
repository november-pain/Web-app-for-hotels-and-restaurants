import React, { useState, useEffect, useReducer } from "react";
import Order from "./order.js";
import { Button } from "antd";

const transformListOfOrders = (l) =>
	l.map((o) => ({
		order: { ...o.fields.order },
		info: {
			dateTime: new Date(o.fields.date_time),
			id: o.pk,
		},
	}));

const sortByDate = (a, b) => b.info.dateTime - a.info.dateTime;
const sortByDateReverce = (a, b) => a.info.dateTime - b.info.dateTime;


const reducer = (s, action) => {
    switch (action.type){
        case 'newest to oldest':
            return {...s, orders:[...s.orders].sort(sortByDate), sortingF:sortByDate,}
        case 'oldest to newest':
            return {...s, orders:[...s.orders].sort(sortByDateReverce), sortingF:sortByDateReverce,}
        case 'set':
            return {...s, orders:action.orders.sort(s.sortingF)}
    }
}

const ListOfOrders = () => {
	// const [{orders, sortingF}, setState] = useState({orders:null, sortingF:sortByDate});
	const [{orders, sortingF}, dispatch] = useReducer(reducer,{orders:null, sortingF:sortByDate});

	const onMount = async () => {
		loadData();
		console.log(orders);
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
		const orders_json_raw = JSON.parse(orders_data);
		const orders = transformListOfOrders(orders_json_raw);
		dispatch({type:'set', orders:orders});
		// setState(s=>({...s, orders:orders}));
	};



	const renderOrders = (sorting) =>
        [...orders]
            // .sort(sorting)
			.map((ord) => (
				<Order
					order={ord.order}
					date_time={ord.info.dateTime}
					key={ord.info.id}
					id={ord.info.id}
				/>
			));

	if (orders == null) {
		return <div>loading...</div>;
	} else {
		return (
			<div className="everything">
				<div className="listOfFeatures">
					<button onClick={()=>dispatch({type: 'newest to oldest'})}>
					{/* <button onClick={()=>setState(s=>({...s, sortingF: sortByDate}))}> */}
						newest to oldest
					</button>
					<button onClick={()=>dispatch({type: 'oldest to newest'})}>
					{/* <button onClick={()=>setState(s=>({...s, sortingF: sortByDateReverce}))}> */}
						oldest to newest
					</button>
					<div>Something</div>
					<div>Something</div>
					<div>Something</div>
				</div>
				<div className="listOfOrders">{renderOrders()}</div>
				{/* <div className="listOfOrders">{renderOrders(sortingF)}</div> */}
			</div>
		);
	}
};

export default ListOfOrders;
