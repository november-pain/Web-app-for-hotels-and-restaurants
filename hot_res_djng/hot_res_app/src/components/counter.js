import React from "react";

export default (props) => (
	<div>
		{props.count}
		<button onClick={props.increment}>+</button>
		<button onClick={props.decrement}>-</button>
	</div>
);
