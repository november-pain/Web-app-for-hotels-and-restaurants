import React, { useState, useEffect } from "react";
import Menu from "./menu.js";
import AllCategories from "./allCategories.js";
import Cart from "./cart.js";
import "../styles/app.scss";
import "antd/dist/antd.css";

const App = () => {
	const debugOrder = true;
    const readOrderFromStorage = () => {
        let order = {};
        try{
            order = JSON.parse(localStorage.getItem("order"))
        }
        catch{
            order = {}
        }
        return order
    }

	const [state, setState] = useState({

        chosenCategory: null,
        // order: {}
		order: readOrderFromStorage()
    });

    
	const setCategory = (id) => {
		setState({
            ...state,
			chosenCategory: id,
		});
	};

	const setOrder = (appendOrder) => {
		setState({
            ...state,
			order: { ...state.order, ...appendOrder },
		});
	};

    // const writeOrder = (o)=>{
        // if(Object.keys(o).length === 0){
// 
        // }
    // }

	useEffect(() => {
		if (debugOrder) {
			console.log("order: ", state.order);
        }
		localStorage.setItem("order", JSON.stringify(state.order));
	}, [state.order]);

	const removeItem = (id) => {
		let tmporder = state.order;
		delete tmporder[id];
		setState({ order: tmporder });
	};

	return (
		<div>
			<AllCategories setCategory={setCategory} />
			<Cart
				order={state.order}
				setOrder={setOrder}
				removeItem={removeItem}
			/>
			<Menu
				chosenCategory={state.chosenCategory}
				setOrder={setOrder}
				order={state.order}
			/>
		</div>
	);
};

export default App;
