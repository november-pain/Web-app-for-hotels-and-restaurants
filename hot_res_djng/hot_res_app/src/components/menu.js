import React from 'react';
import Item from './item.js';


export default class Menu extends React.Component {
    constructor(props) {    
        super(props);
    
        this.state = {
            loading: true,
            menu: null,
            chosenCategory: null
        };  

    }

    async componentDidMount() {
        const url_menu = window.location.href + 'db/menu';
        const menu_response = await fetch(url_menu);
        const menu_data = await menu_response.json();

        this.setState({ menu: JSON.parse(menu_data), loading: false});
    }

    renderItem = () => {
        const itemList = [];
        for(let i = 0; i < this.state.menu.length; i++) {
            let name = this.state.menu[i]["fields"]["name"];
            let price = this.state.menu[i]["fields"]["price"];
            let category = this.state.menu[i]["fields"]["category"];
            let description = this.state.menu[i]["fields"]["description"];
            let key = this.state.menu[i]["pk"];

            itemList.push(
                    <Item 
                        name={name}
                        price={price}
                        category={category} 
                        description={description} 
                        chosenCategory={this.props.chosenCategory} 
                        setOrder={this.props.setOrder}
                        key={key} 
                        id={key}
                    />
                );
            
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
                <div className="menu">
                    {this.renderItem()}
                </div>
            );
        }
    }
}