import React from 'react'
import s from "../Styles/NavBar.module.css"
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className={s.navbar}>
    <h2>
      <Link to="/characters"><button className={s.button}>Characters</button></Link>
    </h2>
    <h2>
      <Link to="/glossary"><button className={s.button}>Glossary</button></Link>
    </h2>

    <h2>
      <Link to="/maps"><button className={s.button}>Maps</button></Link>
    </h2>
    <h2>
      <Link to="/store"><button className={s.button}>Store</button></Link>
    </h2>
    <h2>
      <Link to="/charactercreation"><button className={s.button}>Character Creation </button></Link>
    </h2>
    <h2>
      <Link to="/missions"><button className={s.button}>Missions</button></Link>
    </h2>
  </div>
  )
}

export default NavBar



