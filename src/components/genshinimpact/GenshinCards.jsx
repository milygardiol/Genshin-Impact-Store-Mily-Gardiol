import React from 'react'
import ItemCount from '../ItemCount'

const GenshinCards = ({name, description, quote, city, element, weapon, image}) => {
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-2xl m-10">
      <figure><img src={image} alt="Genshin Impact Characters" ></img></figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Quote: "{quote}"</p>
        <p>Description: {description}</p>
        <p>City: {city}</p>
        <p>Element: {element}</p>
        <p>Weapon: {weapon}</p>
        <div className="card-actions justify-end">
          <ItemCount stock="5" initial="0"></ItemCount>
          <button className="btn">More info</button>
          <button className="btn btn-primary">Buy it</button>
        </div>
      </div>
    </div>
    
  )
}

export default GenshinCards
