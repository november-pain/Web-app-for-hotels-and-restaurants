import React from 'react';

export default class Category extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div className="category">
                <h5>{this.props.name}</h5>
            </div>
        )
    }
}