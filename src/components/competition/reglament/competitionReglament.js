import React, { useState, useEffect } from "react";

import "./reglament.css";
import API from "../../../API";

const CompetitionReglament = (props) => {
  const [participants, setParticipants] = useState([]);
  const regId = props.regId.match.params.CardId;
  const [partInfo, setPartInfo] = useState([]);
  useEffect(() => {
    const fetchCardData = async () => {
      const result = await API.retrieveSingleParticipants(regId);
      setParticipants(result.data.ages);
      setPartInfo(result.data);
    };
    fetchCardData();
  }, []);

  // const ages = participants.ages;

  console.log(partInfo);

  let card = [
    {
      id: 1,

      title: "Дети 6-7 лет(2013-2014)",
      male: 8,
      female: 10,
      total: function () {
        return this.male + this.female;
      },
    },
    {
      id: 2,

      title: "Дети 8-9 лет(2011-2012)",
      male: 28,
      female: 42,
      total: function () {
        return this.male + this.female;
      },
    },
    {
      id: 3,

      title: "Дети 10-11 лет(2009-2010) ",
      male: 18,
      female: 65,
      total: function () {
        return this.male + this.female;
      },
    },
  ];

  return (
    <>
      <div className="reglament wrapper" id="reglament__id">
        <div className="reglament__table-block">
          <table className="reglament__table">
            <thead>
              <tr className="reglament__table-title">
                <th>Возраст участников</th>
                <th>Муж</th>
                <th>Жен</th>
                <th>Сумма</th>
              </tr>
            </thead>
            <tbody>
              {participants.map((item) => {
                return (
                  <tr className="reglament__table-body" key={item.id}>
                    <td>{item.value} лет</td>
                    <td>{item.male}</td>
                    <td>{item.female}</td>
                    <td>{item.male + item.female}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <table className="reglament__total-table">
            <thead>
              <tr className="reglament__table-title">
                <th>Общая статистика</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr className="reglament__table-body">
                <td>Страны с конкурентами</td>
                <td>{props.regComp.countries_competitors}</td>
              </tr>
              <tr className="reglament__table-body">
                <td>Клубы|организации</td>
                <td>{props.regComp.clubs}</td>
              </tr>
              <tr className="reglament__table-body">
                <td>Конкуренты</td>
                <td>{props.regComp.competitors}</td>
              </tr>
              <tr className="reglament__table-body">
                <td>Тренеры</td>
                <td>{props.regComp.coaches}</td>
              </tr>
              <tr className="reglament__table-body">
                <td>Судьи</td>
                <td>{props.regComp.judges}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="reglament__program">
        <div className="reglament__program-block">
          <div className="reglament__program-left">
            <h2 className="subtitle program__title">Программа соревнований</h2>
            <p className="program__date">15 июля</p>
            <p className="program__time">
              Взвешивание и мандатная комиссия с 09:00 до 22:00
            </p>
            <h2 className="subtitle program__adress-title">Адрес</h2>
            <p className="program__adress">пр.Манаса 54, Спорт Арена</p>

            <h2 className="subtitle program__contacts-title">Контакты</h2>
            <p className="program__contacts-title">+996707999006 Абетеков </p>
          </div>
          <div className="reglament__program-right">
            <h2 className="subtitle program__trainers-title">
              Судьи соревнований
            </h2>
            <p className="program__trainers">
              Зарегестрировано: {props.regComp.judges}
            </p>

            <h2 className="subtitle program__protocol">Протокол</h2>
            <a
              style={{ color: "red", fontWeight: "600" }}
              href={props.regComp.datafile}
              className="program__trainers-protocol"
            >
              Протокол ссылка PDF
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default CompetitionReglament;
