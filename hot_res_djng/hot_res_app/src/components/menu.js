import React from 'react';


export default class Menu extends React.Component {
    state = {
        loading: true,
        item: null
    };

    async componentDidMount(){
        const url = "http://localhost:8000/menu/";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ item: data, loading: false});

    }
    render() {
        if (this.state.loading) {
            return <div>loading..</div>;
        }
        if (!this.state.item) {
            return <div>didn`t get item</div>
        }
        return (
            <div>
                <p>{this.state.item}</p>
            </div>
        );
    }
}