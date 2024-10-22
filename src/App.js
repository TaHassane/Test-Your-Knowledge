// ~/quiz-app-test/src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { useAuth } from './context/AuthContext';

// Existing components
import Home from './components/Home';
import QuizInstructions from './components/quiz/QuizInstructions';
import Play from './components/quiz/Play';
import QuizSummary from './components/quiz/QuizSummary';

// New auth components
import LoginForm  from './components/LoginForm';
import RegisterForm from './components/auth/RegisterForm';

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          
          {/* Protected routes */}
          <Route 
            path="/play/instructions" 
            element={
              <ProtectedRoute>
                <QuizInstructions />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/play/quiz" 
            element={
              <ProtectedRoute>
                <Play />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/play/quizSummary" 
            element={
              <ProtectedRoute>
                <QuizSummary />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
