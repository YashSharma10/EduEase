// import React, { useState } from 'react';
// import axios from 'axios';
// import Header from '@/components/ui/common/header';

// const EduBot = () => {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState('');
//   const [question, setQuestion] = useState("");
//   const [response, setResponse] = useState("");

//   const sendMessage = async () => {
//     if (input.trim() === '') return;

//     // const userMessage = { sender: 'user', text: input };
//     // setMessages([...messages, userMessage]);
//     // setInput('');

//     try {
//       const res = await axios.post("http://localhost:5001/ask-doubt", {
//         question,
//       });
//       setResponse(res.data.answer);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
    
//     <div className="edu-bot-container min-h-screen w-full bg-gradient-to-br from-gray-900 to-black text-white flex flex-col items-center p-6">
//       <Header/>
//       <div className="edu-bot-header text-center mb-6 w-full">
//         <h2 className="text-3xl font-bold text-blue-300 my-10">Edu Bot</h2>
//       </div>
//       <div className="edu-bot-messages w-full max-w-3xl bg-gray-800/50 p-3 md:p-8 rounded-xl shadow-2xl border border-gray-700 backdrop-blur-sm flex-1 overflow-y-auto custom-scrollbar mb-2 ">
//         {messages.map((msg, index) => (
//           <div
//             key={index}
//             className={`edu-bot-message p-4 rounded-xl mb-2 ${
//               msg.sender === 'user' ? 'bg-blue-900/50 text-right' : 'bg-gray-700/50 text-left'
//             }`}
//           >
//             <p className={msg.sender === 'user' ? 'text-blue-200' : 'text-gray-300'}>{msg.text}</p>
//           </div>
//         ))}
//       </div>
//       <div className="edu-bot-input flex w-full max-w-3xl">
//         <input
//           type="text"
//           value={question}
//           // onChange={(e) => setInput(e.target.value)}
//           onChange={(e) => setQuestion(e.target.value)}
//           placeholder="Type your message..."
//           className="flex-1 p-4 rounded-l-xl border border-gray-700 bg-gray-800/50 text-white focus:outline-none"
//         />
//         <button
//           onClick={sendMessage}
//           // onClick={sendMessage}
//           className="p-4 rounded-r-xl bg-blue-500 text-white hover:bg-blue-400 focus:outline-none"
//         >
//           Send
//         </button>
//       </div>
//     </div>
//   );
// };

// export default EduBot;


import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import Header from '@/components/ui/common/header';

const EduBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (input.trim() === '') return;

    const userMessage = { sender: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);

    try {
      const res = await axios.post('http://localhost:5001/api/chat/ask', {
        question: input,
      });

      const botMessage = { sender: 'bot', text: res.data.answer };
      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      console.error(err);
      const errorMessage = { sender: 'bot', text: 'Sorry, something went wrong!' };
      setMessages((prev) => [...prev, errorMessage]);
    }

    setInput('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div className="edu-bot-container min-h-screen w-full bg-gradient-to-br from-gray-900 to-black text-white flex flex-col items-center p-6">
      <Header />
      <div className="edu-bot-header text-center mb-6 w-full">
        <h2 className="text-3xl font-bold text-blue-300 my-10">Edu Bot</h2>
      </div>

      <div className="edu-bot-messages w-full max-w-3xl bg-gray-800/50 p-3 md:p-8 rounded-xl shadow-2xl border border-gray-700 backdrop-blur-sm flex-1 overflow-y-auto custom-scrollbar mb-2">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`edu-bot-message p-4 rounded-xl mb-2 ${
              msg.sender === 'user' ? 'bg-blue-900/50 text-right' : 'bg-gray-700/50 text-left'
            }`}
          >
            <p className={msg.sender === 'user' ? 'text-blue-200' : 'text-gray-300'}>
              {msg.text}
            </p>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="edu-bot-input flex w-full max-w-3xl">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Type your question..."
          className="flex-1 p-4 rounded-l-xl border border-gray-700 bg-gray-800/50 text-white focus:outline-none"
        />
        <button
          onClick={sendMessage}
          className="p-4 rounded-r-xl bg-blue-500 text-white hover:bg-blue-400 focus:outline-none"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default EduBot;
