import React from "react";

export default (props) => (
	<button
		onClick={() => {
			props.setCategory(props.id);
		}}
		className="category-button"
	>
		<div>{props.name}</div>
	</button>
);
