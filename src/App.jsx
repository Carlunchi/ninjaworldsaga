import React from "react";
import title from "/image/title1.png";
import s from "../src/App.module.css";

const App = () => {
  return (
    <div className={s.paper}>
      <div className={s.title}>
        <img src={title} alt="title" />
      </div>
      <br />
      <div className={s.navbar}>
        <h2>
          <button className={s.button}>Characters</button>
        </h2>
        <h2>
          <button className={s.button}>Glossary</button>
        </h2>

        <h2>
          <button className={s.button}>Maps</button>
        </h2>
        <h2>
          <button className={s.button}>Store</button>
        </h2>
        <h2>
          <button className={s.button}>Character Creation </button>
        </h2>
        <h2>
          <button className={s.button}>Missions</button>
        </h2>
      </div>
    </div>
  );
};

export default App;
