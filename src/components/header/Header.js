import React, { useState } from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import LogoBlack from "./../../logo.svg";
import LogoWhite from "./../../logo ais.svg";
import {useTranslation} from "react-i18next";

const Header = () => {

  const {t, i18n} = useTranslation()
  console.log(window.location.pathname);

   const [language, setLanguage]=useState()
  const scrollToFederationsList = () => {
    let federationsListNode = document.getElementById("federationsList");
    federationsListNode.scrollIntoView();
  };
  let [show, setShow] = useState({});
  const toggleBurg = () => {
    if (show.display == "none") {
      show = { display: "flex" };
      setShow(show);
    } else {
      show = { display: "none" };
      setShow(show);
    }

    console.log(show);
  };
  return (
    <header
      style={{
        background: window.location.pathname !== "/" && "#ffffff",
      }}
    >
      {/*<header>*/}
      <div className="header__body">
        <div className="logo">
          <Link to={"/"}>
            <img
              src={window.location.pathname === "/" ? LogoWhite : LogoBlack}
              alt=""
            />
          </Link>
        </div>
        <div className="navBar">
          <div className="localisation">
            <Link to="/login">ВОЙТИ</Link>
            <select onChange={e => {i18n.changeLanguage(e.target.value); console.log(e.target.value)}}>
              <option value="ru">ru</option>
              <option value="kg">kg</option>
            </select>
          </div>
          <div className="navigation" style={show}>
            <NavLink
              style={{
                color: window.location.pathname !== "/" && "#000000",
              }}
              to="/"
              onClick={() => setTimeout(() => scrollToFederationsList(), 10)}
            >
              {i18n.t("navbar.federation")}
            </NavLink>
            <NavLink
              style={{
                color: window.location.pathname !== "/" && "#000000",
              }}
              to="/rating"
            >
              {i18n.t("navbar.rating")}
            </NavLink>
            <NavLink
              style={{
                color: window.location.pathname !== "/" && "#000000",
              }}
              to="/competition"
            >
             {i18n.t("navbar.competition")}
            </NavLink>
            <NavLink
              style={{
                color: window.location.pathname !== "/" && "#000000",
              }}
              to="/news"
            >
              {i18n.t("navbar.news")}
            </NavLink>
            <NavLink
              style={{
                color: window.location.pathname !== "/" && "#000000",
              }}
              to="/about-us"
            >
              {i18n.t("navbar.aboutUs")}
            </NavLink>
            <NavLink
              style={{
                color: window.location.pathname !== "/" && "#000000",
              }}
              to="/contacts"
            >
              {i18n.t("navbar.contacts")}
            </NavLink>

            <FontAwesomeIcon
              className="poisk"
              style={{
                color: window.location.pathname !== "/" && "#000000",
              }}
              icon={faSearch}
            />
          </div>
          <svg
            onClick={toggleBurg}
            className="svg-inline--fa"
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="bars"
            class="svg-inline--fa fa-bars fa-w-14"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 47 220"
          >
            <path
              fill="red"
              d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
            ></path>
          </svg>
        </div>
      </div>
     

    </header>
  );
};
export default Header;
