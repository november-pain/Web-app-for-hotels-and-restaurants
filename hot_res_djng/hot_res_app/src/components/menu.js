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

    async fetchMenu() {
        const url_menu = window.location.href + 'db/menu';
        const menu_response = await fetch(url_menu);
        const menu_data = await menu_response.json();

        this.setState({ menu: JSON.parse(menu_data)});
    }

    async fetchCategories() {
        const url_categories = window.location.href + 'db/categories';
        const categories_response = await fetch(url_categories);
        const categories_data = await categories_response.json();

        this.setState({ categories: JSON.parse(categories_data), loading: false});
    }

    async componentDidMount() {
        this.fetchMenu()
        this.fetchCategories()
    }
    
    chooseCategory = (id) => {
        this.setState({
            chosenCategory: id
        })
    }

    renderCategory = () => {
        const categoryList = [];
        for(let i = 0; i < this.state.categories.length; i++) {
            let name = this.state.categories[i]["fields"]["name"];
            let id = this.state.categories[i]["pk"];

            categoryList.push(
                <Category name={name} chooseCategory={this.chooseCategory} id={id} key={id} />
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
        if (!this.state.loading){
            return (
                <div>                   
                    <div className="categories">
                        <button onClick={() => {
                            this.chooseCategory(null)
                        }} className="category-button">
                            All
                        </button>
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