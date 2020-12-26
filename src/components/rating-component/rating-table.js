import React, {useEffect, useState} from "react";
import "./rating-table.css";
import API from "../../API";

const RatingTable = (props) => {
    const [sportsmenList, setSportsmenList] = useState([])

    useEffect(() => {
            const fetchData = async () => {
                const result = await API.getSportsmenListBySport(props.federationId);
                setSportsmenList(result.data)
                console.log(result.data)
            }
        fetchData()
        }, []
    )
    let rating = [
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
        <div className="rating-table">
            <h1 className="title global-sport__title">{sportsmenList.length ? sportsmenList[0].category : ""}</h1>
            <h1 className="title type-sport__title">{sportsmenList.length ? sportsmenList[0].sport : ""}</h1>
            <form className="rating-table__search">
                <div className="rating-table__block">
                    <label className="search__sportsman">
                        <h3>Спортсмен</h3>
                        <input type="text" className="sportsman-search"/>
                    </label>
                    <label className="search__weight">
                        <h3>Весовая категория</h3>
                        <input type="text" className="weight-search"/>
                    </label>
                    <label className="search__organization">
                        <h3>Название организации</h3>
                        <input type="text" className="organization-search"/>
                    </label>
                </div>

                <input type="submit" className="search-button"/>
            </form>
            <table className="rating__table-list">
                <thead>
                <tr className="rating__table-title">
                    <th>Ранг</th>
                    <th>ФИО</th>
                    <th>Страна</th>

                    <th>Баллы</th>
                </tr>
                </thead>
                <tbody>
                {sportsmenList.length ?
                        sportsmenList.map((item,id) => {
                            return (
                                <tr className="rating__table-body" key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.full_name}</td>
                                    <td>{item.team_info.split(",")[1].trim()}</td>

                                    <td>{item.pts}</td>
                                </tr>
                            );
                        })
                     : <></>
                }
                </tbody>
            </table>
        </div>
    );
};
export default RatingTable;
