import React, { useContext } from "react";
import Counter from "./counter";
import { OrderContext } from "./сontext";

export default (props) => {
	const { order, appendOrder, removeItem } = useContext(OrderContext);
	const { id, picture } = props;

	const increment = () => {
		appendOrder({
			[id]: {
				...order[id],
				number: order[id].number + 1,
			},
		});
	};

	const decrement = () => {
		if (order[id].number > 1) {
			appendOrder({
				[id]: {
					...order[id],
					number: order[id].number - 1,
				},
			});
		} else if (order[id].number <= 1) {
			removeItem(id);
		}
	};
	if (order[id].number > 0) {
		return (
			<div id="cart-item">
				<div className="image">
					<img src={"static/" + picture.split("static")[1]} alt="" />
				</div>
				<p className="name">{order[id].name}</p>
				<span>
					<Counter increment={increment} decrement={decrement} count={order[id].number}/>
				</span>
			</div>
		);
	} else {
		return null;
	}
};
