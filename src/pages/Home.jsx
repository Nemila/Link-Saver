import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";

import { ReactComponent as QrlGuide } from "../assets/computer.svg";
import SocialMedia from "../components/SocialMedia";
import { style } from "../utils/style";

const MotionLink = motion(Link);
const MotionImg = motion(QrlGuide);

function Home() {
  // useEffect(() => {
  //   if (!/android.+mobile|ip(hone|[oa]d)/i.test(navigator.userAgent)) {
  //     console.log(
  //       "Seems like your are not on mobile, please keep in mind that this website was best optimized for mobile."
  //     );
  //   }
  // }, []);

  return (
    <main className={style.page}>
      <section className={`${style.flexColCenter} gap-8 text-center`}>
        <MotionImg
          initial={{ opacity: 0, x: -500 }}
          animate={{ opacity: 1, x: 0 }}
        />
        <div className={`${style.flexColCenter} gap-4 max-w-md`}>
          <h1 className="uppercase text-primary text-4xl font-bold">
            qlink service
          </h1>

          <p className="text-dark">
            For students and future leaders who want to save their important
            links and come back to it easily wihout losing them.
          </p>
          <div className="flex gap-4">
            <MotionLink
              to="/login"
              className={`${style.button} bg-primary text-light`}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: { delay: 0.5, duration: 0.5 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
            >
              Start Here
            </MotionLink>
            <MotionLink
              to="/login"
              className={`${style.button} ring-4 ring-primary bg-none text-primary`}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: { delay: 0.5, duration: 0.5 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
            >
              How to use
            </MotionLink>
          </div>
        </div>
        <SocialMedia />
      </section>
    </main>
  );
}

export default Home;
