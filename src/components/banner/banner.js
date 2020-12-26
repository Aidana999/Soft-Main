import React from "react";
import "./banner.css";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

const Banner = () => {
    const {t, i18n} = useTranslation()
    return (
        <div className="wrapper-banner">

            <div className='wrapper-banner-text'>

                <p> {i18n.t("slogan.p1")}</p>
                <p> {i18n.t("slogan.p2")}</p>

                <Link to="/competition" className="banner-button ">{i18n.t("slogan.button_banner")}</Link>
            </div>

        </div>
    )
}
export default Banner;