import Image, { StaticImageData } from "next/image";
import "./style.css";
import img from "../../../../public/fcyLogo.png";
import { Cormorant_Infant } from "next/font/google";
const cormorant = Cormorant_Infant({
  weight: "600",
  subsets: ["latin"],
});

interface Introprops {
  title: string;
  content: string;
  imgUrl: StaticImageData;
}
export default function Intro({ title, content, imgUrl }: Introprops) {
  return (
    <section
      className="intro"
      style={{
        backgroundImage: `url(${imgUrl.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className={cormorant.className}>{title}</h1>
      <p>{content}</p>
      <Image src={img} alt="placeholder" width="500" height="64" />
    </section>
  );
}
