import React from 'react';
import Button from '../ui/Button';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="container hero-content">
                <div className="hero-text fade-in-up">
                    <span className="hero-badge">🚀 Delivery in 10 minutes</span>
                    <h1 className="hero-title">
                        Groceries delivered <br />
                        <span className="text-gradient">faster than you think</span>
                    </h1>
                    <p className="hero-subtitle">
                        Get farm-fresh vegetables, fruits, and daily essentials delivered to your doorstep in minutes. No minimum order.
                    </p>
                    <div className="hero-actions">
                        <Button size="lg">Shop Now</Button>
                        <Button variant="outline" size="lg">How it works</Button>
                    </div>

                    <div className="hero-stats">
                        <div className="stat-item">
                            <strong>5000+</strong>
                            <span>Products</span>
                        </div>
                        <div className="stat-item">
                            <strong>10 min</strong>
                            <span>Delivery</span>
                        </div>
                        <div className="stat-item">
                            <strong>100k+</strong>
                            <span>Happy Users</span>
                        </div>
                    </div>
                </div>

                <div className="hero-visual fade-in-delay">
                    <div className="floating-card card-1">
                        <span>🥛</span>
                        <div>
                            <strong>Fresh Milk</strong>
                            <small>Delivered</small>
                        </div>
                    </div>
                    <div className="floating-card card-2">
                        <span>🍅</span>
                        <div>
                            <strong>Tomatoes</strong>
                            <small>In Cart</small>
                        </div>
                    </div>
                    <div className="floating-card card-3">
                        <span>🥑</span>
                        <div>
                            <strong>Avocados</strong>
                            <small>$4.99</small>
                        </div>
                    </div>
                    <div className="circle-bg"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
