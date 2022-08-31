import React from 'react'
import GenshinCards from './GenshinCards'
const GenshinList = ({chars}) => {
  return (
    <div>
        {chars.map ( c => 
            <GenshinCards key = {c.id} id={c.id} name={c.name} species={c.species} image={c.image}></GenshinCards>)}
    </div>
  )
}



export default GenshinList