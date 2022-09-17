import React from 'react'

const GenshinDescription = ({name, description, quote, city, element, weapon, image}) => {
  return (
    <div>
        <input type="checkbox" id="my-modal-4" className="modal-toggle" />
            <label htmlFor="my-modal-4" className="modal cursor-pointer">
            <label className="modal-box relative" for="">
                <h3 className="text-lg font-bold">{name}</h3>
                <figure><img src={image} alt="Genshin Impact Characters" ></img></figure>
                <p className="py-4">{description}</p>
                <p>Quote: "{quote}"</p>
                <p>City: {city}</p>
                <p>Element: {element}</p>
                <p>Weapon: {weapon}</p>
            </label>
            </label>
    </div>
  )
}

export default GenshinDescription