import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Testing from "./Testing";

const TransferPage = () => {

    return (
        <div>
            <h1> Main transfer!</h1>
            <p>
                <Link className="aboutLink" to="/about" >About page placeholder</Link>
                <br/>
                <Link className="newsLink" to="/testing" >news test page placeholder</Link>
            </p>

        </div>
    );


}

export default TransferPage;