import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react'; 
import './help.css';

export default function HelpPage() {
  const [openQuestions, setOpenQuestions] = useState({});

  const toggleQuestion = (index) => {
    setOpenQuestions((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <main>
 
      <div className="help-header">
        <h1>Centro de ayuda</h1>
      </div>

      <div className="container">
        <div className="content">
          <section className="section">
            <h2 className="section-title">Preguntas frecuentes</h2>

            <div className="faq-list">
              {[
                {
                  question: '¿Cómo funciona Campus Kruch?',
                  answer:
                    'Campus Kruch es una plataforma que permite a los estudiantes universitarios comprar y vender productos entre ellos. Puedes publicar tus productos, contactar a vendedores y gestionar tus favoritos.',
                },
                {
                  question: '¿Cómo contacto a un vendedor?',
                  answer:
                    'Para contactar a un vendedor, visita la página del producto que te interesa y completa el formulario de contacto. El vendedor recibirá tus datos y se pondrá en contacto contigo.',
                },
                {
                  question: '¿Cómo publico un producto?',
                  answer:
                    'Para publicar un producto, ve a la sección "Vender" en el menú principal. Completa el formulario con los detalles de tu producto, sube algunas fotos y listo.',
                },
                {
                  question: '¿Es seguro comprar en Campus Kruch?',
                  answer:
                    'Campus Kruch es una plataforma exclusiva para estudiantes universitarios. Te recomendamos siempre reunirte en lugares públicos dentro del campus para realizar intercambios y verificar los productos antes de pagar.',
                },
              ].map((faq, index) => (
                <div key={index} className="faq-item">
                  <div
                    className="faq-question"
                    onClick={() => toggleQuestion(index)}
                    style={{ cursor: 'pointer' }}
                  >
                    <h3>{faq.question}</h3>
                    <ChevronDown
                      size={20}
                      className={`chevron ${openQuestions[index] ? 'open' : ''}`}
                    />
                  </div>
                  <div className={`faq-answer ${openQuestions[index] ? 'open' : ''}`}>
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="section">
            <h2 className="section-title">Contacto</h2>

            <p className="contact-text">
              Si tienes alguna duda o problema que no se resuelve con las preguntas frecuentes, puedes contactarnos:
            </p>

            <ul className="contact-list">
              <li className="contact-item">
                <span className="contact-label">Email:</span>
                <a href="mailto:ayuda@campuskruch.com" className="contact-link">
                  ayuda@campuskruch.com
                </a>
              </li>
              <li className="contact-item">
                <span className="contact-label">Horario de atención:</span>
                <span>Lunes a viernes de 9:00 a 18:00</span>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}