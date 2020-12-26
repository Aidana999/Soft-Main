import React, { useState, useEffect } from "react";
import anibus from "./anibus2.png";
import add from "../sport-type/basketbol.png";
import { Link } from "react-router-dom";
import CompetitionMainSelect from "./competitionMainSelect";
import API from "../../API";
import preloader from "./../preloader/Rolling-1s-200px.gif";

const CompetitionCard = (props) => {
  const [Acard, setCard] = useState();
  useEffect(() => {
    API.getListOfCompetition().then((result) => setCard(result.data));
  }, []);

  const activeCard = (dateEnd) => {
    let end = new Date(
      Number(dateEnd.split("-")[0]),
      Number(dateEnd.split("-")[1]) - 1,
      Number(dateEnd.split("-")[2])
    );
    console.log(end);
    let now = Date.now();
    console.log(now);
    if (end >= now) {
      let active = <p style={{ color: "green" }}>Активно</p>;

      return active;
    } else {
      return "Завершено";
    }
  };
  let div = (
    <div className="preloader">
      <img src={preloader} />
    </div>
  );

  if (!Acard) {
    return div;
  }

  let card = [
    {
      id: 1,
      img: anibus,
      title: "Открытое первенство по Таэквондо ВТФ",
      country: "Казахстан",
      city: "Тараз",
      start: "14.03.2020",
      end: "15.03.2020",
      active: false,
    },
    {
      id: 2,
      img: add,
      title: "Открытое первенство по Таэквондо ВТФ",
      country: "Казахстан",
      city: "Тараз",
      start: "14.03.2020",
      end: "15.03.2020",
      active: false,
    },
    {
      id: 3,
      img: anibus,
      title: "Открытое первенство по Таэквондо ВТФ",
      country: "Казахстан",
      city: "Тараз",
      start: "14.03.2020",
      end: "15.03.2020",
      active: false,
    },

    {
      id: 4,
      img: anibus,
      title: "Открытое первенство по Таэквондо ВТФ",
      country: "Казахстан",
      city: "Тараз",
      start: "14.03.2020",
      end: "15.03.2020",
      active: false,
    },
    {
      id: 5,
      img: anibus,
      title: "Открытое первенство по Таэквондо ВТФ",
      country: "Казахстан",
      city: "Тараз",
      start: "14.03.2020",
      end: "15.03.2020",
      active: false,
    },
    {
      id: 6,
      img: anibus,
      title: "Открытое первенство по Таэквондо ВТФ",
      country: "Казахстан",
      city: "Тараз",
      start: "14.03.2020",
      end: "15.03.2020",
      active: false,
    },
    {
      id: 7,
      img: anibus,
      title: "Открытое первенство по Таэквондо ВТФ",
      country: "Казахстан",
      city: "Тараз",
      start: "14.03.2020",
      end: "15.03.2020",
      active: false,
    },
    {
      id: 8,
      img: anibus,
      title: "Открытое первенство по Таэквондо ВТФ",
      country: "Казахстан",
      city: "Тараз",
      start: "14.03.2020",
      end: "15.03.2020",
      active: false,
    },
    {
      id: 9,
      img: anibus,
      title: "Открытое первенство по Таэквондо ВТФ",
      country: "Казахстан",
      city: "Тараз",
      start: "14.03.2020",
      end: "15.03.2020",
      active: true,
    },
  ];

  return (
    <div className="card wrapper">
      <h1 className="competition__title">Соревнования </h1>
      <CompetitionMainSelect />
      <div className="card__body">
        {div &&
          Acard.map((item) => {
            return (
              <Link key={item.id} to={`/competition/${item.id}`}>
                <div className="card__item">
                  <img src={anibus} alt="sport flag" />
                  <div className="card__wrapper">
                    <h3 className="card__title">{item.name}</h3>
                    <p className="card__location">
                      {item.city.name}, {item.country.name}
                    </p>
                    <span className="card__date start-date">
                      {item.date_start}
                    </span>
                    <span className="card__date end-date">{item.date_end}</span>
                    <hr />
                    <div className="card__status">
                      {activeCard(item.date_end)}
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
};
export default CompetitionCard;
