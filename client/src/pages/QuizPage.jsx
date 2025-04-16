// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { GenIcon } from "react-icons";
// import QuizForm from "@/components/ui/common/QuizForm";
// import axios from "axios";

// const QuizPage = () => {
//   const [quizData, setQuizData] = useState([]);
//   const [selectedAnswers, setSelectedAnswers] = useState({});
//   const [submitted, setSubmitted] = useState(false);
//   const [showResultsModal, setShowResultsModal] = useState(false);
//   const [score, setScore] = useState(0);
//   const [personData, setPersonData] = useState(
//     JSON.parse(localStorage.getItem("profileId"))
//   );
//   // Static quiz data
//   const staticQuizData = [
//     {
//       type: "text",
//       question: "What is the capital of France?",
//       options: ["Berlin", "Madrid", "Paris", "Lisbon"],
//       answer: ["Paris"],
//     },
//     {
//       type: "text",
//       question: "What is 2 + 2?",
//       options: ["3", "4", "5", "6"],
//       answer: ["4"],
//     },
//     {
//       type: "text",
//       question: "Which planet is known as the Red Planet?",
//       options: ["Venus", "Mars", "Jupiter", "Saturn"],
//       answer: ["Mars"],
//     },
//     {
//       type: "text",
//       question: "Who painted the Mona Lisa?",
//       options: [
//         "Vincent van Gogh",
//         "Pablo Picasso",
//         "Leonardo da Vinci",
//         "Michelangelo",
//       ],
//       answer: ["Leonardo da Vinci"],
//     },
//   ];

//   useEffect(() => {
//     console.log(personData.fullName);

//     const fetchQuizData = async () => {
//       try {
//         let topic = personData.classGrade;
//         let level = personData.learningStyle;
//         const res = await axios.post("http://localhost:5001/api/quiz/generate", {
//           topic,
//           level,
//         });
    
//         const formattedQuizData = res.data.quiz.map((q) => ({
//           type: "text",
//           question: q.question,
//           options: q.options,
//           answer: [q.options[q.correct_answer]], // Convert correct index to value
//         }));
    
//         setQuizData(formattedQuizData);
//       } catch (error) {
//         console.error("Error fetching quiz data:", error);
//         setQuizData(staticQuizData); // fallback
//       }
//     };
    

//     if (personData) {
//       fetchQuizData();
//     }
//     fetchQuizData();
//   }, [personData]);

//   const handleOptionChange = (questionIndex, option) => {
//     if (!submitted) {
//       setSelectedAnswers({
//         ...selectedAnswers,
//         [questionIndex]: option,
//       });
//     }
//   };

//   const calculateScore = () => {
//     let correctAnswers = 0;
//     quizData.forEach((question, index) => {
//       if (
//         selectedAnswers[index] &&
//         question.answer.includes(selectedAnswers[index])
//       ) {
//         correctAnswers++;
//       }
//     });
//     return correctAnswers;
//   };

//   const storeQuizResults = async (results) => {
//     try {
//       const response = await fetch(
//         "http://localhost:5000/api/store-quiz-results",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(results),
//         }
//       );

//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }

//       const data = await response.json();
//       console.log("Quiz results stored successfully:", data);
//     } catch (error) {
//       console.error("Error storing quiz results:", error);
//     }
//   };

//   const handleSubmit = () => {
//     setSubmitted(true);
//     const calculatedScore = calculateScore();
//     setScore(calculatedScore);

//     const results = {
//       score: calculatedScore,
//       totalQuestions: quizData.length,
//       correctAnswers: [],
//       wrongAnswers: [],
//     };

//     quizData.forEach((question, index) => {
//       if (
//         selectedAnswers[index] &&
//         question.answer.includes(selectedAnswers[index])
//       ) {
//         results.correctAnswers.push({
//           question: question.question,
//           selectedAnswer: selectedAnswers[index],
//           correctAnswer: question.answer[0],
//         });
//       } else {
//         results.wrongAnswers.push({
//           question: question.question,
//           selectedAnswer: selectedAnswers[index],
//           correctAnswer: question.answer[0],
//         });
//       }
//     });

