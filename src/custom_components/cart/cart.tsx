import React from "react";
import CartCardComponent from "./cartCard";
import { products } from "../db";
import { CartItem } from "../model";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";

export default function CartComponent() {
  return (
    <div className="py-12 flex flex-col justify-between items-start gap-8 xl:gap-6 w-full">
      <div className="flex flex-col justify-start items-start gap-6 xl:container">
        <div className="flex justify-start items-center my-4">
          <h1 className="font-bold text-2xl xl:text-3xl leading-6 tracking-wide">
            My Bucket 🪣
          </h1>
        </div>
      </div>
      <div className="flex flex-col xl:flex-row justify-between items-center gap-8 xl:gap-12">
        <div className="flex flex-col justify-center items-center xl:flex-row xl:justify-between xl:items-end gap-10 xl:gap-2 xl:container">
          <div className="flex flex-col justify-between items-start gap-4 xl:flex-row xl:gap-8">
            <div className="flex flex-col justify-between items-center gap-3 max-h-full xl:w-full">
              <>
                {products.map(
                  (
                    item: CartItem,
                    index: number
                  ) => {
                    const {
                      id,
                      title,
                      description,
                      imageUrl,
                      quantity,
                      rating,
                      resturant_name,
                      price,
                    } = item;

                    return (
                      <CartCardComponent
                        key={index}
                        id={id}
                        title={title}
                        description={description}
                        imageUrl={imageUrl}
                        rating={rating}
                        quantity={
                          quantity === undefined
                            ? 1
                            : quantity
                        }
                        price={price}
                        resturant_name={
                          resturant_name
                        }
                      />
                    );
                  }
                )}
              </>
            </div>
            <div className="flex flex-col justify-start items-start gap-8 bg-blue-100 p-6 xl:p-10 rounded-md xl:w-1/3">
              <div className="flex justify-start items-start">
                <h3 className="font-bold tracking-wide leading-6 text-xl">
                  Order Summary
                </h3>
              </div>
              <div className="flex flex-row justify-between items-start gap-14">
                <div>
                  <p className="tracking-wide leading-6">
                    Quantity
                  </p>
                </div>
                <div>
                  <p className="tracking-wide leading-6">
                    {12} Product
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-between items-start gap-10">
                <div>
                  <p className="tracking-wide leading-6">
                    Sub Total
                  </p>
                </div>
                <div>
                  <p className="tracking-wide leading-6">
                    ${89.0}
                  </p>
                </div>
              </div>
              <div className="flex w-full">
                <Link href="/checkout">
                  <Button>
                    <ShoppingCart className="mr-2 h-4 w-4" />{" "}
                    <span className="font-bold">
                      Proceed to Checkout
                    </span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
