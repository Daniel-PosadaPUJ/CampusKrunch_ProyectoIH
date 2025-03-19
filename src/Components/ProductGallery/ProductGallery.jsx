import { useState } from "react";
import "./ProductGallery.css";

export default function ProductGallery({ images }) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="gallery-container">
      <div className="main-image">
        <img
          src={images[selectedImage]}
          /*Texto alternativo para gestión de errores*/
          alt="Imagen del producto"
        />
      </div>

      <div className="thumbnail-container">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`thumbnail
       ${selectedImage === index ? "selected" : ""}`}
            /*Cambia el cursor del mouse a una mano (pointer) cuando el usuario pasa el mouse sobre el elemento.*/
            style={{ padding: 0, background: "none", cursor: "pointer", border: "2px solid #ccc"}}
          >
            <img src={image} alt={`thumbnail
       ${index + 1}`} />
          </button>
        ))}
      </div>
    </div>
  );
}