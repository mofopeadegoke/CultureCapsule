import Image, { StaticImageData } from "next/image";
import Btn from "../btn";
import { Cormorant_Infant } from "next/font/google";
import heart from "../../../../public/heart.png";
import share from "../../../../public/share.png";
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
  noOfLikes: string;
  noOfShares: string;
  content: string;
}
export default function Card({
  imgUrl,
  title,
  userName,
  datePosted,
  profilePic,
  imgAlt,
  noOfLikes,
  noOfShares,
  content,
}: CardProps) {
  return (
    <section className="card">
      <article className="rowOne">
        <Image
          src={profilePic}
          alt="The user's profile picture"
          width={45}
          height={45}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFUlEQVR42mOsr6/9z0AEYBxVSF+FAJbqGM9+8qfZAAAAAElFTkSuQmCC"
        />
        <p>by {userName}</p>
        <p>{datePosted}</p>
      </article>
      <Image
        src={imgUrl}
        alt={imgAlt}
        width={512}
        height={216}
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFUlEQVR42mPk5OAwZiACMI4qpK9CAJ4ZAwOFT3r9AAAAAElFTkSuQmCC"
      />
      <article className="rowThree">
        <Image
          src={heart}
          alt="A heart icon"
          width={30}
          height={30}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFUlEQVR42mPk5OAwZiACMI4qpK9CAJ4ZAwOFT3r9AAAAAElFTkSuQmCC"
        />
        <p>{noOfLikes}</p>
        <Image
          src={share}
          alt="The share icon"
          width={30}
          height={30}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFUlEQVR42mPk5OAwZiACMI4qpK9CAJ4ZAwOFT3r9AAAAAElFTkSuQmCC"
        />
        <p>{noOfShares}</p>
      </article>
      <article className="rowFour">
        <h3 className={cormorant.className}>{title}</h3>
        <p>{content}</p>
        <Btn content="Read More" color="#fff" />
      </article>
    </section>
  );
}
