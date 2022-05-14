import React,{useState,useEffect} from "react";
import NewsPag from "./Components/NewsPag";
import Pagination from "./Components/Pagination";

function Pag(){
    const [news, setNews] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [newsPerPage] = useState(10)

    useEffect(()=>{
        const fetchData = async () => {
            setLoading(true)
            const response = await  fetch('https://api.spaceflightnewsapi.net/v3/articles?_limit=60');
            const articles = await  response.json();
            setNews(articles)
            setLoading(false)


        }

        fetchData();


    },[])

    const lastNewsIndex = currentPage * newsPerPage
    const firstNewsIndex = lastNewsIndex - newsPerPage
    const currentNews = news.slice(firstNewsIndex, lastNewsIndex)

    const paginate= pageNumber => setCurrentPage(pageNumber)




    return(
        <div className="container mt-5">
            <h1>CC</h1>
            <NewsPag news={currentNews} loading={loading}/>
            <Pagination newsPerPage={newsPerPage} totalNews={news.length} paginate={paginate}/>
        </div>
    )

}

export default Pag