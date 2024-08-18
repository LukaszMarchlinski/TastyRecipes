import React from 'react';
import Header from '../component/Header/Header';
import Dashboard from '../component/Dashboard/Dasboard';
import PopularDishesSection from '../component/PopularDishesSection/PopularDishesSection';
import NewDishesSection from '../component/NewDishesSection/NewDishesSection';
import BlogSection from '../component/BlogSection/BlogSection';
import Footer from '../component/Footer/Footer';

const HomePage = () => {
    return (
        <div>
            <section className="header-section">
                <Header />
                </section>
            <section className="dashboard-section">
                <Dashboard />
            </section>
            <section className="popular-dishes-section">
                <PopularDishesSection />
            </section>
            <section className="new-dishes-section">
                <NewDishesSection />
            </section>
            <section className="blog-section">
                <BlogSection />
            </section>
            <section className="foter-section">
                <Footer />
            </section>
        </div>
    );
};

export default HomePage;