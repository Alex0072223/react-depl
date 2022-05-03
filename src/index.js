import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from "./Components/About";
import Testing from "./Testing";

ReactDOM.render(

    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Testing />}/>
            <Route path="about" element={<About />}/>
        </Routes>
    </BrowserRouter>,

    // <App />,

  document.getElementById('root')
);
