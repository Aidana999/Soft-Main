import React from "react";
import "./secondHeader.css"
import {Link} from "react-router-dom";
const SecondHeader=(props)=>{
    return(
        <div className="wrapper-second-header">
            <Link to={`/rating/${props.selectedFederation}`}>Рейтинг</Link>
            <Link to="/">Соревновании</Link>
            <Link to={`/news/${props.selectedFederation}`}>Новости</Link>
            <Link to={`/about-us/${props.selectedFederation}`}>О нас</Link>
            <Link to={`/contacts/${props.selectedFederation}`}>Контакты</Link>
        </div>
    )
}
export default SecondHeader;