import React, { useContext, useEffect, useState } from "react";
import Category from "./category";
import { CategoriesContext } from "./orderContext";

export default (props) => {
	const [{ categories, loading }, setState] = useState({
		categories: null,
		loading: true,
	});

	const { setCategory } = useContext(CategoriesContext);

	const onMount = async () => {
		const url_categories = window.location.href + "db/categories";
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

	const renderCategory = () => {
		const categoryList = [];
		for (let i = 0; i < categories.length; i++) {
			let name = categories[i]["fields"]["name"];
			let id = categories[i]["pk"];

			categoryList.push(<Category name={name} id={id} key={id} />);
		}
		return categoryList;
	};

	if (loading) {
		return null;
	}
	if (!categories) {
		return <div>didn`t get item</div>;
	}
	if (!loading) {
		return (
			<div className="categories">
				<button
					onClick={() => {
						setCategory(null);
					}}
					className="category-button"
				>
					All
				</button>
				{renderCategory()}
			</div>
		);
	}
};
