"use client";
import Navbar from "../components/navbar";
import Intro from "../components/intro";
import introBg from "../../../public/foodIntro.png";
import profile from "../../../public/profile.png";
import Btn from "../components/btn";
import foodOne from "../../../public/foodOne.png";
import Footer from "../components/footer";
import Card from "../components/card";
import "./style.css";
export default function Food() {
  return (
    <>
      <Navbar />
      <Intro
        title="Food and Gastronomy"
        content="Food is a huge part of any culture, and this is no exception. Many traditional recipes have been passed down for generations, but much of our modern generation has lost touch with them. Now, you can explore and try these timeless dishes—bringing the flavors of the past back to life."
        imgUrl={introBg}
      />
      <section className="foodCont">
        <section className="cards">
          <Card
            imgUrl={foodOne}
            imgAlt="Steak"
            title="Steak"
            userName="Daniel Bentely"
            profilePic={profile}
            datePosted="12/03/2025"
          />
          <Card
            imgUrl={foodOne}
            imgAlt="Steak"
            title="Steak"
            userName="Daniel Bentely"
            profilePic={profile}
            datePosted="12/03/2025"
          />
          <Card
            imgUrl={foodOne}
            imgAlt="Steak"
            title="Steak"
            userName="Daniel Bentely"
            profilePic={profile}
            datePosted="12/03/2025"
          />
          <Card
            imgUrl={foodOne}
            imgAlt="Steak"
            title="Steak"
            userName="Daniel Bentely"
            profilePic={profile}
            datePosted="12/03/2025"
          />
          <Card
            imgUrl={foodOne}
            imgAlt="Steak"
            title="Steak"
            userName="Daniel Bentely"
            profilePic={profile}
            datePosted="12/03/2025"
          />
          <Card
            imgUrl={foodOne}
            imgAlt="Steak"
            title="Steak"
            userName="Daniel Bentely"
            profilePic={profile}
            datePosted="12/03/2025"
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
