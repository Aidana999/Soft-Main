import React from "react";
import { NavLink } from "react-router-dom";
const CompetitionNav = (props) => {
  const { navId } = props;
  console.log(window.location.pathname);
  console.log(props.navId);
  return (
    <div className="nav wrapper">
      <nav className="nav__btns">
        <NavLink
          // activeStyle={{
          //   backgroundColor: "#ed2840",
          //   color: "white",
          // }}
          to={`/competition/${navId}/`}
        >
          Регламент
        </NavLink>
        <NavLink
          activeStyle={{
            backgroundColor: "#ed2840",
            color: "white",
          }}
          to={`/competition/${navId}/comand`}
        >
          Команда
        </NavLink>
        <NavLink
          activeStyle={{
            backgroundColor: "#ed2840",
            color: "white",
          }}
          to={`/competition/${navId}/participants`}
        >
          Участники
        </NavLink>
        <NavLink
          activeStyle={{
            backgroundColor: "#ed2840",
            color: "white",
          }}
          to={`/competition/${navId}/grid`}
        >
          Сетки
        </NavLink>
        <NavLink
          activeStyle={{
            backgroundColor: "#ed2840",
            color: "white",
          }}
          to={`/competition/${navId}/results`}
        >
          Результаты
        </NavLink>
      </nav>
    </div>
  );
};
export default CompetitionNav;
