import React, { useContext } from "react";
import { CategoriesContext } from "./orderContext";

export default (props) => {
	const { name, id } = props;

	const { setCategory } = useContext(CategoriesContext);

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
