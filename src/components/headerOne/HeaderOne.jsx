import React from 'react'
import a from "./HeaderOne.module.css"
import logo from "../assets/icons/logo.svg"

export default function HeaderOne() {
  return (
    <div className={a.HeaderOne}>
      <div className={a.HeaderOne__container}>
        <nav className={a.container__navbar}>
          <ul className={a.navbar__ulOne}>
            <a href="#" className={a.li__logo}>
              <img src={logo} className={a.logo__logoimg}/>
            </a>
            <li className={a.ulOne__li}>
              <a className={a.li__silka}>Home</a>
            </li>
            <li className={a.ulOne__li}>
              <a className={a.li__silka}>About</a>
            </li>
            <li className={a.ulOne__li}>
              <a className={a.li__silka}>Tickets</a>
            </li>
            <li className={a.ulOne__li}>
              <a className={a.li__silka}>Contacts</a>
            </li>
          </ul>
          <ul className={a.ulTwo}>
            <li className={a.ulTwo__li}>
              <a className={a.li__tel} href="tel:+998977540457">+998977540457</a>
            </li>
          </ul>
        </nav>
        <div className={a.container__textbox}>
          <h1 className={a.textbox__first}>Not tne event. The life</h1>
          <h1 className={a.textbox__second}>Burning MAN</h1>
          <button className={a.textbox__btn}>Book the tickets</button>
        </div>
      </div>
    </div>
  )
}
