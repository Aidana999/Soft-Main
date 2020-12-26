import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
// import "./competitionMain.css";
import API from "../../../API";
import preloader from "../../preloader/Rolling-1s-200px.gif";

import CompetitionParticipantsMale from "./competitionParticipantsMale";

const CompetitionParticipantsCard = (props) => {
  let ages = [
    { id: 1, age: "Взрослые", years: "1976-2002" },
    { id: 2, age: "Юниоры", years: "2003-2005" },
    { id: 3, age: "Кадеты", years: "2006-2008" },
    { id: 4, age: "Дети 10-11 лет", years: "2009-2010" },
    { id: 5, age: "Дети 8-9 лет", years: "2011-2012" },
    { id: 6, age: "2011-2012", years: "2013-2014" },
  ];
  let [participants, setParticipants] = useState(null);
  let [male, setMale] = useState([]);
  let [female, setFemale] = useState([]);
  let [maleTotal, setMaleTotal] = useState(null);
  let [feMaleTotal, setFemaleTotal] = useState(null);

  useEffect(() => {
    API.retrieveSingleParticipants(props.partCardId).then((r) => {
      setParticipants(r.data);
    });
    API.retrieveSingleParticipants(props.partCardId).then((r) => {
      setMaleTotal(r.data.male.total);
      setFemaleTotal(r.data.female.total);
      setMale(r.data.male.weights);
      setFemale(r.data.female.weights);
    });
    API.allParticipants(props.partCardId).then((r) => {
      let weightFilter = r.data.filter(
        (item) => item.weight > 86 && 102 > item.weight
      );
    });
  }, []);

  // debugger;
  if (!participants) {
    return <img src={preloader} />;
  }
  return (
    <>
      <div className="part-list">
        {participants.ages.map((item) => {
          return (
            <div className="part-list__item" key={item.id}>
              {/* <img src={juniors} alt="juniors"></img> */}
              <div className="part-inner-text">
                <p className="part-text__title">{item.name}</p>

                <p className="part-text__ages">{item.value} лет</p>
              </div>
            </div>
          );
        })}
      </div>
      <h2 className="categ__title">Мужчины-{maleTotal}</h2>
      <div className="weights-male">
        {male.map((item) => {
          return (
            <CompetitionParticipantsMale
              key={item.weight.id}
              {...item}
              compId={props.partCardId}
            />
          );
        })}
      </div>
      <h2 className="categ__title">Женщины-{feMaleTotal}</h2>
      <div className="weights-female">
        {female.map((item) => {
          return <CompetitionParticipantsMale key={item.weight.id} {...item} />;
        })}
      </div>
    </>
  );
};
export default CompetitionParticipantsCard;
