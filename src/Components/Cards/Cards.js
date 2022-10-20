import React from 'react';
import './Cards.scss';

const Cards = ({i , img , title , dis , btn_text , custom_class=""}) => {
  return (
    <section style={{flexDirection: `${ i%2===0 ? "row" : "row-reverse"}`}} className={`card container flex ${custom_class}`}>
    <img src={img} alt={img} className="card_img" />
    <div className="card_d flex-center column">
    <h1 className="title">{title}</h1>
    <div className="dis">{dis}</div>
    <button className="btn card_btn">{btn_text}</button>
    </div>
    </section>
  )
}

export default Cards