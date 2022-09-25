// import { info } from 'daisyui/src/colors/colorNames';
import React from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext'
import ItemCart from "./ItemCart"

const Cart = () => {
    const [cart, cartPrice] = useCartContext();

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
        </>
    )
}

export default Cart