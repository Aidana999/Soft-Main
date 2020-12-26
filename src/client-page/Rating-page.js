import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import RatingComponent from "../components/rating-component/rating-component";
import {useParams} from "react-router-dom"

const RatingPage = (props) => {
    const {federationId} = useParams()
    return (
        <>
            <Header/>
            <RatingComponent federationId={federationId}/>
            <Footer/>
        </>
    )
}
export default RatingPage;
