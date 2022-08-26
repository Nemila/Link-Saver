import React, { useContext } from "react";
import { ReactComponent as Empty } from "../assets/empty.svg";
import { LinkContext } from "../context/LinkContext";

import AddBar from "../components/AddBar";
import LinkItem from "../components/LinkItem";

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

function Links() {
  let { links } = useContext(LinkContext);

  return (
    <main className="w-full min-h-screen flex justify-center px-4 pt-10 pb-[100px] bg-light">
      <motion.section
        variants={container}
        initial="hidden"
        animate="show"
        className="w-full flex flex-col gap-6 text-center text-dark"
      >
        <h2 className="font-medium text-2xl">Your saved links</h2>
        <div className="flex flex-col items-center gap-4">
          {links.length > 0 ? (
            links.map((item) => <LinkItem key={item.id} item={item} />)
          ) : (
            <div>
              <p>You have no link saved yet</p>
              <Empty className="w-[300px]" />
            </div>
          )}
        </div>
      </motion.section>
      <AddBar />
    </main>
  );
}

export default Links;
