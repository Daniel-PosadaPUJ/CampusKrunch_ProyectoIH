import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import { Heart } from "lucide-react";
import "./ProductCard.css";

export default function ProductCard({ product }) {
  const [liked, setLiked] = useState(false);

  const handleLikeClick = (e) => {
    e.preventDefault();     // Evita que el enlace (<Link>) se active al hacer clic.
    // Evita que el evento se propague hacia elementos padres, sin esto el click en el corazon sería un click en el Link.
    e.stopPropagation();    
    setLiked(!liked);       // Alterna el estado entre true/false.
  };

  return (
    <Link to={`/producto/${product.id}`} className="product-card-link"> {/* Envuelve todo en un Link */}
      <div className="product-card">

        <div
          className="product-image"
          style={{ backgroundImage: `url(${product.imageUrl})` }}
        />


        <div className="gradient-overlay" />


        <div className="product-content">
          <div className="tags-container">
            {product.tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>

          <h3 className="product-name-card">{product.name}</h3>

          <p className="product-seller-card">{product.seller}</p>
        </div>

 
        <button onClick={handleLikeClick} className="like-button">
          <Heart size={20} className={liked ? "liked" : "unliked"} />
        </button>
      </div>
    </Link>
  );
}