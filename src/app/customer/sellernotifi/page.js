"use client";import React, { useState, useEffect } from 'react';
import NotificationBar from '../../widgets/notificationbar/page';
import Footer from '@/app/widgets/footer/footer';
import Navbar from '@/app/widgets/navbar/navbar';
import Image  from 'next/image';



const SellerNotificationPage = () => {
  const [notifications, setNotifications] = useState([]);
  const [selectedNotification, setSelectedNotification] = useState(null);
  const [expectation, setExpectation] = useState('');

  useEffect(() => {
    // Use sample notifications for now
    const fetchNotifications = async () => {
      // Replace this with real API call when available
      const sampleNotifications = [
        {
          id: '1',
          productImage: '/images/mac.jpg',
          productName: 'Apple MacBook Pro',
          productModel: 'MBP2024',
          productCategory: 'Laptops',
          productPrice: 250000,
          productDescription: 'Latest model of Apple MacBook Pro with M1 chip.',
          expectedPrice: 240000,
        },
        {
          id: '2',
          productImage: '/images/airpot.png',
          productName: 'Apple AirPods Pro',
          productModel: 'APP2024',
          productCategory: 'Headphones',
          productPrice: 35000,
          productDescription: 'Wireless noise-cancelling earbuds with high-quality sound.',
          expectedPrice: 32000,
        },
        {
          id: '3',
          productImage: '/images/iphone.jpg',
          productName: 'Apple iPhone 14 Pro',
          productModel: 'IP14P',
          productCategory: 'Smartphones',
          productPrice: 150000,
          productDescription: 'Latest iPhone with advanced camera features and performance.',
          expectedPrice: 140000,
        },
      ];
      setNotifications(sampleNotifications);
    };

    fetchNotifications();
  }, []);

  const handleViewMore = (notification) => {
    setSelectedNotification(notification);
  };

  const handleSubmitBid = async (accept) => {
    try {
      const res = await fetch(`http://localhost:5000/api/notifications/${selectedNotification.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          accepted: accept,
          expectation,
        }),
      });

      if (!res.ok) {
        throw new Error('Failed to update notification');
      }

      setSelectedNotification(null);
      setExpectation('');
      const updatedNotifications = await res.json();
      setNotifications(updatedNotifications);
    } catch (error) {
      console.error('Error updating notification:', error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className=" min-h-screen flex  items-center">
      
      <div className="w-full max-w-6xl px-4 mt-8">
        <NotificationBar notifications={notifications} onViewMore={handleViewMore} />
      </div>
      {selectedNotification && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl relative">
            <h2 className="text-2xl font-bold mb-4">Notification Details</h2>
            <img
              src={selectedNotification.productImage}
              alt={selectedNotification.productName}
              className="w-full h-auto rounded-lg mb-4"
            />
            <p><strong>Model:</strong> {selectedNotification.productModel}</p>
            <p><strong>Category:</strong> {selectedNotification.productCategory}</p>
            <p><strong>MRP:</strong> LKR {selectedNotification.productPrice}</p>
            <p><strong>Description:</strong> {selectedNotification.productDescription}</p>
            <p><strong>Expected Price:</strong> LKR {selectedNotification.expectedPrice}</p>
            <label htmlFor="expectation" className="block mt-4 mb-2">Expectation:</label>
            <input
              type="text"
              id="expectation"
              value={expectation}
              onChange={(e) => setExpectation(e.target.value)}
              placeholder="Enter your expected price"
              className="px-4 py-2 border rounded-lg w-full"
            />
            <div className="mt-4 flex justify-end gap-4">
              <button
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                onClick={() => handleSubmitBid(true)}
              >
                Accept
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                onClick={() => handleSubmitBid(false)}
              >
                Reject
              </button>
            </div>
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={() => setSelectedNotification(null)}
            >
              &times;
            </button>
          </div>
        </div>
      )}
      
    </div>
    <Footer />
    </div>
    
  );
};

export default SellerNotificationPage;
