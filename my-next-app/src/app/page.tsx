"use client";
import React from "react";
import Navbar from "./components/navbar";
import Intro from "./components/intro";
import bg from "../../public/signLoginImg.png";
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
const cormorant = Cormorant_Infant({
  weight: "600",
  subsets: ["latin"],
});
export default function Home() {
  return (
    <>
      <Navbar />
      <Intro
        title="Culture Capsule"
        content="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellu"
        imgUrl={bg}
      />
      <section className="hmSectOne">
        <Image
          src={imgOne}
          alt="Flat Sharwama bread"
          width={469}
          height={377}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFUlEQVR42mPk5OAwZiACMI4qpK9CAJ4ZAwOFT3r9AAAAAElFTkSuQmCC"
        />
        <article>
          <h2 className={cormorant.className}>Discover new recipes</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
            placeat deleniti maiores nemo cumque qui ipsam id at. Praesentium ex
            fugiat velit debitis, eos nemo esse sunt obcaecati quo, consectetur
            excepturi, aut aliquid distinctio dicta hic voluptas ea inventore.
            Quisquam natus adipisci temporibus asperiores, deserunt
            exercitationem consequatur esse nulla illum?
          </p>
          <Btn content="Read More" color="#000" />
        </article>
      </section>
      <section className="hmSectTwo">
        <article>
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
          <Btn content="Read More" color="#000" />
        </article>
        <Image
          src={imgTwo}
          alt="Old people having a nice time in a cultural setting"
          width={469}
          height={377}
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFUlEQVR42mPk5OAwZiACMI4qpK9CAJ4ZAwOFT3r9AAAAAElFTkSuQmCC"
          placeholder="blur"
        />
      </section>
      <section className="hmSectThree">
        <article>
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
        <article className="swpCont">
          <Swiper
            spaceBetween={20}
            slidesPerView={4}
            pagination={{ clickable: true, dynamicBullets: true }}
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
            <Btn content="Read More" color="#fff" />
          </div>
        </article>
      </section>
      <Footer />
    </>
  );
}
