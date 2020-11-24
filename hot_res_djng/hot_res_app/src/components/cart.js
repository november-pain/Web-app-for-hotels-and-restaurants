import React from 'react';
import { Collapse } from 'antd';


const { Panel } = Collapse;


export default class Cart extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div className="cart">
                <Collapse className="order-button" defaultActiveKey={['1']} >
                    <Panel className="order-button" showArrow={false} header="Your cart" key="1">
                        <div className="order">
                            <p>you haven't ordered anything</p>
                        </div>
                    </Panel>
                </Collapse>    
            </div>
        )
    }
}