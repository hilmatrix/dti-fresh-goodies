"use client";
import { createContext, ReactNode, useContext, useState } from "react";

interface CartContextType {
    showCart: boolean | undefined;
    setShowCart: (category: boolean | undefined) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const useCartContext = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("Context usage out of provider");
    }
    return context;
};

export const CartContextProvider : React.FC<{children : ReactNode}> = ({children}) => {
    const [showCart, setShowCart] = useState<boolean | undefined>();

    const updateShowCart = (showCart : boolean | undefined) => {
        setShowCart(showCart);
    }

    return (
        <CartContext.Provider
          value={{ showCart, setShowCart: updateShowCart }}
        >
          {children}
        </CartContext.Provider>
      ); 
}

export default useCartContext;