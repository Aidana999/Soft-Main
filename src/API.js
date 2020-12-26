import Axios from "axios";

const http = Axios.create({
    baseURL: "http://161.35.209.80/",
    headers: {"Content-Type": "application/json"},
});
export default {

    retrieveSingleSport: (id) => http.get(`main/sports/${id}/`),
    getSportsmenListBySport: (id) => http.get(`main/rating/?sport=${id}`),

    retrieveSingleParticipants: (id) =>
        http.get(`competition/participants_info/${id}/`),
    getSportsList: () => http.get("main/sports/"),
    getFederationsList: () => http.get("main/federation/"),
    getCitiesList: () => http.get("main/city/"),
    getListOfAllSports: () => http.get("main/"),
    getListOfPhoto: () => http.get("info/news/"),
    getListOfCompetition: () => http.get("competition/competition"),
    retrieveSingleCompetition: (id) => http.get(`competition/competition/${id}`),

    getNews: (page) => http.get(`info/news?page=${page}`),
    getSingleNews: (id) => http.get(`info/news/${id}`),
    allParticipants: (id) => http.get(`competition/participants/${id}`),
    getTable: (id) => http.get(`competition/table/${id}`),
    getGrid: (id) => http.get(`competition/team_match/`),

    registerUser: (body) => http.post("api/auth/register/", body),
};
