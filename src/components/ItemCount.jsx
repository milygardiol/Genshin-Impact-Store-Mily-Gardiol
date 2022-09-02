import React, { useState } from 'react'

const ItemCount = ({stock, initial}) => {

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
            <input type="text" placeholder={onAdd} className="input input-bordered" />
            <button className="btn btn-primary" onClick={add}>+</button>
            <button className="btn btn-primary" onClick={() => setAdd(0)}>Reset</button>
        </label>
        
    </div>
  )
}

export default ItemCount