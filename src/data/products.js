export const categories = [
    { id: 'all', name: 'All' },
    { id: 'vegetables', name: 'Vegetables' },
    { id: 'fruits', name: 'Fruits' },
    { id: 'dairy', name: 'Dairy & Bread' },
    { id: 'snacks', name: 'Snacks' },
];

export const products = [
    // Vegetables
    {
        id: 1,
        name: "Fresh Spinach (Palak)",
        category: "vegetables",
        price: 0.99,
        image: "https://images.unsplash.com/photo-1596541223130-5d31a73fb6c6?w=600&auto=format&fit=crop&q=60",
        description: "Organic fresh spinach leaves, rich in iron."
    },
    {
        id: 2,
        name: "Red Tomatoes",
        category: "vegetables",
        price: 1.49,
        image: "https://images.unsplash.com/photo-1518977676321-ed31c8ad0353?w=600&auto=format&fit=crop&q=60",
        description: "Juicy, ripe red tomatoes perfect for salads."
    },
    {
        id: 3,
        name: "Broccoli",
        category: "vegetables",
        price: 2.29,
        image: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?w=600&auto=format&fit=crop&q=60",
        description: "Fresh green broccoli florets."
    },

    // Fruits
    {
        id: 4,
        name: "Bananas (Robusta)",
        category: "fruits",
        price: 0.69,
        image: "https://images.unsplash.com/photo-1528825871115-3581a5387919?w=600&auto=format&fit=crop&q=60",
        description: "Sweet and high energy bananas."
    },
    {
        id: 5,
        name: "Strawberries",
        category: "fruits",
        price: 3.99,
        image: "https://images.unsplash.com/photo-1529125301389-c45474705574?w=600&auto=format&fit=crop&q=60",
        description: "Hand-picked fresh red strawberries."
    },
    {
        id: 6,
        name: "Green Apples",
        category: "fruits",
        price: 2.49,
        image: "https://images.unsplash.com/photo-1588665042220-379e96f1d2df?w=600&auto=format&fit=crop&q=60",
        description: "Crunchy and sweet green apples."
    },

    // Dairy (Simulating with close matches)
    {
        id: 7,
        name: "Fresh Milk",
        category: "dairy",
        price: 1.20,
        image: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=600&auto=format&fit=crop&q=60",
        description: "Pure cow milk, pasteurized."
    },
    {
        id: 8,
        name: "Whole Wheat Bread",
        category: "dairy",
        price: 1.99,
        image: "https://images.unsplash.com/photo-1555465083-ef3a09800fc4?w=600&auto=format&fit=crop&q=60",
        description: "Freshly baked whole wheat bread."
    },

    // Snacks
    {
        id: 9,
        name: "Potato Chips",
        category: "snacks",
        price: 1.50,
        image: "https://images.unsplash.com/photo-1566478949033-69c06117713e?w=600&auto=format&fit=crop&q=60",
        description: "Classic salted potato crisps."
    },
    {
        id: 10,
        name: "Chocolate Cookies",
        category: "snacks",
        price: 2.99,
        image: "https://images.unsplash.com/photo-1499636138143-bd630f5cf38b?w=600&auto=format&fit=crop&q=60",
        description: "Rich chocolate chip cookies."
    }
];
