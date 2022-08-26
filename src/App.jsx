import { Routes, Route } from "react-router-dom";

import { AuthContextProvider } from "./context/AuthContext";
import { LinkContextProvider } from "./context/LinkContext";

//Components
import Navbar from "./components/Navbar";

//Pages
import Home from "./pages/Home";
import Links from "./pages/Links";
import Login from "./pages/Login";
import Guide from "./pages/Guide";

function App() {
  return (
    <>
      <AuthContextProvider>
        <LinkContextProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/links" element={<Links />} />
            <Route path="/guide" element={<Guide />} />
          </Routes>
        </LinkContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
