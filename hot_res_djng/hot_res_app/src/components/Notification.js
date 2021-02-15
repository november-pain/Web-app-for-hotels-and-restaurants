import React from "react";
import Button from "./Button";

export default (props) => {
    const {type, setType} = props;
    const renderContent = () =>{
       switch(type){
           case "success":
               return success();
           case "error":
               return null
           case "none":
               return null
       } 
    }
    const hide = () => setType("none")

	const success = () => (
		<div className="notification-success">
			<img
				src="../../static/hot_res_app/images/icons/tick-confirm.svg"
				alt=""
			/>
			<h1>Очікуйте на ваше замовлення</h1>
			<Button text="повернутися до меню" onClick={hide} />
		</div>
	);

	return (
    <div className="notification-overlay">
        {renderContent()}
    </div>
    );
};
