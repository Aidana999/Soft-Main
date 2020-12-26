import React from "react";
// import "./competitionMain.css";

import API from "../../../API";
import { useParams } from "react-router-dom";

const ParticipantsTable = (props) => {
  let { compId, valueId } = useParams(props);

  let valueStart = valueId.split("-").map((item) => Number(item));

  console.log(valueStart);

  let [values, setValues] = React.useState([]);

  React.useEffect(() => {
    API.allParticipants(compId).then((r) => {
      let weightFilter = r.data.filter((item) => {
        return item.weight >= valueStart[0] && valueStart[1] >= item.weight;
      });
      setValues(weightFilter);
    });
  }, []);

  console.log(values);

  return (
    <div className="results wrapper">
      <h2 className="results__all-title">
        Участники в весовых категориях {valueId} кг
      </h2>
      {/* <CompetitionResultsTable  wieghtValues = {values}/> */}
      <table className="winners__table">
        <thead>
          <tr className="winners__table-title">
            <th>#</th>
            <th>ФИО</th>
            <th>Город</th>
            <th>Спорт</th>
            <th>Возраст</th>
          </tr>
        </thead>
        <tbody>
          {values.map((item, i) => {
            return (
              <tr className="winners__table-body" key={item.id}>
                <td>{i + 1}</td>
                <td>{item.full_name}</td>
                <td>{item.team_info}</td>
                <td>{item.sport}</td>
                <td>{item.age}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <a href="#" className="back">
        Вернуться назад
      </a>
    </div>
  );
};
export default ParticipantsTable;
