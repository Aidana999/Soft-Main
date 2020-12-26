import React from "react";
// import "./competitionMain.css";

import CompetitionResultsWinners from "./competitionResultsWinners";
import CompetitionResultsTable from "./competitionResultsTable";

const CompetitionResults = () => {
  return (
    <div className="results wrapper">
      <h2 className="results__title">Призеры -58 кг, 2002 года рождения</h2>
      <CompetitionResultsWinners />
      <h2 className="results__all-title">Результаты всех этапов меропрятия</h2>
      <CompetitionResultsTable />

      <a href="#" className="back">
        Вернуться назад
      </a>
    </div>
  );
};
export default CompetitionResults;
