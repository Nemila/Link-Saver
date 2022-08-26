import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as QrlGuide } from "../assets/computer.svg";
import SocialMedia from "../components/SocialMedia";
import { style } from "../utils/style";

function Home() {
  return (
    <main className={style.page}>
      <section className={`${style.flexColCenter} gap-8 text-center`}>
        <QrlGuide />
        <div className={`${style.flexColCenter} gap-4 max-w-md`}>
          <h1 className="uppercase text-primary text-4xl font-bold">
            Welcome on QRL
          </h1>

          <p className="text-dark">
            Save, manage and share your links with your friends. Super easy to
            use, secure and fast. With our service, nerver loose a link again.
          </p>

          <Link to="/login" className={`${style.button} bg-primary text-light`}>
            Start Here
          </Link>
        </div>
        <SocialMedia />
      </section>
    </main>
  );
}

export default Home;
