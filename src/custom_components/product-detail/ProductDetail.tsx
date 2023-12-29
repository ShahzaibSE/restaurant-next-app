import React from "react";
import Image from "next/image";
import { Product } from "../model";
import { Star } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

export default function ProductDetailComponent({
  title,
  description,
  price,
  rating,
  resturant_name,
  imageUrl,
}: Product) {
  return (
    <div className="py-12 flex flex-col-reverse xl:flex-row xl:justify-between xl:items-center gap-12 xl:gap-6">
      <div className="flex flex-col justify-start items-start gap-5 xl:gap-6">
        <h1 className="text-2xl text-black xl:text-3xl tracking-wide font-bold">
          {title}
        </h1>
        <p className="text-[#A1A1A1] text-md tracking-wide text-left xl:text-justify w-full xl:w-3/4">
          {description}
        </p>
        <h3 className="text-gray-500 text-lg tracking-wide">
          {resturant_name}
        </h3>
        <div className="flex flex-row justify-between items-center gap-12 xl:gap-6">
          <div className="flex flex-col justify-center items-start gap-1 pt-3">
            <p className="text-[#434141] text-lg">
              Price
            </p>
            <p>
              <span className="text-xl font-sans font-bold">
                {price.toString()}
              </span>
            </p>
          </div>
          <div className="flex flex-col justify-center items-end">
            <Button>
              <ShoppingCart className="mr-2 h-4 w-4" />{" "}
              <span className="font-bold">
                Add to Cart
              </span>
            </Button>
          </div>
        </div>
      </div>
      <div>
        <Card>
          <CardContent>
            <div className="aspect-auto">
              <Image
                alt="Item"
                width={400}
                height={400}
                src={
                  imageUrl == undefined ||
                  imageUrl === ""
                    ? "/assets/placeholder-recipe.jpg"
                    : imageUrl
                }
              />
            </div>
          </CardContent>
          <CardFooter>
            <div className="flex flex-row justify-center items-center gap-1">
              <Star
                fill="#FFB300"
                color="#FFB300"
              />
              <p>
                <span className="text-xl font-sans font-bold">
                  {rating.toString()}
                </span>
              </p>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
