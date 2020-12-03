import React from "react";

export default (props) => {
	const { name, setCategory, id } = props;

	return (
		<button
			onClick={() => {
				setCategory(id);
			}}
			className="category-button"
		>
			<div>{name}</div>
		</button>
	);
};
