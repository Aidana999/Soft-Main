import React, {useEffect, useState} from "react";
import "./contactss.css"
import API from "../../API";
import {useTranslation} from "react-i18next";

const Contacts = (props) => {
    const { i18n} = useTranslation()
    const [federationId, setFederationId] = useState(props.federationId || null)
    const [sportList, setSportList] = useState()
    const [filteredSportList, setFilteredSportList] = useState()

    useEffect(() => {
        const fetchData = async () => {
            const result = await API.getSportsList()
            setSportList(result.data)
            console.log(result.data)
        }
        fetchData()
    }, [])

    const filterSportList = (type) => {
        let filteredList = sportList.filter((item) => {
            return item.sport_type === type
        })
        setFilteredSportList(filteredList)
    }

    return (
        <div className="wrapper-contacts">
            <h1>{i18n.t("contacts")}</h1>
            {!federationId ?
                <div className="main-select-sport">
                    <div className="select-sport">

                        <select className="select-sport__select" onChange={(e) => {
                            filterSportList(e.target.value)
                        }}>
                            <option value="" disabled selected>---Выберите категорию спорта---</option>
                            <option value="Национальные виды спорта">Национальные виды спорта</option>
                            <option value="Олимпийские виды спорта">Олимпийские виды спорта</option>
                            <option value="Неолимпийские виды спорта">Неолимпийские виды спорта</option>
                            <option value="Виды спортов Пара и Сурдо (ЛОВЗ)">Виды спортов Пара и Сурдо (ЛОВЗ)</option>
                        </select>
                    </div>
                    <div className="select-sport">
                        {filteredSportList ?
                            <select onChange={(e) => setFederationId(e.target.value)}>
                                <option value="" disabled selected>---Выберите вид спорта---</option>
                                {filteredSportList ? filteredSportList.map((item) => (
                                    <option value={item.id}>{item.name}</option>
                                )) : <></>}

                            </select> : <select disabled/>}
                    </div>

                </div> : <></>}
        </div>
    )
}

export default Contacts;