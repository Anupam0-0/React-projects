import React, { useState } from "react";

const questions = [
  { id: 1, question: "What is 2 + 2?", options: ["3", "4", "5"], answer: "4" },
  { id: 2, question: "Capital of France?", options: ["Berlin", "Paris", "Rome"], answer: "Paris" },
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div>
      {showResult ? (
        <Result score={score} total={questions.length} />
      ) : (
        <Question
          questionData={questions[currentQuestion]}
          onAnswer={handleAnswer}
        />
      )}
    </div>
  );
}

export default App;

function Question({ questionData, onAnswer }) {
  const { question, options } = questionData;

  return (
    <div>
      <h2>{question}</h2>
      {options.map((option, index) => (
        <button key={index} onClick={() => onAnswer(option)}>
          {option}
        </button>
      ))}
    </div>
  );
}

function Result({ score, total }) {
  return (
    <div>
      <h1>Quiz Complete!</h1>
      <p>
        Your Score: {score} / {total}
      </p>
    </div>
  );
}
