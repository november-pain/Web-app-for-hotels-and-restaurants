import React from "react";
import Menu from "./menu.js"
import AllCategories from "./allCategories.js"


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
            </div>
        )
    }
}
