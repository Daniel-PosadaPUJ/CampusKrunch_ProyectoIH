import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Search, User, Heart, ShoppingBag, HelpCircle, Menu, X } from "lucide-react";
import "./Header.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Buscando:", searchQuery);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <Link to="/" className="logo">
            Campus Kruch
          </Link>

          {/* Navegación principal - visible en desktop */}
          <nav className="main-nav">
            <NavLink 
              to="/vender" 
              className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}
            >
              <ShoppingBag size={20} />
              <span>Vender</span>
            </NavLink>
            <NavLink 
              to="/favoritos" 
              className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}
            >
              <Heart size={20} />
              <span>Favoritos</span>
            </NavLink>
            <NavLink 
              to="/pedidos" 
              className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}
            >
              <ShoppingBag size={20} />
              <span>Pedidos</span>
            </NavLink>
            <NavLink 
              to="/ayuda" 
              className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}
            >
              <HelpCircle size={20} />
              <span>Ayuda</span>
            </NavLink>
          </nav>

          {/* Sección derecha - búsqueda y perfil */}
          <div className="right-section">
            <form onSubmit={handleSearch} className="search-bar">
              <div className="search-container">
                <Search className="search-icon" size={18} />
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="search-input"
                  placeholder="Buscar..."
                />
              </div>
            </form>

            <NavLink 
              to="/perfil" 
              className={({ isActive }) => isActive ? "profile-icon active" : "profile-icon"}
            >
              <User size={20} />
            </NavLink>
          </div>

          {/* Botón de menú - Mobile */}
          <button onClick={toggleMenu} className="menu-button">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menú móvil - desplegable */}
        {isMenuOpen && (
          <div className="mobile-menu">
            <form onSubmit={handleSearch} className="mobile-search">
              <div className="search-container">
                <Search className="search-icon" size={18} />
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="search-input"
                  placeholder="Buscar..."
                />
              </div>
            </form>

            <nav className="mobile-nav">
              <NavLink 
                to="/vender" 
                className={({ isActive }) => isActive ? "mobile-nav-item active" : "mobile-nav-item"} 
                onClick={() => setIsMenuOpen(false)}
              >
                <ShoppingBag size={20} /> <span>Vender</span>
              </NavLink>
              <NavLink 
                to="/favoritos" 
                className={({ isActive }) => isActive ? "mobile-nav-item active" : "mobile-nav-item"} 
                onClick={() => setIsMenuOpen(false)}
              >
                <Heart size={20} /> <span>Favoritos</span>
              </NavLink>
              <NavLink 
                to="/pedidos" 
                className={({ isActive }) => isActive ? "mobile-nav-item active" : "mobile-nav-item"} 
                onClick={() => setIsMenuOpen(false)}
              >
                <ShoppingBag size={20} /> <span>Pedidos</span>
              </NavLink>
              <NavLink 
                to="/ayuda" 
                className={({ isActive }) => isActive ? "mobile-nav-item active" : "mobile-nav-item"} 
                onClick={() => setIsMenuOpen(false)}
              >
                <HelpCircle size={20} /> <span>Ayuda</span>
              </NavLink>
              <NavLink 
                to="/perfil" 
                className={({ isActive }) => isActive ? "mobile-nav-item active" : "mobile-nav-item"} 
                onClick={() => setIsMenuOpen(false)}
              >
                <User size={20} /> <span>Perfil</span>
              </NavLink>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}