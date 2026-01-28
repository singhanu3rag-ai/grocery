import React, { useState, useEffect } from 'react';
import Button from '../ui/Button';
import Badge from '../ui/Badge';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const { cartCount, toggleCart } = useCart();
    const { user, signOut } = useAuth();
    const navigate = useNavigate();

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
                    <span className="logo-text">Don<span className="highlight">Delivers</span></span>
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
                    {user ? (
                        <div className="user-profile">
                            <span className="user-name">Hi, {user.user_metadata?.name || user.email?.split('@')[0]}</span>
                            <Button variant="primary" size="sm" onClick={signOut}>Logout</Button>
                        </div>
                    ) : (
                        <Button variant="primary" size="sm" onClick={() => navigate('/login')}>Login</Button>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
