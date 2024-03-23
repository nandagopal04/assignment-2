import React from "react";

class ComponentA extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            price: 0.00
        };
    }

    incrementCount = () => {
        this.setState((prevState) => ({
            count: prevState.count + 1,
            price: prevState.price + 99.00
        }));
    };
    decreaseCount = () => {
        this.setState((prevState) => ({
            count: prevState.count - 1,
            price: prevState.price - 99.00
        }));
    }

    render() {
        return (
            <div>
                <h1>Orders</h1>
                <marquee style={{ backgroundColor: "lightgreen" }}>Place our order before before the offer is expired</marquee>
                <h4>I want <strong>{this.state.count}</strong> Burgers</h4>
                <button onClick={this.incrementCount}>One more!</button>
                <button onClick={this.decreaseCount} disabled={this.state.count === 0 ? true : false}>Nah ... One less.</button>

                <p>Place order for at: {this.state.price}.Rs</p>
            </div>
        );
    }
}

export default ComponentA;
