import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // Initialize the state with data from local storage, if it exists
  const [cart, setCart] = useState(() => {
    const storedCart = JSON.parse(localStorage.getItem("basket")) || [];
    return storedCart;
  });
  // Effect to persist cart data to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const removeFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item._id !== itemId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const contextValue = {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
  };
  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};
CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
