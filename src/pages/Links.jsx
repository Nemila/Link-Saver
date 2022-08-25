import React, { useContext, useState } from "react";
import AddBar from "../components/AddBar";
import EditBar from "../components/EditBar";
import LinkItem from "../components/LinkItem";
import { LinkContext } from "../context/LinkContext";

function Links() {
  let { links } = useContext(LinkContext);
  let [edit, setEdit] = useState(false);
  let toggleEdit = () => setEdit((prev) => !prev);

  return (
    <main className="w-full min-h-screen bg-light flex justify-center px-4 py-8 pb-[100px]">
      <section className="w-full flex flex-col gap-6 text-center text-dark">
        <h2 className="font-medium text-2xl">Your saved links</h2>
        <div className="flex flex-col gap-4 items-center">
          {links.map((item) => (
            <LinkItem key={item.id} item={item} toggleEdit={toggleEdit} />
          ))}
        </div>
      </section>
      <AddBar />
      <EditBar toggleEdit={toggleEdit} edit={edit} />
    </main>
  );
}

export default Links;
