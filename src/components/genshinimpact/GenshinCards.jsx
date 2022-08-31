import React from 'react'

const GenshinCards = ({name, species, image, id}) => {
  return (
    <div>
        <hi>{id}-{name}</hi>
        <h3>{species}</h3>
        <img src={image}></img>
    </div>
  )
}

export default GenshinCards