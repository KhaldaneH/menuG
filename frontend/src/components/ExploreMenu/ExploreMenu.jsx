import React, { useContext } from "react";
import "./ExploreMenu.css";
import { StoreContext } from "../../Context/StoreContext";
import { LanguageContext } from "../../Context/LanguageContext"; // Import context

const translations = {
  en: {
    title: "Discover Our Menu",
    description: "Choose from a diverse menu to satisfy all tastes.",
  },
  fr: {
    title: "Découvrez notre menu",
    description: "Choisissez parmi un menu varié pour satisfaire tous les goûts.",
  },
  ar: {
    title: "اكتشف قائمتنا",
    description: "اختر من قائمة متنوعة ترضي جميع الاذواق",
  },
};

const ExploreMenu = ({ category, setCategory }) => {
  const { menu_list } = useContext(StoreContext);
  const { lang } = useContext(LanguageContext); // Get lang from context

  return (
    <div className="explore-menu" id="explore-menu">
      <h1>{translations[lang].title}</h1>
      <p className="explore-menu-text">{translations[lang].description}</p>

      <div className="explore-menu-list">
        {menu_list.map((item, index) => (
          <div
            key={index}
            className="explore-menu-list-item"
            onClick={() => setCategory(prev => (prev === item.menu_name ? "All" : item.menu_name))}
          >
            <img src={item.menu_image} className={category === item.menu_name ? "active" : ""} alt="" />
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
