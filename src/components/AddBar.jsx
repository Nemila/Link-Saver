import React, { useContext, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FaPlus } from "react-icons/fa";
import { AuthContext } from "../context/AuthContext";
import { LinkContext } from "../context/LinkContext";
import { style } from "../utils/style";

function AddBar() {
  const [editMode, setEditMode] = useState(false);
  const { user } = useContext(AuthContext);
  const { createLink } = useContext(LinkContext);

  const formik = useFormik({
    initialValues: {
      linkName: "",
      linkUrl: "",
      linkDesc: "",
    },
    validationSchema: Yup.object().shape({
      linkName: Yup.string()
        .min(4, "Minimum characters 4")
        .max(100, "Maximum characters 100")
        .required("Please add a value to name"),
      linkUrl: Yup.string().required("Please add a link"),
      linkDesc: Yup.string(),
    }),
    onSubmit: (values) => {
      createLink({
        name: values.linkName,
        link: values.linkUrl,
        desc:
          values.linkDesc !== ""
            ? values.linkDesc
            : "No description for this link",
        user: user.email,
      });
      setEditMode(false);
      formik.resetForm();
    },
  });

  return (
    <div
      className={`fixed bottom-0 left-0 z-20 p-4 w-full h-[3.5em] bg-primary text-light ${
        editMode && "h-screen"
      } ${style.flexRowCenter} transition-all`}
    >
      {editMode ? (
        <form
          className={`${style.flexColCenter} max-w-md w-full gap-5`}
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
              name="linkName"
              placeholder="What name would you like ?"
              className={`${style.input} ring-light ring-offset-2 ring-offset-primary`}
              value={formik.values.linkName}
              onChange={formik.handleChange}
              required
            />
            {formik.errors.linkName && formik.touched.linkName && (
              <p className="text-light pl-4 text-sm">
                {formik.errors.linkName}
              </p>
            )}
            <input
              type="url"
              name="linkUrl"
              placeholder="What is the link ?"
              className={`${style.input} ring-light ring-offset-2 ring-offset-primary`}
              value={formik.values.linkUrl}
              onChange={formik.handleChange}
              required
            />
            {formik.errors.linkUrl && formik.touched.linkUrl && (
              <p className="text-light pl-4 text-sm">{formik.errors.linkUrl}</p>
            )}
            <textarea
              type="text"
              name="linkDesc"
              placeholder="What about a little description ?"
              className={`${style.input} ring-light ring-offset-2 ring-offset-primary`}
              value={formik.values.linkDesc}
              onChange={formik.handleChange}
            ></textarea>
          </div>
          <div className="flex gap-2">
            <button
              className={`${style.button} bg-light text-dark focus:ring-4 ring-light ring-offset-2 ring-offset-primary`}
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
