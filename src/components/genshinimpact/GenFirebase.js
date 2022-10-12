import React, { useEffect, useState } from 'react'
import { collection, getFirestore, getDocs, query, where} from "firebase/firestore";
import { Link, useParams } from 'react-router-dom';



const FireCard = ({image, name, quote, city, weapon, element, rating, price}) => {
  
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
              <Link htmlFor="my-modal-4" to="/detail" className="btn modal-button">More info</Link>
            </div>
        </div>
  )
}


const GenFirebase = () => {

    const [chars, setCharacters] = useState([])
    const {elementId} = useParams();

    useEffect(() => {
        const db = getFirestore()
        const itemCollection = collection (db, "characters")
        if(elementId) {
          const queryFilter = query(itemCollection, where("element", "==", elementId))
          getDocs(queryFilter)
          .then (chars => setCharacters(chars.docs.map (c =>  ({id: c.id , ...c.data()}))))
        } else {
          getDocs(itemCollection)
          .then (chars => setCharacters(chars.docs.map (c =>  ({id: c.id , ...c.data()}))))
       }
        },[elementId]) ;
      

      return(
        <div>
          {chars.map(c => <FireCard key={c.id} {...c}/>)}
        </div>
      )

    }

export default GenFirebase