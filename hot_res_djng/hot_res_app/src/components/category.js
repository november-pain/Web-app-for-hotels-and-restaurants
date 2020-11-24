import React from 'react';

export default class Category extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
                <button onClick={() => {
                    this.props.setCategory(this.props.id)
                }} className="category-button">
                    <div>
                        {this.props.name}
                    </div>
                </button>
        )
    }
}