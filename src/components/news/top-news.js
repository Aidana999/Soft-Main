import React from "react";
import "./news.css";

import ais from "./1597392046_tynybekova.jpg";
import dj from "./1597867583_novye-pravila-dzjudo.jpg";
import alykolov from "./1598607672_alykulov-zhdali-gola.jpeg";

const TopNews = () => {
  let info = [
    {
      name: "Молодежный чемпионат мира по тяжелой атлетике пройдет в онлайн-формате.",
      img: ais
    }, {
      name: "«Лучший борец Азии-2019»: Айсулу Тыныбекова заняла второе место",
      img: dj
    },
    {
      name: "Гулжигит Алыкулов: «В Кыргызстане ждали моего гола, и это произошло»",
      img: alykolov
    }
  ];
  return (
    <div className="wrapper-news">
      {info.map((item, id) => (
        <div className="new">
          <img src={item.img} alt="" />
          <div className="new-text">
            <p>Последние новости</p>
            <h4>{item.name}</h4>
            <a href="">Подробнее...</a>
          </div>
        </div>
      ))}
    </div>
  );
};
export default TopNews;
