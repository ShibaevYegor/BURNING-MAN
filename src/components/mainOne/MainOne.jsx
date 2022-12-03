import React from 'react'
import b from "./MainOne.module.css"
import imgOne from "../assets/images/imgOne.png"
import imgTwo from "../assets/images/imgTwo.png"
import imgThree from "../assets/images/imgThree.png"

export default function MainOne() {
  return (
    <div className={b.MainOne}>
      <div className={b.MainOne__container}>
        <h1 className={b.container__title}>About the event</h1>
        <div className={b.twobox__text}>
          <div className={b.text__one}>
            <h1 className={b.one__title}>Rebuilding the society</h1>
            <p className={b.one__lorem}>Burning Man is a network of people inspired bythe values reflected in the Ten Principles and united in the pursuit of amore creative and connected existence in the world. Throughout the year wework to build Black Rock City, home of the largest annual Burning Mangathering, and nurture the distinctive culture emerging from thatexperience.</p>
          </div>
          <div className={b.text__two}>
            <h1 className={b.two__title}>This drives us</h1>
            <p className={b.two__lorem}>Burning Man Project will bring experiences to people in grand, awe-inspiring and joyful ways that lift the human spirit, address social problems, and inspire a sense of culture, community, and civic engagement. Burning Man provides infrastructural tools and frameworks to support local communities in applying the Ten Principles through six interconnected program areas, including Arts, Civic Involvement, Culture, Education, Philosophical Center, and Social Enterprise.</p>
          </div>
        </div>
        <div className={b.twobox__img}>
            <img src={imgOne} className={b.imgOne}/>
            <img src={imgTwo} className={b.imgTwo}/>
            <img src={imgThree} className={b.imgThree}/>
        </div>
      </div>
    </div>
  )
}
