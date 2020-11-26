import React from "react";
import Menu from "./menu.js"
import AllCategories from "./allCategories.js"
import Cart from "./cart.js";
import "../styles/app.scss";
import 'antd/dist/antd.css';

export default class App extends React.Component {
    state = {
        chosenCategory: null,
        loading: true,
        order: []
    }

    setCategory = (id) => {
        this.setState({
            chosenCategory: id
        })
    }

    setOrder = (name, id) => {
        this.setState({
            order: this.state.order.concat({
                name: name,
                id: id
            })
        })
    }

    render() {
        return(
            <div>
                <AllCategories setCategory={this.setCategory} />
                <Menu chosenCategory={this.state.chosenCategory} setOrder={this.setOrder} />
                <Cart order={this.state.order}/>
            </div>
        )
    }
}
