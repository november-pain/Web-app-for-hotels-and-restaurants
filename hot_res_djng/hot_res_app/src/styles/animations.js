export const handleAddItemAnimation = () => {
    let btn = document.querySelector("#open-cart-button");
    btn.classList.add("new-item");
    setTimeout(()=>btn.classList.remove("new-item"),
    100
    )
}