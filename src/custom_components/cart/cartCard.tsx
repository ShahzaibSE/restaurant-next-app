import React from "react";
import { CartItem } from "../model";
import Image from "next/image";

export default function CartCardComponent(
  {
    id,
    title,
    description,
    imageUrl,
    quantity,
    rating,
    resturant_name,
    price,
  }: CartItem
) {
  // Destructure.
  return (
    <div className="py-6 flex flex-col xl:flex-row justify-between bg-[#FFFFFF] rounded-xl shadow-lg gap-4 w-full">
      <div className="p-8 xl:p-6 rounded-lg">
        <Image
          className="aspect-auto"
          alt="ALT!"
          width={200}
          height={200}
          src={
            imageUrl == undefined ||
            imageUrl === ""
              ? "/assets/recipe/placeholder-recipe.jpg"
              : imageUrl
          }
        />
      </div>
      <div className="flex flex-col justify-start items-start gap-8 p-8 xl:p-6">
        <h3 className="text-black text-xl xl:text-2xl font-bold font-sans tracking-wide">
          {title}
        </h3>
        <div className="flex flex-row justify-between items-center gap-8">
          <div className="flex flex-row justify-between items-center gap-2">
            <p>
              <span className="text-[#A1A1A1] text-md tracking-wide">
                Quantity
              </span>
            </p>
            <p className="text-[#A1A1A1] text-md tracking-wide font-bold">
              {quantity}
            </p>
          </div>
          <p>
            <span className="text-red-500 text-md">
              $
            </span>
            <span className="text-black font-bold text-md">
              {price}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
