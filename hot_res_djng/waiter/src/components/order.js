import React, { useState } from "react";
import { format } from "date-fns";
// import { Button } from "antd";
import { ClockCircleOutlined } from "@ant-design/icons";

export default (props) => {
	const { order, dateTimeCreated, active, id } = props;

	const [loading, setLoading] = useState(false);

	const renderItems = () =>
		Object.entries(order).map((item, i) => (
			<li className="item" key={i}>
				{item[1].number} x {item[1].name}
			</li>
		));

	const formatDate = () => {
		return format(dateTimeCreated, "MM/dd/yyyy HH:mm");
	};

	const completeOrder = async () => {
		fetch(window.location.origin + "/post/orderdone/", {
			method: "POST",
			headers: { "Content-Type": "application/text" },
			body: JSON.stringify(id),
		});
	};

	const deleteOrder = async () => {
		fetch(window.location.origin + "/post/orderdone/", {
			method: "DELETE",
			headers: { "Content-Type": "application/text" },
			body: JSON.stringify(id),
		});
	};

	const handleCheckboxClick = () => {
		console.log("checkbox as;lf");
		setLoading(true);
		completeOrder().then(setLoading(false));
		///toota shos' robit's'a
	};

	return (
		<div className="order">
			<div className="elements">
				<span className="order_name">order:</span>
				<span className="tableNumber">8 table</span>
				<div>
					{/* <img src="static/waiter/clock.svg" alt="" /> */}
					<a className="date">
						<ClockCircleOutlined />
						{formatDate()}
					</a>
				</div>
				{/* <div className="image">
					<img src="static\images\user.svg" alt="" />
				</div> */}
				<span>4 people</span>
			</div>
			<ol className="item_list">{renderItems()}</ol>
			{active ? null : (
				<button
					type="primary"
					// loading={loading}
					onClick={() => {
						setLoading(true);
						deleteOrder().then(setLoading(false));
					}}
				>
					Delete
				</button>
			)}
			{/* {active ? "Done" : "Undo"} */}
			<div>
				<input
					type="checkbox"
					onChange={() => handleCheckboxClick()}
					name="toArchive"
					checked={!active}
				></input>
			</div>
			<div className="waitingTime">
				<span>waiting time</span>
			</div>
		</div>
	);
};
