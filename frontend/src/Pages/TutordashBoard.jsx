import React, { useState, useEffect } from 'react';
import '../style/TutorDashboard.css'
import Sidebar from '../components/Sidebar'; 
import io from 'socket.io-client';

// Connect to the backend Socket.IO server
const socket = io('https://clevercompas.onrender.com', {
  transports: ['websocket', 'polling'], // Ensure proper transports
  withCredentials: true, // Allow credentials (e.g., cookies)
});

const Dashboard = ()=> {

  const [userData, setUserData] = useState(null);
  const [messages, setMessages] = useState([]); // Chat messages
  const [message, setMessage] = useState(''); // Current message input



  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token'); // Get the JWT token for the user that is logged in
        const response = await fetch('https://clevercompas.onrender.com/api/user', {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }

        const data = await response.json();
        console.log('User data received:', data);

        setUserData(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  // Listen for incoming messages
  useEffect(() => {
    // Listen for incoming messages
    const handleReceiveMessage = (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    };
  
    socket.on('receiveMessage', handleReceiveMessage);
  
    // Cleanup function to remove the listener when the component unmounts
    return () => {
      socket.off('receiveMessage', handleReceiveMessage);
    };
  }, []);

  const handleSendMessage = () => {
    if (message.trim()) {
      const data = {
        username: userData.name,
        message,
        timestamp: new Date().toLocaleTimeString(),
      };
  
      socket.emit('sendMessage', data); // Emit the message to the server
      setMessage(''); // Clear the input field
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevent default form submission behavior
      handleSendMessage(); // Trigger message send
    }
  };

  if (!userData) {
    return <p>Loading...</p>;
  }

    return (
        <div class="dashboard">
      <Sidebar></Sidebar>
    <div class="main-content">
      <header class="topbar-tutor">
        <div class="welcome-tutor">
        <h1>Welcome, {userData.name}!</h1>
        <p>Let’s make today productive.</p>
        </div>
      
      </header>
      <section class="widgets-tutor">
        <div class="widget-tutor">
          <h3>Total Students</h3>
          <p>120</p>
        </div>
        <div class="widget-tutor">
          <h3>Upcoming Classes</h3>
          <p>5</p>
        </div>
        <div class="widget-tutor">
          <h3>New Messages</h3>
          <p>8</p>
        </div>
      </section>
      <section class="content-tutor">
        <div class="content-card-tutor">
          <h3>Upcoming Classes</h3>
          <ul>
            <li>Math - 10:00 AM</li>
            <li>Physics - 12:00 PM</li>
            <li>English - 2:00 PM</li>
          </ul>
        </div>
        <div class="content-card-tutor">
          <h3>Recent Messages</h3>
          <p>Hi Tutor, I need help with algebra!</p>
          <p>Can we schedule an extra session?</p>
        </div>
      </section>

      {/* Chat Section */}
      <section className="chat-tutor">
          <h3>Live Chat</h3>
          <div className="chat-box">
            <div className="chat-messages">
              {messages.map((msg, index) => (
                <div key={index} className="chat-message">
                  <strong>{msg.username}</strong>: {msg.message}{' '}
                  <span className="chat-timestamp">{msg.timestamp}</span>
                </div>
              ))}
            </div>
            <div className="chat-input">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyPress} // Listen for key press
                placeholder="Type a message..."
              />
              <button onClick={handleSendMessage}>Send</button>
            </div>
          </div>
        </section>
    </div>
  </div>
            
           
        );

}

export default Dashboard;
