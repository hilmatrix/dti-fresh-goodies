"use client";
import useCartContext from "@/context/CartContext";
import useCart from "@/hooks/useCart";
import cn from "classnames";
import Image from "next/image";
import { Button } from "../ui/button";

interface AddToCardButton {
  withProductThumbnails?: boolean;
  callback : () => void
}
const AddToCartButton: React.FC<AddToCardButton> = ({
  withProductThumbnails, callback
}) => {
  const {showCart, setShowCart} = useCartContext();
  const { getTotalPrice, lastTwoItems } = useCart();
  const totalPrice = getTotalPrice();

  const handleButtonClick = () => {
     setShowCart(true)
     callback()
  }
  
  return (
    <div className="md:flex md:justify-center">
      <Button onClick={handleButtonClick} className="mt-4 w-full md:w-[800px] px-6 py-[14px] rounded-full flex justify-between h-fit !bg-black">
        <div className="flex gap-2">
          <div className="font-medium text-xl ">
            {withProductThumbnails ? "Cart" : "To Checkout"}
          </div>
          {withProductThumbnails ? (
            <div className="flex">
              {lastTwoItems?.map((item, index) => (
                <div key={item.id} className={cn("h-[30px] flex", index > 0 ? "-ml-2" : "ml-0")}>
                  <div className="w-auto h-full aspect-square rounded-full bg-white">
                    <Image
                      width={30}
                      height={30}
                      src={item.imageUrl}
                      alt={item.name}
                      className="w-auto h-full aspect-square mix-blend-multiply object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          ) : null}
        </div>
        <div className="font-medium text-xl">${totalPrice.toFixed(1)}</div>
      </Button>
    </div>
  );
};

export default AddToCartButton;
