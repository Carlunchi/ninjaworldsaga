
import React from "react";
import title from "/image/title1.png";
import s from "../Styles/Home.module.css";

import NavBar from "../Assets/NavBar";

const Home = () => {
  return (
    <div className={s.paper}>
    <div className={s.title}>
      <img src={title} alt="title" />   
    </div>
   
   <NavBar/>
  </div>
  )
}

export default Home