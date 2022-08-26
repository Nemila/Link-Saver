import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { FcGoogle } from "react-icons/fc";
import { BsGithub, BsApple, BsTwitter } from "react-icons/bs";

import { AuthContext } from "../context/AuthContext";
import { style } from "../utils/style";

import { motion } from "framer-motion";

const container = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const btnItems = {
  hidden: {
    opacity: 0,
    x: -500,
  },
  show: {
    opacity: 1,
    x: 0,
  },
};

function Login() {
  let navigate = useNavigate();
  const { user, googleSignIn, githubSignIn } = useContext(AuthContext);

  const handleGoogleSignIn = async () => googleSignIn();
  const handleGithubSignIn = async () => githubSignIn();

  useEffect(() => {
    user !== null && navigate("/links");
  }, [user, navigate]);

  return (
    <main className={style.page}>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="w-full max-w-md flex flex-col gap-4 text-dark border-[#eee] bg-light md:p-8 md:shadow-md md:border-2"
      >
        <h2 className="font-medium text-lg text-center">Join the community</h2>
        <div className="text-black flex flex-col gap-3">
          <motion.button
            variants={btnItems}
            className={`${style.signInBtn} bg-white text-dark`}
            onClick={handleGoogleSignIn}
          >
            <FcGoogle className="text-2xl " />
            <span>Sign in with Google</span>
          </motion.button>

          <motion.button
            variants={btnItems}
            className={`${style.signInBtn} bg-dark text-light`}
            onClick={handleGithubSignIn}
          >
            <BsGithub className="text-2xl" />
            <span>Sign in with Github</span>
          </motion.button>

          <motion.button
            variants={btnItems}
            className={`${style.signInBtn} bg-[dodgerblue] text-light`}
            onClick={handleGithubSignIn}
            disabled
          >
            <BsTwitter className="text-2xl" />
            <span>Sign in with Twitter</span>
          </motion.button>

          <motion.button
            variants={btnItems}
            className={`${style.signInBtn} bg-black text-light`}
            onClick={handleGithubSignIn}
            disabled
          >
            <BsApple className="text-2xl" />
            <span>Sign in with Apple</span>
          </motion.button>
        </div>
      </motion.div>
    </main>
  );
}

export default Login;
