import React, { useState } from 'react'

const ItemCount = ({stock, initial}) => {

    const [onAdd, setAdd] = useState(initial);

    const suma = () => {
      if (stock === 5) {
        setAdd (5);
      }else {
        setAdd(onAdd => onAdd + 1);
      }
    }
    
    const resta = () => {
      if (initial === 0 ) {
        setAdd (0);
      } else {
        setAdd(onAdd => onAdd - 1)
      }
    }




  return (
    <div className="form-control">
        <label className="label">
            <span className="label-text">Enter amount</span>
        </label>
        <label className="input-group">
            <button className="btn btn-primary" onClick={resta}>-</button>
            <input type="text" placeholder={initial} className="input input-bordered" />
            <button className="btn btn-primary" onClick={suma}>+</button>
            <button className="btn btn-primary" onClick={() => setAdd(0)}>Reset</button>
        </label>
        
    </div>
  )
}

export default ItemCount