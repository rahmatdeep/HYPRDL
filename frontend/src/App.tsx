import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { NavBar } from "./components/user/NavBar";
import { Home } from "./pages/Home";
import { Faq } from "./pages/Faq";
import { Developers } from "./pages/Developers";
import { Contact } from "./pages/Contact";
import { DMCA } from "./pages/DMCA";

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <NavBar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="faq" element={<Faq />} />
          <Route path="developers" element={<Developers />} />
          <Route path="contact" element={<Contact />} />
          <Route path="dmca" element={<DMCA />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
