export const handleAddItemAnimation = () => {
    let btn = document.querySelector("#open-cart-button");
    btn.classList.add("new-item");
    setTimeout(()=>btn.classList.remove("new-item"),
    100
    )
}
export const handleChangeItemCountAnimation = () => {
    let btn = document.querySelector("#cart-div > button.order-button");
    btn.classList.add("сhange-item-count");
    setTimeout(()=>btn.classList.remove("сhange-item-count"),
    100
    )
}