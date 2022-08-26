import React, { useContext } from "react";
import { LinkContext } from "../context/LinkContext";

import AddBar from "../components/AddBar";
import LinkItem from "../components/LinkItem";

function Links() {
  let { links } = useContext(LinkContext);

  return (
    <main className="w-full min-h-screen flex justify-center px-4 pt-10 pb-[100px] bg-light">
      <section className="w-full flex flex-col gap-6 text-center text-dark">
        <h2 className="font-medium text-2xl">Your saved links</h2>
        <div className="flex flex-col items-center gap-4">
          {links.map((item) => (
            <LinkItem key={item.id} item={item} />
          ))}
        </div>
      </section>
      <AddBar />
    </main>
  );
}

export default Links;
