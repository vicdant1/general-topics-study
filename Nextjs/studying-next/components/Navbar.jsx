import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav>
      <div className="logo">
        <Link href="/">
          <a>
            <Image src="/../public/img/logo.png" width={128} height={77} alt="ninjas logo"/>
          </a>
        </Link>
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/ninjas">
        <a>Ninja Listing</a>
      </Link>
    </nav>
  );
}
