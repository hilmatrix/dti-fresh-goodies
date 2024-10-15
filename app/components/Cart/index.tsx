"use client"
import CartList from "@/components/CartList";
import useCartContext from "@/context/CartContext";
import React from "react";

const Cart :React.FC = () => {
    const {showCart, setShowCart} = useCartContext();

    return (
        <div className={`fixed w-full h-full pointer-events-none flex justify-center`}>
           <div className={`absolute flex relative w-full md:w-[1024px] h-full ${showCart ? "top-20" : "top-full"} 
           z-5 bg-[#FFFFFF] pointer-events-auto transition-all duration-500 ease-in-out`}>
                <CartList></CartList>
                <div className="absolute flex justify-center bottom-[100px] w-full">
                    <button className="bg-black rounded-full w-[400px] h-10 text-white"> Checkout </button>
                </div>
                
            </div>
            {showCart && (<button className="pointer-events-auto absolute top-4 right-4 w-8 h-8 md:top-8 md:right-8 md:w-12 md:h-12
            bg-[#000000] rounded-full text-white" onClick={() => setShowCart(false)}>X</button>)}
        </div>
    )
};

export default Cart;