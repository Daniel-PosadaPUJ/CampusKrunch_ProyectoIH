import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../Global/ReduxProducts"; // Acción de Redux
import { X } from "lucide-react";
import "./sell.css";

export default function SellPage() {
  const dispatch = useDispatch();

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

    const newProduct = {
      id: String(Date.now()),
      name: formData.name,
      description: formData.description,
      price: parseInt(formData.price, 10),
      seller: "Usuario Actual",
      tags: formData.tags.split(",").map((tag) => tag.trim()).filter(Boolean),
      imageUrl: formData.imageUrl,
      images: [formData.imageUrl, ...additionalImages.filter(Boolean)],
    };

    dispatch(addProduct(newProduct));

    setTimeout(() => {
      setIsSubmitting(false);
      resetForm();
      setShowSuccessModal(true);
      setTimeout(() => setShowSuccessModal(false), 3000);
    }, 1500);
  };

  const SuccessModal = ({ onClose }) => (
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

  return (
    <main>
      {showSuccessModal && <SuccessModal onClose={() => setShowSuccessModal(false)} />}

      <div className="sell-header">
        <h1>Vender un producto</h1>
      </div>
      <div className="container">
        <form onSubmit={handleSubmit} className="form">
          {Object.entries(formData).map(([key, value]) => (
            <div key={key} className="form-group">
              <label htmlFor={key}>{key.replace(/([A-Z])/g, ' $1').trim()}</label>
              <input
                type={key === "price" ? "number" : "text"}
                id={key}
                name={key}
                value={value}
                onChange={handleChange}
                required
              />
            </div>
          ))}

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
