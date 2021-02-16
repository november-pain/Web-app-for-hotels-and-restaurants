import React, { useState, useEffect, useContext } from "react";
import Item from "./item.js";
import { MenuContext } from "./сontext";

export default (props) => {
	const [loading, setLoading] = useState(true);
	const { menu } = useContext(MenuContext);

	useEffect(() => {
		setLoading(menu == null);
	}, [menu]);

	const renderItem = () =>
		menu.map((i) => (
			<Item
				name={i.name}
				price={i.price}
				category={i.category}
				description={i.description}
				picture={i.image}
				id={i.id}
				key={i.id}
			/>
		));

	if (loading) {
		return <div>loading..</div>;
	} else {
		return <div className="menu">{renderItem()}</div>;
	}
};
