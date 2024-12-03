import React, { useState, useEffect } from 'react';
import '../style/notification.css';
import Sidebar from '../components/Sidebar';

const NotificationPage = () => {
  const [notifications, setNotifications] = useState([]);
  const isLoggedIn = localStorage.getItem('token'); // Check if user is logged in or not

  // Fetch notifications (simulated with dummy data for now)
  useEffect(() => {
    const fetchNotifications = async () => {
      const data = [
        { id: 1, message: 'Your Math class is scheduled for tomorrow at 10:00 AM.', timestamp: '2024-11-25 14:30' },
        { id: 2, message: 'Your feedback has been submitted successfully.', timestamp: '2024-11-24 10:15' },
        { id: 3, message: 'Physics tutor accepted your request for an extra session.', timestamp: '2024-11-23 18:45' },
        { id: 4, message: 'Upcoming Chemistry test on 2024-11-30. Be prepared!', timestamp: '2024-11-22 09:20' },
      ];
      setNotifications(data);
    };

    fetchNotifications();
  }, []);

  return (
    <div className={`notification-page-container ${isLoggedIn ? 'with-sidebar' : ''}`}>
      {isLoggedIn && <Sidebar />} {/* Render Sidebar only if logged in */}
      <div className="notification-page">
        <header className="notification-header">
          <h1>Notifications</h1>
          <p>Stay updated with your latest notifications.</p>
        </header>
        <section className="notifications-list">
          {notifications.length > 0 ? (
            notifications.map((notification) => (
              <div key={notification.id} className="notification-item">
                <p className="notification-message">{notification.message}</p>
                <p className="notification-timestamp">{new Date(notification.timestamp).toLocaleString()}</p>
              </div>
            ))
          ) : (
            <p className="no-notifications">You have no notifications at the moment.</p>
          )}
        </section>
      </div>
    </div>
  );
};

export default NotificationPage;
