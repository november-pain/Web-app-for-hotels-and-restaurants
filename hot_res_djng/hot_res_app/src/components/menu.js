import React from 'react';
import Category from './category.js';
import Item from './item.js';


export default class Menu extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            loading: true,
            menu: null,
            categories: null,
            chosenCategory: null
        };  

    }
    async componentDidMount() {
        const url_menu = "http://localhost:8000/db/menu";
        const menu_response = await fetch(url_menu);
        const menu_data = await menu_response.json();

        const url_categories = "http://localhost:8000/db/categories";
        const categories_response = await fetch(url_categories);
        const categories_data = await categories_response.json();

        this.setState({ menu: JSON.parse(menu_data)});
        this.setState({ categories: JSON.parse(categories_data), loading: false});
    }


    renderCategory = () => {
        const categoryList = [];
        for(let i = 0; i < this.state.categories.length; i++) {
            let name = this.state.categories[i]["fields"]["name"];
            let key = this.state.categories[i]["pk"];

            categoryList.push(
                <button onClick={() => {
                    this.setState({chosenCategory: key})
                    
                }} className="category-button" key={key}>
                    <Category name={name} key={key} />
                </button>
            );
        }
        return categoryList;
    }

    renderItem = () => {
        const itemList = [];
        for(let i = 0; i < this.state.menu.length; i++) {
            let name = this.state.menu[i]["fields"]["name"];
            let price = this.state.menu[i]["fields"]["price"];
            let category = this.state.menu[i]["fields"]["category"];
            let description = this.state.menu[i]["fields"]["description"];
            let key = this.state.menu[i]["pk"];

            itemList.push(<Item name={name} price={price} category={category} description={description} chosenCategory={this.state.chosenCategory} key={key} />);
            
        }
        return itemList;
    }
    
    render() {
        if (this.state.loading) {
            return <div>loading..</div>;
        }
        if (!this.state.menu) {
            return <div>didn`t get item</div>
        }
        if (this.state.menu){
            return (
                <div>                   
                    <div>
                        {this.renderCategory()}
                    </div>
                    <div className="menu">
                        {this.renderItem()}
                    </div>
                </div>
            );
        }
    }
}