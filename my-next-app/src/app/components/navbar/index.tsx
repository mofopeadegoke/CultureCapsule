"use client";
import Image from "next/image";
import logo from "../../../../public/cultureCapsuleLogo.png";
import search from "../../../../public/mgGlass.png";
import burger from "../../../../public/burger.png";
import Link from "next/link";
import BtnColor from "../btnColor";
import { useState, useEffect, useRef } from "react";
import "./style.css";
export default function Navbar() {
  const setShow = useState(false)[1]; // This is the setter function in which the state value cannot be accessed directly except through the setter function
  const mobContentEl = useRef<HTMLElement | null>(null);
  const burgBtn = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const burgBtnEl = burgBtn.current;
    if (!burgBtnEl || !mobContentEl.current) return;

    const handleClick = () => {
      setShow((prev) => {
        const newState = !prev;
        mobContentEl.current!.style.display = newState ? "flex" : "none";
        return newState;
      });
    };
    burgBtnEl.addEventListener("click", handleClick);

    return () => {
      burgBtnEl.removeEventListener("click", handleClick);
    };
  }, [setShow]);
  return (
    <nav className="navMain">
      <Image
        src={logo}
        alt="A feather with text which says culture capsule by the side"
        width={300}
        height={157.9}
      />
      <ul className="web">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#">Interest</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="#">Profile</a>
        </li>
      </ul>
      <div className="row web">
        <article className="srchCont">
          <input type="text" placeholder="Search" />
          <Image src={search} alt="A magnifying glass" width={24} height={24} />
        </article>
        <div className="line"></div>
        <BtnColor content="Login" />
      </div>
      <div className="burgBtn mobile" ref={burgBtn}>
        <Image src={burger} alt="The burger icon" width={60} height={60} />
      </div>
      <section className="mobileNavMain" ref={mobContentEl}>
        <Link href="/">Home</Link>
        <div className="navRow">
          <p>
            Interests <span>&#xF22C;</span>
          </p>
        </div>
        <section className="intCont">
          <Link href="/food">Food & Gastronomy</Link>
          <Link href="/arts">Arts & Culture</Link>
          <Link href="/folklore">Folklore</Link>
          <Link href="/events">Historical Events</Link>
          <Link href="/crafts">Handicrafts</Link>
        </section>
        <Link href="/about">About</Link>
        <Link href="/profile">Profile</Link>
      </section>
    </nav>
  );
}
