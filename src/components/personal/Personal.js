import React from 'react';
import {useSelector} from "react-redux";
import PersonalInfo from "./personalInfo/PersonalInfo";
import Orders from "./orders/Orders";
import OrderDetails from "./orderDetails/OrderDetails";

const Personal = () => {
    const personaState = useSelector(state => state.login);
    const personaInfoRef = React.createRef();
    const ordersRef = React.createRef();
    const orderDetailsRef = React.createRef();
    const linkRef = React.createRef();
    const LinkPersonalInfo = React.createRef();
    const LinkOrderDet = React.createRef();
    const LinkOrders = React.createRef();

    const orderBtn = () => {
        personaInfoRef.current.classList.remove("d-block");
        personaInfoRef.current.classList.add("d-none");
        ordersRef.current.classList.remove("d-none");
        ordersRef.current.classList.add("d-block");
        orderDetailsRef.current.classList.remove("d-block");
        orderDetailsRef.current.classList.add("d-none");
        LinkOrders.current.classList.add("active_modal");
        LinkOrderDet.current.classList.remove("active_modal");
        LinkPersonalInfo.current.classList.remove("active_modal");
    }

    const orderDetailsBtn = () => {
        personaInfoRef.current.classList.remove("d-block");
        personaInfoRef.current.classList.add("d-none");
        ordersRef.current.classList.remove("d-block");
        ordersRef.current.classList.add("d-none");
        orderDetailsRef.current.classList.remove("d-none");
        orderDetailsRef.current.classList.add("d-block");
        LinkOrders.current.classList.remove("active_modal");
        LinkOrderDet.current.classList.add("active_modal");
        LinkPersonalInfo.current.classList.remove("active_modal");
    }

    const personalInfoBtn = (e) => {
        personaInfoRef.current.classList.remove("d-none");
        personaInfoRef.current.classList.add("d-block");
        ordersRef.current.classList.remove("d-block");
        ordersRef.current.classList.add("d-none");
        orderDetailsRef.current.classList.remove("d-block");
        orderDetailsRef.current.classList.add("d-none");
        LinkOrders.current.classList.remove("active_modal");
        LinkOrderDet.current.classList.remove("active_modal");
        LinkPersonalInfo.current.classList.add("active_modal")
    }

    return (
        <div className="p-2 fonsMargin">
            <div className="fons_banner px">
                <div>
            {personaState.token ?
                <div className="pg">
                    <div ref={linkRef} className="flex_personal">
                        <div ref={LinkOrderDet} onClick={orderDetailsBtn}>Текущие заказы</div>
                        <div ref={LinkOrders} onClick={orderBtn}>Выполненные заказы</div>
                        <div ref={LinkPersonalInfo} className="active_modal" onClick={personalInfoBtn}>Личные данные</div>
                    </div>
                    <div>
                        <div ref={personaInfoRef} className="d-block">
                        <PersonalInfo/>
                        </div>
                        <div ref={ordersRef} className="d-none">
                        <Orders/>
                        </div>
                        <div ref={orderDetailsRef} className="d-none">
                        <OrderDetails/>
                        </div>
                    </div>
                </div>

                : <h2>Войдите в свой аккаунт</h2>
            }
        </div>
            </div>
        </div>
    );
};

export default Personal;