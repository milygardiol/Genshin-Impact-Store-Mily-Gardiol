import React from 'react'
import CartContext from '../../context/CartContext'
import GenFirebase from './GenFirebase'

const ItemListContainer = ({greeting}) => {


  return (
    <div>
      <img src="https://64.media.tumblr.com/445380ddcf507e0f3b9402ca22cb558b/279e74e93736e6a6-ed/s540x810/520d15dfd1d0109449e3ac5449874c7baa100ac4.gif" alt="Genshin Impact GIF" className='bg-cover bg-center w-full h-full'/>
      <div className="greeting text-5xl top-1/2 shadow-xl left-10 aling-center text-center m-20 block absolute">{greeting}
      </div>
        <div className='flex flex-wrap flex-row'>
          <GenFirebase/>
        </div>
      </div>
  )
}

export default ItemListContainer