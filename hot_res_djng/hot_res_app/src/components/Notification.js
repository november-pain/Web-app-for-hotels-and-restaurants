import React from "react";
import Button from "./Button";

export default (props) => {
	const { type, setType } = props;
	const renderContent = () => {
		switch (type) {
			case "success":
				return success();
			case "error":
				return null;
			case "none":
				return null;
		}
	};

	const hide = () => {
		setType("none");
	};

	const success = () => (
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
