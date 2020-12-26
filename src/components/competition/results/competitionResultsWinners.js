import React from "react";
import winner from "../img/Ewinner.jpg";

const CompetitionResultsWinners = () => {
  let winners = [
    { id: 1, name: "Акматов Азамат", place: 1 },
    { id: 2, name: "Максимов Александр", place: 2 },
    { id: 3, name: "Алексеев Сергей", place: 3 },
  ];

  return (
    <div className="winners__block">
      {winners.map((item) => {
        return (
          <div className="winner__item" key={item.id}>
            <div className="winner__img">
              <img src={winner} />
            </div>
            <h2 className="winner__place">{item.place} место</h2>
            <p className="winner__name">{item.name}</p>
          </div>
        );
      })}
    </div>
  );
};
export default CompetitionResultsWinners;
