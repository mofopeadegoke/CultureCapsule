import Image, { StaticImageData } from "next/image";
import { Cormorant_Infant } from "next/font/google";
const cormorant = Cormorant_Infant({
  weight: "700",
  subsets: ["latin"],
});
import "./style.css";
interface CardProps {
  imgUrl: StaticImageData;
  imgAlt: string;
  title: string;
  userName: string;
  datePosted: string;
  profilePic: StaticImageData;
}
export default function Card({
  imgUrl,
  title,
  userName,
  datePosted,
  profilePic,
  imgAlt,
}: CardProps) {
  return (
    <section className="card">
      <Image
        src={imgUrl}
        alt={imgAlt}
        width={407}
        height={380}
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFUlEQVR42mPk5OAwZiACMI4qpK9CAJ4ZAwOFT3r9AAAAAElFTkSuQmCC"
      />
      <article>
        <Image
          src={profilePic}
          alt="The user's profile picture"
          width={71}
          height={71}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFUlEQVR42mOsr6/9z0AEYBxVSF+FAJbqGM9+8qfZAAAAAElFTkSuQmCC"
        />
        <div className="crdContent">
          <h3 className={cormorant.className}>{title}</h3>
          <p>by {userName}</p>
          <p>{datePosted}</p>
        </div>
      </article>
    </section>
  );
}
