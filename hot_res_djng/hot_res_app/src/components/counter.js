import React from "react";

export default (props) => (
	<div className="counter">
		<button onClick={props.decrement} className="decrement">
			-
		</button>
		<p className="count">{props.count}</p>
		<button onClick={props.increment} className="increment">
			+
		</button>
	</div>
);
