import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { NavBar } from "./components/user/NavBar";
import { Home } from "./pages/Home";
import { Faq } from "./pages/Faq";
import { Developers } from "./pages/Developers";
import { Contact } from "./pages/Contact";
import { DMCA } from "./pages/DMCA";
import { ThemeProvider } from "./components/user/theme-provider";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
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
      </ThemeProvider>
    </>
  );
}

export default App;
