import React from "react";
import { FiEdit, FiTrash } from "react-icons/fi";

function LinkItem({ item, toggleEdit }) {
  return (
    <div className="w-full max-w-md p-4 bg-[white] rounded-md shadow-md">
      <div></div>
      <div className="flex flex-col gap-2 text-left">
        <p>{item.name}</p>
        <a href={item.item} target="blank" className="text-primary">
          {item.link}
        </a>
        <div className="flex gap-2">
          <button className="p-1 text-xl" onClick={toggleEdit}>
            <FiEdit />
          </button>
          <button className="p-1 text-xl">
            <FiTrash />
          </button>
        </div>
      </div>
    </div>
  );
}

export default LinkItem;
