import React, { useState } from "react";
import { format } from 'date-fns'
import { Button } from 'antd'

export default (props) => {
  const { order, date_time, id} = props
  
  const [loading, setLoading] = useState(false)
  
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

  const completeOrder = async() => {
    fetch(window.location.origin + "/post/orderdone/", {
			method: "POST",
			headers: { "Content-Type": "application/text" },
			body: JSON.stringify(id),
		});
  }

  return (
    <div className="order">
      <h3>order:</h3>
      <ol>
        {renderOrder()}
      </ol>
      <p>{formatDate()}</p>
      <Button type="primary" loading={loading} onClick={() => {
        setLoading(true)
        completeOrder().then(setLoading(false))
      }}>
        Done
      </Button>
    </div>
  );
}
