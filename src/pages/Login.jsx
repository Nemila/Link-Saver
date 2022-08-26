import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { FcGoogle } from "react-icons/fc";
import { BsGithub, BsApple, BsTwitter } from "react-icons/bs";

import { AuthContext } from "../context/AuthContext";
import { style } from "../utils/style";

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
      <div className="w-full max-w-md flex flex-col gap-4 text-dark border-[#eee] bg-light md:p-8 md:shadow-md md:border-2">
        <h2 className="font-medium text-lg text-center">Join the community</h2>
        <div className="text-[black] flex flex-col gap-3">
          <button
            type="button"
            className={`${style.signInBtn} bg-white text-dark`}
            onClick={handleGoogleSignIn}
          >
            <FcGoogle className="text-2xl " />
            <span>Sign in with Google</span>
          </button>

          <button
            type="button"
            className={`${style.signInBtn} bg-dark text-light`}
            onClick={handleGithubSignIn}
          >
            <BsGithub className="text-2xl" />
            <span>Sign in with Github</span>
          </button>

          <button
            type="button"
            className={`${style.signInBtn} bg-[dodgerblue] text-light`}
            onClick={handleGithubSignIn}
            disabled
          >
            <BsTwitter className="text-2xl" />
            <span>Sign in with Twitter</span>
          </button>

          <button
            type="button"
            className={`${style.signInBtn} bg-[#000000] text-light`}
            onClick={handleGithubSignIn}
            disabled
          >
            <BsApple className="text-2xl" />
            <span>Sign in with Apple</span>
          </button>
        </div>
      </div>
    </main>
  );
}

export default Login;
