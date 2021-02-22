import React, { useContext, useEffect, useState } from "react";
import Category from "./Category.jsx";
import { CategoriesContext } from "./сontext.js";

export default (props) => {
	const [{ categories, loading }, setState] = useState({
		categories: null,
		loading: true,
	});

	const { chosenCategory, setCategory } = useContext(CategoriesContext);

	const onMount = async () => {
		const url_categories = window.location.origin + "/menu/db/categories";
		const categories_response = await fetch(url_categories);
		const categories_data = await categories_response.json();

		setState({
			categories: JSON.parse(categories_data),
			loading: false,
		});
	};

	useEffect(() => {
		onMount();
	}, []);

	const renderCategory = () =>
		categories.map((cat) => (
			<Category name={cat.name} id={cat.id} key={cat.id} />
		));

	if (loading) {
		return null;
	}
	if (!categories) {
		return <div>didn`t get item</div>;
	}
	if (!loading) {
		return (
			<div className="categories">
				<Category name="All" id={null} />

				{renderCategory()}
			</div>
		);
	}
};
