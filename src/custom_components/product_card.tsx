import React from "react";
import Image from "next/image";
import { Heart } from "lucide-react";
import Link from "next/link";
import { Product } from "./model";

export default function ProductCardComponent({
  id,
  title,
  description,
  imageUrl,
  rating,
  price,
  resturant_name,
}: Product) {
  return (
    <Link href={`/${id.toString()}`}>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        {/* <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"> */}
        <div className="w-full">
          <Image
            alt="ALT!"
            width={400}
            height={200}
            src={imageUrl == undefined || imageUrl === "" ? "/assets/recipe/placeholder-recipe.jpg" : imageUrl}
          />
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">
            {title}
          </div>
          {/* <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Voluptatibus quia,
          nulla! Maiores et perferendis eaque,
          exercitationem praesentium nihil.
        </p> */}
        </div>
        <div className="flex flex-row justify-between items-center px-6 py-4">
          <p>
            <span className="text-red-500 text-md">
              $
            </span>
            <span className="text-black font-bold">
              {price}
            </span>
          </p>
          <div>
            <Heart />
          </div>
        </div>
      </div>
    </Link>
  );
}
