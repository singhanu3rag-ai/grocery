import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import Button from '../ui/Button';
import './CartDrawer.css';

const CartDrawer = () => {
    const { isCartOpen, toggleCart, cartItems, updateQuantity, removeFromCart, cartTotal } = useCart();
    const [view, setView] = useState('cart'); // 'cart', 'checkout', 'success'

    const handleCheckout = (e) => {
        e.preventDefault();
        // Simulate API call
        setTimeout(() => {
            setView('success');
        }, 1000);
    };

    const closeDrawer = () => {
        toggleCart();
        // Reset view after closing (optional delay)
        setTimeout(() => setView('cart'), 500);
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
                                <input type="text" placeholder="John Doe" required />
                            </div>
                            <div className="form-group">
                                <label>Address</label>
                                <textarea placeholder="123 Green St, Vegetable City" required rows="3"></textarea>
                            </div>
                            <div className="form-group">
                                <label>Phone Number</label>
                                <input type="tel" placeholder="+1 234 567 890" required />
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
                                <Button type="button" variant="ghost" onClick={() => setView('cart')}>Back</Button>
                                <Button type="submit" variant="primary">Place Order</Button>
                            </div>
                        </form>
                    </div>
                )}

                {view === 'success' && (
                    <div className="success-container">
                        <div className="success-icon">🎉</div>
                        <h4>Order Placed Successfully!</h4>
                        <p>Your order will be delivered in 10 minutes.</p>
                        <p className="order-id">Order #83729</p>
                        <Button onClick={closeDrawer}>Continue Shopping</Button>
                    </div>
                )}
            </div>
        </>
    );
};

export default CartDrawer;
