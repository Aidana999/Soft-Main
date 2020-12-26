import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import CompetitionGridTable from "./competitionGridTable";
import API from "../../../API";

const CompetitionGrid = () => {
  const [grid, setGrid] = React.useState([]);
  React.useEffect(() => {
    API.getGrid().then((grid) => setGrid(grid));
  }, []);

  console.log(grid.data);
  return (
    <div className="grid wrapper">
      <div className="grid__subtitle">
        <h2 className="passed-sports">
          Спортсмены которые прошли на следующий этап
        </h2>
        <h2 className="passed-weight">-58 кг, 2002 года</h2>
      </div>

      {/* <Route render={() => <CompetitionParticipants />} />
      <Route
        path={`competition/:CardId/grid/table`}
        render={() => <CompetitionGridTable />}
      /> */}

      <a href="#" className="back">
        Вернуться назад
      </a>
    </div>
  );
};
export default CompetitionGrid;
