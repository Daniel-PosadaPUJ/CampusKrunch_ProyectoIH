import React, { useState } from "react";
import "./homepage.css";
import ProductCard from "../../Components/ProductCard/ProductCard.jsx";
import { useProducts } from "../../Contexts/ProductContext";
import { Filter } from "lucide-react";

export default function HomePage() {
  const { products } = useProducts(); // Usamos el hook personalizado que hicimos en el context para crear productos
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