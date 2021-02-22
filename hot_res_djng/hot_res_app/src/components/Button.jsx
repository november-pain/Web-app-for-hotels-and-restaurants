import React from "react";

export default (props) => {
	const { text, onClick, accented } = props;
	return (
		<button
			className={accented ? "button accented-button" : "button"}
			onClick={onClick}
		>
			<h2>{text}</h2>
		</button>
	);
};
