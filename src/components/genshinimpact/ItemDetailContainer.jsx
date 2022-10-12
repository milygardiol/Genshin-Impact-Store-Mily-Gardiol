import React, { useEffect, useState } from 'react'
import { doc, getFirestore, getDoc} from "firebase/firestore";
import { Link, useParams } from 'react-router-dom';
import ItemCount from './ItemCount';
import { useCartContext } from '../../context/CartContext';

const ItemDetail = ({name, image, city, description, element, weapon, quote, rating, price}) => {

  const {addToCart} = useCartContext();
  const [goToCart, setGoToCart] = useState(false)

  const addProd = (quantity) => {
    setGoToCart(true);
    addToCart(name, quantity)
  }


    return (
      <Link to={`/detail/${name}`}>
        <div className="card w-96 glass">
          <figure><img src={image} alt="Genshin Impact Image"/></figure>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>Element: {element}</p>
            <p>Description: {description}</p>
            <p>Quote: "-{quote}"</p>
            <p>Weapon: {weapon}</p>
            <p>Rating: {rating}</p>
            <p>City: {city}</p>
            <p>Price: ${price}</p>
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
      </Link>
    )
}
  
  
const ItemDetailContainer = () => {
  
      const [detail, setDetail] = useState([])
      const {detailId} = useParams();

      useEffect(() => {
        const db = getFirestore();
        const queryDoc = doc (db, "characters", detailId);
        getDoc(queryDoc)
        .then (detail => {
          console.log(detail.doc)
          setDetail(detail.doc.map (detail =>  ({id: detail.id , ...detail.data()}) ) );
        })
      }, [detailId])

      return (
        <div>{detail.map(detail => <ItemDetail key={detail.id} {...detail}/> )} </div>
      )

  }

export default ItemDetailContainer