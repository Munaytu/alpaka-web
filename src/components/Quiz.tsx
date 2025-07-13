import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface Question {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface QuizProps {
  questions: Question[];
}

const Quiz: React.FC<QuizProps> = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);

  const question = questions[currentQuestion];

  const handleAnswerClick = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    setShowFeedback(true);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === question.correctAnswer) {
      setScore(score + 1);
    }

    setSelectedAnswer(null);
    setShowFeedback(false);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Quiz is finished
    }
  };

  const isQuizFinished = currentQuestion === questions.length - 1;

  return (
    <Card className="w-[400px]">
      <CardContent>
        <CardTitle>{question.question}</CardTitle>
        <ul className="options-list">
          {question.options.map((option, index) => (
            <li key={index}>
              <Button
                onClick={() => handleAnswerClick(index)}
                disabled={selectedAnswer !== null}
                variant="outline"
                className="w-full mb-2"
              >
                {option}
              </Button>
            </li>
          ))}
        </ul>
        {showFeedback && (
          <div className="feedback">
            {selectedAnswer === question.correctAnswer ? (
              <p className="correct text-green-500">¡Correcto!</p>
            ) : (
              <p className="incorrect text-red-500">Incorrecto. La respuesta correcta es: {question.options[question.correctAnswer]}</p>
            )}
            <CardDescription>{question.explanation}</CardDescription>
            {!isQuizFinished ? (
              <Button onClick={handleNextQuestion}>Siguiente Pregunta</Button>
            ) : (
              <p>Quiz terminado. Tu puntaje es: {score} de {questions.length}</p>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default Quiz;