import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import MainPage from "./client-page/Main-page";
import ContactsPage from "./client-page/Contacts-page";
import AboutUsPage from "./client-page/AboutUs-page";
import FederationPage from "./client-page/Federation-page";
import RatingPage from "./client-page/Rating-page";
import NewsPage from "./client-page/News-page";
import CompetitionPage from "./client-page/Competition-page";
import Registration from "./components/registration/registration";
import MentorForm from "./components/registration/mentor-form";
import MainNews from "./components/news/mainNews";
import CompetitionInCard from "./components/competition/competitionInCard";

import AboutUsSinglePage from "./client-page/About-us-for-single-sport-page";
import ParticipantsTable from "./components/competition/participants/participantsTable";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/about-us" exact component={AboutUsPage} />
          <Route
            path="/about-us/:federationId"
            exact
            component={AboutUsSinglePage}
          />
          <Route path="/contacts" exact component={ContactsPage} />

          <Route
            path="/contacts/:federationId"
            exact
            component={ContactsPage}
          />
          <Route
            path="/federations/:federationId"
            exact
            component={FederationPage}
          />
          <Route path="/federations" exact component={FederationPage} />

          <Route path="/competition" exact component={CompetitionPage} />
          <Route
            path="/competition/:CardId"
            render={(props) => <CompetitionInCard someId={props} />}
          />
          <Route
            path="/table/:valueId/:compId"
            render={(props) => <ParticipantsTable valueId={props} />}
          />
          <Route path="/rating/:federationId" exact component={RatingPage} />
          <Route path="/rating" exact component={RatingPage} />
          <Route path="/news" exact component={NewsPage} />
          <Route path="/news/:id" exact component={MainNews} />
          <Route path="/news/:federationId" exact component={NewsPage} />

          <Route path="/login" exact component={Registration} />
          <Route path="/mentor-form" exact component={MentorForm} />
          <Route path="/judge-form" exact component={MentorForm} />
          {/*<Route path="/judge-form" exact component={MainPage}/>*/}
          {/* <Route path="*" component={NotFound} /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
