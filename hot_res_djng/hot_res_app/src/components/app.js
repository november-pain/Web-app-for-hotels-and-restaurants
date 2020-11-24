import React from "react";
import Menu from "./menu.js"
import AllCategories from "./allCategories.js"
import Cart from "./cart.js";
import "../../static/hot_res_app/app.css"


export default class App extends React.Component {
    state = {
        chosenCategory: null,
        loading: true,
        order: null
    }

    setCategory = (id) => {
        this.setState({
            chosenCategory: id
        })
    }

    render() {
        return(
            <div>
                <AllCategories setCategory={this.setCategory} />
                <Menu chosenCategory={this.state.chosenCategory} />
                <Cart />
            </div>
        )
    }
}
