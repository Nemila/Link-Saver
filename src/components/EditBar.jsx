import React from "react";

function EditBar({ linkItem, edit, toggleEdit }) {
  return (
    <div
      className={`fixed opacity-[1] z-50 inset-0 h-screen w-screen flex justify-center items-center bg-[rgba(0,0,0,.8)] ${
        edit ? "left-0 " : "left-[100%] opacity-[0]"
      } transition-all`}
      onClick={toggleEdit}
    >
      <div
        className="px-6 py-10 w-full max-w-md bg-primary md:rounded-md"
        onClick={(e) => e.stopPropagation()}
      >
        <form className="flex flex-col justify-center items-center gap-5">
          <div className="text-center text-light">
            <h2 className="text-4xl font-bold">Edit a link</h2>
            <p className="text-sm my-2">What are the new informations</p>
          </div>
          <div className="flex flex-col gap-4 w-full">
            <input
              type="text"
              placeholder="Enter the link"
              className="text-dark selection:bg-dark rounded-full px-4 py-3 w-full focus:ring-4 ring-secondary ring-offset-2 ring-offset-primary outline-none"
            />
            <input
              type="text"
              placeholder="Enter the name"
              className="text-dark selection:bg-dark rounded-full px-4 py-3 w-full focus:ring-4 ring-secondary ring-offset-2 ring-offset-primary outline-none"
            />
          </div>
          <button className="bg-light text-dark rounded-full px-8 py-3 focus:ring-4 ring-secondary ring-offset-2 ring-offset-primary outline-none">
            Add Link
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditBar;
