import React, { useState, useContext} from 'react'
const CartContext = React.createContext([])

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({children}) => {

    // Funciones carrito

    const [cart, setCart] = useState([])

    const clearCart = () => setCart([]);

    const isInCart = (id) => cart.find(product => product.id === id) ? true : false;
    
    const removeCart = (id) => setCart(cart.filter(product => product.id !== id));

    const cartPrice = () => {
        return cart.reduce ((prev, act) => prev + act.quantity * act.price, 0);
    }

    const totalCart = () => cartPrice.reduce((acumulador, productoActual) => acumulador + productoActual.quantity, 0);

    const addToCart = (item, quantity) => {
       if(isInCart(item.id)) {
        setCart(cart.map( product => {
          return product.id === item.id ? { ...product, quantity: product.quantity + quantity} : product
        }));
        } else {
          setCart([...cartPrice, {...item, quantity}]);
        }
    }

    console.log("carrito: ", cart);



  return (
    <CartContext.Provider value={{
        clearCart,
        isInCart,
        removeCart,
        addToCart,
        totalCart,
        cartPrice,
        cart
        }}>
        {children}
    </CartContext.Provider>
  )
}



export default CartProvider