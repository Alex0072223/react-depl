import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const NewsItem = () => {
    const { iddd } = useParams();
    const [article, setArticle] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const response = await  fetch(`https://api.spaceflightnewsapi.net/v3/articles?id=${iddd}`);
            const article = (await  response.json())[0];
            setArticle(article)
        }

        fetchData();
    })

    return (
        <div>
            <h2>{article?.title}</h2>
            <p>{article?.summary}</p>
        </div>
    )
}

export default NewsItem;