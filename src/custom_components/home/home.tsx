import React from "react";
import ProductCardComponent from "../product_card";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";
import { products } from "../db";
import { Product } from "../model";

export default function HomeComponent() {
  const username = "Daniyal";
  return (
    <div className="py-12 flex flex-col justify-between gap-12">
      <div>
        <h1 className="text-black font-bold font-sans tracking-wide text-6xl">
          Hi, {username} 👋
        </h1>
      </div>
      <div className="flex gap-2 xl:gap-0 flex-row justify-between">
        <p className="text-md xl:text-lg">
          Recommended Items
        </p>
        <div>
          <Button variant="destructive">
            <span className="hidden xl:block xl:text-lg">
              Filters
            </span>
            <Filter />
          </Button>
        </div>
      </div>
      <div className="flex flex-col xl:flex-row justify-between items-center gap-4">
        {products.map(
          (item: Product, index: number) => {
            const {
              id,
              title,
              description,
              imageUrl,
              rating,
              price,
              resturant_name,
            } = item;
            return (
              <ProductCardComponent
                key={index}
                id={id}
                title={title}
                description={description}
                rating={rating}
                price={price}
                resturant_name={resturant_name}
                imageUrl={imageUrl}
                quantity={1}
              />
            );
          }
        )}
      </div>
      {/* // <ProductCardComponent /> */}
    </div>
  );
}
