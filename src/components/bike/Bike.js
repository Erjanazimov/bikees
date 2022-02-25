import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchBike, fetchBikeInfo} from "../../store/bikeSlice";

function Bike(){
    const dispatch = useDispatch();
    const bikeState = useSelector(state => state.byBike.bike)

    useEffect(() => {
        dispatch(fetchBike())
    }, [])
    const bikeMap = bikeState.map(bike => {
        return <div key={bike.id}>
            <p>
                <img onClick={() => infoBikeBtn(bike.id)} data-bs-toggle="modal" data-bs-target="#exampleModalBike" className="bike_img" src={bike.cover_image}/> </p>
            <div className="bg-bike">
                <h5>{bike.brand_name}</h5>
                <div className="d-flex justify-content-between align-items-center">
                    <p className="info_bike">
                        {bike.price} сом</p>
                    <div className="d-flex ">
                        <p className="btn btn-outline-secondary bike_btn mx-2"
                           data-bs-toggle="modal" data-bs-target="#exampleModalDate">?</p>
                        <p className="btn btn-outline-secondary bike_btn">+</p>
                    </div>
                </div>
            </div>

        </div>
    })

    const infoBikeBtn = (id) => {
        dispatch(fetchBikeInfo(id))
    }

    return (
        <>
        <div className="p-2 fonsMargin">
            <div className="fons_banner">

                <div className="pb-5">
                    <p className="text_date px-3 pt-4 px-5">Тип велосипеда</p>
                    <div className="flex_bike">
                        <div className="search_flex">
                        <div>
                            <div className="pb-2 text_date">Бренд</div>
                        <select className="form-select form-select-lg mb-3 slec2" aria-label=".form-select-lg example">
                            <option selected>Все</option>
                            <option value="1">Городской</option>
                            <option value="2">Спортивный</option>
                            <option value="3">Горный</option>
                        </select>
                        </div>
                        <div>
                            <div className="pb-2 text_date">Размер рамы</div>
                            <select className="form-select form-select-lg mb-3 slec2" aria-label=".form-select-lg example">
                            <option selected>Все</option>
                            <option value="1">XS</option>
                            <option value="2">S</option>
                            <option value="3">M</option>
                            <option value="3">L</option>
                            <option value="3">XL</option>
                            <option value="3">XXL</option>
                        </select>
                        </div>
                        </div>
                        <div className="input-group input_search">
                            <input type="text" className="form-control" placeholder="Поиск велика"
                                   aria-label="Recipient's username" aria-describedby="button-addon2"/>
                                <button className="btn btn-outline-secondary" type="button" id="button-addon2">Найти
                                </button>
                        </div>

                    </div>
                    <div className="bike_flex">
                        {bikeState.length ? bikeMap : "Loading"}
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Bike;