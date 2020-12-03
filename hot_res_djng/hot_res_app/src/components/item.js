import React from "react";

export default (props) => {
	const addItem = () => {
		if (props.order[props.id] != null) {
			props.setOrder({
				[props.id]: {
					number: props.order[props.id].number + 1,
					name: props.name,
				},
			});
		} else {
			props.setOrder({
				[props.id]: {
					number: 1,
					name: props.name,
				},
			});
		}
	};

	if (props.chosenCategory) {
		if (props.category !== props.chosenCategory) {
			return null;
		}
	}
	return (
		<div className="menu-item">
			<h2>{props.name}</h2>
			<h3>price: {props.price}</h3>
			<h4>category: {props.category}</h4>
			<h5>description: {props.description}</h5>
			<button className="add-to-cart" onClick={addItem}>
				+
			</button>
		</div>
	);
};
