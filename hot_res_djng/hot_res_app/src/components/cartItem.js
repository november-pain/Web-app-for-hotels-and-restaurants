import React, { useContext } from "react";
import Counter from "./counter";
import { OrderContext } from "./сontext";

export default (props) => {
	const { order, appendOrder, removeItem } = useContext(OrderContext);
	const { id } = props;

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
