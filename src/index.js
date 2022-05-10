import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from "./Components/About";
import Testing from "./Testing";
import MainPage from "./TransferPage";
import TransferPage from "./TransferPage";
import NewsItem from "./Components/NewsItem";
import Sorted from "./Sorted";

ReactDOM.render(

    <BrowserRouter>
        <Routes>

            <Route path="/" element={<TransferPage />}/>
            <Route path="/news/:iddd" element={<NewsItem />}/>
            <Route path="news" element={<Testing />}/>
            <Route path="about" element={<About />}/>
            <Route path="sort" element={<Sorted />}/>

            <Route path="*" element={<Testing />}/> {/*redirect to news if usever use wrong url*/}

        </Routes>
    </BrowserRouter>,

    // <App />,

  document.getElementById('root')
);
