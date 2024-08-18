import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const location = useLocation();
    
    return (
        <header>
            <div className="container">
                <h1>
                    <svg className="logo">
                        <use href={`${process.env.PUBLIC_URL}/assets/sprite.svg#icon-logo`} />
                    </svg>
                </h1>
                <nav>
                    <ul>
                        <li>
                            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/recipes" className={location.pathname === '/recipes' ? 'active' : ''}>
                                Recipes
                            </Link>
                        </li>
                        <li>
                            <Link to="/add-recipe" className={location.pathname === '/add-recipe' ? 'active' : ''}>
                                Add Recipe
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>
                                About
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className="auth-buttons">
                    <Link to="/login">
                        <button className="btn btn-login-header">Sign In</button>
                    </Link>
                    <Link to="/register">
                        <button className="btn btn-register-header">Sign Up</button>
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;