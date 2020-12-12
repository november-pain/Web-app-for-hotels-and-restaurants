import React, { useState, useEffect } from "react";
import Item from "./item.js";

export default (props) => {
	const [{ loading, menu }, setState] = useState({
		loading: true,
		menu: null,
	});

	const onMount = async () => {
		const url_menu = window.location.href + "db/menu";
		const menu_response = await fetch(url_menu);
		const menu_data = await menu_response.json();

		setState((state) => ({
			...state,
			menu: JSON.parse(menu_data),
			loading: false,
		}));
	};

	useEffect(() => {
		onMount();
	}, []);

	const renderItem = () => {
		const itemList = [];
		for (let i = 0; i < menu.length; i++) {
			let name = menu[i]["fields"]["name"];
			let price = menu[i]["fields"]["price"];
			let category = menu[i]["fields"]["category"];
			let description = menu[i]["fields"]["description"];
			let key = menu[i]["pk"];

			itemList.push(
				<Item
					name={name}
					price={price}
					category={category}
					description={description}
					id={key}
					key={key}
				/>
			);
		}
		return itemList;
	};

	if (loading) {
		return <div>loading..</div>;
	}
	if (!menu) {
		return <div>didn`t get item</div>;
	}
	if (!loading) {
		return <div className="menu">{renderItem()}</div>;
	}
};
