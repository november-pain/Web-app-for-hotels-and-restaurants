import React, { useContext } from "react";
import Counter from "./counter";
import { MenuContext, OrderContext } from "./сontext";

export default (props) => {
	const { order, appendOrder, removeItem } = useContext(OrderContext);
	const { id, picture } = props;
    const { menu } = useContext(MenuContext)

	const increment = () => {
		appendOrder({
			[id]: {
				...order[id],
				number: order[id].number + 1,
			},
		});
	};

	const decrement = () => {
		if (order[id].number > 1) {
			appendOrder({
				[id]: {
					...order[id],
					number: order[id].number - 1,
				},
			});
		} else if (order[id].number <= 1) {
			removeItem(id);
		}
	};
    const getPrice = (id) => menu.find(v=>v.pk==id).fields.price;
	if (order[id].number > 0 && menu!=null) {
		return (
			<div id="cart-item">
				<div className="image">
					<img src={"static/" + picture.split("static")[1]} alt="" />
				</div>
				<p className="name">{order[id].name}</p>
				<p className="price">₴{getPrice(id)}</p>
				<span>
					<Counter increment={increment} decrement={decrement} count={order[id].number}/>
				</span>
			</div>
		);
	} else {
		return null;
	}
};
