import React from "react";

import { BsTwitter, BsGithub, BsLinkedin } from "react-icons/bs";

function SocialMedia() {
  return (
    <div className="flex flex-col gap-3 text-center text-dark justify-center items-center">
      <p>Follow me</p>
      <ul className="flex gap-2 text-3xl text-primary">
        <li>
          <a href="https://">
            <BsTwitter />
          </a>
        </li>
        <li>
          <a href="https://">
            <BsGithub />
          </a>
        </li>
        <li>
          <a href="https://">
            <BsLinkedin />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SocialMedia;
