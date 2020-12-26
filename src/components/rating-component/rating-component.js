import React, { useEffect, useState } from "react";
import "./rating-component.css";
import RatingTable from "./rating-table";
import API from "../../API";
import {useTranslation} from "react-i18next";

const RatingComponent = (props) => {
  const {t, i18n} = useTranslation()
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
      <h1>{i18n.t("rating.title")}</h1>
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
      )}
      <div className="about-rating">
        <h1>Что такое рейтинг</h1>
        <p>
          Рейтинг — это и показатель спортивной формы, и инструмент
          <br />
          самооценки, и ориентир в планах повышения спортивного мастерства. С
          <br />
          другой стороны, для тренеров и специалистов рейтинг (не только в го,
          <br />
          но и в других видах спорта) дает объективный критерий отбора игроков
          <br />
          в различные сборные команды, или же кандидатов на поездку на
          <br />
          престижные турниры. Для организаторов турниров рейтинг помогает
          <br />
          правильно сформировать начальные группы по силе игры, проводить
          <br />
          жеребьевку в турнирах и вообще — создать максимально равные
          <br />
          условия выступления для всех участников, тем самым повышая качество
          <br />
          судейства и организации турниров в целом. Ну и еще рейтинг помогает
          <br />
          всем — и специалистам, и участникам, и зрителям — прогнозировать
          <br />
          результаты выступления игроков в соревнованиях» .<br />
          Рейтинг — «внутренний порядок»
        </p>
      </div>
      <RatingTable federationId={federationId} />
    </div>
  );
};
export default RatingComponent;
