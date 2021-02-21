import React from "react";

const Counter = (props) => (
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

export default Counter;
