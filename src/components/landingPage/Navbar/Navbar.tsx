import { Navcontainer } from "@/styles/navbar";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <Navcontainer>
      <Link href="/ricky-morty">
        <span>Ricky-Morty</span>
      </Link>
      <Link href="/unsplash">
        <span>Unsplash</span>
      </Link>
    </Navcontainer>
  );
};

export default Navbar;
