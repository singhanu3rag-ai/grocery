import React from 'react';
import './Quotes.css';

const quotes = [
    {
        text: "DonDelivers is a lifesaver! Fresh produce delivered in minutes.",
        author: "Sarah J."
    },
    {
        text: "The quality of vegetables is amazing. Highly recommended!",
        author: "Mike T."
    },
    {
        text: "Fastest delivery service I've ever used. DonDelivers rocks!",
        author: "Emily R."
    }
];

const Quotes = () => {
    return (
        <section className="quotes-section container">
            <h2 className="section-title">What our customers say</h2>
            <div className="quotes-grid">
                {quotes.map((quote, index) => (
                    <div key={index} className="quote-card">
                        <p className="quote-text">"{quote.text}"</p>
                        <p className="quote-author">- {quote.author}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Quotes;
