import React, {useEffect, useState} from "react";
import "./news.css"
import {Link} from "react-router-dom";
import API from "../../API";
import add from "../sport-type/basketbol.png";
import Pagination from "../pagination/pagination";


const NewsComponent = (props) => {
    const [federationId, setFederationId] = useState(props.federationId || null)
    const [sportList, setSportList] = useState()
    const [filteredSportList, setFilteredSportList] = useState()
    const [pagination, setPagination] = useState(0)
    const [page, setPage] = useState(0)
    const [data, setData] = useState(null)


    useEffect(() => {
        const fetchData = async () => {
            const result = await API.getNews(page)
            setPagination(Math.ceil(result.data.results.length / 10))
            setData(result.data.results)
            console.log(result.data)
        }
        fetchData()
    }, [])

    useEffect(() => {
        const fetchData = async () => {
            const result = await API.getSportsList()
            setSportList(result.data)
            console.log(result.data)
        }
        fetchData()
    }, [])

    const filterSportList = (type) => {
        let filteredList = sportList.filter((item) => {
            return item.sport_type === type
        })
        setFilteredSportList(filteredList)
    }


    return (
        <div className="news-component">
            <h1>Новости</h1>
            {!federationId ?
                <div className="main-select-sport">
                    <div className="select-sport">
                        <select className="select-sport__select" onChange={(e) => {
                            filterSportList(e.target.value)
                        }}>
                            <option value="" disabled selected>---Выберите категорию спорта---</option>
                            <option value="Национальные виды спорта">Национальные виды спорта</option>
                            <option value="Олимпийские виды спорта">Олимпийские виды спорта</option>
                            <option value="Неолимпийские виды спорта">Неолимпийские виды спорта</option>
                            <option value="Виды спортов Пара и Сурдо (ЛОВЗ)">Виды спортов Пара и Сурдо (ЛОВЗ)</option>
                        </select>
                    </div>
                    <div className="select-sport">
                        {filteredSportList ?
                            <select onChange={(e) => setFederationId(e.target.value)}>
                                <option value="" disabled selected>---Выберите вид спорта---</option>
                                {filteredSportList ? filteredSportList.map((item, id) => (
                                    <option value={item.id}>{item.name}</option>
                                )) : <></>}

                            </select> : <select disabled/>}
                    </div>
                </div> : <></>
            }

            <div className="wrapper-new style">
                {data?.map((item, id) => (
                    <div className="new">
                        <img src={item.image} alt=""/>
                        <div className="new-text">
                            <p>Последние новости</p>
                            <h4>{item.title}</h4>
                            <a href="">Подробнее...</a>
                        </div>
                    </div>
                ))}
            </div>
            <Pagination setPage={setPage} pageCount={pagination}/>

        </div>
    )
}


export default NewsComponent;