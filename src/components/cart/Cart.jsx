// import { info } from 'daisyui/src/colors/colorNames';
import { getFirestore } from 'firebase/firestore';
import React from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext'
import ItemCart from "./ItemCart"

const Cart = () => {
    const [cart, cartPrice] = useCartContext();


    const order = {
        buyer: {
            name: "Mily",
            email: "gardiol72@gmail.com",
            phone:"1234",
            address: "blahblahblah"
        },
        items: cart.map(product => ({ 
            name: product.name,
            price: product.price,
            quantity: product.quantity
        })),
        total: cartPrice(),
    }


    const handleClick = () => {
        const db = getFirestore();
        const ordersCollection = collectin(db, "orders");
        addDoc(ordersCollection, order).then(({id}) => console.log(id))
    }

    if (cart.length === 0) {
        return (
            <>
            <p>There´s no elements in the Cart</p>
            <Link to={"/"}>Go to shop</Link>
            </>
        )
    }
    return (
        <>
        {
            cart.map(product => <ItemCart key={id} product={product}/>)
        }
        <p>
            Total: {cartPrice()}
        </p>
        <button onClick={handleClick()}>Buy</button>
        </>
    )
}

export default Cart