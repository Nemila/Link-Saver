import React, { useContext } from "react";

import { FiTrash } from "react-icons/fi";

import QRCode from "react-qr-code";

import { LinkContext } from "../context/LinkContext";
import { motion } from "framer-motion";

const items = {
  hidden: {
    opacity: 0,
    x: -500,
  },
  show: {
    opacity: 1,
    x: 0,
  },
};

function LinkItem({ item }) {
  const { deleteLink } = useContext(LinkContext);

  const handleDelete = (e) => deleteLink(item.id);

  return (
    <motion.div
      variants={items}
      className="flex gap-4 w-full relative max-w-md p-4 bg-[white] rounded-md shadow-md"
    >
      {/* <div className="max-w-[200px]">
        {item && (
          <QRCode value={item.link} size={90} title={item.name} level="L" />
        )}
      </div> */}
      <div className="flex flex-col gap-2 text-left overflow-hidden">
        <p className="font-medium">{item.name}</p>
        <a
          target="blank"
          href={item.link}
          className="text-primary cursor-pointer"
        >
          {item.link}
        </a>
        <p className="text-sm">{item.desc}</p>
        {/* <div className="w-full">
          <button className="p-1 text-xl" onClick={handleDelete}>
            <FiTrash />
          </button>
        </div> */}
      </div>
    </motion.div>
  );
}

export default LinkItem;
