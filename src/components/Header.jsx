import { Link } from "react-router-dom";
import Logo from "../img/start/Logo-complete.svg";
import "../sass/components/widgets/header.sass";
import { Turn as Hamburger } from "hamburger-react";
import { useState, useEffect } from "react";
import ButtonContact from "./buttons/buttonContact";
function Header() {
  const menu = [
    { name: "Início", link: "/start", key: 1 },
    { name: "Sobre", link: "/whoIAm", key: 2 },
    { name: "Projetos", link: "/projects", key: 3 },
    { name: "Serviços", link: "/services", key: 4 },
  ];
  const { innerWidth: width } = window;
  const isLarge = width <= 1024;
  const [isOpen, setOpen] = useState(false);
  const [colorActive, setActiveColor] = useState(false);
  useEffect(() => {
    if (!isLarge) {
      setOpen(true);
    }
  }, [isOpen]);
  useEffect(() => {
    function scrollPosition() {
      if (window.scrollY > 40) {
        setActiveColor(true);
      }
      else {
        setActiveColor(false);
      }
    }
    window.addEventListener('scroll', scrollPosition)
  }, []);
  return (
    <header className={colorActive ? "header activeColor" : "header"}>
      <nav className="header-nav">
        <Link to="/start">
          <img src={Logo} alt="logo" className="header-nav-logo" />
        </Link>
        {isLarge && (
          <Hamburger
            color="#F0F0F0"
            rounded
            toggled={isOpen}
            toggle={() => (isOpen ? setOpen(false) : setOpen(true))}
          />
        )}
        {isOpen && (
          <ul className="header-nav-list">
            {menu.map((element) => (
              <Link
                to={element.url}
                key={element.key}
                className="header-nav-list-link"
              >
                {element.name}
              </Link>
            ))}
            {isLarge ? (
              <ButtonContact
                subClass="btn_contactLarge"
                textButton="Contate-me"
              />
            ) : null}
          </ul>
        )}
        {!isLarge && (
          <ButtonContact subClass="btn_contactMe" textButton="Contate-me" />
        )}
      </nav>
    </header>
  );
}

export default Header;
