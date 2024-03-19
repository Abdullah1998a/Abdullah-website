import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

export default function Navbar({ links, lang, theme, setLang, setTheme }) {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu(!menu);
    document.body.classList.toggle("stop-scroll");
  };
  const handleLanguage = () => {
    if (menu) {
      setMenu(!menu);
      document.body.classList.toggle("stop-scroll");
    }
    if (lang === "en") {
      setLang("ar");
      localStorage.setItem("lang", "ar");
    } else {
      setLang("en");
      localStorage.setItem("lang", "en");
    }
  };
  const handleTheme = () => {
    if (menu) {
      setMenu(!menu);
      document.body.classList.toggle("stop-scroll");
    }
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  };
  const linksTem = links.map((link) => (
    <li key={link.id}>
      <NavLink to={link.path} onClick={handleMenu}>
        {link.name}
      </NavLink>
    </li>
  ));
  return (
    <nav>
      <div className="logo"></div>
      <button
        className={`toggle ${menu && "active"}`}
        onClick={handleMenu}
      ></button>
      <ul className={`links ${menu && "active"}`}>
        {linksTem}
        <div>
          <div className="language">
            <input onChange={handleLanguage} type="checkbox" />
            <span></span>
          </div>
          <div className="theme">
            <input onChange={handleTheme} type="checkbox" />
            <span></span>
          </div>
        </div>
      </ul>
    </nav>
  );
}
