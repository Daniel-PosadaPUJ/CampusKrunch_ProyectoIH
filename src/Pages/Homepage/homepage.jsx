import React, { useState } from "react";
import "./homepage.css";
import ProductCard from "../../Components/ProductCard/ProductCard.jsx";
import { useSelector } from "react-redux";

/*lucide-react es una librería de íconos para React que ofrece una colección 
de íconos modernos, limpios y altamente personalizables, 'Filter' es un ícono
de filtro para el botón de búsqueda*/
import { Filter } from "lucide-react";

export default function HomePage() {
  /* Usamos useSelector para acceder directamente a los productos desde el store de Redux Toolkit */
  const products = useSelector((state) => state.products);
  const [visibleProducts, setVisibleProducts] = useState(8);
  const hasMoreProducts = visibleProducts < products.length;

  return (
    <main className="homepage-container">
      <h1 className="homepage-title">Productos disponibles en Javeriana Cali</h1>
      <p className="homepage-subtitle">Descubre productos que sean de tu interés o conviértete en vendedor</p>

      <div className="btn-container">
        <button className="filter-button">
          Filtrar productos <Filter size={16} />
        </button>
      </div>

      <div className="product-grid">
        {/*Aquí es donde se muestran los productos disponibles, la función 'slice'
        se encarga de mostrar solo los primeros 'visibleProducts' productos. */}
        {products && products.slice(0, visibleProducts).map((product) => (
          <div key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      {hasMoreProducts && (
        <div className="btn-container">
          <button className="load-more" onClick={() => setVisibleProducts(visibleProducts + 8)}>
            Cargar más
          </button>
        </div>
      )}
    </main>
  );
}
