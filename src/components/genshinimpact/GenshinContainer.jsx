// Contenedor principal 
import React, { useEffect, useState } from 'react'
import GenshinList from './GenshinList'



const GenshinContainer = () => {
      const genshin = require('genshin')
      console.log(genshin.characters('amber'))
            
      return (
          <div>
              <GenshinList></GenshinList>
          </div>
        )
}
    



export default GenshinContainer