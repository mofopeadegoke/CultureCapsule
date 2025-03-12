"use client";
import Navbar from "../components/navbar";
import Intro from "../components/intro";
import introBg from "../../../public/artsIntro.png";
import profile from "../../../public/profilePic.png";
import Btn from "../components/btn";
import foodOne from "../../../public/foodUno.png";
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
