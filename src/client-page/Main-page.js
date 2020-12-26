import React from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import SportType from "../components/sport-type/sport-type";
import Text from "../components/banner/text";

import Banner from "../components/banner/banner";


const MainPage=()=>{
    return(
        <div>
            <Header/>
            <Banner/>
            <Text/>
            <SportType/>
            <Footer/>
        </div>
    )
}
export default MainPage;