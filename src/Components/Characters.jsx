import React from "react";
import Yukio from "../Assets/image/silueta.png";
import Yukio2 from "../Assets/image/Yukiosinfondo.png";
import Name from "../Assets/image/name2.png";
import s from "../Styles/Characters.module.css";
import { Link } from "react-router-dom";

const Characters = () => {
  return (
    <div className={s.container}>
      <div className={s.grid}>
        <div className={s.card}>
          <div className={s.wrapper}>
            <img src={Yukio} className={s.cover} />
          </div>
          <br />

          <img src={Name} className={s.title2} />
          <img src={Yukio2} className={s.character} />
        </div>
        <div className={s.card}>
          <div className={s.wrapper}>
            <img src={Yukio} className={s.cover} />
          </div>
          <br />

          <img src={Name} className={s.title2} />
          <img src={Yukio2} className={s.character} />
        </div>
        <div className={s.card}>
          <div className={s.wrapper}>
            <img src={Yukio} className={s.cover} />
          </div>
          <br />

          <img src={Name} className={s.title2} />
          <img src={Yukio2} className={s.character} />
        </div>
        <div className={s.card}>
          <div className={s.wrapper}>
            <img src={Yukio} className={s.cover} />
          </div>
          <br />

          <img src={Name} className={s.title2} />
          <img src={Yukio2} className={s.character} />
        </div>
        <div className={s.card}>
          <div className={s.wrapper}>
            <img src={Yukio} className={s.cover} />
          </div>
          <br />

          <img src={Name} className={s.title2} />
          <img src={Yukio2} className={s.character} />
        </div>
        <div className={s.card}>
          <div className={s.wrapper}>
            <img src={Yukio} className={s.cover} />
          </div>
          <br />

          <img src={Name} className={s.title2} />
          <img src={Yukio2} className={s.character} />
        </div>
      </div>
      <Link to="/home">
        <button>Home</button>
      </Link>
    </div>
  );
};

export default Characters;
