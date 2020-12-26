import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import NewsComponent from "../components/news/news-component";
import {useParams} from "react-router-dom";

const NewsPage = (props) => {
    const {federationId} = useParams()
    return (
        <>
            <Header/>
            <NewsComponent federationId={federationId}/>
            <Footer/>


        </>
    )
}
export default NewsPage;