import React from "react";
import "./text.css"
import {useTranslation} from "react-i18next";

const Text = () => {
    const {t, i18n} = useTranslation()
return (
    <div className="wrapper-text">
        <div>
            <h1>all in sport<br/>
                kyrgyz<br/>
                republic</h1>
        </div>
        <div>
            <p>{i18n.t("text")}</p>
        </div>
    </div>
)
}
export default Text;