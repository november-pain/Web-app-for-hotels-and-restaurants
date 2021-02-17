import React, { useState, useEffect } from "react";

const fetchWaiterCalls = async () => {
	const urlGetWaiterCalls = window.location.href + "db/waiter_call/";
	const waiterCallsResponse = await fetch(urlGetWaiterCalls);
	const waiterCallsData = await waiterCallsResponse.json();
	return JSON.parse(waiterCallsData);
};

const listOfWaiterCalls = () => {
	const [waiterCalls, setWaiterCalls] = useState(null);

	const updateWaierCallsWithInterval = async (interval) => {
		fetchWaiterCalls().then((calls) => setWaiterCalls(calls));
	};

	const onMount = async () => {
		fetchWaiterCalls().then((calls) => setWaiterCalls(calls));
        updateWaierCallsWithInterval(15000);
	};

    useEffect(() => {
		dispatch({ type: "update" });
	}, [waiterCalls]);

};

export default listOfWaiterCalls
