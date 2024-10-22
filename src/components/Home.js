// ~/quiz-app-test/src/components/Home.js

import React, { Fragment, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import LoginForm from './LoginForm';
import RegisterForm from './auth/RegisterForm';
import './Buttons.css';

const Home = () => {
  const { user, logout } = useAuth();
  const [showRegister, setShowRegister] = useState(false);

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 18) return 'Good afternoon';
    return 'Good evening';
  };

  return (
    <Fragment>
      <Helmet><title>Home - Test Your Knowledge</title></Helmet>
      <div id="home">
        <section>
          <h1>Test Your Knowledge</h1>
          {user ? (
            <div>
              <h2>{getGreeting()}, {user.username}!</h2>
              <Link to="/play/instructions" className="button quiz-button">
                Go to Quiz
              </Link>
              <button onClick={logout} className="button logout-button">
                Logout
              </button>
            </div>
          ) : (
            <div>
              {showRegister ? (
                <>
                  <RegisterForm />
                  <button 
                    onClick={() => setShowRegister(false)}
                    className="button switch-form-button"
                  >
                    Back to Login
                  </button>
                </>
              ) : (
                <>
                  <LoginForm />
                  <button 
                    onClick={() => setShowRegister(true)}
                    className="button switch-form-button"
                  >
                    Need to Register?
                  </button>
                </>
              )}
            </div>
          )}
        </section>
      </div>
    </Fragment>
  );
};

export default Home;
