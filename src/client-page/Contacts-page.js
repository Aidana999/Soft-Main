import React from "react";
import Footer from "../components/footer/Footer";
import Contacts from "../components/contacts/contact-component";

import Header from "../components/header/Header";
import {useParams} from "react-router-dom";

const ContactsPage = () => {
    const {federationId} = useParams()
    return (
        <>
            <Header/>

            <Contacts federationId={federationId}/>
            <Footer/>

        </>
    )
}
export default ContactsPage;