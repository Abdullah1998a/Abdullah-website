import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import { links, content } from "./information/data";
import {
  Navbar,
  Home,
  About,
  Portfolio,
  ProjectDetails,
  Education,
  Contact,
  NotFound,
  ComingSoon,
} from "./pages";
let currentLang =
  localStorage.getItem("lang") !== null ? localStorage.getItem("lang") : "en";
let currentTheme =
  localStorage.getItem("theme") !== null
    ? localStorage.getItem("theme")
    : "light";
function App() {
  const [lang, setLang] = useState(currentLang);
  const [theme, setTheme] = useState(currentTheme);
  return (
    <div
      className={`container ${theme === "dark" ? "dark" : null}`}
      dir={lang === "ar" ? "rtl" : null}
    >
      <Navbar
        links={lang === "en" ? links.english : links.arabic}
        lang={lang}
        setLang={setLang}
        theme={theme}
        setTheme={setTheme}
      />
      <Routes>
        <Route
          index
          element={
            <Home
              content={
                lang === "en" ? content.english.home : content.arabic.home
              }
            />
          }
        />
        <Route
          path="/about"
          element={
            <About
              content={
                lang === "en" ? content.english.about : content.arabic.about
              }
              theme={theme}
            />
          }
        />
        <Route
          path="/portfolio"
          element={
            <Portfolio
              content={
                lang === "en"
                  ? content.english.portfolio
                  : content.arabic.portfolio
              }
            />
          }
        />
        <Route
          path="/portfolio/projects/:id"
          element={
            <ProjectDetails
              content={
                lang === "en"
                  ? content.english.portfolio
                  : content.arabic.portfolio
              }
            />
          }
        />
        <Route
          path="/education"
          element={
            <Education
              content={
                lang === "en"
                  ? content.english.education
                  : content.arabic.education
              }
            />
          }
        />
        <Route
          path="/contact"
          element={
            <Contact
              content={
                lang === "en" ? content.english.contact : content.arabic.contact
              }
            />
          }
        />
        <Route
          path="/soon/*"
          element={
            <ComingSoon
              content={
                lang === "en"
                  ? content.english.coming_soon
                  : content.arabic.coming_soon
              }
            />
          }
        />
        <Route
          path="*"
          element={
            <NotFound
              content={
                lang === "en"
                  ? content.english.not_found
                  : content.arabic.not_found
              }
            />
          }
        />
      </Routes>
    </div>
  );
}
export default App;
