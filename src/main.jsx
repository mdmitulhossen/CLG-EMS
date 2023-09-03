import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import ThemeProvider from './utils/ThemeContext';
import App from './App';
import { AuthProvider } from './Context/AuthContext';
import 'react-toastify/dist/ReactToastify.css';
import { LoginProvider } from './Context/loginContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <LoginProvider>
  <AuthProvider>
    <Router>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Router>
    </AuthProvider>
  </LoginProvider>
  
)