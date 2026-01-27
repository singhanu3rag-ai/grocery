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
        image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=500&q=80",
        description: "Organic fresh spinach leaves, rich in iron."
    },
    {
        id: 2,
        name: "Red Tomatoes",
        category: "vegetables",
        price: 1.49,
        image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=500&q=80",
        description: "Juicy, ripe red tomatoes perfect for salads."
    },
    {
        id: 3,
        name: "Broccoli",
        category: "vegetables",
        price: 2.29,
        image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=500&q=80",
        description: "Fresh green broccoli florets."
    },

    // Fruits
    {
        id: 4,
        name: "Bananas (Robusta)",
        category: "fruits",
        price: 0.69,
        image: "https://images.unsplash.com/photo-1571771896612-9da8478181e3?auto=format&fit=crop&w=500&q=80",
        description: "Sweet and high energy bananas."
    },
    {
        id: 5,
        name: "Strawberries",
        category: "fruits",
        price: 3.99,
        image: "https://images.unsplash.com/photo-1464965911861-746a04b4b0ae?auto=format&fit=crop&w=500&q=80",
        description: "Hand-picked fresh red strawberries."
    },
    {
        id: 6,
        name: "Green Apples",
        category: "fruits",
        price: 2.49,
        image: "https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?auto=format&fit=crop&w=500&q=80",
        description: "Crunchy and sweet green apples."
    },

    // Dairy (Simulating with close matches)
    {
        id: 7,
        name: "Fresh Milk",
        category: "dairy",
        price: 1.20,
        image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=500&q=80",
        description: "Pure cow milk, pasteurized."
    },
    {
        id: 8,
        name: "Whole Wheat Bread",
        category: "dairy",
        price: 1.99,
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=500&q=80",
        description: "Freshly baked whole wheat bread."
    },

    // Snacks
    {
        id: 9,
        name: "Potato Chips",
        category: "snacks",
        price: 1.50,
        image: "https://images.unsplash.com/photo-1566478949033-69c06117713e?auto=format&fit=crop&w=500&q=80",
        description: "Classic salted potato crisps."
    },
    {
        id: 10,
        name: "Chocolate Cookies",
        category: "snacks",
        price: 2.99,
        image: "https://images.unsplash.com/photo-1499636138143-bd630f5cf38b?auto=format&fit=crop&w=500&q=80",
        description: "Rich chocolate chip cookies."
    }
];
