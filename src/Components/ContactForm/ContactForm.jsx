"use client"

import { useState } from "react"
import "./ContactForm.css"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)

      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({ name: "", location: "", message: "" })
      }, 3000)
    }, 1500)
  }

  return (
    <div className="contact-form-container">
      {isSubmitted ? (
        <div className="success-message">
          <h3>¡Mensaje enviado!</h3>
          <p>El vendedor se pondrá en contacto contigo pronto.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
          <div>
            <label htmlFor="name">Nombre completo</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="location">Ubicación en el campus</label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="message">Mensaje (opcional)</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={3}
            />
          </div>

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Enviando..." : "Contactar al vendedor"}
          </button>
        </form>
      )}
    </div>
  )
}
