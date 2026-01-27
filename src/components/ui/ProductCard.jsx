import React from 'react';
import Button from '../ui/Button';
import './ProductCard.css';

const ProductCard = ({ product, onAdd }) => {
    return (
        <div className="product-card">
            <div className="product-image-container">
                <img src={product.image} alt={product.name} className="product-image" loading="lazy" />
                <Button
                    variant="secondary"
                    size="sm"
                    className="add-btn-floating"
                    onClick={() => onAdd(product)}
                >
                    + Add
                </Button>
            </div>
            <div className="product-details">
                <div className="product-header">
                    <h3 className="product-name">{product.name}</h3>
                    <span className="product-price">${product.price.toFixed(2)}</span>
                </div>
                <p className="product-description">{product.description}</p>
                <div className="product-footer">
                    <span className="delivery-time">⚡ 10 mins</span>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
