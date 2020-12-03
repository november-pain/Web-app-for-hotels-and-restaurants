import React from "react";
import Counter from "./counter";

export default props => {
	const increment = () => {
		props.setOrder({
			[props.id]: {
				...props.order[props.id],
				number: props.order[props.id].number + 1,
			},
		});
	};

	const decrement = () => {
		if (props.order[props.id].number > 1) {
			props.setOrder({
				[props.id]: {
					...props.order[props.id],
					number: props.order[props.id].number - 1,
				},
			});
		} else if (props.order[props.id].number === 1) {
			props.removeItem(props.id);
		}
	};

	return (
		<div>
			<p>
				{props.order[props.id].name} : {props.order[props.id].number}
			</p>
			<span>
				<Counter increment={increment} decrement={decrement} />
			</span>
		</div>
	);
};
