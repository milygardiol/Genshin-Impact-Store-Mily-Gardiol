import React, { useState } from 'react'
import { useContext } from 'react';
import cartContext from '../context/CartContext';

const ItemCount = ({stock, initial}) => {

  const cart = useContext((cartContext))

  function addToCart(Product) {
    cart.addToCart(Product);
  }

    const [onAdd, setAdd] = useState(initial);

    const add = () => (onAdd < stock) && setAdd (onAdd + 1);
    const remove = () => (onAdd > initial) && setAdd (onAdd - 1);


  return (
    <div className="form-control">
        <label className="label">
            <span className="label-text">Enter amount</span>
        </label>
        <label className="input-group">
            <button className="btn btn-primary" onClick={remove}>-</button>
            <input type="text" placeholder={onAdd} className="input input-bordered" pattern="[0-9]+" />
            <button className="btn btn-primary" onClick={add}>+</button>
            <button className="btn btn-primary" onClick={() => setAdd(0)}>Reset</button>
            <button className="btn btn-primary" onClick={() => addToCart([1])} {cart ? "Se agregó correctamente al carrito" : "Agregar al carrito"}>Buy it</button>
        </label>
        
    </div>
  )
}

export default ItemCount