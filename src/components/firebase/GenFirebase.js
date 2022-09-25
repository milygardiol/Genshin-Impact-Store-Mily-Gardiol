import React, { useEffect, useState } from 'react'
import { collection, getFirestore, getDocs} from "firebase/firestore";


const FireCard = ({name, description, element, url, image}) => {
  return (
    <div>
        <li>{name}</li>
        <li>{description}</li>
        <li>{element}</li>
        <li>{url}</li>
        <img className="w-20" src={image}/>
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