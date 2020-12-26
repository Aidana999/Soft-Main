import React from "react";
// import "./competitionMain.css";
import { Route, useParams } from "react-router-dom";

import CompetitionParticipantsCard from "./competitionParticipantsCard";

const CompetitionParticipants = (props) => {
  console.log(window.location.pathname);

  // const partId = props;
  console.log(props.partId);
  return (
    <div className="particants wrapper">
      <CompetitionParticipantsCard partCardId={props.partId} />
    </div>
  );
};
export default CompetitionParticipants;
