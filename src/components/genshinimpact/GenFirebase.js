import React, { useEffect, useState } from 'react'
import { collection, getFirestore, getDocs} from "firebase/firestore";
import { Link } from 'react-router-dom';
import Links from './Links';
import { useCartContext } from '../../context/CartContext';
import ItemCount from './ItemCount';



const FireCard = ({image, name, quote, city, weapon, element, rating, price}) => {



  const {addToCart} = useCartContext();
  const [goToCart, setGoToCart] = useState(false)

  const addProd = (quantity) => {
    setGoToCart(true);
    addToCart(name, quantity)
  }

  return (
      <div className="card card-compact w-96 bg-base-100 shadow-2xl m-10">
        <figure><img src={image} alt="Genshin Impact Characters"></img></figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Quote: "-{quote}"</p>
          <p>City: {city}</p>
          <p>Element: {element}</p>
          <p>Weapon: {weapon}</p>
          <p>Rating: {rating}</p>
          <span>Price: ${price}</span>
              <div className="card-actions justify-end">
              <div className="card-actions justify-end">
                {
                  goToCart
                    ? <Link to="/cart">Finish buying</Link>
                    : <ItemCount stock="5" initial="0" addProd={addProd}></ItemCount>
                }
              </div>
            </div>
            </div>
        </div>
  )
}


const GenFirebase = () => {

    const [chars, setCharacters] = useState([])
    



    useEffect(() => {
        const db = getFirestore()
        const itemCollection = collection (db, "characters")
        getDocs(itemCollection)
        .then (chars => setCharacters(chars.docs.map (c =>  ({id: c.id , ...c.data()}))))
      },[]) ;
      

      return(
        <div>
          <Links/>
          {chars.map(c => <FireCard key={c.id} {...c}/>)}
        </div>
      )

    }

export default GenFirebase