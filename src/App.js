import React, {useEffect} from "react";
import "./global_css/css/style.css";
import "./global_css/css/media.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Router from "./route/Router";
import Authorization from "./components/authorization/Authorization";
import ModalContact from "./components/modalContact/ModalContact";
import InfoBike from "./components/bike/infoBike/InfoBike";
import {useDispatch, useSelector} from "react-redux";
import { tokenAdd} from "./store/loginSlice";
import DateBike from "./components/bike/dateBike/DateBike";
import {fetchUserInfo} from "./store/usersInfoSlice";

function App() {
  const data = localStorage.getItem("token");
  const parse = JSON.parse(data);
  const dispatch = useDispatch();
  useEffect(() => {
    if (parse){
      dispatch(fetchUserInfo(parse))
    }
  }, [])

  const stste = useSelector(state => {
    console.log(state)
  })
  return (
      <>
    <div className="container-global">
      <Navbar/>
        <Router/>
    </div>
        <Footer/>
          <Authorization/>
          <ModalContact/>
          <InfoBike/>
          <DateBike/>
        </>
  );
}

export default App;
