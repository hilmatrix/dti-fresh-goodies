"use client"
import CartList from "@/components/CartList";
import useCartContext from "@/context/CartContext";
import useCart from "@/hooks/useCart";
import React from "react";

const Cart :React.FC = () => {
    const {showCart, setShowCart} = useCartContext();
    const {getTotalPrice} = useCart();
    const freeShippingLimit = 20;

    return (
        <div className={`fixed w-full h-full ${showCart ? "" : "pointer-events-none"}
         flex justify-center ${showCart ? "bg-[#000000AA]" : ""} transition-all duration-500 ease-in-out`}>
           <div className={`absolute flex relative w-full md:w-[1024px] h-full ${showCart ? "top-20" : "top-full"} 
           z-5 bg-[#FFFFFF] pointer-events-auto transition-all duration-500 ease-in-out flex-col`}>
                <div className="flex h-[60px] w-full  flex-col  items-center justify-center my-4">
                    <div className="w-[800px] h-1/2 flex justify-between">
                        <span>Before Free Shipping</span>
                        <span>${(freeShippingLimit - getTotalPrice()) > 0 ? (freeShippingLimit - getTotalPrice()).toFixed(2) : 0 }</span>
                    </div>
                    <div className="w-[800px] h-1/2  relative">
                        <div className="w-full h-1/2 absolute top-1/4 bg-[#EEEEEE] rounded-full "></div>
                        <div className="w-full h-1/2 absolute top-1/4 bg-[#00FF00] rounded-full "
                            style={{width : `${getTotalPrice() < freeShippingLimit ? getTotalPrice()/freeShippingLimit * 100 : "100" }%` }}></div>
                    </div>
                </div>
                <CartList></CartList>
                <div className="absolute flex justify-center bottom-[100px] w-full">
                    <button className="bg-black rounded-full w-[400px] h-10 text-white flex justify-between items-center">
                        <span className="mx-4">Checkout</span> 
                        <span className="mx-4">${getTotalPrice().toFixed(2)}</span>
                    </button>
                </div>
                
            </div>
            {showCart && (<button className="pointer-events-auto absolute top-4 right-4 w-8 h-8 md:top-8 md:right-8 md:w-12 md:h-12
            bg-[#FFFFFF] rounded-full text-black" onClick={() => setShowCart(false)}>X</button>)}
        </div>
    )
};

export default Cart;