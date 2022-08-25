import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as QrlGuide } from "../assets/computer.svg";
import SocialMedia from "../components/SocialMedia";

function Home() {
  return (
    <main className="min-h-screen flex justify-center items-center p-2">
      <section className="flex justify-center items-center text-center flex-col gap-8">
        <QrlGuide />
        <div className="flex flex-col gap-4 justify-center items-center max-w-md">
          <h1 className="uppercase text-primary text-4xl font-bold">
            Welcome on QRL
          </h1>

          <p className="text-dark">
            Save, manage and share your links with your friends. Super easy to
            use, secure and fast. With our service, nerver loose a link again.
          </p>

          <Link
            to="/login"
            className="px-6 py-3 bg-primary text-light rounded-2xl"
          >
            Start Here
          </Link>
        </div>
        <SocialMedia />
      </section>
    </main>
  );
}

export default Home;
