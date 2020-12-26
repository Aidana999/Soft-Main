import React from "react";
// import "./competitionMain.css";
import CompetitionNav from "../competitionNavs";

const CompetitionComandTable = ({ allTeams }) => {
  console.log(allTeams);
  let table = [
    {
      id: 1,
      city: "Бишкек",
      organization: "Федерация Таэквондо Кыргызской Республики",
      participates: "10",
    },
    {
      id: 2,
      city: "Бишкек",
      organization: "Федерация Таэквондо Кыргызской Республики",
      participates: "10",
    },
    {
      id: 3,
      city: "Бишкек",
      organization: "Федерация Таэквондо Кыргызской Республики",
      participates: "10",
    },
    {
      id: 4,
      city: "Бишкек",
      organization: "Федерация Таэквондо Кыргызской Республики",
      participates: "10",
    },
    {
      id: 5,
      city: "Бишкек",
      organization: "Федерация Таэквондо Кыргызской Республики",
      participates: "10",
    },
    {
      id: 6,
      city: "Бишкек",
      organization: "Федерация Таэквондо Кыргызской Республики",
      participates: "10",
    },
    {
      id: 7,
      city: "Бишкек",
      organization: "Федерация Таэквондо Кыргызской Республики",
      participates: "10",
    },
    {
      id: 8,
      city: "Бишкек",
      organization: "Федерация Таэквондо Кыргызской Республики",
      participates: "10",
    },
    {
      id: 9,
      city: "Бишкек",
      organization: "Федерация Таэквондо Кыргызской Республики",
      participates: "10",
    },
    {
      id: 10,
      city: "Бишкек",
      organization: "Федерация Таэквондо Кыргызской Республики",
      participates: "10",
    },
  ];
  let totalTeam = allTeams.reduce((acc, cure) => acc + cure.team_count, 0);
  let newSet = allTeams.forEach((element) => {
    // let count = 0;
    // if (element.team_city !== element.team_city) {
    //   count++;
    // }
    return element.team_city;
  });
  console.log(newSet);

  return (
    <table>
      <thead>
        <tr className="rating-title">
          <th>#</th>
          <th>Город</th>
          <th>Команды</th>
          <th>Организация</th>
          <th>Участники</th>
        </tr>
      </thead>
      <tbody>
        {allTeams.map((item, i) => {
          return (
            <tr className="comands-rating" key={item.team_id}>
              <td>{i + 1}</td>
              <td>{item.team_city}</td>
              <td>{item.team_name}</td>
              <td>{item.team_organization}</td>
              <td>{item.team_count}</td>
            </tr>
          );
        })}
      </tbody>
      <tfoot>
        <tr className="comands-total">
          <th>{allTeams.length}</th>
          <th>1</th>
          <th>{allTeams.length}</th>
          <th>1</th>
          <th>{totalTeam}</th>
        </tr>
      </tfoot>
    </table>
  );
};
export default CompetitionComandTable;
