import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Elements = () => {

    const{id: elementId} = useParams()

    const [element, setElement] = useState([])

    useEffect(() => {
    getCharsByElement();
        setTimeout(() => {
            getCharsByElement();
        }, 1000);
    }, [])
    
    
        const getCharsByElement = () => {
            const db = getFirestore()
            const itemCollection = collection (db, "characters")
            const q = query(itemCollection, where("element", "==", elementId))
            getDocs(q)
            .then (elem => setElement((elem.docs.map (e =>  ({id: e.id , ...e.data()})))))
        }

  return (
    <>
        <div>Elements: {elementId}</div>
        {element.map(e => <div key={e.id}>
            <div className="card w-96 bg-base-100 shadow-xl flex justify-center">
            <figure><img src={e.image} alt="Genshin images" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                {e.name}
                </h2>
                <p>{e.description}</p>
                <p>Quote: "-{e.quote}"</p>
                <p>Weapon: {e.weapon}</p>
                <p>Rating: {e.rating}</p>
                <span>Price: ${e.price}</span>
                <div className="card-actions justify-end">
                <div className="badge badge-outline">{e.element}</div> 
                <div className="badge badge-outline">{e.city}</div>
                </div>
            </div>
            </div>
        </div>)}
    </>
  )
}

export default Elements