import { createContext, useContext, useEffect, useState } from "react";
import { addDoc, collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "./AuthContext";

export const LinkContext = createContext();
export const LinkContextProvider = ({ children }) => {
  let [links, setLinks] = useState([]);
  let { user } = useContext(AuthContext);

  //Create Link
  const createLink = (newLink) => {
    addDoc("links", newLink);
  };
  //Read link from firebase
  useEffect(() => {
    const q = query(collection(db, "links"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const linksArr = [];
      querySnapshot.forEach((doc) => {
        if (user !== null && doc.data().user === user.email) {
          linksArr.push({ ...doc.data(), id: doc.id });
        }
      });
      setLinks(linksArr);
    });
    return () => unsubscribe;
  }, [user]);

  //Update link in firebase
  //Delete link from firebase
  return (
    <LinkContext.Provider value={{ links, createLink }}>
      {children}
    </LinkContext.Provider>
  );
};
