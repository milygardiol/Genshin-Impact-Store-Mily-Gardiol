import React from 'react'

const ItemDetail = ({ name, url, rating, baseatk, secstat, passive, type }) => {
  return (
    <div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={url} alt={name}/></figure>
        <div className="card-body">
            <h2 className="card-title">Name: {name}</h2>
            <p>Rating: {rating}</p>
            <p>Base attack:{baseatk}</p>
            <p>Stat:{secstat}</p>
            <p>{passive}</p>
            <p>Class: {type}</p>
        </div>
         </div>
        </div>
  )
}

export default ItemDetail