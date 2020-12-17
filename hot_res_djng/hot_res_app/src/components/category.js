import React, { useContext } from "react";
import { CategoriesContext } from "./сontext";

export default (props) => {
	const { name, id } = props;

	const { chosenCategory, setCategory } = useContext(CategoriesContext);

	return (
		<button
			onClick={() => {
				setCategory(id);
            }}
            className={chosenCategory==id? "chosen":null}
		>
            <div className="image">
            <img src="static/images/pizza.png" alt=""/>
            </div>
			<h3 className="name">{name}</h3>
		</button>
	);
};
