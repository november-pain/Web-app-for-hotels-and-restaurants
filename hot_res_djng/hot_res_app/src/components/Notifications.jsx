import React from "react";
import Button from "./Button.jsx";
import { callWaiter } from "../tools/apiFunctions.js";
let handleCallWaiter;

const Notification = (props) => {
	const { type, setTypeOfNotification } = props;
	handleCallWaiter = () => callWaiter(
		// on success
		() => {
			setTypeOfNotification("none");
			setTypeOfNotification("waiter success");
		},
		// on failure
		() => {
			setTypeOfNotification("none");
			setTimeout(() => setTypeOfNotification("error"), 100);
		}
	);
	const orderSuccess = () => (
		<div className="notification-success notification-content">
			<div className="heading">
				<img
					src="../../static/hot_res_app/images/icons/tick-confirm.svg"
					alt=""
				/>
				<h1>Очікуйте на ваше замовлення</h1>
			</div>
			<Button text="повернутися до меню" onClick={hide} />
		</div>
	);
	const waiterSuccess = () => (
		<div className="notification-success notification-content">
			<div className="heading">
				<img
					src="../../static/hot_res_app/images/icons/tick-confirm.svg"
					alt=""
				/>
				<h1>Очікуйте на офіціанта</h1>
			</div>
			<Button text="повернутися до меню" onClick={hide} />
		</div>
	);
	const error = () => (
		<div className="notification-error notification-content">
			<div className="heading">
				<img
					src="../../static/hot_res_app/images/icons/sad-face.svg"
					alt=""
				/>
				<h1>На жаль, щось пішло не так</h1>
			</div>
			<Button
				text="покликати офіціанта"
				accented={true}
				onClick={handleCallWaiter}
			/>
			<Button text="повернутися до меню" onClick={hide} />
		</div>
	);

	const renderContent = () => {
		switch (type) {
			case "order success":
				return orderSuccess();
			case "waiter success":
				return waiterSuccess();
			case "error":
				return error();
			case "none":
				return null;
		}
	};

	const hide = () => {
		setTypeOfNotification("none");
	};

	return (
		<div
			className={
				type != "none"
					? "notification-overlay notification-open"
					: "notification-overlay notification-closed"
			}
		>
			{renderContent()}
		</div>
	);
};

export default Notification;
export { handleCallWaiter };
