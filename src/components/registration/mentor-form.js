import React, {useEffect, useState} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {Field, Form, Formik} from "formik";
import {Row, Col} from 'react-flexbox-grid';
import "./registration.css"
import {Link} from "react-router-dom";
import API from "../../API";
import axios from 'axios'

const MentorForm = () => {
    const [federationsList, setFederationsList] = useState([])
    const [citiesList, setCitiesList] = useState([])
    const [sportsList, setSportsList] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const result = await API.getFederationsList();
            setFederationsList(result.data);
        };
        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const result = await API.getCitiesList();
            setCitiesList(result.data);
        };
        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const result = await API.getSportsList();
            setSportsList(result.data);
        };
        fetchData();
    }, []);

    const handleOnSubmit = (values) =>  {
        let postRequest = {
            "username": values.login,
            "first_name": values.name,
            "last_name": values.surname,
            "email": values.email,
            "password": values.password,
            "password2": values.password2,
            "info": {
                "sport": values.sport,
                "city": values.city,
                "federation": values.federation
            }
        }
        API.registerUser(postRequest).then(resolve => {
            console.log(resolve.data)
        })
            .catch(error => {
                console.log(error)
            })
    };

    return (
        <div className="wrapper-registration-form">

            <div className="registration-form">
                <div className="registration-form-header">
                    <h1>Регистрация</h1>
                    <Link to={"/"}><FontAwesomeIcon icon={faTimes}/></Link>
                </div>
                <Formik
                    initialValues={{
                        email: '',
                        password: '',
                        password2: '',
                        surname: '',
                        name: '',
                        middleName: '',
                        login: '',
                        phoneNumber: '',
                        city: '',
                        federation: ''
                    }}
                    validate={values => {
                        const errors = {};
                        if (!values.email) {
                            errors.email = 'Required';
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        ) {
                            errors.email = 'Invalid email address';
                        }
                        return errors;
                    }}
                    onSubmit={handleOnSubmit}
                >
                    <Form>
                        <Row>
                            <Col md={5}>
                                <Field type="surname"
                                       name="surname"
                                       id="surname"
                                       placeholder="*Фамилия"
                                       className="one-input"
                                />
                                <Field
                                    type="name"
                                    name="name"
                                    className="one-input"
                                    placeholder="*Имя"
                                />
                                <Field
                                    type="middleName"
                                    name="middleName"
                                    id="middleName"
                                    className="one-input"
                                    placeholder="*Отечество"
                                />
                                <Field
                                    name="federation"
                                    id="federation"
                                    className="one-input"
                                    placeholder="*Тренер какой федерации"
                                    as="select"
                                >
                                    <option value="" disabled selected>---Выберите федерацию---</option>
                                    {federationsList.map((item, id) => (
                                        <option key={id} value={item.id}>{item.name}</option>
                                    ))}
                                </Field>
                                <Field
                                    name="city"
                                    id="city"
                                    className="one-input"
                                    placeholder="*Город"
                                    as="select"
                                >
                                    <option value="" disabled selected>---Выберите город---</option>
                                    {citiesList.map((item, id) => (
                                        <option key={id} value={item.id}>{item.name}</option>
                                    ))}
                                </Field>
                                <Field
                                    name="sport"
                                    id="sport"
                                    className="one-input"
                                    placeholder="*Вид спорта"
                                    as="select"
                                >
                                    <option value="" disabled selected>---Выберите спорт---</option>
                                    {sportsList.map((item, id) => (
                                        <option key={id} value={item.id}>{item.name}</option>
                                    ))}
                                </Field>
                                <button type="submit">Зарегистрировать</button>
                            </Col>
                            <Col md={5}>
                                <Field type="text"
                                       name="phoneNumber"
                                       id="phoneNumber"
                                       className="one-input"
                                       placeholder="*Номер телефона"
                                />
                                <Field type="login"
                                       name="login"
                                       id="login"
                                       className="one-input"
                                       placeholder="*Логин"
                                />
                                <Field type="password"
                                       name="password"
                                       className="one-input"
                                       placeholder="*Пароль"
                                />
                                <Field type="password"
                                       name="password2"
                                       className="one-input"
                                       placeholder="*Повторите пароль"
                                />

                                <Field type="email"
                                       name="email"
                                       className="one-input"
                                       placeholder="*E-mail"
                                />

                            </Col>
                        </Row>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}
export default MentorForm;