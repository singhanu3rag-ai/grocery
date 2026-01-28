import React, { useState } from 'react';
import ProductCard from '../ui/ProductCard';
import { products, categories } from '../../data/products';
import { useCart } from '../../context/CartContext';
import './ProductList.css';

const ProductList = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const { addToCart, searchQuery } = useCart();

    const filteredBySearch = products.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // If searching, show all matching results regardless of category
    // If not searching, filter by active category
    const filteredProducts = searchQuery.length > 0
        ? filteredBySearch
        : (activeCategory === 'all' ? products : products.filter(p => p.category === activeCategory));

    return (
        <section className="product-section container" id="shop">
            <h2 className="section-title">Fresh Picks for You</h2>

            {/* Category Filter */}
            <div className="category-tabs">
                {categories.map(cat => (
                    <button
                        key={cat.id}
                        className={`category-pill ${activeCategory === cat.id ? 'active' : ''}`}
                        onClick={() => setActiveCategory(cat.id)}
                    >
                        {cat.name}
                    </button>
                ))}
            </div>

            {/* Product Grid */}
            <div className="product-grid">
                {filteredProducts.map(product => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        onAdd={addToCart}
                    />
                ))}
            </div>
        </section>
    );
};

export default ProductList;
