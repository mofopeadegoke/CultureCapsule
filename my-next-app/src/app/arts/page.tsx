"use client";
import Navbar from "../components/navbar";
import Intro from "../components/intro";
import introBg from "../../../public/artsIntro.png";
import profile from "../../../public/profile.png";
import Btn from "../components/btn";
import artOne from "../../../public/clayPotPainting.png";
import Footer from "../components/footer";
import Card from "../components/card";
import "./style.css";
export default function Food() {
  return (
    <>
      <Navbar />
      <Intro
        title="Arts & Culture"
        content="Art and culture are always unique, and in Cyprus, the elderly hold a wealth of traditions with nowhere to share them. Here, they finally can. Explore their crafts, learn how they’re made, and turn these timeless skills into something new—preserving the past while inspiring the future."
        imgUrl={introBg}
      />
      <section className="foodCont">
        <section className="cards">
          <Card
            imgUrl={artOne}
            imgAlt="Steak"
            title="Steak"
            userName="Daniel Bentely"
            profilePic={profile}
            datePosted="12/03/2025"
          />
          <Card
            imgUrl={artOne}
            imgAlt="Steak"
            title="Steak"
            userName="Daniel Bentely"
            profilePic={profile}
            datePosted="12/03/2025"
          />
          <Card
            imgUrl={artOne}
            imgAlt="Steak"
            title="Steak"
            userName="Daniel Bentely"
            profilePic={profile}
            datePosted="12/03/2025"
          />
          <Card
            imgUrl={artOne}
            imgAlt="Steak"
            title="Steak"
            userName="Daniel Bentely"
            profilePic={profile}
            datePosted="12/03/2025"
          />
          <Card
            imgUrl={artOne}
            imgAlt="Steak"
            title="Steak"
            userName="Daniel Bentely"
            profilePic={profile}
            datePosted="12/03/2025"
          />
          <Card
            imgUrl={artOne}
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
