import React, { useState, useEffect } from "react";
// import "./competitionMain.css";
import CompetitionNav from "./competitionNavs";
import CompetitionTitle from "./competitionTitle";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CompetitionComand from "./comands";
import CompetitionParticipants from "./participants";
import CompetitionGrid from "./grid";
import CompetitionResults from "./results";

import CompetitionReglament from "./reglament";
import API from "../../API";

import Header from "../header/Header";
import Footer from "../footer/Footer";

const CompetitionInCard = (props) => {
  const [comp, setComp] = useState([]);

  const [teams, setTeams] = useState([]);
  const [cardId, getCardId] = useState(null);
  useEffect(() => {
    const fetchCardData = async () => {
      const result2 = await API.retrieveSingleCompetition(id).then(
        (response) => {
          setTeams(response.data.teams);
          return setComp(response.data);
        }
      );
    };
    const id = props.someId.match.params.CardId;
    getCardId(id);
    fetchCardData();
  }, []);

  // console.log(comp.translations.ru.name);
  // setTimeout(() => console.log(comp.translations.ru.name), 5000);
  // console.log(comp);
  return (
    <>
      <Header />
      <div className="InCard wrapper">
        <CompetitionTitle compTitle={comp} />
        <CompetitionNav navId={cardId} />

        <Route
          path={`/competition/:CardId/`}
          exact
          render={(props) => (
            <CompetitionReglament regId={props} regComp={comp} />
          )}
        />
        <Route
          path={`/competition/:CardId/comand`}
          render={() => <CompetitionComand allTeams={teams} />}
        />
        <Route
          path={`/competition/:CardId/participants`}
          render={() => <CompetitionParticipants partId={cardId} />}
        />

        <Route path={`/competition/:CardId/grid`} component={CompetitionGrid} />
        <Route
          path={`/competition/:CardId/results`}
          component={CompetitionResults}
        />
      </div>
      <Footer />
    </>
  );
};
export default CompetitionInCard;
