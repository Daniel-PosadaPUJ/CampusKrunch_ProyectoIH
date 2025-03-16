import { useState } from "react";
import "./ProductGallery.css";

export default function ProductGallery({ images }) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="gallery-container">
      <div className="main-image">
        <img
          src={images[selectedImage] || "/placeholder.svg"}
          alt="Imagen del producto"
        />
      </div>

      <div className="thumbnail-container">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`thumbnail ${selectedImage === index ? "selected" : ""}`}
            style={{ padding: 0, background: "none", cursor: "pointer", border: "2px solid #ccc" }}
          >
            <img src={image || "/placeholder.svg"} alt={`Miniatura ${index + 1}`} />
          </button>
        ))}
      </div>
    </div>
  );
}