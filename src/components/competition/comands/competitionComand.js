import React from "react";
// import "./competitionMain.css";

import CompetitionComandTable from "./competitionComandTable";

const CompetitionComand = ({ allTeams }) => {
  return (
    <div className="comands wrapper">
      <CompetitionComandTable allTeams={allTeams} />
    </div>
  );
};
export default CompetitionComand;
