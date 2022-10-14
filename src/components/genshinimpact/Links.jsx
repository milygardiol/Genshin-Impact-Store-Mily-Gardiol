import { collection, getFirestore, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Links = () => {

    const [element, setElement] = useState([])
    useEffect(() => {
    getElements();
    }, [])


    const getElements = () => {
        const db = getFirestore()
        const elementsCollection = collection (db, "element")
        getDocs(elementsCollection)
        .then (elem => setElement((elem.docs.map (c =>  ({id: c.id , ...c.data()})))))
    }
    
    return (
        <div>
            {element.map( e => 
            <Link key={e.id} className="m-10 btn" to={`/characters/element/${e.id}`}>{e.id}</Link>)
            }
        </div>
    )

}

export default Links
