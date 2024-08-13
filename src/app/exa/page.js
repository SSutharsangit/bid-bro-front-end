"use client";
import Navbar from '../../app/widgets/navbar/navbar';
import Footer from '@/app/widgets/footer/footer';
import Image from 'next/image';
import Chatbot from '../widgets/chatbot/page';
import Carousel from "@/app/widgets/carosel/carousel";



function HomePage() {
    const iteams = [
        { id: 1, name: "Bottles", offer: "Upto 70% Off", image: "/images/2.png" },
        { id: 2, name: "Lighting Essentials", offer: "From ₹79", image: "/images/3.png" },
        { id: 3, name: "Curtains", offer: "From ₹299", image: "/images/fridge.jpg" },
        { id: 4, name: "Lunch Boxes", offer: "From ₹149", image: "/images/icon.png" },
        { id: 5, name: "Mosquito Nets", offer: "Under ₹499", image: "/images/graph.png" },
        { id: 6, name: "Gas Stoves", offer: "From ₹999", image: "/images/airpot.png" },
        { id: 7, name: "Bedsheets", offer: "From ₹299", image: "/images/bot.png" },
    ];
    const products = [
        {
            title: "Women's  Gummies",
            description: "Women's Needs",
            price: "$24.00",
            image: "/images/samsungs24.webp", // Replace with actual image path
        },
        {
            title: "Every Man's ",
            description: "Energy & Immune Support",
            price: "$20.00",
            image: "/images/product_1.webp", // Replace with actual image path
        },
        {
            title: "Women's  Gummies",
            description: "Women's Needs",
            price: "$24.00",
            image: "/images/samsungs24.webp", // Replace with actual image path
        },
        {
            title: "Every Man's ",
            description: "Energy & Immune Support",
            price: "$20.00",
            image: "/images/product_1.webp", // Replace with actual image path
        },
        // ... other products
    ];

    return (
        <div className=''>
            <Navbar />
            <Chatbot />
            <div className="container mx-auto">
            <div className="container mx-auto py-8">
                <h2 className="text-2xl font-bold mb-4">advertisement</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                    {iteams.map((product) => (
                        <div key={product.id} className="bg-white rounded-lg shadow-lg p-4">
                            <Image src={product.image} alt={product.name} width={200} height={200} className="mx-auto" />
                            <h3 className="text-lg font-bold mt-2 text-center">{product.name}</h3>
                            <p className="text-sm text-gray-500 text-center">{product.offer}</p>
                        </div>
                    ))}
                </div>
            </div>
                <h1 className="text-3xl font-bold mb-10 mt-8">Mobile Phones</h1>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {products.map((product) => (
                        <div key={product.title} className="border p-4">
                            <Image src={product.image} alt={product.title} width={200} height={200} />
                            <h2 className="text-xl font-bold">{product.title}</h2>
                            <p>{product.description}</p>
                            <p className="text-red-500 font-bold">{product.price}</p>
                            <button className=" btn btn-primary text-white font-bold py-2 px-4 rounded">
                                Add to Cart
                            </button>

                        </div>
                    ))}
                </div>
                <h1 className="text-3xl font-bold mb-10 mt-8">Laptops</h1>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {products.map((product) => (
                        <div key={product.title} className="border p-4">
                            <Image src={product.image} alt={product.title} width={200} height={200} />
                            <h2 className="text-xl font-bold">{product.title}</h2>
                            <p>{product.description}</p>
                            <p className="text-red-500 font-bold">{product.price}</p>
                            <button className=" btn btn-primary text-white font-bold py-2 px-4 rounded">
                                Add to Cart
                            </button>

                        </div>
                    ))}
                </div>
                <h1 className="text-3xl font-bold mb-10 mt-8">Taps</h1>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {products.map((product) => (
                        <div key={product.title} className="border p-4">
                            <Image src={product.image} alt={product.title} width={200} height={200} />
                            <h2 className="text-xl font-bold">{product.title}</h2>
                            <p>{product.description}</p>
                            <p className="text-red-500 font-bold">{product.price}</p>
                            <button className=" btn btn-primary text-white font-bold py-2 px-4 rounded">
                                Add to Cart
                            </button>

                        </div>
                    ))}
                </div>
            </div>
            
            <Footer />
        </div>


    );
}

export default HomePage;



