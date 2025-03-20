import React from "react";
import { useParams } from "react-router-dom";

import { useProducts } from "../../Global/ReduxProducts"; 

import ProductGallery from "../../Components/ProductGallery/ProductGallery.jsx";
import ContactForm from "../../Components/ContactForm/ContactForm.jsx";
import CommentSection from "../../Components/CommentSection/CommentSection.jsx";

import "./product.css";

export default function ProductPage() {
  const { id } = useParams();
  const products = useProducts(); // Se extraen los productos desde el store de Redux Toolkit
  const product = products.find((p) => p.id === id);

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <main className="product-container">
      <div className="product-grid">
        <div className="product-left-column">
          <ProductGallery images={product.images} />
          <div className="product-info">
            <h1 className="product-name">{product.name}</h1>
            <p className="product-seller">Vendido por: {product.seller}</p>
            <div className="product-tags">
              {product.tags.map((tag, index) => (
                <span key={index} className="product-tag">
                  {tag}
                </span>
              ))}
            </div>
            <div className="product-description-container">
              <h2 className="product-description-title">Descripción</h2>
              <p className="product-description-text">{product.description}</p>
            </div>
          </div>
        </div>
        <div className="product-right-column">
          <div className="contact-form-container">
            <h2 className="contact-form-title">¿Interesado en este producto?</h2>
            <p className="contact-form-subtitle">
              Completa el formulario y el vendedor se pondrá en contacto contigo.
            </p>
            <ContactForm productId={product.id} />
          </div>
        </div>
      </div>
      <div className="comment-section">
        <CommentSection productId={product.id} />
      </div>
    </main>
  );
}
