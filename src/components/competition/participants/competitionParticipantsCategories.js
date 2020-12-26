import React from "react";
// import "./competitionMain.css";
import CompetitionParticipantsMale from "./competitionParticipantsMale";

const CompetitionParticipantsCategories = () => {
  let categ = {
    male: [
      { id: 1, weight: 48 },
      { id: 2, weight: 53 },
      { id: 3, weight: 65 },
      { id: 4, weight: 73 },
      { id: 5, weight: 85 },
    ],
    female: [
      { id: 1, age: "Взрослые", years: "1976-2002" },
      { id: 2, age: "Юниоры", years: "2003-2005" },
      { id: 3, age: "Кадеты", years: "2006-2008" },
      { id: 4, age: "Дети 10-11 лет", years: "2009-2010" },
      { id: 5, age: "Дети 8-9 лет", years: "2011-2012" },
      { id: 6, age: "2011-2012", years: "2013-2014" },
    ],
  };

  let under58 = categ.male.filter((item) => {
    return item.weight < 58;
  });

  return (
    <div className="part-categ">
      <h2 className="categ__title">Мужчины-{categ.male.length}</h2>
      <div className="categ__block">
        <CompetitionParticipantsMale />
        <CompetitionParticipantsMale />
        <CompetitionParticipantsMale />
        <CompetitionParticipantsMale />
      </div>
      <h2 className="categ__title">Женщины-{categ.male.length}</h2>
      <div className="categ__block">
        <CompetitionParticipantsMale />
        <CompetitionParticipantsMale />
        <CompetitionParticipantsMale />
        <CompetitionParticipantsMale />
      </div>
    </div>
  );
};
export default CompetitionParticipantsCategories;
