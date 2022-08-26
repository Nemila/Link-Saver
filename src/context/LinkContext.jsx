import { createContext, useContext, useEffect, useState } from "react";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
} from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "./AuthContext";

export const LinkContext = createContext();
export const LinkContextProvider = ({ children }) => {
  let [links, setLinks] = useState([]);
  let { user } = useContext(AuthContext);

  //Create Link
  const createLink = async (newLink) => {
    await addDoc(collection(db, "links"), newLink);
  };

  //Read link from firebase
  useEffect(() => {
    if (user !== null) {
      const q = query(collection(db, "links"));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const linksArr = [];
        querySnapshot.forEach((doc) => {
          if (user.email === doc.data().user) {
            linksArr.push({ ...doc.data(), id: doc.id });
          }
        });
        setLinks(linksArr);
      });
      return () => unsubscribe();
    }
  }, [user]);

  //Update link in firebase
  //Delete link from firebase
  const deleteLink = async (toDel) => {
    await deleteDoc(doc(db, "links", toDel));
  };

  return (
    <LinkContext.Provider value={{ links, createLink, deleteLink }}>
      {children}
    </LinkContext.Provider>
  );
};
