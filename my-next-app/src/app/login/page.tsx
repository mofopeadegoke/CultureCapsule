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
          />
          <div className="sectCont">
            <section>
              <article>
                <h1>Login</h1>
                <p>
                  Don't have an account? <Link href="/signup">Sign up</Link>
                </p>
              </article>
              <form action="">
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Enter your password" />
                <BtnColor content="Login" />
                <article className="row">
                  <div></div>
                  <span>or</span>
                  <div></div>
                </article>
                <Btn
                  content="Login with Google"
                  alt="Google's logo"
                  url={google}
                />
              </form>
            </section>
          </div>
        </main>
        <footer>
          <Btn
            content="Go back to website"
            url={leftImg}
            alt="An arrow pointing to the left"
          />
        </footer>
      </div>
    </>
  );
}
