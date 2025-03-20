import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone, ArrowUp } from 'lucide-react';
import "./Footer.css";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const currentYear = "2025";

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-columns">
            <div className="footer-column footer-column-1">
              <h3 className="footer-title" onClick={scrollToTop} style={{ cursor: 'pointer' }}>Campus Kruch</h3>
              <p className="footer-description">
                La plataforma de compra y venta para estudiantes universitarios.
                Encuentra lo que necesitas o vende lo que ya no usas.
              </p>
              <div className="social-links">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <Facebook size={20} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Instagram size={20} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <Twitter size={20} />
                </a>
              </div>
            </div>

            <div className="footer-column footer-column-2">
              <h4 className="footer-subtitle">Enlaces rápidos</h4>
              <nav className="footer-nav">
                <Link to="/vender" className="footer-link">Vender</Link>
                <Link to="/favoritos" className="footer-link">Favoritos</Link>
                <Link to="/pedidos" className="footer-link">Pedidos</Link>
                <Link to="/ayuda" className="footer-link">Ayuda</Link>
                <Link to="/perfil" className="footer-link">Mi Perfil</Link>
              </nav>
            </div>

            <div className="footer-column footer-column-3">
              <h4 className="footer-subtitle">Categorías</h4>
              <nav className="footer-nav">
                <Link to="/categoria/electronica" className="footer-link">Electrónica</Link>
                <Link to="/categoria/libros" className="footer-link">Libros</Link>
                <Link to="/categoria/ropa" className="footer-link">Ropa</Link>
                <Link to="/categoria/comidas" className="footer-link">Comidas</Link>
                <Link to="/categorias" className="footer-link">Ver todas</Link>
              </nav>
            </div>

            <div className="footer-column footer-column-4">
              <h4 className="footer-subtitle">Contacto</h4>
              <div className="contact-info">
                <div className="contact-item">
                  <MapPin size={16} />
                  <span>Cali, Colombia</span>
                </div>
                <div className="contact-item">
                  <Mail size={16} />
                  <span>info@campuskruch.com</span>
                </div>
                <div className="contact-item">
                  <Phone size={16} />
                  <span>+57 300 123 4567</span>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="copyright">
              &copy; {currentYear} Campus Kruch. Todos los derechos reservados.
            </div>
            <div className="footer-links">
              <Link to="/terminos" className="footer-bottom-link">Términos y Condiciones</Link>
              <Link to="/privacidad" className="footer-bottom-link">Política de Privacidad</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
