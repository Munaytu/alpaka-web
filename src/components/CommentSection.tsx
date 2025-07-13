import React, { useState } from 'react';
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

interface Comment {
  id: number;
  author: string;
  text: string;
}

const CommentSection: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([
    { id: 1, author: 'Usuario1', text: 'Excelente artículo!' },
    { id: 2, author: 'Usuario2', text: 'Tengo una pregunta sobre...' },
  ]);
  const [newCommentText, setNewCommentText] = useState('');

  const handleAddComment = () => {
    if (newCommentText.trim() !== '') {
      const newComment: Comment = {
        id: comments.length + 1,
        author: 'Usuario Anónimo', // TODO: Implementar sistema de autenticación
        text: newCommentText,
      };
      setComments([...comments, newComment]);
      setNewCommentText('');
    }
  };

  return (
    <div className="mt-4">
      <h3 className="text-lg font-semibold mb-2">Comentarios</h3>
      {comments.map((comment) => (
        <div key={comment.id} className="mb-2">
          <p className="font-semibold">{comment.author}</p>
          <p>{comment.text}</p>
        </div>
      ))}
      <div className="flex flex-col">
        <Input
          type="text"
          placeholder="Agrega un comentario..."
          value={newCommentText}
          onChange={(e) => setNewCommentText(e.target.value)}
        />
        <Button onClick={handleAddComment} className="mt-2">Agregar comentario</Button>
      </div>
    </div>
  );
};

export default CommentSection;