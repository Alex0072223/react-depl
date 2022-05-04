import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from "./Components/About";
import Testing from "./Testing";
import MainPage from "./TransferPage";
import TransferPage from "./TransferPage";

ReactDOM.render(

    <BrowserRouter>
        <Routes>
            <Route path="/" element={<TransferPage />}/>
            <Route path="Testing" element={<Testing />}/>
            <Route path="about" element={<About />}/>
        </Routes>
    </BrowserRouter>,

    // <App />,

  document.getElementById('root')
);
