import React from "react";
import Counter from "./counter";

export default (props) => {
	const { order, id, appendOrder, setOrder } = props;

	const removeItem = (id) => {
		let tmporder = order;
		delete tmporder[id];
		setOrder(tmporder);
	};

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
		} else if (order[id].number === 1) {
			removeItem(id);
		}
	};
	if (order[id].number > 0) {
		return (
			<div>
				<p>
					{order[id].name} : {order[id].number}
				</p>
				<span>
					<Counter increment={increment} decrement={decrement} />
				</span>
			</div>
		);
	} else {
		return null;
	}
};
