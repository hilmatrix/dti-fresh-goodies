"use client";
import useCart from "@/hooks/useCart";
import { Product } from "@/types/product";
import Image from "next/image";
import QtyGroup from "../QtyGroup";

interface CartItemProps extends Product {

}
const CartItem: React.FC<CartItemProps> = (props) => {
  const { id, imageUrl, name, price,  } = props;
  const {productCartMap} = useCart();

  return (
    <div className="p-4">
      <div key={id} className="w-full h-fit flex">
        <div className="flex items-center justify-center">
          <Image
            src={imageUrl}
            height={100}
            width={100}
            className="w-[100px] h-auto aspect-square"
            alt={name}
          />
        </div>
        <div className="flex justify-center w-full">
          <div className="flex flex-col w-[600px]">
            <span className="m-2"></span>{name}
            <div className="m-2">
              <QtyGroup {...props}/>
            </div>
          </div>
          <div className="m-2 flex items-end">
              ${(productCartMap[id].quantity * price).toFixed(2)}
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default CartItem;
