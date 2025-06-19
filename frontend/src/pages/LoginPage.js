import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState(localStorage.getItem('email') || '');
  const [password, setPassword] = useState(localStorage.getItem('password') || '');
  const [errors, setErrors] = useState({ email: '', password: '' });

  const validate = () => {
    let valid = true;
    let newErrors = { email: '', password: '' };

    // Email format check
    if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Invalid email format';
      valid = false;
    }

    // Password length check
    if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!validate()) return;

    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    navigate('/');
  };

  const goToRegister = () => {
    navigate('/register');
  };

  return (
    <div className="login-container">
      {[...Array(10)].map((_, i) => (
        <div key={i} className={`paw-print paw-${i % 5}`} />
      ))}

      <div className="login-card fade-in">
        <h2>🐶 Welcome Back!</h2>
        <p>Log in to your Pawsitive account</p>
        <form onSubmit={handleLogin} noValidate>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <span className="error">{errors.email}</span>}

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <span className="error">{errors.password}</span>}

          <button type="submit">Login</button>

          <p className="signup-link">
            Don't have an account?{' '}
            <span className="signup-click" onClick={goToRegister}>
              Sign up
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
