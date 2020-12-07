import React from "react";

const Orders = [
  { 1: { name: "Fried eggs", number: 3 } },
  { 1: { name: "Fried chef eggs", number: 4 } },
  { 1: { name: "Fried eggs", number: 5 } },
  { 1: { name: "Fried Naruto's eggs", number: 6 } },
];

export default class List_of_Orders extends React.Component {
  render() {
    return Orders.map((o, index) => <p key={index}>{JSON.stringify(o)}</p>);
  }
}
