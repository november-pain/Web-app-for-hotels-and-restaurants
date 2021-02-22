import { getCookie } from "./getCookie";

const csrftoken = getCookie("csrftoken");

export const callWaiter = async (onSuccess, onFailure) => {
	fetch(window.location.href + "post/call_waiter", {
		credentials: "include",
		method: "POST",
		mode: "same-origin",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
			"X-CSRFToken": csrftoken,
		},
		// temporarily sending empty json
		body: JSON.stringify({}),
	}).then((response) => {
		if (response.ok) {
			onSuccess();
		} else {
			onFailure();
		}
	});
};

export const fetchMenu = async () => {
	const url_menu = window.location.origin + "/menu/db/menu";
	const menu_response = await fetch(url_menu);
	let menu_data = await menu_response.json();
	return JSON.parse(menu_data);
};
