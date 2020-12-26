import React, { useState } from "react";
// import "./competitionMain.css";

const CompetitionTitle = (props) => {
  // let arr = [props.compTitle];

  // setTitle(props.compTitle);

  // console.log(translations);

  const { date_start, date_end, name } = props.compTitle;

  return (
    <>
      <h1 className="title comand__title">{name}</h1>
      <div className="date-status">
        <span className="start-date comand__date">{date_start}</span>
        <span className="end-date comand__date title-date">{date_end}</span>
      </div>
    </>
  );
};
export default CompetitionTitle;
