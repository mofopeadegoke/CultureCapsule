import Image, { StaticImageData } from "next/image";
import "./style.css";
import img from "../../../../public/fcyLogo.png";

interface Introprops {
  title: string;
  content: string;
  imgUrl: StaticImageData;
}
export default function Intro({ title, content, imgUrl }: Introprops) {
  return (
    <section
      style={{
        backgroundImage: `url(${imgUrl.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1>{title}</h1>
      <p>{content}</p>
      <Image src={img} alt="hI" width="500" height="64" />
    </section>
  );
}
