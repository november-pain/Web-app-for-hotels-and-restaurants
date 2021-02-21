import React, { useState, useEffect, useContext } from "react";
import Item from "./MenuItem.jsx";
import { MenuContext } from "./сontext";
import "../styles/loading-animation.scss";

const Menu = (props) => {
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
		return (
			<div className="loading-animation">
				<div className="lds-ellipsis">
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
			</div>
		);
	} else {
		return <div className="menu">{renderItem()}</div>;
	}
};

export default Menu;
