import React from "react";
import Header from "./Header";
import 'bootstrap/dist/css/bootstrap.css'

const Thanks = () => {
    return(
        <div>
            <Header />
            <div className="container">
                <h2>Thank you for your feedback!</h2>
                <p>You can close this window</p>
            </div>
        </div>
    );
};

export default Thanks;