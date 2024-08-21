import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import RecipesPage from './pages/RecipesPage';
import './App.css';

function App() {
    return (
        <Router>
            <div className="app">
                <div className="main-content">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/register" element={<RegisterPage />} />
                        <Route path="/recipes/*" element={<RecipesPage />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;