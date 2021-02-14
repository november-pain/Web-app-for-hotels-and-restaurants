import React, { useContext, useRef, useState } from "react";
import CartItem from "./cartItem";
import { MenuContext, OrderContext } from "./сontext";
import { message, Modal } from "antd";

export default (props) => {
	const { order, setOrder } = useContext(OrderContext);
	const [isCartVisible, setIsCartVisible] = useState(false);
	const { menu } = useContext(MenuContext);
    const cartWrapperRef = useRef()
    const cartDivRef = useRef()

	const showCart = () => {
		setIsCartVisible(true);
		document.body.classList.add("noscroll");
        cartWrapperRef.current.classList.add("opening-cart");
        // setTimeout( () =>
            // cartWrapperRef.current.classList.remove("opening-cart"),
// 20000
        // );
	};
	const hideCart = () => {
		setIsCartVisible(false);
		document.body.classList.remove("noscroll");
	};
	const orderTotal = () => {
		if (menu) {
			return menu.reduce((sum, i) => {
				if (order[i.pk] != null)
					return sum + Number(i.fields.price) * order[i.pk].number;
				else {
					return sum;
				}
			}, 0);
		} else {
			return 0;
		}
	};
	const findPicturePath = (id) => {
		if (menu) {
			return menu.find((i) => i.pk == id).fields.image;
		}
	};
	const renderOrder = () => {
		const orderList = [];

		for (let itemid in order) {
			orderList.push(
				<CartItem
					id={itemid}
					key={itemid}
					picture={findPicturePath(itemid)}
				/>
			);
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

    const handleCartDivClick = (event) => {
        if(event.target==cartWrapperRef.current || event.target==cartDivRef.current){
            hideCart();
        }
    }

	return (
		<div className="cart">
			<button onClick={showCart} id="open-cart-button">
				<img
					src="static/hot_res_app/images/icons/shopping-bag.svg"
					alt=""
				/>
				<div className="total">₴{orderTotal()}</div>
			</button>
			{/* {isCartVisible ? ( */}
				<div className={isCartVisible?"cart-wrapper cart-open":"cart-wrapper cart-closed"} onClick={handleCartDivClick} ref={cartWrapperRef}>
				{/* <div className="cart-wrapper"> */}
					<div id="cart-div" onClick={handleCartDivClick} ref={cartDivRef}>
						<button className="back-button" onClick={hideCart}>
							<img
								src="static/hot_res_app/images/icons/left-arrow.svg"
								alt=""
							/>
						</button>
						<div className="heading">
							<h1>Ваше замовлення</h1>
						</div>
						<div className="order">{renderOrder()}
                        </div>
						<button className="order-button" onClick={sendOrder}>
                        <h2>Замовити</h2>
                        <img src="static/hot_res_app/images/icons/shopping-bag-white.svg" alt=""/>
                        <h2 className="total">₴{orderTotal()}</h2>
						</button>
					</div>
				</div>
			{/* ) : null} */}
		</div>
	);
};
