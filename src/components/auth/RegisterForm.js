import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import './RegisterForm.css';

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [gender, setGender] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!username.trim() || !password.trim() || !gender) {
      setError('Username, password, and gender are required');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setIsLoading(true);
    setError('');
    try {
      await register(username, password, gender);
      navigate('/play/instructions');
    } catch (err) {
      console.error('Registration error:', err);
      let errorMessage = 'Failed to register. Please try again.';
      if (err.response && err.response.data && err.response.data.message) {
        errorMessage = err.response.data.message;
      }
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <form onSubmit={handleSubmit} className="register-form">
      <div className="form-group">
        <input
          type="text"
          placeholder="Choose a username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className="form-input username-input"
        />
      </div>

      <div className="form-group password-input-container">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="form-input"
        />
        <button 
          type="button" 
          className="password-toggle"
          onClick={togglePasswordVisibility}
          tabIndex="-1"
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      </div>

      <div className="form-group password-input-container">
        <input
          type={showConfirmPassword ? "text" : "password"}
          placeholder="Confirm password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          className="form-input"
        />
        <button 
          type="button" 
          className="password-toggle"
          onClick={toggleConfirmPasswordVisibility}
          tabIndex="-1"
        >
          {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      </div>

      <div className="gender-selection">
        <p className="gender-title">Select Gender:</p>
        <div className="gender-options">
          <label className={`gender-option ${gender === 'male' ? 'selected' : ''}`}>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={gender === 'male'}
              onChange={(e) => setGender(e.target.value)}
              className="gender-input"
            />
            <span className="gender-label">Male</span>
          </label>
          
          <label className={`gender-option ${gender === 'female' ? 'selected' : ''}`}>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={gender === 'female'}
              onChange={(e) => setGender(e.target.value)}
              className="gender-input"
            />
            <span className="gender-label">Female</span>
          </label>
        </div>
      </div>

      <button type="submit" className="button login-button" disabled={isLoading}>
        {isLoading ? 'Registering...' : 'Register'}
      </button>
      
      {error && <p className="error-message">{error}</p>}
    </form>
  );
};

export default RegisterForm;
