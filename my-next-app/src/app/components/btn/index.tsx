import "./style.css";
import Image, { StaticImageData } from "next/image";
interface nrmBtnProps {
    url ?: StaticImageData;
    alt ?: string;
    content: string;
}

export default function Btn({url, alt, content} : nrmBtnProps) {
    return (
        <button className="btn">
            {url && alt && <Image src={url} alt={alt} ></Image>}
            <span>
                {content}
            </span>
            
        </button>
    )
}