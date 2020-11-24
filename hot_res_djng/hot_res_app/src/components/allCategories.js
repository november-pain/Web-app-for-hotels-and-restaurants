import React from "react";
import Category from "./category";


export default class AllCategories extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            categories: null,
            loading: true
        }
    }

    async componentDidMount() {
        const url_categories = window.location.href + 'db/categories';
        const categories_response = await fetch(url_categories);
        const categories_data = await categories_response.json();

        this.setState({ categories: JSON.parse(categories_data), loading: false});
    }

    renderCategory = () => {
        const categoryList = [];
        for(let i = 0; i < this.state.categories.length; i++) {
            let name = this.state.categories[i]["fields"]["name"];
            let id = this.state.categories[i]["pk"];

            categoryList.push(
                <Category name={name} setCategory={this.props.setCategory} id={id} key={id} />
            );
        }
        return categoryList;
    }


    render() {
        if (this.state.loading) {
            return <div>loading..</div>;
        }
        if (!this.state.categories) {
            return <div>didn`t get item</div>
        }
        if (!this.state.loading){
            return(
                <div className="categories">
                    <button onClick={() => {
                        this.props.setCategory(null)
                    }} className="category-button">
                        All
                    </button>
                    {this.renderCategory()}
                </div>
            )
        }
    }
}