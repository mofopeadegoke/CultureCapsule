"use client";
import React from "react";
import Navbar from "./components/navbar";
import Intro from "./components/intro";
import bg from "../../public/homeIntro.png";
import imgOne from "../../public/thinBread.png";
import imgTwo from "../../public/hmImgTwo.png";
import Image from "next/image";
import Btn from "./components/btn";
import slideOne from "../../public/artEll.png";
import slideTwo from "../../public/litEll.png";
import slideThree from "../../public/handEll.png";
import slideFour from "../../public/clotheEll.png";
import "./home.css";
import { Cormorant_Infant } from "next/font/google";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Footer from "./components/footer";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const cormorant = Cormorant_Infant({
  weight: "600",
  subsets: ["latin"],
});
export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);
  return (
    <>
      <Navbar />
      <Intro
        title="Welcome to Culture Capsule"
        content="Discover the rich culture and heritage of North Cyprus"
        imgUrl={bg}
        titleTranslation="Kültür Kapsülüne Hoş Geldiniz"
      />
      <section className="hmSectOne">
        <Image
          src={imgOne}
          alt="Flat Sharwama bread"
          width={600}
          height={482.315}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFUlEQVR42mPk5OAwZiACMI4qpK9CAJ4ZAwOFT3r9AAAAAElFTkSuQmCC"
          data-aos="fade-right"
        />
        <article data-aos="fade-left">
          <h2 className={cormorant.className}>Discover new recipes</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
            placeat deleniti maiores nemo cumque qui ipsam id at. Praesentium ex
            fugiat velit debitis, eos nemo esse sunt obcaecati quo, consectetur
            excepturi, aut aliquid distinctio dicta hic voluptas ea inventore.
            Quisquam natus adipisci temporibus asperiores, deserunt
            exercitationem consequatur esse nulla illum?
          </p>
          <div className="center">
            <Btn content="Read More" color="#000" url="/food" />
          </div>
        </article>
      </section>
      <section className="hmSectTwo">
        <article data-aos="fade-right">
          <h2 className={cormorant.className}>
            Explore the rich legacy from Cypriot elders{" "}
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
            placeat deleniti maiores nemo cumque qui ipsam id at. Praesentium ex
            fugiat velit debitis, eos nemo esse sunt obcaecati quo, consectetur
            excepturi, aut aliquid distinctio dicta hic voluptas ea inventore.
            Quisquam natus adipisci temporibus asperiores, deserunt
            exercitationem consequatur esse nulla illum?
          </p>
          <div className="center">
            <Btn content="Read More" color="#000" url="/folklore" />
          </div>
        </article>
        <Image
          src={imgTwo}
          alt="Old people having a nice time in a cultural setting"
          width={600}
          height={482.315}
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFUlEQVR42mPk5OAwZiACMI4qpK9CAJ4ZAwOFT3r9AAAAAElFTkSuQmCC"
          placeholder="blur"
          data-aos="fade-left"
        />
      </section>
      <section className="hmSectThree">
        <article data-aos="fade-up">
          <h2 className={cormorant.className}>Discover the arts & culture</h2>
          <p>
            Preserving culture matters—it holds the ideas, art, and innovations
            of the past that shaped how people lived, expressed themselves, and
            adapted to their surroundings. Explore the diverse arts and
            traditions crafted, written, sewn, and shared by elders from
            different backgrounds. Their creativity and stories are now here for
            you to discover.
          </p>
        </article>
        <article className="swpCont" data-aos="zoom-in-up">
          <Swiper
            spaceBetween={20}
            slidesPerView={4}
            pagination={{ clickable: true, dynamicBullets: true }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
              },
              800: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            modules={[Pagination]}
          >
            <SwiperSlide>
              <article>
                <Image
                  src={slideOne}
                  alt="A painting on a womans eyes"
                  width={300}
                  height={300}
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFUlEQVR42mPk5OAwZiACMI4qpK9CAJ4ZAwOFT3r9AAAAAElFTkSuQmCC"
                />
                <p>Visual Art</p>
              </article>
            </SwiperSlide>
            <SwiperSlide>
              <article>
                <Image
                  src={slideTwo}
                  alt="A woman reading a book"
                  width={300}
                  height={300}
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFUlEQVR42mPk5OAwZiACMI4qpK9CAJ4ZAwOFT3r9AAAAAElFTkSuQmCC"
                />
                <p>Literature & poetry</p>
              </article>
            </SwiperSlide>
            <SwiperSlide>
              <article>
                <Image
                  src={slideThree}
                  alt="Cultural pots"
                  width={300}
                  height={300}
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFUlEQVR42mPk5OAwZiACMI4qpK9CAJ4ZAwOFT3r9AAAAAElFTkSuQmCC"
                />
                <p>Handicrafts</p>
              </article>
            </SwiperSlide>
            <SwiperSlide>
              <article>
                <Image
                  src={slideFour}
                  alt="A man with braided hair touching a cloth"
                  width={300}
                  height={300}
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFUlEQVR42mPk5OAwZiACMI4qpK9CAJ4ZAwOFT3r9AAAAAElFTkSuQmCC"
                />
                <p>Clothing and textiles</p>
              </article>
            </SwiperSlide>
            <SwiperSlide>
              <article>
                <Image
                  src={slideOne}
                  alt="A painting on a womans eyes"
                  width={300}
                  height={300}
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFUlEQVR42mPk5OAwZiACMI4qpK9CAJ4ZAwOFT3r9AAAAAElFTkSuQmCC"
                />
                <p>Visual Art</p>
              </article>
            </SwiperSlide>
            <SwiperSlide>
              <article>
                <Image
                  src={slideTwo}
                  alt="A woman reading a book"
                  width={300}
                  height={300}
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFUlEQVR42mPk5OAwZiACMI4qpK9CAJ4ZAwOFT3r9AAAAAElFTkSuQmCC"
                />
                <p>Literature & poetry</p>
              </article>
            </SwiperSlide>
            <SwiperSlide>
              <article>
                <Image
                  src={slideThree}
                  alt="Cultural pots"
                  width={300}
                  height={300}
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFUlEQVR42mPk5OAwZiACMI4qpK9CAJ4ZAwOFT3r9AAAAAElFTkSuQmCC"
                />
                <p>Handicrafts</p>
              </article>
            </SwiperSlide>
            <SwiperSlide>
              <article>
                <Image
                  src={slideFour}
                  alt="A man with braided hair touching a cloth"
                  width={300}
                  height={300}
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFUlEQVR42mPk5OAwZiACMI4qpK9CAJ4ZAwOFT3r9AAAAAElFTkSuQmCC"
                />
                <p>Clothing and textiles</p>
              </article>
            </SwiperSlide>
          </Swiper>
          <div className="row">
            <Btn content="Read More" color="#fff" url="arts" />
          </div>
        </article>
      </section>
      <Footer />
    </>
  );
}
