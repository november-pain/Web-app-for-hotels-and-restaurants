import React from "react";
import Button from "./Button";
import {callWaiter} from "../tools/apiFunctions"

export default (props) => {
    const { type, setType } = props;


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
            <Button text="покликати офіціанта" accented={true} onClick={handleCallWaiter} />
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

    const handleCallWaiter = ()=>{
        if (callWaiter()){
            setType("none");
            setType("waiter success");
        } else {
            setType("none");
            console.log("error calling waiter")
            setType("error");
        }
    }

	const hide = () => {
		setType("none");
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
