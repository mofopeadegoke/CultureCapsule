import Image from "next/image";
import logo from "../../../../public/cultureCapsuleLogo.png";
import search from "../../../../public/mgGlass.png";
import illus from "../../../../public/fcyLogoDark.png";
import "./style.css";
export default function Footer() {
  return (
    <section className="ftCont">
      <nav>
        <Image
          src={logo}
          alt="A feather with text which says culture capsule by the side"
          width={300}
          height={157.9}
        />
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Interest</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Profile</a>
          </li>
        </ul>
        <div className="row">
          <article className="srchCont">
            <input type="text" placeholder="Search" />
            <Image
              src={search}
              alt="A magnifying glass"
              width={24}
              height={24}
            />
          </article>
        </div>
      </nav>
      <div className="ftBtm">
        <Image
          src={illus}
          alt="An illustration"
          width={518.18}
          height={66.35}
        />
      </div>
    </section>
  );
}
