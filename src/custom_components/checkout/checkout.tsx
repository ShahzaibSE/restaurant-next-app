import React from "react";
import Image from "next/image";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";

export default function CheckoutComponent() {
  return (
    <div className="py-16 xl:py-12 flex flex-col xl:flex-row justify-center items-center xl:items-start gap-6 h-screen">
      <div className="bg-white rounded-xl shadow-xl w-full xl:w-1/3 flex flex-col justify-between items-start gap-6">
        <h1 className="px-6 pt-6 text-bold text-xl text-black tracking-wide font-bold">
          Payment Details
        </h1>
        <div className="p-6 flex flex-col justify-between items-center gap-4">
          <RadioGroup>
            <div className="flex flex-row justify-between items-center gap-8">
              <div className="flex flex-row justify-start items-center gap-4">
                <Image
                  alt="Card Option"
                  width={54}
                  height={54}
                  src="/assets/recipe/card_option.png"
                />
                <p className="font-bold text-md">
                  Debit/Credit Card
                </p>
              </div>
              <RadioGroupItem value="debit/card" />
            </div>
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-row justify-start items-center gap-4">
                <Image
                  alt="Paypal Option"
                  width={54}
                  height={54}
                  src="/assets/recipe/paypal-option.png"
                />
                <p className="font-bold text-md">
                  Paypal
                </p>
              </div>
              <RadioGroupItem value="paypal" />
            </div>
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-row justify-start items-center gap-4">
                <Image
                  alt="Payoneer"
                  width={54}
                  height={54}
                  src="/assets/recipe/payoneer-option.png"
                />
                <p className="font-bold text-md">
                  Payoneer
                </p>
              </div>
              <RadioGroupItem value="payoneer" />
            </div>
          </RadioGroup>
        </div>
      </div>
      <div className="bg-white shadow-xl p-12 flex flex-col justify-between items-start gap-8">
        <div className="flex flex-col justify-between items-start gap-4">
          <h1 className="text-black text-xl font-bold tracking-wide">
            Delivery Details
          </h1>
          <p className="text-[#A1A1A1] text-lg">
            789 Maple Street, Los Angeles, CA
            90001 (888) 987-6543
          </p>
        </div>
        <div className="flex flex-col justify-between items-start gap-4">
          <h1 className="text-black text-xl font-bold tracking-wide">
            Order Details
          </h1>
          <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-2 xl:gap-6">
            <p className="text-[#A1A1A1] text-lg">
              1x Green salad
            </p>
            <p className="text-[#A1A1A1] text-lg">
              3x Grilled steak{" "}
            </p>
          </div>
          <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-2 xl:gap-6">
            <p className="text-[#A1A1A1] text-lg">
              1x fresh vegetable
            </p>
            <p className="text-[#A1A1A1] text-lg">
              1x vegan cake{" "}
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-between items-center gap-8 xl:gap-16">
          <div>
            <p className="text-[#434141] text-lg">
              Total
            </p>
            <p className="flex flex-row justify-between items-center gap-2">
              <span className="text-2xl font-sans font-bold">
                300
              </span>
              <span className="text-red-600 font-bold text-2xl"> $</span>
            </p>
          </div>
          <div>
            <Button className="rounded-full" variant="destructive" size={"lg"}>Pay Now</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
