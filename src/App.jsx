import React from "react";
import title from "/image/title1.png";
import s from "../src/App.module.css";

const App = () => {
  return (
    <div className={s.paper}>
      <div className={s.title}>
        <img src={title} alt="title" />
      </div>
    </div>
  );
};

export default App;
