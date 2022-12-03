import React from 'react'
import c from "./FooterOne.module.css"

export default function FooterOne() {
  return (
    <div className={c.FooterOne}>
      <div className={c.FooterOne__container}>
        <p className={c.container__first}>©1989-2020 burning man project</p>
        <p className={c.container__second}>WAYUP & Андрей Гаврилов©1989-2020 burning man project</p>
      </div>
    </div>
  )
}
