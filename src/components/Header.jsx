import { Link } from "react-router-dom";
import Logo from "../img/start/Logo-complete.svg";
import "../sass/components/header.sass";
import { Turn as Hamburger } from "hamburger-react";
import { useState, useEffect} from "react";
function Header() {
  const menu = [
    { name: "Início", link: "/start", key: 1 },
    { name: "Sobre", link: "/whoIAm", key: 2 },
    { name: "Projetos", link: "/projects", key: 3 },
    { name: "Serviços", link: "/services", key: 4 },
  ];
  const { innerWidth: width } = window;
  const isMobile = width <= 767;
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    if (!isMobile) {
      setOpen(true)
    }
  }, [isOpen]);
  return (
    <header className="header">
      <nav className="header-nav">
        <Link to="/start">
          <img src={Logo} alt="logo" className="header-nav-logo" />
        </Link>
        {isMobile && (
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
          </ul>
        )}
        {!isMobile && <button className="btn_contactMe">Contate-me</button>}
      </nav>
    </header>
  );
}

export default Header;
