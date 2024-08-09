// import cards from ../../../components/ProductCards.js:

import React from 'react';

// Sample product data
const products = [
    { id: 1, name: 'Product Name 1', image: '/images/image1.jpg', price: '$100' },
    { id: 2, name: 'Product Name 2', image: '/images/image2.jpg', price: '$120' },
    { id: 3, name: 'Product Name 3', image: '/images/image3.jpg', price: '$90' },
    { id: 4, name: 'Product Name 4', image: '/images/image4.jpg', price: '$110' },
    { id: 5, name: 'Product Name 5', image: '/images/image5.jpg', price: '$130' },
];

const ProductCards = () => {
    return (
        <div className="flex flex-wrap justify-between gap-4 p-4">
            {products.map(product => (
                <div key={product.id} className="bg-white shadow-lg rounded-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/5 overflow-hidden transition-transform transform hover:scale-105">
                    <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                    <div className="p-4">
                        <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
                        <p className="text-blue-600 text-xl">MRP: {product.price}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductCards;
