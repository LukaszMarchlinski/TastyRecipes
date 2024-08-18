import React from 'react';
import './Dashboard.css';


const Dashboard = () => {
    return (
        <div>
            <div className="top-bar"></div> {/* Pasek u góry */}
            <div className="dashboard-background">
            <div className="dashboard-container">
                <div className="dashboard-text">
                    <h1>Need ideas for what to cook for the dinner?</h1>
                    <p className="help-text">We’ll help you!</p>
                    <p className="instructions">Simply proceed to our planner</p>
                    <button className="dashboard-button">Go to the Planner</button>
                </div>
                <div className="dashboard-image">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/Header/Dashboard-pic.png`} alt="Jedzenie" />
                </div>
                </div>
            </div>
            </div>
    );
};

export default Dashboard;