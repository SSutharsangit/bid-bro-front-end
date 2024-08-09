"use client";
import { useEffect, useState } from 'react';
// import { getCategories, getBrands, getTrendingProducts } from './api';
import Navbar from '../../widgets/navbar/navbar';
import Footer from '@/app/widgets/footer/footer';
import Carousel from "@/app/widgets/carosel/carousel";
import Chatbot from '@/app/widgets/chatbot/page';

export default function Home() {
  const [categories, setCategories] = useState([
    { name: 'Smartphone', image: '/images/iphone.jpg' },
    { name: 'Audio Devices', image: '/images/audio devices.jpg' },
    { name: 'Laptops', image: '/images/laptops.jpg' },
    { name: 'Tabs', image: '/images/iphone.jpg' },
    { name: 'Wearable Devices', image: '/images/iphone.jpg' }
  ]);

  const [brands, setBrands] = useState([
    { name: 'Apple', image: '/images/apple.jpg' },
    { name: 'Samsung', image: '/images/samsung.webp' },
    { name: 'Sony', image: '/images/sony.jpg' },
    { name: 'Sony', image: '/images/sony.jpg' },
    { name: 'Sony', image: '/images/sony.jpg' }
  ]);

  const [trendingProducts, setTrendingProducts] = useState([
    { name: 'Product 1', image: '/images/iphone15.webp' },
    { name: 'Product 2', image: '/images/samsungs24.webp' },
    { name: 'Product 3', image: '/images/sony1vi.webp' },
    { name: 'Product 3', image: '/images/sony1vi.webp' },
    { name: 'Product 3', image: '/images/sony1vi.webp' }
  ]);

  useEffect(() => {
    async function fetchData() {
      try {
        setCategories(await getCategories());
        setBrands(await getBrands());
        setTrendingProducts(await getTrendingProducts());
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    // fetchData();
  }, []);


  const renderSection = (title, items, itemClass, scroll = false, imageClass = "rounded") => (
    <section className="my-5">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className={`flex gap-6 ${scroll ? 'overflow-x-auto' : 'flex-wrap'}`}>
        {items.map((item, index) => (
          <div key={index} className="text-center">
            <div className={`${itemClass} w-52`}>
              <img className={`w-full h-48 object-cover ${imageClass}`} src={item.image} alt={item.name} />
              <h4 className="mt-2 text-lg font-semibold">{item.name}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );

  return (
    <div className='h-full w-full' >
      <Navbar />
      <div className=" flex flex-col justify-center container mx-auto p-4">
      <Chatbot />

        <h2 className="text-2xl font-bold mb-4 text-center">Our Portfolio</h2>
        <div className=' justify-center items-center '>
          <Carousel images={['/images/portfolio1.webp', '/images/portfolio2.jpg', '/images/portfolio1.webp']} />

          {renderSection('Explore Categories', categories, 'category-item', true, 'rounded-full')}
          {renderSection('Brands', brands, 'brand-item')}
          {renderSection('Trending Products', trendingProducts, 'product-item')}
        </div>
      </div>
      <Footer />
    </div>
  );
}
