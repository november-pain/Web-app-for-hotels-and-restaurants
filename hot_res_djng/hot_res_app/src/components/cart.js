import React, { useContext, useState } from "react";
import CartItem from "./cartItem";
import { MenuContext, OrderContext } from "./сontext";
import { message, Modal } from "antd";

export default (props) => {
	const { order, setOrder } = useContext(OrderContext);
	const [isCartVisible, setIsCartVisible] = useState(false);
	const { menu } = useContext(MenuContext);

	const showCart = () => {
		setIsCartVisible(true);
	};
	const handleCancel = () => {
		setIsCartVisible(false);
	};
	const orderTotal = () => {
		if (menu) {
			return menu.reduce((sum, i) => {
                if(order[i.pk] != null)
                return sum + Number(i.fields.price)*order[i.pk].number
                else{
                    return sum;
                }
            }, 0);
		} else {
			return 0;
		}
	};

	const renderOrder = () => {
		const orderList = [];

		for (let itemid in order) {
			orderList.push(<CartItem id={itemid} key={itemid} />);
		}
		return orderList;
	};

	const key = "updatable";

	const orderSuccess = () => {
		message.success({ content: "your order is sent successfully", key });
	};

	const orderError = () => {
		message.error({
			content: "sorry, something went wrong, try again later",
			key,
		});
	};

	const cartIsEmpty = () => {
		message.error("You cannot make order if the cart is empty");
	};

	const sendOrder = () => {
		if (Object.keys(order).length === 0) {
			cartIsEmpty();
		} else {
			message.loading({ content: "loading...", key });
			fetch(window.location.href + "post/order", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(order),
			}).then((response) => {
				if (response.ok) {
					orderSuccess();
                    setOrder({});
                    setIsCartVisible(false);
				} else {
					orderError();
				}
            });
		}
	};

	return (
		<div className="cart">
			<button onClick={showCart}>
				<img src="static/hot_res_app/images/icons/shopping-bag.svg" alt="" />
				<div className="total">₴{orderTotal()}</div>
			</button>
			<Modal
				visible={isCartVisible}
				onCancel={handleCancel}
				footer={null}
			>
				<div className="order">{renderOrder()}</div>
				<button className="order-button" onClick={sendOrder}>
					order
				</button>
			</Modal>
		</div>
	);
};
