"use client";
import React, { useState } from 'react';
import Chatbot from '@/app/widgets/chatbot/page';
import Navbar from '../../widgets/navbar/navbar';
import Footer from '@/app/widgets/footer/footer';
import { AddRatingFormMethod } from '../../../../redux/action/ratingform';


const RatingForm = () => {
    
    const [rating, setRating] = useState(0);
    const [formData, setFormData] = useState({
        name: '',
        description: '',
    });
    const [successMessage, setSuccessMessage] = useState('');

    const handleRatingClick = (value) => {
        setRating(value);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const reviewData = {
            rating,
            ...formData,
        };

        try {
            const res = await fetch('/api/ratingform', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(reviewData),
            });
            const data = await res.json();

            if (data.success) {
                setSuccessMessage('Thank you for your review!');
            } else {
                setSuccessMessage('Failed to submit review');
            }
        } catch (error) {
            setSuccessMessage('Error: ' + error.message);
        }
    };

    return (
        <div className='h-full w-full' >
            <Navbar />
            <div className='flex flex-col  pt-10 gap-5'>
                <Chatbot />
                <div className=' rounded-3xl gap-5 flex flex-col m-3 p-5'>
                    <div className='text-3xl  font-bold '>Please leave your review and ratting</div>
                    <div className=" p-24 bg-white  rounded-3xl shadow-xl" style={{ borderBottom: '6px solid  #8006be' }}>
                        <div className="p-8">
                            <h1 className="text-2xl font-bold">Rate</h1>
                            <div className="flex space-x-2 my-4">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <button key={star} onClick={() => handleRatingClick(star)}>
                                        <span className={star <= rating ? 'text-yellow-500' : 'text-gray-400'}>★</span>
                                    </button>
                                ))}
                            </div>
                            {successMessage && <p className="text-green-500">{successMessage}</p>}
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="w-full p-2 border rounded"
                                />
                                <textarea
                                    name="description"
                                    placeholder="Description"
                                    value={formData.description}
                                    onChange={handleInputChange}
                                    className="w-full p-2 border rounded"
                                />
                                <button type="submit" className=" btn btn-primary p-2 text-white rounded">
                                    Submit Review
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default RatingForm;