//     storeQuizResults(results);
//     setShowResultsModal(true);
//   };

//   const handleReset = () => {
//     setSelectedAnswers({});
//     setSubmitted(false);
//     setShowResultsModal(false);
//   };

//   const getPerformanceMessage = () => {
//     const percentage = Math.round((score / quizData.length) * 100);

//     if (percentage >= 80) {
//       return {
//         message: "Excellent work!",
//         emoji: "🎉",
//         color: "text-green-400",
//       };
//     } else if (percentage >= 50) {
//       return {
//         message: "Good job!",
//         emoji: "👍",
//         color: "text-blue-400",
//       };
//     } else {
//       return {
//         message: "Keep practicing!",
//         emoji: "💪",
//         color: "text-yellow-400",
//       };
//     }
//   };

//   const performance = getPerformanceMessage();

//   return (
//     <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 to-black text-white overflow-auto">
//       <section className="min-h-screen w-full flex flex-col items-center justify-start pt-12 pb-20 px-4 sm:px-6 max-w-7xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="w-full flex-1 flex flex-col items-center justify-center" // Center the content
//         >
//           <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-blue-200 to-blue-100 mb-8 md:mb-12 text-center">
//             Knowledge Challenge
//           </h2>

//           <div className="flex-1 w-full flex flex-col items-center">
//             <div className="w-full max-w-4xl bg-gray-800/50 p-6 md:p-8 rounded-xl shadow-2xl border border-gray-700 backdrop-blur-sm">
//               <div className="max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
//                 {quizData.map((question, index) => (
//                   <motion.div
//                     key={index}
//                     initial={{ opacity: 0, y: 10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: index * 0.1 }}
//                     className="mb-6 p-6 rounded-xl bg-gray-800/30 border border-gray-700/50"
//                   >
//                     <h3 className="text-xl md:text-2xl font-semibold mb-5 text-blue-100">
//                       {index + 1}. {question.question}
//                     </h3>
//                     <div className="space-y-3">
//                       {question.options.map((option, optionIndex) => {
//                         const isSelected = selectedAnswers[index] === option;
//                         const isCorrect = question.answer.includes(option);
//                         const showCorrect = submitted && isCorrect;
//                         const showIncorrect =
//                           submitted && isSelected && !isCorrect;

//                         return (
//                           <label
//                             key={optionIndex}
//                             className={`flex items-center p-4 rounded-xl cursor-pointer transition-all border ${
//                               !submitted
//                                 ? "hover:bg-gray-700/50 border-transparent"
//                                 : showCorrect
//                                 ? "border-green-500 bg-green-900/20"
//                                 : showIncorrect
//                                 ? "border-red-500 bg-red-900/20"
//                                 : "border-transparent"
//                             } ${
//                               isSelected && !submitted
//                                 ? "bg-blue-900/50 border-blue-400"
//                                 : ""
//                             }`}
//                           >
//                             <input
//                               type="radio"
//                               name={`question-${index}`}
//                               value={option}
//                               checked={isSelected}
//                               onChange={() => handleOptionChange(index, option)}
//                               className="mr-4 h-5 w-5 min-h-5 min-w-5 accent-blue-400"
//                               disabled={submitted}
//                             />
//                             <span
//                               className={`flex-1 text-left text-lg ${
//                                 showCorrect
//                                   ? "text-green-300 font-medium"
//                                   : showIncorrect
//                                   ? "text-red-300"
//                                   : isSelected
//                                   ? "text-blue-200 font-medium"
//                                   : "text-gray-300"
//                               }`}
//                             >
//                               {option}
//                               {showCorrect && !isSelected && (
//                                 <span className="ml-3 text-sm text-green-300">
//                                   (Correct answer)
//                                 </span>
//                               )}
//                             </span>
//                           </label>
//                         );
//                       })}
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>

