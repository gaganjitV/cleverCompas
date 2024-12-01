import React, { useState} from 'react';
import '../style/signup.css';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    age: '',
    role: 'student', // Default role is student
  });

  const [message, setMessage] = useState('');
  const [token, setToken] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
   
    try {
        //fetching the api for register
      const response = await fetch('http://localhost:4000/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message);
      }

      const data = await response.json();
      setMessage('Sign-up successful! You can now log in.');
      setToken(data.token); // Save token for redirection
    } catch (error) {
      setMessage(error.message);
    }
  };

  // Redirect based on token and role
  useState(() => {
    if (token) {
      localStorage.setItem('token', token);
      const role = formData.role;
      if (role === 'tutor') {
        navigate('/TutordashBoard');
      } else {
        navigate('/studentDashboard');
      }
    }
  }, [token, formData.role, navigate]);

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSignUp}>
        <h1>Sign Up</h1>
        {message && <p className="signup-message">{message}</p>}



        <div className="form-group">
          <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
        </div>



          <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email" 
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>



        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password" 
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Enter your age"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="role">Role</label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
          >
            <option value="student">Student</option>
            <option value="tutor">Tutor</option>
          </select>
        </div>



        <button type="submit" className="signup-button">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
