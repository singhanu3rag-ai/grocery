import React, { useState, useEffect } from 'react';
import Button from '../ui/Button';
import Badge from '../ui/Badge';
import { useCart } from '../../context/CartContext';
import './Navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const { cartCount, toggleCart } = useCart();

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-content">
                {/* Logo */}
                <div className="logo">
                    <span className="logo-icon">🥬</span>
                    <span className="logo-text">Fresh<span className="highlight">Cart</span></span>
                </div>

                {/* Search Bar */}
                <div className="search-bar">
                    <input type="text" placeholder="Search for 'milk', 'chips'..." />
                    <button className="search-btn">🔍</button>
                </div>

                {/* Actions */}
                <div className="nav-actions">
                    <div className="cart-btn-wrapper">
                        <Button variant="ghost" className="icon-btn" onClick={toggleCart}>
                            🛒
                        </Button>
                        <Badge count={cartCount} />
                    </div>
                    <Button variant="primary" size="sm">Login</Button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
