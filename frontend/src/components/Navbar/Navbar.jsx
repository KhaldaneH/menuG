import React, { useContext } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { LanguageContext } from "../../Context/LanguageContext"; // Import context

const Navbar = () => {
  const navigate = useNavigate();
  const { lang, setLang } = useContext(LanguageContext); // Get lang from context

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="navbar">
      <Link to="/">
        <img className="logo" src={assets.logo} alt="" />
      </Link>

      {/* Language Switch */}
      <div className="lang-switch">
        <span onClick={() => setLang("en")} className={lang === "en" ? "active" : ""}>
          EN
        </span> 
        <span onClick={() => setLang("fr")} className={lang === "fr" ? "active" : ""}>
          FR
        </span>  
        <span onClick={() => setLang("ar")} className={lang === "ar" ? "active" : ""}>
          AR
        </span>
      </div>
    </div>
  );
};

export default Navbar;
