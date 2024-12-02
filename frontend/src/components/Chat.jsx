import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import '../style/chat.css';

// Connect to the server
const socket = io('http://localhost:4000'); 

const Chat = () => {
  const [messages, setMessages] = useState([]); // Stores chat messages
  const [message, setMessage] = useState(''); // Current message input
  const [username, setUsername] = useState(''); // User's name

  useEffect(() => {
    // Set a default username (you can replace this with actual user data)
    setUsername(localStorage.getItem('username') || 'Anonymous');

    // Listen for incoming messages
    socket.on('receiveMessage', (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    });

    // Cleanup on component unmount
    return () => {
      socket.off('receiveMessage');
    };
  }, []);

  const handleSendMessage = () => {
    if (message.trim()) {
      const data = {
        username,
        message,
        timestamp: new Date().toLocaleTimeString(),
      };

      // Emit message to server
      socket.emit('sendMessage', data);

      // Add the message to the local state
      setMessages((prevMessages) => [...prevMessages, data]);

      // Clear the input field
      setMessage('');
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <h2>Live Chat</h2>
      </div>
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div key={index} className="chat-message">
            <strong>{msg.username}</strong>: {msg.message} <span>{msg.timestamp}</span>
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
