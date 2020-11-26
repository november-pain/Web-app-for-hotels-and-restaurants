import React from 'react';
import { Collapse } from 'antd';
import CartItem from './cartItem';


const { Panel } = Collapse;


export default class Cart extends React.Component {
    constructor(props) {
        super(props);

    }

    renderOrder = () => {
        const orderList = []

        for (let itemid in this.props.order) {
            
            orderList.push(
                <CartItem order={this.props.order} id={itemid} key={itemid} 
                setOrder={this.props.setOrder} removeItem={this.props.removeItem} />
            )
        }

        return orderList
    }


    render() {
        return (
            <div className="cart">
                <Collapse className="order-button">
                    <Panel className="order-button" showArrow={false} header="Your cart" key="1">
                        <div className="order">
                            {this.renderOrder()}
                        </div>
                    </Panel>
                </Collapse>    
            </div>
        )
    }
}