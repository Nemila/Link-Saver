import React, { useContext } from "react";
import { FiTrash } from "react-icons/fi";
import QRCode from "react-qr-code";
import { LinkContext } from "../context/LinkContext";

function LinkItem({ item }) {
  const { deleteLink } = useContext(LinkContext);
  const goto = () => (document.location.href = item.link);

  const handleDelete = (e) => {
    e.stopPropagation();
    deleteLink(item.id);
  };

  return (
    <div
      className="flex gap-4 w-full relative max-w-md p-4 bg-[white] rounded-md shadow-md"
      onClick={goto}
    >
      <div className="max-w-[200px]">
        {item && (
          <QRCode value={item.link} size={90} title={item.name} level="L" />
        )}
      </div>
      <div className="flex flex-col gap-2 text-left overflow-hidden">
        <p>{item.name}</p>
        <a
          href={item.item}
          target="blank"
          className="text-primary text-ellipsis overflow-hidden"
        >
          {item.link}
        </a>
        <div className="w-full">
          <button className="p-1 text-xl" onClick={handleDelete}>
            <FiTrash />
          </button>
        </div>
      </div>
    </div>
  );
}

export default LinkItem;
