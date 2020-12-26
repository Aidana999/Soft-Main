import React from "react";
import "./registration.css";
import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <div className="wrapper-registration">
      <div className="login">
        <div className="text">
          <h1>Регистрация</h1>
          <p>Выберите роль</p>
        </div>
        <div className="save-buttons">
          <Link to="/mentor-form">
            <button className="mentor">Тренер</button>
          </Link>
          <Link to="/judge-form">
            <button className="judge">Судья</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Registration;
