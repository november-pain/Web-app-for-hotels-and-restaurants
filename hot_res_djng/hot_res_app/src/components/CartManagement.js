import React, { useContext, useReducer, useRef, useState, useEffect } from "react";
import CartItem from "./cartItem";
import { MenuContext, OrderContext } from "./сontext";
import { message, Modal } from "antd";
import { getCookie } from "./getCookie";
import { OrderView } from "./OrderView";
import Notification from './Notification'
import { findPicturePath, orderTotal } from "../tools/helperFunctions"

export default (props) => {
    const { order, setOrder } = useContext(OrderContext);
	const [isCartVisible, setIsCartVisible] = useState(false);
    const { menu } = useContext(MenuContext);
    const [typeOfNotification, setTypeOfNotification] = useState("none");

    //manage background scrolling 
    useEffect(()=>{
        if(typeOfNotification!="none" || isCartVisible){
            document.body.classList.add("noscroll")
        } else {
            document.body.classList.remove("noscroll")
        }
    }, [typeOfNotification, isCartVisible])

    const key = "updatable";
    const csrftoken = getCookie("csrftoken");

	const showCart = () => {
		setIsCartVisible(true);
	};
	const hideCart = () => {
		setIsCartVisible(false);
	};
	
	// const findPicturePath = (id) => {
	// 	if (menu) {
	// 		return menu.find((i) => i.id == id).image;
	// 	}
	// };
	const renderOrder = () => (
			Object.keys(order).map(itemid=>
				<CartItem
					id={itemid}
					key={itemid}
					picture={findPicturePath(itemid, menu)}
				/>
			)
	);


	const orderSuccess = () => {
        setTypeOfNotification("success")
	};
    
	const orderError = () => {
        setTypeOfNotification("error")
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
			// message.loading({ content: "loading...", key });
			fetch(window.location.href + "post/order", {
				credentials: "include",
				method: "POST",
				mode: "same-origin",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
					"X-CSRFToken": csrftoken,
				},
				body: JSON.stringify(order),
			}).then((response) => {
				if (response.ok) {
					orderSuccess();
					setOrder({});
                    hideCart();

				} else {
					orderError();
				}
			});
		}
	};


	return (
		<div className="cart">
			<button onClick={showCart} id="open-cart-button">
				<img
					src="../../static/hot_res_app/images/icons/shopping-bag.svg"
					alt=""
				/>
				<div className="total">₴{orderTotal(menu, order)}</div>
			</button>

			<OrderView
					isCartVisible={isCartVisible}
					hideCart={hideCart}
					sendOrder={sendOrder}
                    renderOrder={renderOrder}
                    menu={menu}
                    order={order}
			/>
            <Notification type={typeOfNotification} setType={setTypeOfNotification}/>
		</div>
	);
};
