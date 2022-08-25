import React, { useContext, useState } from "react";
import { useFormik } from "formik";
import { FaPlus } from "react-icons/fa";
import { AuthContext } from "../context/AuthContext";
import { LinkContext } from "../context/LinkContext";

function AddBar() {
  const [editMode, setEditMode] = useState(false);
  const { user } = useContext(AuthContext);
  const { createLink } = useContext(LinkContext);

  let formik = useFormik({
    initialValues: {
      linkName: "",
      linkUrl: "",
    },
    onSubmit: (values) => {
      createLink({
        name: values.linkName,
        link: values.linkUrl,
        user: user.email,
      });
    },
  });

  return (
    <div
      className={`fixed z-20 p-2 bottom-0 left-0 w-full h-[3.5em] bg-primary text-light ${
        editMode && "h-screen"
      } transition-all flex justify-center items-center`}
    >
      {editMode ? (
        <form
          className="flex flex-col justify-center items-center gap-5"
          onSubmit={formik.handleSubmit}
        >
          <div className="text-center">
            <h2 className="text-4xl font-bold">Add a new link</h2>
            <p className="text-sm my-2">
              Please fill out the form to add a link
            </p>
          </div>
          <div className="flex flex-col gap-4 w-full">
            <input
              type="text"
              id="linkName"
              name="linkName"
              placeholder="Enter the name"
              className="text-dark selection:bg-dark rounded-full px-4 py-3 w-full focus:ring-4 ring-secondary ring-offset-2 ring-offset-primary outline-none"
              value={formik.values.linkName}
              onChange={formik.handleChange}
            />
            <input
              type="text"
              id="linkUrl"
              name="linkUrl"
              placeholder="Enter the link"
              className="text-dark selection:bg-dark rounded-full px-4 py-3 w-full focus:ring-4 ring-secondary ring-offset-2 ring-offset-primary outline-none"
              value={formik.values.linkUrl}
              onChange={formik.handleChange}
            />
          </div>
          <div className="flex gap-2">
            <button
              className="bg-light text-dark rounded-full px-8 py-3 focus:ring-4 ring-secondary ring-offset-2 ring-offset-primary outline-none"
              type="submit"
            >
              Add Link
            </button>
            <button
              className="bg-dark text-light rounded-full px-8 py-3 focus:ring-4 ring-dark ring-offset-2 ring-offset-primary outline-none"
              onClick={() => setEditMode((prev) => !prev)}
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <button
          className="absolute rounded-full p-5 top-[-50%] left-1/2 translate-x-[-50%] bg-primary ring-4 ring-light text-light text-2xl outline-none"
          onClick={() => setEditMode((prev) => !prev)}
        >
          <FaPlus />
        </button>
      )}
    </div>
  );
}

export default AddBar;
