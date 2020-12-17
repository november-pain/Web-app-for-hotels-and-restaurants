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
				name={i.fields.name}
				price={i.fields.price}
				category={i.fields.category}
				description={i.fields.description}
				id={i.pk}
				key={i.pk}
			/>
		));

	if (loading) {
		return <div>loading..</div>;
	} else {
		return <div className="menu">{renderItem()}</div>;
	}
};
