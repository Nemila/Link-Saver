import React from "react";

import { motion } from "framer-motion";
import { BsTwitter, BsGithub, BsLinkedin } from "react-icons/bs";

let container = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
      delay: 1,
    },
  },
};

let items = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  show: {
    opacity: 1,
    scale: 1,
  },
};

function SocialMedia() {
  return (
    <div className="flex flex-col gap-4 text-center text-dark justify-center items-center">
      <p>Follow me</p>
      <motion.ul
        variants={container}
        initial="hidden"
        animate="show"
        className="flex gap-4 text-3xl text-primary"
      >
        <motion.li variants={items} whileHover={{ rotate: 45 }}>
          <a
            target="blank"
            rel="noreferrer"
            href="https://twitter.com/@Nemila9"
          >
            <BsTwitter />
          </a>
        </motion.li>
        <motion.li variants={items} whileHover={{ rotate: 45 }}>
          <a target="blank" rel="noreferrer" href="https://github.com/Nemila">
            <BsGithub />
          </a>
        </motion.li>
        <motion.li variants={items} whileHover={{ rotate: 45 }}>
          <a
            target="blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/lamine-diamoutene-4802691b5/"
          >
            <BsLinkedin />
          </a>
        </motion.li>
      </motion.ul>
    </div>
  );
}

export default SocialMedia;
