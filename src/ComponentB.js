import React, { useState } from "react";

const ComponentB = () => {
    const [place, setPlace] = useState("");
    const [orderPlaced, setOrderPlaced] = useState(false);

    const handleInputChange = (event) => {
        setPlace(event.target.value);
    };

    const handleSend = () => {
        setOrderPlaced(true);
    };

    return (
        <div className="com-b">
            {!orderPlaced ? (
                <div>
                    <input type="text" value={place} onChange={handleInputChange} />
                    <button onClick={handleSend}>Place Order</button>
                </div>
            ) : (
                <div>
                    <center>
                        <h1>We have received your order</h1>
                        <h4>Your order will be delivered to the following address: {place}</h4>
                        <h5>Have a nice day 😊</h5>
                    </center>
                </div>
            )}
        </div>
    );
};

export default ComponentB;
