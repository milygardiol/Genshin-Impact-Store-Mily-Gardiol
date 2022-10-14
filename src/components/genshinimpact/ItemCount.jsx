import React, { useState } from 'react'
import { useContext } from 'react';
import cartContext from '../../context/CartContext';

const ItemCount = ({stock, initial, addProd}) => {

  const cart = useContext((cartContext))

  function addToCart(Product) {
    cart.addToCart(Product);
  }

    const [onAdd, setAdd] = useState(initial);

    const add = () => {setAdd (onAdd + 1)};
    const remove = () => {setAdd (onAdd - 1)};

  return (
    <div className="form-control">
        <label className="label">
            <span className="label-text">Enter amount</span>
        </label>
        <label className="input-group">
            <button disabled={onAdd <= 0} className="btn btn-primary" onClick={remove}>-</button>
              <span>{onAdd}</span>
            <button disabled={onAdd >= stock} className="btn btn-primary" onClick={add}>+</button>
            <button className="btn btn-primary" onClick={() => setAdd(initial)}>Reset</button>
        </label>
          <div>
            <button disabled={onAdd <= 0} className="btn btn-primary" onClick={() => addProd(onAdd)}>Buy it</button>
          </div>
    </div>
  )
}

export default ItemCount