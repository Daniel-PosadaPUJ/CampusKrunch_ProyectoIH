import { useState } from "react";
import { User } from "lucide-react";
import "./CommentSection.css";

const sampleComments = [
  {
    id: "1",
    user: "Ana García",
    content: "¿Todavía está disponible? Me interesa mucho.",
    date: "2 días atrás",
  },
  {
    id: "2",
    user: "Carlos Mendoza",
    content: "¿Aceptas intercambios? Tengo varios libros de ingeniería que podrían interesarte.",
    date: "5 días atrás",
  },
];

export default function CommentSection({ productId }) {
  const [comments, setComments] = useState(sampleComments);
  const [newComment, setNewComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const comment = {
        id: Date.now().toString(),
        user: "Tú",
        content: newComment,
        date: "Justo ahora",
      };

      setComments([comment, ...comments]);
      setNewComment("");
      setIsSubmitting(false);
    }, 500);
  };

  return (
    <div className="comment-section">
      <h2 className="title">Comentarios ({comments.length})</h2>

      {/* Formulario para nuevo comentario */}
      <form onSubmit={handleSubmit} className="comment-form">
        <div className="input-group">
          <div className="user-icon">
            <User size={20} className="icon" />
          </div>
          <div className="input-field">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Escribe un comentario..."
              rows={3}
            />
            <div className="submit-container">
              <button type="submit" disabled={isSubmitting || !newComment.trim()}>
                {isSubmitting ? "Enviando..." : "Comentar"}
              </button>
            </div>
          </div>
        </div>
      </form>

      {/* Lista de comentarios */}
      <div className="comment-list">
        {comments.map((comment) => (
          <div key={comment.id} className="comment">
            <div className="user-icon">
              <User size={20} className="icon" />
            </div>
            <div className="comment-content">
              <div className="comment-header">
                <span className="username">{comment.user}</span>
                <span className="date">{comment.date}</span>
              </div>
              <p>{comment.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
