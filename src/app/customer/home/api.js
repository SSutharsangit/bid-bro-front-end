"use server"
export async function getCategories() {
    const response = await fetch('http://localhost:5000/api/categories');
    if (!response.ok) {
        throw new Error('Failed to fetch categories');
    }
    return response.json();
}

export async function getBrands() {
    const response = await fetch('http://localhost:5000/api/brands');
    if (!response.ok) {
        throw new Error('Failed to fetch brands');
    }
    return response.json();
}

export async function getTrendingProducts() {
    const response = await fetch('http://localhost:5000/api/trendingProducts');
    if (!response.ok) {
        throw new Error('Failed to fetch trending products');
    }
    return response.json();
}