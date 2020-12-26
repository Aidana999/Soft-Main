import React, {useEffect, useState} from "react";
import "./sport-type.css";
import SanitizedHTML from "react-sanitized-html"
import API from "../../API";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

const SportType = () => {
    const {t, i18n} = useTranslation()
    const [listOfSports, setListOfSports] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await API.getListOfAllSports();
            setListOfSports(result.data);
            console.log(result.data);
        };
        fetchData();
    }, []);

    return (
        <div className="wrapper-sport">
            <h3 id="federationsList">{i18n.t("sportType")}</h3>
            {listOfSports.length ?
                listOfSports.map((item, id) => (
                    <div key={id} className="sport-type">
                        <h2>{Object.keys(item)[0]}</h2>
                        <div>
                            {item[Object.keys(item)[0]].map((item2, id2) => (
                                <Link className="sport-name" to={`/federations/${item2.id}`}>
                                    <img src={"http://161.35.209.80" + item2.image} style={{width: "100%"}} alt=""/>
                                    <h3>{item2.name}</h3>
                                    {/*<SanitizedHTML*/}
                                    {/*    allowedTags={[*/}
                                    {/*        "h1",*/}
                                    {/*        "h2",*/}
                                    {/*        "h4",*/}
                                    {/*        "h5",*/}
                                    {/*        "h6",*/}
                                    {/*        "blockquote",*/}
                                    {/*        "p",*/}
                                    {/*        "a",*/}
                                    {/*        "ul",*/}
                                    {/*        "ol",*/}
                                    {/*        "nl",*/}
                                    {/*        "li",*/}
                                    {/*        "b",*/}
                                    {/*        "i",*/}
                                    {/*        "u",*/}
                                    {/*        "strong",*/}
                                    {/*        "em",*/}
                                    {/*        "strike",*/}
                                    {/*        "code",*/}
                                    {/*        "hr",*/}
                                    {/*        "br",*/}
                                    {/*        "div",*/}
                                    {/*        "table",*/}
                                    {/*        "thead",*/}
                                    {/*        "caption",*/}
                                    {/*        "tbody",*/}
                                    {/*        "tr",*/}
                                    {/*        "th",*/}
                                    {/*        "td",*/}
                                    {/*        "pre",*/}
                                    {/*        "img",*/}
                                    {/*        "video",*/}
                                    {/*        "source",*/}
                                    {/*        "span",*/}
                                    {/*        "iframe",*/}
                                    {/*        "sub",*/}
                                    {/*        "sup"*/}
                                    {/*    ]}*/}
                                    {/*    allowedAttributes={{*/}
                                    {/*        h2: ["style"],*/}
                                    {/*        h4: ["style"],*/}
                                    {/*        h5: ["style"],*/}
                                    {/*        h6: ["style"],*/}
                                    {/*        blockquote: ["style"],*/}
                                    {/*        p: ["style"],*/}
                                    {/*        a: ["style"],*/}
                                    {/*        ul: ["style"],*/}
                                    {/*        ol: ["style"],*/}
                                    {/*        nl: ["style"],*/}
                                    {/*        li: ["style"],*/}
                                    {/*        b: ["style"],*/}
                                    {/*        i: ["style"],*/}
                                    {/*        u: ["style"],*/}
                                    {/*        strong: ["style"],*/}
                                    {/*        em: ["style"],*/}
                                    {/*        strike: ["style"],*/}
                                    {/*        code: ["style"],*/}
                                    {/*        hr: ["style"],*/}
                                    {/*        br: ["style"],*/}
                                    {/*        div: ["style"],*/}
                                    {/*        table: ["style"],*/}
                                    {/*        thead: ["style"],*/}
                                    {/*        caption: ["style"],*/}
                                    {/*        tbody: ["style"],*/}
                                    {/*        tr: ["style"],*/}
                                    {/*        th: ["style"],*/}
                                    {/*        td: ["style"],*/}
                                    {/*        pre: ["style"],*/}
                                    {/*        img: ["style", "src"],*/}
                                    {/*        video: ["style"],*/}
                                    {/*        source: ["style"],*/}
                                    {/*        span: ["style"],*/}
                                    {/*        iframe: ["style"],*/}
                                    {/*        sub: ["style"],*/}
                                    {/*        sup: ["style"]*/}
                                    {/*    }}*/}
                                    {/*    html={item2.description}*/}
                                    {/*/>*/}
                                </Link>
                            ))}
                        </div>
                    </div>
                )) : <></>
            }
        </div>
    );
};
export default SportType;
    