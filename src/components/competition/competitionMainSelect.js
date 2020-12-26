import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import "./competitonMain.css";
import API from "../../API";

const CompetitionMainSelect = (props) => {
    const [federationId, setFederationId] = useState(props.federationId || null);
    const [sportList, setSportList] = useState();
    const [filteredSportList, setFilteredSportList] = useState();
    useEffect(() => {
        const fetchData = async () => {
            const result = await API.getSportsList();
            setSportList(result.data);
            console.log(result.data);
        };
        fetchData();
    }, []);

    const filterSportList = (type) => {
        let filteredList = sportList.filter((item) => {
            return item.sport_type === type;
        });
        setFilteredSportList(filteredList);
    };
    return (
        <div className="rating-component">
        {!federationId ? (
        <div className="main-select-sport">
            <div className="select-sport">
                <select
                    className="select-sport__select"
                    onChange={(e) => {
                        filterSportList(e.target.value);
                    }}
                >
                    <option value="" disabled selected>
                        ---Выберите категорию спорта---
                    </option>
                    <option value="Национальные виды спорта">
                        Национальные виды спорта
                    </option>
                    <option value="Олимпийские виды спорта">
                        Олимпийские виды спорта
                    </option>
                    <option value="Неолимпийские виды спорта">
                        Неолимпийские виды спорта
                    </option>
                    <option value="Виды спортов Пара и Сурдо (ЛОВЗ)">
                        Виды спортов Пара и Сурдо (ЛОВЗ)
                    </option>
                </select>
            </div>
            <div className="select-sport">
                {filteredSportList ? (
                    <select onChange={(e) => setFederationId(e.target.value)}>
                        <option value="" disabled selected>
                            ---Выберите вид спорта---
                        </option>
                        {filteredSportList ? (
                            filteredSportList.map((item, id) => (
                                <option value={item.id}>{item.name}</option>
                            ))
                        ) : (
                            <></>
                        )}
                    </select>
                ) : (
                    <select disabled />
                )}
            </div>
        </div>
    ) : (
        <></>
        )} </div>
        // <div className="select__block">
        //     <div className="sport-select">
        //         <div className="sport__title">Выберите вид спорта</div>
        //         <select className="select select__item">
        //             <option value="national">Национальные виды спорта</option>
        //             <option value="national">Национальные виды спорта</option>
        //             <option value="national">Национальные виды спорта</option>
        //         </select>
        //     </div>
        //     <div className="sport-type">
        //         <div className="sport__title sport-type__title">
        //             Национальные виды спорта
        //         </div>
        //         <select className="select sport-type__select-item">
        //             <option value="national">Курош</option>
        //             <option value="national">Курош</option>
        //             <option value="national">Курош</option>
        //         </select>
        //     </div>
        // </div>
    );
};

export default CompetitionMainSelect;
