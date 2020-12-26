import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import ru from "./locales/ru.json";
import kg from "./locales/kg.json"
import {initReactI18next} from "react-i18next";

const options = {
    resources: {
        kg: {
            common: kg
        },
        ru: {
            common: ru
        }

    },
    debug: true,
    lng: "ru",
    fallbackLng: "ru",
    interpolation: {
        escapeValue: false
    },
    ns: ["common"],
    defaultNS: "common",

    // react: {
    //     wait: false,
    //     bindI18n: "languageChanged loaded",
    //     bindStore: "added removed",
    //     nsMode: "default"
    // }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init(options);

export default i18n;