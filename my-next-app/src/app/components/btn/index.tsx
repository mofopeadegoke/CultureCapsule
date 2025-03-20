import "./style.css";
import Image, { StaticImageData } from "next/image";
interface nrmBtnProps {
  imgurl?: StaticImageData;
  alt?: string;
  color?: string;
  content: string;
  url?: string;
}

export default function Btn({ imgurl, alt, color, content, url }: nrmBtnProps) {
  return url ? (
    <a href={url}>
      <button
        className="btn"
        style={{ color: color || "#fff", borderColor: color || "#fff" }}
      >
        {imgurl && alt && <Image src={imgurl} alt={alt}></Image>}
        <span>{content}</span>
      </button>
    </a>
  ) : (
    <button
      className="btn"
      style={{ color: color || "#fff", borderColor: color || "#fff" }}
    >
      {imgurl && alt && <Image src={imgurl} alt={alt}></Image>}
      <span>{content}</span>
    </button>
  );
}
