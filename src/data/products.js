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
        price: 40,
        image: "https://images.unsplash.com/photo-1683536905403-ea18a3176d29?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=600&auto=format&fit=crop&q=60",
        description: "Organic fresh spinach leaves, rich in iron."
    },
    {
        id: 2,
        name: "Red Tomatoes",
        category: "vegetables",
        price: 60,
        image: "https://images.unsplash.com/photo-1640958904911-65668b264e26?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmVkJTIwdG9tYXRvZXN8ZW58MHx8MHx8fDA%3Dw=600&auto=format&fit=crop&q=60",
        description: "Juicy, ripe red tomatoes perfect for salads."
    },
    {
        id: 3,
        name: "Broccoli",
        category: "vegetables",
        price: 80,
        image: "https://images.unsplash.com/photo-1685504445355-0e7bdf90d415?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnJvY2NvbGl8ZW58MHx8MHx8fDA%3D?w=600&auto=format&fit=crop&q=60",
        description: "Fresh green broccoli florets."
    },

    // Fruits
    {
        id: 4,
        name: "Bananas (Robusta)",
        category: "fruits",
        price: 40,
        image: "https://images.unsplash.com/photo-1528825871115-3581a5387919?w=600&auto=format&fit=crop&q=60",
        description: "Sweet and high energy bananas."
    },
    {
        id: 5,
        name: "Strawberries",
        category: "fruits",
        price: 150,
        image: "https://images.unsplash.com/photo-1587815073078-f636169821e3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHN0cmF3YmVycnl8ZW58MHx8MHx8fDA%3D?w=600&auto=format&fit=crop&q=60",
        description: "Hand-picked fresh red strawberries."
    },
    {
        id: 6,
        name: "Green Apples",
        category: "fruits",
        price: 120,
        image: "https://images.unsplash.com/photo-1577028300036-aa112c18d109?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JlZW4lMjBhcHBsZXN8ZW58MHx8MHx8fDA%3D?w=600&auto=format&fit=crop&q=60",
        description: "Crunchy and sweet green apples."
    },

    // Dairy (Simulating with close matches)
    {
        id: 7,
        name: "Fresh Milk",
        category: "dairy",
        price: 60,
        image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWlsa3xlbnwwfHwwfHx8MA%3D%3D?w=600&auto=format&fit=crop&q=60",
        description: "Pure cow milk, pasteurized."
    },
    {
        id: 8,
        name: "Whole Wheat Bread",
        category: "dairy",
        price: 50,
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2hvbGUlMjB3aGVhdCUyMGJyZWFkfGVufDB8fDB8fHww?w=600&auto=format&fit=crop&q=60",
        description: "Freshly baked whole wheat bread."
    },

    // Snacks
    {
        id: 9,
        name: "Potato Chips",
        category: "snacks",
        price: 30,
        image: "https://images.unsplash.com/photo-1617102738820-bee2545405fd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG90YXRvJTIwY2hpcHN8ZW58MHx8MHx8fDA%3D?w=600&auto=format&fit=crop&q=60",
        description: "Classic salted potato crisps."
    },
    {
        id: 10,
        name: "Chocolate Cookies",
        category: "snacks",
        price: 100,
        image: "https://plus.unsplash.com/premium_photo-1668772704254-c4c4798b0e5d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hvY29sYXRlJTIwY29va2llc3xlbnwwfHwwfHx8MA%3D%3D?w=600&auto=format&fit=crop&q=60",
        description: "Rich chocolate chip cookies."
    }
];
