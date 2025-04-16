import React, { useState } from "react";
import axios from "axios";

const QuizForm = () => {
  const [topic, setTopic] = useState("");
  const [level, setLevel] = useState("beginner");
  const [quiz, setQuiz] = useState(null);

  const handleGenerate = async () => {
    const res = await axios.post("http://localhost:5001/api/quiz/generate", {
      topic,
      level,
    });
    console.log("data", res.data.quiz);
    
    // setQuiz(JSON.parse(res.data.quiz)); // Assumes AI returns valid JSON string
    setQuiz((res.data.quiz)); // Assumes AI returns valid JSON string
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-4">🎯 Generate a Quiz</h2>
      <input
        type="text"
        placeholder="Enter topic"
        className="border p-2 rounded mr-4"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />
      <select
        className="border p-2 rounded"
        value={level}
        onChange={(e) => setLevel(e.target.value)}
      >
        <option>beginner</option>
        <option>intermediate</option>
        <option>advanced</option>
      </select>
      <button
        onClick={handleGenerate}
        className="bg-blue-600 text-white px-4 py-2 ml-4 rounded"
      >
        Generate
      </button>

      {quiz && (
        <div className="mt-6 space-y-4">
          {quiz.map((q, idx) => (
            <div key={idx}>
              <p className="font-semibold">{q.question}</p>
              <ul className="list-disc ml-6">
                {q.options.map((opt, i) => (
                  <li key={i}>{opt}</li>
                ))}
              </ul>
              <p className="text-green-600">Answer: {q.correct_answer}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default QuizForm;
