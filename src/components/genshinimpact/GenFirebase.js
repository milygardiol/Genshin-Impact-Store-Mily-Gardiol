import React, { useEffect, useState } from 'react'
import { collection, getFirestore, getDocs} from "firebase/firestore";
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';


const FireCard = ({name, element, image, quote, weapon, rating, city, price}) => {
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
          <ItemCount stock="5" initial="0"></ItemCount>
          <div>
          <Link htmlFor="my-modal-4" to="/detail" className="btn modal-button">More info</Link>
        </div>
      </div>
      </div>
    </div>
  )
}


const GenFirebase = () => {

    const [characters, setCharacters] = useState([])

    useEffect(() => {
      getCharacters()
    }, [])
    
    const getCharacters = () => {
        const db = getFirestore()
        const itemCollection = collection (db, "characters")
        
        getDocs(itemCollection).then (chars => {
            console.log(chars.docs)
            setCharacters(chars.docs.map (c =>  ({id: c.id , ...c.data()}) ) );
        })
    }


  return (
    <div>{characters.map(c => <FireCard key={c.id} {...c}/>)}</div>
  )
}

export default GenFirebase