//               <div className="flex justify-center gap-6 mt-10">
//                 {!submitted ? (
//                   <button
//                     onClick={handleSubmit}
//                     disabled={
//                       Object.keys(selectedAnswers).length !== quizData.length
//                     }
//                     className={`px-10 py-4 rounded-full font-semibold text-lg text-white transition-all ${
//                       Object.keys(selectedAnswers).length === quizData.length
//                         ? "bg-gradient-to-r from-blue-500 to-blue-300 hover:from-blue-400 hover:to-blue-200 shadow-lg shadow-blue-500/30 transform hover:scale-105"
//                         : "bg-gray-700 cursor-not-allowed opacity-70"
//                     }`}
//                   >
//                     Submit Answers
//                   </button>
//                 ) : (
//                   <button
//                     onClick={handleReset}
//                     className="px-10 py-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-400 hover:from-purple-400 hover:to-blue-300 font-semibold text-lg text-white shadow-lg shadow-purple-500/30 transform hover:scale-105"
//                   >
//                     Try Again
//                   </button>
//                 )}
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </section>

//       {/* Results Modal */}
//       <AnimatePresence>
//         {showResultsModal && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
//             onClick={() => setShowResultsModal(false)}
//           >
//             <motion.div
//               initial={{ scale: 0.9, y: 20 }}
//               animate={{ scale: 1, y: 0 }}
//               exit={{ scale: 0.9, y: 20 }}
//               className="bg-gray-800 border border-gray-700 rounded-xl max-w-md w-full p-8 shadow-2xl"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <div className="text-center">
//                 <h3 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-100">
//                   Quiz Results
//                 </h3>

//                 <div className="text-5xl font-bold mb-4">
//                   <span className={performance.color}>
//                     {score}/{quizData.length}
//                   </span>
//                 </div>

//                 <div
//                   className={`text-2xl font-semibold mb-6 ${performance.color}`}
//                 >
//                   {performance.message} {performance.emoji}
//                 </div>

//                 <p className="text-gray-300 mb-8">
//                   {score === quizData.length
//                     ? "Perfect! You got all questions right!"
//                     : `You answered ${score} out of ${quizData.length} questions correctly.`}
//                 </p>

//                 <button
//                   onClick={() => setShowResultsModal(false)}
//                   className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-blue-300 hover:from-blue-400 hover:to-blue-200 font-semibold text-white w-full"
//                 >
//                   Continue
//                 </button>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       <style jsx>{`
//         .custom-scrollbar::-webkit-scrollbar {
//           width: 6px;
//         }
//         .custom-scrollbar::-webkit-scrollbar-track {
//           background: rgba(255, 255, 255, 0.05);
//           border-radius: 10px;
//         }
//         .custom-scrollbar::-webkit-scrollbar-thumb {
//           background: rgba(100, 149, 237, 0.5);
//           border-radius: 10px;
//         }
//         .custom-scrollbar::-webkit-scrollbar-thumb:hover {
//           background: rgba(100, 149, 237, 0.8);
//         }
//       `}</style>
//     </div>
//   );
// };

// export default QuizPage;


import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import Header from "@/components/ui/common/header";

