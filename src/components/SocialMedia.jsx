import React from "react";

import { BsTwitter, BsGithub, BsLinkedin } from "react-icons/bs";

function SocialMedia() {
  return (
    <div className="flex flex-col gap-3 text-center text-dark justify-center items-center">
      <p>Follow me</p>
      <ul className="flex gap-2 text-3xl text-primary">
        <li>
          <a href="https://twitter.com/@nemila250">
            <BsTwitter />
          </a>
        </li>
        <li>
          <a href="https://github.com/Nemila">
            <BsGithub />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/lamine-diamoutene-4802691b5/">
            <BsLinkedin />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SocialMedia;
