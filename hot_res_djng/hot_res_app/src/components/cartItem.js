import React from "react";
import Counter from "./counter";

export default class CartItem extends React.Component {
	constructor(props) {
		super(props);
	}
	increment = () => {
		this.props.setOrder({
			[this.props.id]: {
				...this.props.order[this.props.id],
				number: this.props.order[this.props.id].number + 1,
			},
		});
	};

	decrement = () => {
		if (this.props.order[this.props.id].number > 1) {
			this.props.setOrder({
				[this.props.id]: {
					...this.props.order[this.props.id],
					number: this.props.order[this.props.id].number - 1,
				},
			});
		} else if (this.props.order[this.props.id].number === 1) {
			this.props.removeItem(this.props.id);
		}
	};

	render() {
		return (
			<div>
				<p>
					{this.props.order[this.props.id].name} :{" "}
					{this.props.order[this.props.id].number}
				</p>
				<span>
					<Counter
						increment={this.increment}
						decrement={this.decrement}
					/>
				</span>
			</div>
		);
	}
}
