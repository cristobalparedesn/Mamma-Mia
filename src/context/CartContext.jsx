import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    const itemExists = cart.find((i) => i.id === item.id);
    if (itemExists) {
      setCart(
        cart.map((i) => (i.id === item.id ? { ...i, count: i.count + 1 } : i))
      );
    } else {
      setCart([...cart, { ...item, count: 1 }]);
    }
  };

  const removeItem = (item) => {
    const itemExists = cart.find((i) => i.id === item.id);
    if (itemExists.count === 1) {
      setCart(cart.filter((i) => i.id !== item.id));
    } else {
      setCart(
        cart.map((i) => (i.id === item.id ? { ...i, count: i.count - 1 } : i))
      );
    }
  };

  const totalCart = () => {
    return cart.reduce((acc, item) => acc + item.price * item.count, 0);
  };

  const findItemCount = (id) => {
    const item = cart.find((i) => i.id === id);
    return item ? item.count : 0;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        totalCart,
        findItemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCartContext = () => useContext(CartContext);