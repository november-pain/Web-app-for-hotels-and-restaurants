import React from "react";

export default (props) => {
    const {text, onClick} = props;
	return (
		<button className="button" onClick={onClick}>
			<h2>{text}</h2>
		</button>
	);
};
