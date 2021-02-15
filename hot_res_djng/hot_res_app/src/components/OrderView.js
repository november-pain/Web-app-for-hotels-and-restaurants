import React, { useRef } from "react";
export const OrderView = (props) => {
	const {
		isCartVisible,
		hideCart,
		sendOrder,
		renderOrder,
		orderTotal,
	} = props;
    
    const cartWrapperRef = useRef();
	const cartDivRef = useRef();
    
    const handleCartBackgroundClick = (event) => {
		if (
			event.target == cartWrapperRef.current ||
			event.target == cartDivRef.current
		) {
			hideCart();
		}
	};

	return (
		<div
			className={
				isCartVisible
					? "cart-wrapper cart-open"
					: "cart-wrapper cart-closed"
			}
			onClick={handleCartBackgroundClick}
			ref={cartWrapperRef}
		>
			<div id="cart-div" onClick={handleCartBackgroundClick} ref={cartDivRef}>
				<button className="back-button" onClick={hideCart}>
					<img
						src="../../static/hot_res_app/images/icons/left-arrow.svg"
						alt=""
					/>
				</button>
				<div className="heading">
					<h1>Ваше замовлення</h1>
				</div>
				<div className="order">{renderOrder()}</div>
				<button className="order-button" onClick={sendOrder}>
					<h2>Замовити</h2>
					<img
						src="../../static/hot_res_app/images/icons/shopping-bag-white.svg"
						alt=""
					/>
					<h2 className="total">₴{orderTotal()}</h2>
				</button>
			</div>
		</div>
	);
};
