import React from "react";
// import "./competitionMain.css";
import CompetitionGridBlock1 from "./competitionGridBlock1";
import CompetitionGridBlock2 from "./competitionGridBlock2";
import CompetitionGridBlock3 from "./competitionGridBlock3";

const CompetitionGridTable = () => {
  return (
    <div className="grid__body">
      <CompetitionGridBlock1 />
      <CompetitionGridBlock2 />
      <CompetitionGridBlock3 />
    </div>
  );
};
export default CompetitionGridTable;
