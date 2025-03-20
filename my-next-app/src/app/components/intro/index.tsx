import Image, { StaticImageData } from "next/image";
import "./style.css";
import img from "../../../../public/fcyLogo.png";
import { Cormorant_Infant } from "next/font/google";
import Typewriter from "typewriter-effect";
const cormorant = Cormorant_Infant({
  weight: "600",
  subsets: ["latin"],
});

interface Introprops {
  title: string;
  content: string;
  imgUrl: StaticImageData;
  titleTranslation: string;
}
export default function Intro({
  title,
  content,
  imgUrl,
  titleTranslation,
}: Introprops) {
  return (
    <section
      className="intro"
      style={{
        backgroundImage: `url(${imgUrl.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className={cormorant.className}>
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString(title)
              .pauseFor(1500)
              .deleteAll()
              .typeString(titleTranslation)
              .pauseFor(2500)
              .deleteAll()
              .start();
          }}
        />
      </h1>
      <p>{content}</p>
      <Image src={img} alt="placeholder" width="500" height="64" />
    </section>
  );
}
