import React from "react";

const Orders = [
	{ 1: { name: "Fried eggs", number: 3 } },
	{ 1: { name: "Fried chef eggs", number: 4 } },
	{ 1: { name: "Fried eggs", number: 5 } },
	{ 1: { name: "Fried Naruto's eggs", number: 6 } },
];

export default class List_of_Orders extends React.Component {
    
    async componentDidMount() {

        

		const url_orders = window.location.origin + "/" + "db/menu";
		const orders_response = await fetch(url_orders);
		const orders_data = await orders_response.json();

		this.setState({ orders: JSON.parse(orders_data).map(
            o=>(o.fields)
        ), loading: false });
        console.log(this.state.orders)
    }
    

    render() {
		return Orders.map((o, index) => <p key={index}>{JSON.stringify(o)}</p>);
	}
}
