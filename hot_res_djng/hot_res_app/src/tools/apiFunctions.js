import { getCookie } from "./getCookie";


const csrftoken = getCookie("csrftoken");

export const callWaiter = () => {
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
        // not implemented yet
        if (response.ok) {
            return true
        } else {
            return false
        }
    });
};