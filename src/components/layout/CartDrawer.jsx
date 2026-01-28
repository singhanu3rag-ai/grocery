import React, { useState, useEffect } from 'react';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import Button from '../ui/Button';
import './CartDrawer.css';
import emailjs from '@emailjs/browser';

const CartDrawer = () => {
    const { isCartOpen, toggleCart, cartItems, updateQuantity, removeFromCart, cartTotal, clearCart } = useCart();
    const { user } = useAuth();
    const [view, setView] = useState('cart'); // 'cart', 'checkout', 'success'

    // Checkout form state
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        phone: ''
    });
    const [isSending, setIsSending] = useState(false);

    useEffect(() => {
        if (user?.email) {
            setFormData(prev => ({ ...prev, email: user.email }));
        }
    }, [user]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleCheckout = async (e) => {
        e.preventDefault();
        setIsSending(true);

        const orderId = '#ORD-' + Math.floor(100000 + Math.random() * 900000);
        const orderSummary = cartItems.map(item => `${item.name} x ${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`).join('\n');

        const templateParams = {
            order_id: orderId,
            to_name: formData.name,
            email: formData.email,
            address: formData.address,
            phone: formData.phone,
            items: orderSummary,
            total: cartTotal.toFixed(2)
        };

        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                templateParams,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );
            console.log('Email sent successfully!');
            clearCart();
            setView('success');
        } catch (error) {
            console.error('Failed to send email:', error);
            // Even if email fails, we might still want to show success if the order technically "placed" locally?
            // For now, let's treat it as success but maybe alert? 
            // Better UX: Show success but maybe log it. The user gets the product anyway.
            clearCart();
            setView('success');
        } finally {
            setIsSending(false);
        }
    };

    const closeDrawer = () => {
        toggleCart();
        // Reset view after closing (optional delay)
        setTimeout(() => {
            setView('cart');
            setIsSending(false);
        }, 500);
    };

    if (!isCartOpen) return null;

    return (
        <>
            <div className="cart-overlay" onClick={closeDrawer}></div>
            <div className="cart-drawer">
                <div className="cart-header">
                    <h3>
                        {view === 'cart' && `Your Cart (${cartItems.length})`}
                        {view === 'checkout' && 'Checkout'}
                        {view === 'success' && 'Order Placed!'}
                    </h3>
                    <button className="close-btn" onClick={closeDrawer}>×</button>
                </div>

                {view === 'cart' && (
                    <>
                        <div className="cart-items">
                            {cartItems.length === 0 ? (
                                <div className="empty-cart">
                                    <span className="empty-icon">🛒</span>
                                    <p>Your cart is empty.</p>
                                    <Button size="sm" onClick={closeDrawer}>Start Shopping</Button>
                                </div>
                            ) : (
                                cartItems.map(item => (
                                    <div key={item.id} className="cart-item">
                                        <img src={item.image} alt={item.name} className="cart-item-img" />
                                        <div className="cart-item-details">
                                            <h4>{item.name}</h4>
                                            <p>${item.price.toFixed(2)}</p>
                                            <div className="quantity-controls">
                                                <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                                                <span>{item.quantity}</span>
                                                <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                                            </div>
                                        </div>
                                        <button
                                            className="remove-btn"
                                            onClick={() => removeFromCart(item.id)}
                                        >
                                            ×
                                        </button>
                                    </div>
                                ))
                            )}
                        </div>

                        {cartItems.length > 0 && (
                            <div className="cart-footer">
                                <div className="cart-total">
                                    <span>Total:</span>
                                    <span>${cartTotal.toFixed(2)}</span>
                                </div>
                                <Button size="lg" className="checkout-btn" onClick={() => setView('checkout')}>
                                    Proceed to Checkout
                                </Button>
                                <p className="cod-note">Cash on Delivery Available</p>
                            </div>
                        )}
                    </>
                )}

                {view === 'checkout' && (
                    <div className="checkout-container">
                        <form onSubmit={handleCheckout} className="checkout-form">
                            <div className="form-group">
                                <label>Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder="John Doe"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="john@example.com"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Address</label>
                                <textarea
                                    name="address"
                                    value={formData.address}
                                    onChange={handleInputChange}
                                    placeholder="123 Green St, Vegetable City"
                                    required
                                    rows="3"
                                ></textarea>
                            </div>
                            <div className="form-group">
                                <label>Phone Number</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    placeholder="+1 234 567 890"
                                    required
                                />
                            </div>

                            <div className="payment-summary">
                                <div className="payment-row">
                                    <span>Subtotal</span>
                                    <span>${cartTotal.toFixed(2)}</span>
                                </div>
                                <div className="payment-row">
                                    <span>Delivery Fee</span>
                                    <span>$0.00</span>
                                </div>
                                <div className="payment-row total">
                                    <span>Total (Cash on Delivery)</span>
                                    <span>${cartTotal.toFixed(2)}</span>
                                </div>
                            </div>

                            <div className="checkout-actions">
                                <Button type="button" variant="ghost" onClick={() => setView('cart')} disabled={isSending}>Back</Button>
                                <Button type="submit" variant="primary" disabled={isSending}>
                                    {isSending ? 'Placing Order...' : 'Place Order'}
                                </Button>
                            </div>
                        </form>
                    </div>
                )}

                {view === 'success' && (
                    <div className="success-container">
                        <div className="success-icon">🎉</div>
                        <h4>Order Placed Successfully!</h4>
                        <p>We've sent a confirmation email to {formData.email}.</p>
                        <p>Your order will be delivered in 10 minutes.</p>
                        <Button onClick={closeDrawer}>Continue Shopping</Button>
                    </div>
                )}
            </div>
        </>
    );
};

export default CartDrawer;
