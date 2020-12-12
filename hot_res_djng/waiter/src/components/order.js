import React from "react";
import { format } from 'date-fns'

export default (props) => {
	const { order, date_time} = props
  
  const renderOrder = () => {
    const itemList = []
    const orderArr = Object.entries(order)
    for (let i = 0; i < orderArr.length; i++) {
      itemList.push(
        <li key={i}> {orderArr[i][1].name} x {orderArr[i][1].number}</li>
      )
    }
    return itemList
  }
  
  const formatDate = () => {
    let dateString = Date.parse(date_time)
    let date = new Date(dateString)
    return format(date, 'MM/dd/yyyy HH:mm')
  }

  return (
    <div className="order">
      <h3>order:</h3>
      <ol>
        {renderOrder()}
      </ol>
      <p>{formatDate()}</p>
    </div>
  );
}
