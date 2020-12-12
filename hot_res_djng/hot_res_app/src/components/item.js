import React, { useContext } from "react";
import { MenuContext, OrderContext } from "./orderContext";

export default (props) => {
	const { name, price, category, description, id } = props;

	const { order, appendOrder } = useContext(OrderContext);
	const { chosenCategory } = useContext(MenuContext);

	const addItem = () => {
		if (order[id] != null) {
			appendOrder({
				[id]: {
					number: order[id].number + 1,
					name: name,
				},
			});
		} else {
			appendOrder({
				[id]: {
					number: 1,
					name: name,
				},
			});
		}
	};

	if (chosenCategory) {
		if (category !== chosenCategory) {
			return null;
		}
	}
	return (
		<div className="menu-item">
			<h2>{name}</h2>
			<h3>price: {price}</h3>
			<h4>category: {category}</h4>
			<h5>description: {description}</h5>
			<button className="add-to-cart" onClick={addItem}>
				+
			</button>
		</div>
	);
};
