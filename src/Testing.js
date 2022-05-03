import React, {Component} from 'react';
import {Link} from "react-router-dom";
import ApiSpace from "./Components/ApiSpace";

function Testing(){
    return(
        <div className="Testing">
            <br/>
            <Link className="aboutLink" to="/about" >About page placeholder</Link>

            <ApiSpace/>

        </div>

    );
}

export default Testing;