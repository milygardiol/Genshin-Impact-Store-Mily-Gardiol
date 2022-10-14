import React from 'react'
import { useCartContext } from '../../context/CartContext'

const ItemCart = ({name, quote, city, element, weapon, image, price}) => {

    const {removeCart} = useCartContext();

  return (
    <div>
        <div className="card card-compact w-96 bg-base-100 shadow-2xl m-10">
      <figure><img src={image} alt="Genshin Impact Characters" ></img></figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Quote: "{quote}"</p>
        <p>City: {city}</p>
        <p>Element: {element}</p>
        <p>Weapon: {weapon}</p>
        <p>Subtotal: ${price}</p>
        <button onClick={() => removeCart(name)}>Remove</button>
      </div>
      </div>
    </div>
  )
}

export default ItemCart