import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {userEdit} from "../../../store/usersInfoSlice";

const PersonalInfo = () => {
    const personalInfoState = useSelector(state => state.infoUsers.info);
    const dispatch = useDispatch();

    const reditUser = (event) => {
        console.log(personalInfoState)
        event.preventDefault();
    }

    const infoHandler = (name, e) => {
        dispatch(userEdit({[name]:e}))
    }

    return (
        <div>
            <h2 className="pt-3">Личный кабинет</h2>
            <div>
                <div>
                    <form onSubmit={reditUser}>
                        <div className="d-flex justify-content-around">
                    <div className="mb-4">
                        <label htmlFor="exampleInputName" className="text_date pb-2">Имя</label>
                        <input onChange={(e) => infoHandler("name", e.target.value)}  required type="name" className="form-control" id="exampleInputName"
                               aria-describedby="nameHelp" placeholder="Введите имя" value={personalInfoState.name}/>
                    </div>
                    <div>
                        <label htmlFor="exampleInputEmail" className="text_date pb-2">E-mail</label>
                        <input onChange={(e) => infoHandler("email", e.target.value)}   required type="email"
                                className="form-control" id="exampleInputEmail"
                                aria-describedby="emailHelp" placeholder="Введите E-mail" value={personalInfoState.email}/>
                    </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="text_date pb-2">Пароль</label>
                            <input onChange={(e) => infoHandler("password", e.target.value)}   required type="password" className="form-control"
                                    id="exampleInputPassword1" placeholder="Введите пароль" value={personalInfoState.password}
                            />
                        </div>
                        <div>
                            <label htmlFor="exampleInputNumber" className="text_date pb-2">Номер телефона*</label>
                            <input onChange={(e) => infoHandler("phone_number", e.target.value)}  required type="name"
                                   className="form-control" id="exampleInputNumber"
                                   aria-describedby="numberHelp" placeholder="+999 999 999"
                                   value={personalInfoState.phone_number}
                            />
                        </div>
                        </div>
                        <button type="submit" className="btn btn-primary form-control fw-bold">Сохранить</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PersonalInfo;