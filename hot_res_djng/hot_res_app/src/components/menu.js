import React from 'react';
import Item from './item.js';


export default class Menu extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            loading: true,
            menu: null
        };  

        this.renderItem = this.renderItem.bind(this);

    }
    async componentDidMount() {
        const url = "http://localhost:8000/menu/";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ menu: JSON.parse(data), loading: false});
    }

    renderItem() {
        const itemList = [];
        for(let i = 0; i < this.state.menu.length; i++) {
            let name = this.state.menu[i]["fields"]["name"];
            let price = this.state.menu[i]["fields"]["price"];
            let category = this.state.menu[i]["fields"]["category"];
            let description = this.state.menu[i]["fields"]["description"];
            let key = this.state.menu[i]["pk"];
            itemList.push(<Item name={name} price={price} category={category} description={description} key={key} />);
            
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
                    {this.renderItem()}
                </div>
            );
        }
    }
}