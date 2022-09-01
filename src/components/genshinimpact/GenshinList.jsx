import React from 'react'
import GenshinCards from './GenshinCards'


const GenshinList = ({genshin}) => {
  return (
    <div>
        {genshin.length ? ( genshin.map((gen) => <GenshinCards classNmae="flex flex-row" key = {gen.id} {...gen} />)) : (
            <progress className="progress w-56"></progress>
          )}
    </div>
  );
};



export default GenshinList