import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <div className="bg-[#F0F4FC] shadow-inner flex flex-col xl:flex-row justify-between items-center">
        <h1 className="">Welcome</h1>
        <div className="hidden xl:flex xl:flex-row xl:justify-between xl:items-center gap-4">
            <Link href={"#"}>Categories</Link>
            <Link href={"#"}>About Us</Link>
            {/* <Link href={"#"}>Categories</Link> */}
        </div>
    </div>
  )
}
