import { Link } from "react-router-dom";
import { useProducts } from "../../Global/ReduxProducts.jsx"; 
import ProductCard from "../../Components/ProductCard/ProductCard.jsx";
import "./favorites.css";

export default function FavoritesPage() {
  const products = useProducts(); // Accedemos al estado global usando el hook

  // Determinar favoritos usando una lógica de filtro específica, en este caso cada tercer producto
  const favoriteProducts = products.filter((_, index) => index % 3 === 0);

  return (
    <main>
      <div className="favorites-header">
        <h1>Tus favoritos</h1>
      </div>
      <div className="favorites-container">
        {favoriteProducts.length > 0 ? (
          <div className="favorites-grid">
            {favoriteProducts.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="favorites-link"
              >
                <ProductCard product={product} />
              </Link>
            ))}
          </div>
        ) : (
          <div className="favorites-empty">
            <h2 className="favorites-empty-title">No tienes favoritos</h2>
            <p className="favorites-empty-text">
              Explora productos y marca los que te gusten como favoritos
            </p>
            <Link to="/" className="favorites-empty-button">
              Explorar productos
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}
