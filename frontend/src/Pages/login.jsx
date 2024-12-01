import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/login.css';

const Login = () => {
  
  const navigate = useNavigate(); // Initialize navigate
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [message, setMessage] = useState('');




  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:4000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message);
      }
  
      const data = await response.json();
      localStorage.setItem('token', data.token); // Save token in localStorage



       // Redirect based on role
       if (data.role === 'tutor') {
        navigate('/TutordashBoard');
        
      } else if (data.role === 'student') {
        navigate('/studentDashboard');
        
      } else {
        
        throw new Error('Invalid user');
        
      }
    } catch (error) {
      setMessage(error.message);
    }
  };
  

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h1>Login</h1>
        {message && <p className="login-message">{message}</p>}


        <div className="form-group">
          <label htmlFor ="email">Email</label>
          <input
            type = "email"
            id = "email"
            name="email"
            value = {formData.email}
            onChange = {handleChange}
            placeholder = "Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type = "password"
            id =" password"
            name="password"
            value = {formData.password}
            onChange =  {handleChange}
            placeholde = "Enter your password"
            required
          />
        </div>
        <button type="submit" className="login-button">Login</button>
        <div className="login-footer">
          <p>Don't have an account? <a href="/signup">Sign up</a>  </p>
          <p><a href="/forgot-password">Forgot Password?</a></p>
        </div>
      </form>
    </div>
  );
};

export default Login;
