import Image from "next/image";
import Link from "next/link";
import sidePic from "../../../public/signLoginImg.png";
import google from "../../../public/google.png";
import leftImg from "../../../public/left.png";
import "./index.css";
import BtnColor from "../components/btnColor";
import Btn from "../components/btn";
export default function Login() {
  return (
    <>
      <div className="bg">
        <main>
          <Image
            src={sidePic}
            alt="An old building on top of a mountain"
            width={684}
            height={896}
            sizes="(max-width: 100%)"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFUlEQVR42mPk5OAwZiACMI4qpK9CAJ4ZAwOFT3r9AAAAAElFTkSuQmCC"
          />
          <div className="sectCont">
            <section className="sect">
              <article>
                <h1>Create an Account</h1>
                <p>
                  Already have an account? <Link href="/login">Login</Link>
                </p>
              </article>
              <form action="">
                <article className="row">
                  <input type="text" placeholder="Name" />
                  <input type="text" placeholder="Surname" />
                </article>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Enter your password" />
                <input type="password" placeholder="Confirm Password" />
                <BtnColor content="Create Account" />
                <article className="row">
                  <div></div>
                  <span>or</span>
                  <div></div>
                </article>
                <Btn
                  content="Sign up with Google"
                  alt="Google's logo"
                  imgurl={google}
                />
              </form>
            </section>
          </div>
        </main>
        <footer>
          <Btn
            content="Go back to website"
            imgurl={leftImg}
            alt="An arrow pointing to the left"
            url="/"
          />
        </footer>
      </div>
    </>
  );
}