const QuizPage = () => {
  const [quizData, setQuizData] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [showResultsModal, setShowResultsModal] = useState(false);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(false);
  const [topicInput, setTopicInput] = useState("");
  const [personData, setPersonData] = useState(
    JSON.parse(localStorage.getItem("profileId"))
  );

  const staticQuizData = [
    {
      type: "text",
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Lisbon"],
      answer: ["Paris"],
    },
    {
      type: "text",
      question: "What is 2 + 2?",
      options: ["3", "4", "5", "6"],
      answer: ["4"],
    },
    {
      type: "text",
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      answer: ["Mars"],
    },
    {
      type: "text",
      question: "Who painted the Mona Lisa?",
      options: [
        "Vincent van Gogh",
        "Pablo Picasso",
        "Leonardo da Vinci",
        "Michelangelo",
      ],
      answer: ["Leonardo da Vinci"],
    },
  ];

  const fetchQuizData = async (customTopic = null) => {
    setLoading(true);
    try {
      let topic = customTopic || personData?.classGrade || "General";
      let level = personData?.learningStyle || "Intermediate";

      const res = await axios.post("http://localhost:5001/api/quiz/generate", {
        topic,
        level,
      });

      const formattedQuizData = res.data.quiz.map((q) => ({
        type: "text",
        question: q.question,
        options: q.options,
        answer: [q.options[q.correct_answer]],
      }));

      setQuizData(formattedQuizData);
    } catch (error) {
      console.error("Error fetching quiz data:", error);
      setQuizData(staticQuizData);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (personData) {
      fetchQuizData();
    }
  }, [personData]);

  const handleOptionChange = (questionIndex, option) => {
    if (!submitted) {
      setSelectedAnswers({
        ...selectedAnswers,
        [questionIndex]: option,
      });
    }
  };

  const calculateScore = () => {
    let correctAnswers = 0;
    quizData.forEach((question, index) => {
      if (
        selectedAnswers[index] &&
        question.answer.includes(selectedAnswers[index])
      ) {
        correctAnswers++;
      }
    });
    return correctAnswers;
  };

  const storeQuizResults = async (results) => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/store-quiz-results",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(results),
        }
      );

      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.json();
      console.log("Quiz results stored successfully:", data);
    } catch (error) {
      console.error("Error storing quiz results:", error);
    }
  };

  const handleSubmit = () => {
    setSubmitted(true);
    const calculatedScore = calculateScore();
    setScore(calculatedScore);

    const results = {
      score: calculatedScore,
      totalQuestions: quizData.length,
      correctAnswers: [],
      wrongAnswers: [],
    };

    quizData.forEach((question, index) => {
      const selected = selectedAnswers[index];
      if (selected && question.answer.includes(selected)) {
        results.correctAnswers.push({
          question: question.question,
          selectedAnswer: selected,
          correctAnswer: question.answer[0],
        });
      } else {
        results.wrongAnswers.push({
          question: question.question,
          selectedAnswer: selected,
          correctAnswer: question.answer[0],
        });
      }
    });

    storeQuizResults(results);
    setShowResultsModal(true);
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setSubmitted(false);
    setShowResultsModal(false);
  };

  const handleTopicSubmit = () => {
    if (topicInput.trim()) {
      fetchQuizData(topicInput.trim());
    }
  };

  const getPerformanceMessage = () => {
    const percentage = Math.round((score / quizData.length) * 100);
    if (percentage >= 80) {
      return { message: "Excellent work!", emoji: "🎉", color: "text-green-400" };
    } else if (percentage >= 50) {
      return { message: "Good job!", emoji: "👍", color: "text-blue-400" };
    } else {
      return { message: "Keep practicing!", emoji: "💪", color: "text-yellow-400" };
    }
  };

  const performance = getPerformanceMessage();

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 to-black text-white overflow-auto">
      {/* <QuizForm /> */}
      <section className="min-h-screen w-full flex flex-col items-center justify-start pt-12 pb-20 px-4 sm:px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          <h2 className="text-5xl font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-blue-200 to-blue-100 mb-10">
            Knowledge Challenge
          </h2>

          {/* Input topic section */}
          <div className="w-full max-w-xl mx-auto mb-8 flex items-center gap-4">
            <input
              type="text"
              placeholder="Enter a topic (e.g., Physics, History)"
              className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={topicInput}
              onChange={(e) => setTopicInput(e.target.value)}
            />
            <button
              onClick={handleTopicSubmit}
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-blue-300 hover:from-blue-400 hover:to-blue-200 text-white font-semibold"
            >
              Generate
            </button>
          </div>

          {/* Loading Spinner */}
          {loading ? (
            <div className="flex items-center justify-center mt-20">
              <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-400 border-opacity-50"></div>
            </div>
          ) : (
            <div className="w-full max-w-4xl mx-auto bg-gray-800/50 p-6 rounded-xl shadow-xl border border-gray-700 backdrop-blur-sm">
              <div className="max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
                {quizData.map((question, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="mb-6 p-6 rounded-xl bg-gray-800/30 border border-gray-700/50"
                  >
                    <h3 className="text-xl font-semibold mb-5 text-blue-100">
                      {index + 1}. {question.question}
                    </h3>
                    <div className="space-y-3">
                      {question.options.map((option, optionIndex) => {
                        const isSelected = selectedAnswers[index] === option;
                        const isCorrect = question.answer.includes(option);
                        const showCorrect = submitted && isCorrect;
                        const showIncorrect =
                          submitted && isSelected && !isCorrect;

                        return (
                          <label
                            key={optionIndex}
                            className={`flex items-center p-4 rounded-xl cursor-pointer transition-all border ${
                              !submitted
                                ? "hover:bg-gray-700/50 border-transparent"
                                : showCorrect
                                ? "border-green-500 bg-green-900/20"
                                : showIncorrect
                                ? "border-red-500 bg-red-900/20"
                                : "border-transparent"
                            } ${
                              isSelected && !submitted
                                ? "bg-blue-900/50 border-blue-400"
                                : ""
                            }`}
                          >
                            <input
                              type="radio"
                              name={`question-${index}`}
                              value={option}
                              checked={isSelected}
                              onChange={() =>
                                handleOptionChange(index, option)
                              }
                              className="mr-4 h-5 w-5 min-h-5 min-w-5 accent-blue-400"
                              disabled={submitted}
                            />
                            <span
                              className={`flex-1 text-left text-lg ${
                                showCorrect
                                  ? "text-green-300 font-medium"
                                  : showIncorrect
                                  ? "text-red-300"
                                  : isSelected
                                  ? "text-blue-200 font-medium"
                                  : "text-gray-300"
                              }`}
                            >
                              {option}
                              {showCorrect && !isSelected && (
                                <span className="ml-3 text-sm text-green-300">
                                  (Correct answer)
                                </span>
                              )}
                            </span>
                          </label>
                        );
                      })}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="flex justify-center gap-6 mt-10">
                {!submitted ? (
                  <button
                    onClick={handleSubmit}
                    disabled={
                      Object.keys(selectedAnswers).length !== quizData.length
                    }
                    className={`px-10 py-4 rounded-full font-semibold text-lg text-white transition-all ${
                      Object.keys(selectedAnswers).length === quizData.length
                        ? "bg-gradient-to-r from-blue-500 to-blue-300 hover:from-blue-400 hover:to-blue-200 shadow-lg shadow-blue-500/30 transform hover:scale-105"
                        : "bg-gray-700 cursor-not-allowed opacity-70"
                    }`}
                  >
                    Submit Answers
                  </button>
                ) : (
                  <button
                    onClick={handleReset}
                    className="px-10 py-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-400 hover:from-purple-400 hover:to-blue-300 font-semibold text-lg text-white shadow-lg shadow-purple-500/30 transform hover:scale-105"
                  >
                    Try Again
                  </button>
                )}
              </div>
            </div>
          )}
        </motion.div>
      </section>

      {/* Results Modal */}
      <AnimatePresence>
        {showResultsModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setShowResultsModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-gray-800 border border-gray-700 rounded-xl max-w-md w-full p-8 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center">
                <h3 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-100">
                  Quiz Results
                </h3>
                <div className="text-5xl font-bold mb-4">
                  <span className={performance.color}>
                    {score}/{quizData.length}
                  </span>
                </div>
                <div
                  className={`text-2xl font-semibold mb-6 ${performance.color}`}
                >
                  {performance.message} {performance.emoji}
                </div>
                <p className="text-gray-300 mb-8">
                  {score === quizData.length
                    ? "Perfect! You got all questions right!"
                    : `You answered ${score} out of ${quizData.length} questions correctly.`}
                </p>
                <button
                  onClick={() => setShowResultsModal(false)}
                  className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-blue-300 hover:from-blue-400 hover:to-blue-200 font-semibold text-white w-full"
                >
                  Continue
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(100, 149, 237, 0.5);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(100, 149, 237, 0.8);
        }
      `}</style>
    </div>
  );
};

export default QuizPage;
