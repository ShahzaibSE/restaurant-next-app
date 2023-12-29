import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ShoppingCart,
  Heart,
  Search,
} from "lucide-react";

export default function Header() {
  return (
    <div className="bg-white shadow-md p-6 w-full fixed flex flex-col xl:flex-row justify-between items-center">
      <Link href="/">
        <h1 className="font-sans font-bold text-3xl">
          Fit Grocer 🛒
        </h1>
      </Link>
      <div className="hidden xl:flex xl:flex-row xl:justify-between xl:items-center gap-4">
        {/* <Link href={"#"}>Categories</Link> */}
        <Link href={"#"}>
          <Button className="rounded-full w-12 h-12">
            <Heart />
          </Button>
        </Link>
        <Link href={"#"}>
          <Button className="rounded-full w-12 h-12">
            <ShoppingCart />
          </Button>
        </Link>
        <div>
          <Input
            type="text"
            placeholder="Search"
          />
        </div>
      </div>
    </div>
  );
}
