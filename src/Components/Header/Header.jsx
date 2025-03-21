import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Search, User, Heart, ShoppingBag, HelpCircle } from "lucide-react";
import "./Header.css";

export default function Header() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Buscando:", searchQuery);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <Link to="/" className="logo">
            Campus Kruch
          </Link>

          {/* Navegación principal */}
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
        </div>
      </div>
    </header>
  );
}
