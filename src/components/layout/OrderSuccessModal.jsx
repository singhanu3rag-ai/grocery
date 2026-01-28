import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { useCart } from '../../context/CartContext';
import './OrderSuccessModal.css';

const OrderSuccessModal = () => {
    const { isOrderSuccessOpen, setOrderSuccessOpen } = useCart();

    useEffect(() => {
        if (isOrderSuccessOpen) {
            // Trigger confetti
            const duration = 3000;
            const end = Date.now() + duration;

            const frame = () => {
                confetti({
                    particleCount: 2,
                    angle: 60,
                    spread: 55,
                    origin: { x: 0 },
                    colors: ['#10b981', '#3b82f6', '#f59e0b']
                });
                confetti({
                    particleCount: 2,
                    angle: 120,
                    spread: 55,
                    origin: { x: 1 },
                    colors: ['#10b981', '#3b82f6', '#f59e0b']
                });

                if (Date.now() < end) {
                    requestAnimationFrame(frame);
                }
            };
            frame();

            // Big burst at start
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            });
        }
    }, [isOrderSuccessOpen]);

    if (!isOrderSuccessOpen) return null;

    return (
        <div className="success-modal-overlay">
            <div className="success-modal">
                <div className="success-icon-large">🎉</div>
                <h2>Order Placed!</h2>
                <p>
                    Congratulations! Your order has been placed successfully.
                    <br />
                    Prepare your taste buds, fresh groceries are on the way!
                </p>
                <button
                    className="success-btn"
                    onClick={() => setOrderSuccessOpen(false)}
                >
                    Continue Shopping
                </button>
            </div>
        </div>
    );
};

export default OrderSuccessModal;
