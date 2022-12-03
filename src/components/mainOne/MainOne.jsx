import React from 'react'
import b from "MainOne.module.css"
// import imgOne from "../assets/images/imgOne.png"
// import imgTwo from "../assets/images/imgTwo.png"

export default function MainOne() {
  return (
    <div className={b.MainOne}>
      <div className={b.MainOne__container}>
        <h1 className={b.container__title}>About the event</h1>
        <div className={b.container__twobox}>
            <div className={b.twobox__one}>
                <h1 className={b.one__first}>Rebuilding the society</h1>
                <p className={b.one__lorem}>Burning Man is a network of people inspired by the values reflected in the Ten Principles and united in the pursuit of a more creative and connected existence in the world. Throughout the year we work to build Black Rock City, home of the largest annual Burning Man gathering, and nurture the distinctive culture emerging from that experience. </p>
            </div>
            {/* <div className={b.one__imgbox}>
                <img src={imgOne} className={b.imgOne}/>
                <img src={imgTwo} className={b.imgTwo}/>
            </div> */}

            <div className={b.twobox__two}></div>
        </div>
      </div>
    </div>
  )
}
