import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [role, setRole] = useState(null); // State to store the user's role

  // Automatically collapse the sidebar when the location changes
  useEffect(() => {
    setIsCollapsed(true);
  }, [location]);


  // Fetch role
  useEffect(() => {
    const fetchUserRole = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          navigate('/login'); // Redirect to login if no token is found
          return;
        }

        const response = await fetch('https://clevercompas.onrender.com/api/user', {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }

        const data = await response.json();
        setRole(data.role); // Set the user's role (student/tutor)
      } catch (error) {
        console.error('Error fetching user role:', error);
        navigate('/login'); // Redirect to login on error
      }
    };

    fetchUserRole();
  }, [navigate]); 

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };


  //  Dashboard redirection based on role
  const handleDashboardClick = () => {
    if (role === 'tutor') {
      navigate('/TutordashBoard');
    } else if (role === 'student') {
      navigate('/studentDashboard');
    } else {
      console.error('Unknown role:', role);
    }
  };

  // This is for the logout button functions
  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove the token
    navigate('/login'); // Redirect to login page
  };

  return (
    <div className="layout-container">
      <aside className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
        <button className="toggle-button" onClick={toggleSidebar}>
          {isCollapsed ? '>' : '<'}
        </button>
        {!isCollapsed && (
          <>
          <ul className="sidebar-links">
            

            <li>
                <button onClick={handleDashboardClick} className="dashboard-link">
                  Dashboard
                </button>
              </li>


            <li><Link to="/schedule">Schedule</Link></li>
            <li><Link to="/Notification">Notification</Link></li> {/* Need to add pages */}
          </ul>
          <button className="logout-button" onClick={handleLogout}>
              Logout
            </button>
          </>
        )}
      </aside>
      <main className={`content ${isCollapsed ? 'expanded' : ''}`}>{children}</main>
    </div>
  );
};

export default Sidebar;
