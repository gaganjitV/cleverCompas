import React, { useState, useEffect } from 'react';
import '../style/Student.css'
import Sidebar from '../components/Sidebar'; 

import io from 'socket.io-client';

// Connect to the backend Socket.IO server
const socket = io('http://localhost:4000');



const StudentDashboard = ()=> {

  const [userData, setUserData] = useState(null);
  const [messages, setMessages] = useState([]); // Chat messages
  const [message, setMessage] = useState(''); // Current message input


  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token'); // Get the JWT token for the user that is logged in
        const response = await fetch('http://localhost:4000/api/user', {
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

  //Listning for the user data
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

  if (!userData) {
    return <p>Loading...</p>;
  }

    return (
      <div className="dashboard">
      <Sidebar />
      <div className="main-content">
        <header className="topbar-student">
          <div className="welcome-student">
            <h1>Welcome, {userData.name}!</h1>
            <p>Let’s make today productive.</p>
          </div>
        
        </header>
        <section className="widgets-student">
          <div className="widget-student">
            <i className="widget-icon fas fa-users"></i>

              <h3>Enrolled Courses</h3>
              <p>5</p>

          </div>
          <div className="widget-student">
            <i className="widget-icon fas fa-calendar-alt"></i>
            
              <h3>Upcoming Classes</h3>
              <p>3</p>
           
          </div>
          <div className="widget-student">
            <i className="widget-icon-student fas fa-envelope"></i>
            
              <h3>New Messages</h3>
              <p>2</p>
           
          </div>
        </section>
        <section className="content-student">
          <div className="content-card-student">
            <h3>
              <i className="fas fa-chalkboard-teacher"></i> Upcoming Classes
            </h3>
            <ul>
              <li>Math - 10:00 AM</li>
              <li>Physics - 12:00 PM</li>
              <li>English - 2:00 PM</li>
            </ul>
          </div>
          <div className="content-card-student">
            <h3>
              <i className="fas fa-comments"></i> Recent Messages
            </h3>
            <p>
              <strong>{userData.name}: </strong> Hi Student, I need help with algebra!
            </p>
            <p>
              <strong>{userData.name}: </strong> Can we schedule an extra session?
            </p>
          </div>
        </section>
          {/* Chat Section */}
          <section className="chat-student">
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
                placeholder="Type a message..."
              />
              <button onClick={handleSendMessage}>Send</button>
            </div>
          </div>
        </section>


      </div>
    </div>
  );
};

export default StudentDashboard;