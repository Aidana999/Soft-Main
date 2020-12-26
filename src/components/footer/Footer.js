import React from 'react';
import "./Footer.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faInstagram, faFacebookF} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope, faPhoneVolume, faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";
import Logo from "./../../logo ais.svg";
import {Link, NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";
const Footer = () => {
    const {t, i18n} = useTranslation()
    const scrollToFederationsList = () => {
        let federationsListNode = document.getElementById("federationsList");
        federationsListNode.scrollIntoView();
    };
    return (
        <footer>

            <div className="wrapper">
                <div className="logo">
                    <img src={Logo} alt="logo"/>
                </div>
                <div>
                    <h1>{i18n.t("footer.aboutUs")}</h1>
                    <Link to="/"
                          onClick={() => setTimeout(() => scrollToFederationsList(), 10)}
                    >
                        {i18n.t("footer.federation")}</Link>
                    <Link to="/rating">{i18n.t("footer.rating")}</Link>
                    <Link to="/competition">{i18n.t("footer.competition")}</Link>
                    <Link to="/about-us">{i18n.t("footer.aboutUs")}</Link>
                    <Link to="/news">{i18n.t("footer.news")}</Link>


                </div>
                <div>
                    <h1>{i18n.t("footer.contacts")}</h1>
                    <div className="self-info">
                        <p><FontAwesomeIcon icon={faEnvelope}/> AIS.kg@gmail.com</p>
                        <p><FontAwesomeIcon icon={faMapMarkerAlt}/>Г. Бишкек ул. Токтогула 100/1</p>
                        <p><FontAwesomeIcon icon={faPhoneVolume}/>0707256789</p>
                    </div>
                </div>
                <div>
                    <h1>{i18n.t("footer.socialMedia")}</h1>
                    <div className="social-media">
                    <a href=""><FontAwesomeIcon icon={faFacebookF}/></a>
                    <a href=""><FontAwesomeIcon icon={faInstagram}/></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;