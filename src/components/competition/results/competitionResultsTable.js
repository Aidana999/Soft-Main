import React from "react";
// import "./competitionMain.css";

const CompetitionResultsTable = (props) => {
  let [weight, setWeight] = React.useState();

  let table = [
    {
      id: 1,
      fullname: "Aзамат Каримов",
      city: "Бишкек",
      organization: "Федерация Таэквондо Кыргызской Республики",
      points: "10",
    },
    {
      id: 2,
      fullname: "Aзамат Каримов",
      city: "Бишкек",
      organization: "Федерация Таэквондо Кыргызской Республики",
      points: "10",
    },
    {
      id: 3,
      fullname: "Aзамат Каримов",
      city: "Бишкек",
      organization: "Федерация Таэквондо Кыргызской Республики",
      points: "10",
    },
    {
      id: 4,
      fullname: "Aзамат Каримов",
      city: "Бишкек",
      organization: "Федерация Таэквондо Кыргызской Республики",
      points: "10",
    },
    {
      id: 5,
      fullname: "Aзамат Каримов",
      city: "Бишкек",
      organization: "Федерация Таэквондо Кыргызской Республики",
      points: "10",
    },
    {
      id: 6,
      fullname: "Aзамат Каримов",
      city: "Бишкек",
      organization: "Федерация Таэквондо Кыргызской Республики",
      points: "10",
    },
    {
      id: 7,
      fullname: "Aзамат Каримов",
      city: "Бишкек",
      organization: "Федерация Таэквондо Кыргызской Республики",
      points: "10",
    },
    {
      id: 8,
      fullname: "Aзамат Каримов",
      city: "Бишкек",
      organization: "Федерация Таэквондо Кыргызской Республики",
      points: "10",
    },
    {
      id: 9,
      fullname: "Aзамат Каримов",
      city: "Бишкек",
      organization: "Федерация Таэквондо Кыргызской Республики",
      points: "10",
    },
    {
      id: 10,
      fullname: "Aзамат Каримов",
      city: "Бишкек",
      organization: "Федерация Таэквондо Кыргызской Республики",
      points: "10",
    },
  ];

  return (
    <table className="winners__table">
      <thead>
        <tr className="winners__table-title">
          <th>#</th>
          <th>ФИО</th>
          <th>Город</th>
          <th>Организация</th>
          <th>Баллы</th>
        </tr>
      </thead>
      <tbody>
        {table.map((item) => {
          return (
            <tr className="winners__table-body" key={item.id}>
              <td>{item.id}</td>
              <td>{item.fullname}</td>
              <td>{item.city}</td>
              <td>{item.organization}</td>
              <td>{item.points}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default CompetitionResultsTable;
