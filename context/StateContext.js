import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-hot-toast";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState();
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(1);

  // function to add items to cart
  // also checks if product is already in cart
  // if item is already in the cart, only increase quantity of item and price
  const onAdd = (product, quantity) => {
    const checkProductInCart = cartItems.find(
      (item) => item._id === product._id
    );

    // state for updating price and quantities of items in cart
    setTotalPrice(
      (prevTotalPrice) => prevTotalPrice + product.price * quantity
    );
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);

    // check to see if an item is already added to the cart
    if (checkProductInCart) {
      // map over current cart items
      // get each individual item
      // increase quantity of product
      const updatedCartItems = cartItems.map((cartProduct) => {
        if (cartProduct._id === product._id)
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity,
          };
      });

      setCartItems(updatedCartItems);

      // check to see if item is not already in the cart
    } else {
      product.quantity = quantity;

      setCartItems([...cartItems, { ...product }]);
    }
    toast.success(`${qty} ${product.name} added to cart.`);
  };

  // increases qty of items
  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  };

  // keep decrementing until we can't go lower than 1
  const decQty = () => {
    setQty((prevQty) => {
      if (prevQty - 1 < 1) return 1;

      return prevQty - 1;
    });
  };

  return (
    <Context.Provider
      value={{
        showCart,
        setShowCart,
        cartItems,
        totalPrice,
        totalQuantities,
        qty,
        incQty,
        decQty,
        onAdd,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
// allows to use state as a hook
