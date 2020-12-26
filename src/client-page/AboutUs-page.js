import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import AboutUs from "../components/aboutUs/AboutUs";
import {useParams} from "react-router-dom"

const AboutUsPage = () => {
    const {federationId} = useParams()
    return (
        <>
            <Header/>
            <AboutUs federationId={federationId}/>
            <Footer/>
        </>
    )
}
export default AboutUsPage;