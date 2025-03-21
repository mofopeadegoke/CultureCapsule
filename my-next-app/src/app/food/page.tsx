"use client";
import Navbar from "../components/navbar";
import Intro from "../components/intro";
import introBg from "../../../public/foodIntro.png";
import profile from "../../../public/profilePic.png";
import Btn from "../components/btn";
import foodOne from "../../../public/foodUno.png";
import Footer from "../components/footer";
import Card from "../components/card";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Cormorant_Infant } from "next/font/google";
const cormorant = Cormorant_Infant({
  weight: "400",
  subsets: ["latin"],
});
import "./style.css";
export default function Food() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <>
      <Navbar />
      <Intro
        title="Food and Gastronomy"
        content="Food is a huge part of any culture, and this is no exception. Many traditional recipes have been passed down for generations, but much of our modern generation has lost touch with them. Now, you can explore and try these timeless dishes—bringing the flavors of the past back to life."
        imgUrl={introBg}
        titleTranslation="Yiyecek ve Gastronomi"
      />
      <section className="foodCont">
        <h2 className={cormorant.className}>Food and Gastronomy</h2>
        <p className={cormorant.className}>
          Last updated Date the most recent story | number of available stories
        </p>
        <section className="cards" data-aos="zoom-in-up">
          <Card
            imgUrl={foodOne}
            imgAlt="Steak"
            title="Steak"
            userName="Daniel Bentely"
            profilePic={profile}
            datePosted="12/03/2025"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum"
            noOfLikes="50"
            noOfShares="12"
          />
          <Card
            imgUrl={foodOne}
            imgAlt="Steak"
            title="Steak"
            userName="Daniel Bentely"
            profilePic={profile}
            datePosted="12/03/2025"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum"
            noOfLikes="50"
            noOfShares="12"
          />
          <Card
            imgUrl={foodOne}
            imgAlt="Steak"
            title="Steak"
            userName="Daniel Bentely"
            profilePic={profile}
            datePosted="12/03/2025"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum"
            noOfLikes="50"
            noOfShares="12"
          />
          <Card
            imgUrl={foodOne}
            imgAlt="Steak"
            title="Steak"
            userName="Daniel Bentely"
            profilePic={profile}
            datePosted="12/03/2025"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum"
            noOfLikes="50"
            noOfShares="12"
          />
          <Card
            imgUrl={foodOne}
            imgAlt="Steak"
            title="Steak"
            userName="Daniel Bentely"
            profilePic={profile}
            datePosted="12/03/2025"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum"
            noOfLikes="50"
            noOfShares="12"
          />
          <Card
            imgUrl={foodOne}
            imgAlt="Steak"
            title="Steak"
            userName="Daniel Bentely"
            profilePic={profile}
            datePosted="12/03/2025"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum"
            noOfLikes="50"
            noOfShares="12"
          />
        </section>
        <div className="row">
          <Btn content="Read More" color="#fff" />
        </div>
      </section>
      <Footer />
    </>
  );
}
