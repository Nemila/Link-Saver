import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";

import { useFormik } from "formik";
import * as Yup from "yup";

import { AuthContext } from "../context/AuthContext";

function Login() {
  let navigate = useNavigate();
  const { user, googleSignIn, githubSignIn } = useContext(AuthContext);

  const handleGoogleSignIn = async () => googleSignIn();
  const handleGithubSignIn = async () => githubSignIn();

  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email("Invalid email").required("Email required"),
      password: Yup.string()
        .min(8, "Min characters 8")
        .max(20, "Max characters 20")
        .required("Password required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  useEffect(() => {
    user === null && navigate("/login");
  }, [user, navigate]);

  return (
    <main className="p-4 min-h-screen flex justify-center items-center bg-light">
      <form
        className="w-full flex flex-col gap-4 max-w-md text-dark md:p-8 md:shadow-md md:border-2 border-[#eee]"
        onSubmit={formik.handleSubmit}
      >
        <h1 className="font-medium text-3xl text-center">Sign in with</h1>
        <div className="flex gap-2">
          <button
            type="button"
            className="px-6 py-3 flex justify-center items-center gap-2 bg-[white] rounded-md shadow-md w-full focus:ring-4 ring-primary ring-offset-2 ring-offset-light outline-none"
            onClick={handleGoogleSignIn}
          >
            <FcGoogle className="text-2xl " />
            <span>Google</span>
          </button>
          <button
            type="button"
            className="px-6 py-3 flex justify-center items-center gap-2 bg-[white] rounded-md shadow-md w-full focus:ring-4 ring-primary ring-offset-2 ring-offset-light outline-none"
            onClick={handleGithubSignIn}
          >
            <BsGithub className="text-2xl" />
            <span>Github</span>
          </button>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            className="bg-[white] px-4 py-3 shadow-md rounded-md border-none focus:ring-4 ring-primary ring-offset-2 ring-offset-light outline-none"
            placeholder="Enter your email..."
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email && formik.touched.email && (
            <p className="text-danger">{formik.errors.email}</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            className="bg-[white] shadow-md rounded-md px-4 py-3 border-none focus:ring-4 ring-primary ring-offset-2 ring-offset-light outline-none"
            placeholder="Enter your password..."
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.errors.password && formik.touched.password && (
            <p className="text-danger">{formik.errors.password}</p>
          )}
        </div>
        <button
          type="submit"
          className="px-6 py-3 bg-primary text-light rounded-md shadow-md focus:ring-4 ring-primary ring-offset-2 ring-offset-light outline-none"
        >
          Login
        </button>
        <p className="text-sm text-center">
          Not a member?{" "}
          <Link to="/signup" className="text-primary underline">
            Sign up now
          </Link>
        </p>
      </form>
    </main>
  );
}

export default Login;
