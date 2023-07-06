import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full p-4 border-b-2">
      <Link href="/" className="w-full pl-4 text-2xl font-bold text-black no-underline">
        Blog
      </Link>
    </nav>
  );
}
