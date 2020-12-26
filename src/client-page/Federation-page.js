import React, {useEffect, useState} from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import FederationComponent from "../components/federation-component/federation";
import API from "../API";
import SecondHeader from "../components/header/secondHeader";


const FederationPage = (props) => {
    const [federationInfo, setFederationInfo] = useState({})
    const [selectedFederation, selectFederation] = useState(0)

    useEffect(
        () => {
            const fetchData = async () => {
                const result = await API.retrieveSingleSport(props.match.params.federationId);
                setFederationInfo(result.data)
                console.log(result.data)
            }
            fetchData();
            window.scrollTo(0,0)
        },
        []
    )
    return (
        <>
            <Header/>
            <SecondHeader selectedFederation={selectedFederation}/>
            <FederationComponent selectFederation={selectFederation} federationData={federationInfo}/>
            <Footer/>
        </>
    )
}
export default FederationPage;
