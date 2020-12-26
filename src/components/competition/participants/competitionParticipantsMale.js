import React, { useState } from "react";
import { Link } from "react-router-dom";
// import "./competitionMain.css";

const CompetitionParticipantsMale = (props) => {
  // const { total } = props;
  let [agesData, setAgesData] = React.useState(null);
  // React.useEffect(() => {
  //   const { total } = props;
  //   setAgesData(total);
  // }, []);
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
  console.log(props);
  return (
    <Link to={`/table/${props.weight.value}/${props.compId}`}>
      <div className="categ__item">
        <p className="categ__length">{props.number_of_athletes}</p>

        <p className="categ__weight">{props.weight.value}</p>
      </div>
    </Link>
  );
};
export default CompetitionParticipantsMale;
