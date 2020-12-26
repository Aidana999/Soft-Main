import React, {useEffect, useState} from "react";
// import futbol from "./1598506949_luchshie-bombardiry.jpg";
import "./news.css"
import Footer from "../footer/Footer";
import Header from "../header/Header";
import API from "../../API";

const MainNews = () => {
    const [data, setData] = useState()

    useEffect(() => {
        const fetchData = async () => {
            const result = await API.getSingleNews()
            setData(result.data)
            console.log(result.data)
        }
        fetchData()
    }, [])
    return (
        <>
            <Header/>
            <div className="main-news">
                <h1>{data.title}</h1>
                <img src={data.image} alt=""/>
                <p>
                    {data.content}

                </p>
            </div>
            <Footer/>
        </>
    )
}
export default MainNews