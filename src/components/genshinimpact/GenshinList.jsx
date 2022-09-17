import React from 'react'
import GenshinCards from './GenshinCards'
import GenshinDescription from "./GenshinDescription"


const GenshinList = ({genshin}) => {
  return (
    <div>
        {genshin.length ? ( genshin.map((gen) => 
        <GenshinCards className="flex flex-wrap justify-center" key = {gen.id} {...gen} />)
        ) : (

            <progress className="progress w-56 justify-center"></progress>
          )}
    </div>
  );

};



export default GenshinList