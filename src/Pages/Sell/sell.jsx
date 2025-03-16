import { useState } from "react";
import { X } from "lucide-react";
import "./sell.css"; 
import { useProducts } from "../../Contexts/ProductContext";

export default function SellPage() {
  const { addProduct } = useProducts();

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    tags: "",
    location: "",
    imageUrl: "",
  });

  const [additionalImagesCount, setAdditionalImagesCount] = useState(0);
  const [additionalImages, setAdditionalImages] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAdditionalImageChange = (index, value) => {
    const newAdditionalImages = [...additionalImages];
    newAdditionalImages[index] = value;
    setAdditionalImages(newAdditionalImages);
  };

  const resetForm = () => {
    setFormData({
      name: "",
      price: "",
      description: "",
      tags: "",
      location: "",
      imageUrl: "",
    });
    setAdditionalImagesCount(0);
    setAdditionalImages([]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Crear el objeto del producto
    const newProduct = {
      id: String(Date.now()), 
      name: formData.name,
      description: formData.description,
      price: parseInt(formData.price, 10),
      seller: "Usuario Actual", 
      tags: formData.tags.split(",").map((tag) => tag.trim()).filter(tag => tag), 
      imageUrl: formData.imageUrl,
      images: [formData.imageUrl, ...additionalImages.filter(url => url)], 
    };

    // Agregar el producto al estado global
    addProduct(newProduct);

    // Simulamos el envío del formulario
    setTimeout(() => {
      setIsSubmitting(false);
      resetForm();
      setShowSuccessModal(true);
      
      // oopcional: auto-cerrar el modal después de 3 segundos
      setTimeout(() => {
        setShowSuccessModal(false);
      }, 3000);
    }, 1500);
  };

  // esto es el modal (la ventanita que se abre al enviar bien el formulario)
  const SuccessModal = ({ onClose }) => {
    return (
      <div className="modal-overlay">
        <div className="modal-content">
          <button className="modal-close-btn" onClick={onClose}>
            <X size={24} />
          </button>
          <div className="success-message">
            <h2>¡Producto publicado!</h2>
            <p>Tu producto ha sido publicado exitosamente.</p>
            <button className="modal-button" onClick={onClose}>Aceptar</button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <main>
     
      {showSuccessModal && (
        <SuccessModal onClose={() => setShowSuccessModal(false)} />
      )}
      
      <div className="sell-header">
        <h1>Vender un producto</h1>
      </div>
      <div className="container">
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label htmlFor="name">Nombre del producto</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="price">Precio (COP)</label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Descripción</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="tags">Etiquetas (separadas por comas)</label>
            <input
              type="text"
              id="tags"
              name="tags"
              value={formData.tags}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="imageUrl">URL de la imagen principal</label>
            <input
              type="url"
              id="imageUrl"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>¿Añadir más imágenes?</label>
            <input
              type="number"
              min="0"
              max="5"
              value={additionalImagesCount}
              onChange={(e) => setAdditionalImagesCount(parseInt(e.target.value, 10))}
            />
            {Array.from({ length: additionalImagesCount }).map((_, index) => (
              <div key={index} className="form-group">
                <label htmlFor={`additionalImage${index}`}>URL de la imagen {index + 1}</label>
                <input
                  type="url"
                  id={`additionalImage${index}`}
                  value={additionalImages[index] || ""}
                  onChange={(e) => handleAdditionalImageChange(index, e.target.value)}
                />
              </div>
            ))}
          </div>

          <button type="submit" disabled={isSubmitting} className="submit-button">
            {isSubmitting ? "Publicando..." : "Publicar producto"}
          </button>
        </form>
      </div>
    </main>
  );
}