// src/EduBot.js
import React, { useState } from 'react';
import axios from 'axios';

const EduBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    if (input.trim() === '') return;

    const userMessage = { sender: 'user', text: input };
    setMessages([...messages, userMessage]);
    setInput('');

    try {
      const response = await axios.post('http://localhost:5000/api/chat', { message: input });
      const botMessage = { sender: 'bot', text: response.data.reply };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div className="w-full max-w-md bg-gray-800/50 p-6 md:p-8 rounded-xl shadow-2xl border border-gray-700 backdrop-blur-sm">
      <div className="edu-bot-header text-center mb-4">
        <h2 className="text-2xl font-bold text-blue-300">Edu Bot</h2>
      </div>
      <div className="edu-bot-messages max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar mb-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`edu-bot-message p-4 rounded-xl mb-2 ${
              msg.sender === 'user' ? 'bg-blue-900/50 text-right' : 'bg-gray-700/50 text-left'
            }`}
          >
            <p className={msg.sender === 'user' ? 'text-blue-200' : 'text-gray-300'}>{msg.text}</p>
          </div>
        ))}
      </div>
      <div className="edu-bot-input flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
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
