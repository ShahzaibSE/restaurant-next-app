import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ShoppingCart,
  Heart,
  Search,
  ChevronDown,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                Categories <ChevronDown />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuRadioGroup value="bottom">
                <DropdownMenuRadioItem value="top">
                  Salad
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="bottom">
                  Steak
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="right">
                  Chicken
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <Link href={"#"}>
          <Button className="rounded-full w-12 h-12">
            <Heart />
          </Button>
        </Link>
        <Link href={"/cart"}>
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
