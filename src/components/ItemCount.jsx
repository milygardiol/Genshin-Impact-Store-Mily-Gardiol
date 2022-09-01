import React, { useState } from 'react'

const ItemCount = ({stock, initial}) => {

    const [onAdd, setAdd] = useState(0);

    




  return (
    <div className="form-control">
        <label className="label">
            <span className="label-text">Enter amount</span>
        </label>
        <label className="input-group">
            <button className="btn btn-primary" onClick={() => setAdd(onAdd => onAdd - 1)}>-</button>
            <input type="number" placeholder={onAdd} className="input input-bordered" />
            <button className="btn btn-primary" onClick={() => setAdd(onAdd => onAdd + 1)}>+</button>
            <button className="btn btn-primary" onClick={() => setAdd(0)}>Reset</button>
        </label>
        
    </div>
  )
}

export default ItemCount