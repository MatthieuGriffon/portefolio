"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const closeMenu = () => {
    setMenuActive(false);
  };

  return (
    <header>
      <nav>
        <div className="logo">
          <Link href="/">
            <Image src="/logo.png" alt="Logo" width={60} height={60} />
          </Link>
        </div>
        <h1 className="title">Developer Portfolio</h1>
        <div className="menu-icon" onClick={toggleMenu}>
          <div className={menuActive ? "bar active" : "bar"}></div>
          <div className={menuActive ? "bar active" : "bar"}></div>
          <div className={menuActive ? "bar active" : "bar"}></div>
        </div>
        <ul className={menuActive ? "menu-active" : ""}>
          <li>
            <Link href="/" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" onClick={closeMenu}>
              About
            </Link>
          </li>
          <li>
            <Link href="/projects" onClick={closeMenu}>
              Projects
            </Link>
          </li>
          <li>
            <Link href="/blog" onClick={closeMenu}>
              Blog
            </Link>
          </li>
          <li>
            <Link href="/contact" onClick={closeMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
