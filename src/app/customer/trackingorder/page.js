"use client";
import Image from 'next/image';
import AuctionModal from '../auction/page'; // Adjust the path as needed
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for react-toastify
import Footer from '@/app/widgets/footer/footer';
import Navbar from "@/app/widgets/navbar/navbar";
import Chatbot from '@/app/widgets/chatbot/page';
function Pages() {
    const router = useRouter();
    const [showModal, setShowModal] = useState(false);

    const handleButtonClick = () => {
        setShowModal(false);
        toast.success('Thank You For Your Confirmation, Enjoy your Day'); // Displays a success message
    };

    return (
        <div className='h-full w-full'>
            <ToastContainer /> {/* Ensure this is included */}
            <Navbar />
            <div className='p-24 flex flex-col md:flex-row'>
      <Chatbot />

                {/* Product Details */}
                <div className='flex flex-col w-full md:w-1/3 gap-8 items-center'>
                    <div className='text-3xl font-bold'>iPhone</div>
                    <Image
                        src="/images/iphone.jpg"
                        alt="iPhone"
                        width={250}
                        height={250}
                        className='bg-purple-50 rounded-3xl p-2.5'
                    />
                </div>

                {/* Bidding Details */}
                <div className='flex flex-col w-full md:w-2/3 pt-10'>
                    <div className='bg-white p-5 rounded-3xl shadow mb-4' style={{ borderBottom: '6px solid #8006be' }}>
                        <div className='text-2xl font-bold mb-5'>Your Order Tracking</div>
                        <div className='flex flex-col'>
                            <div className="flex justify-around">
                                <input type="radio" id="order" name="fav_language" value="order" defaultChecked />
                                <input type="radio" id="process" name="fav_language" value="process" />
                                <input type="radio" id="out" name="fav_language" value="out" />
                                <input type="radio" id="deliver" name="fav_language" value="deliver" />
                            </div>
                            <div className="flex justify-around mt-2">
                                <span className="checkmark">&#10003;</span>
                                <span className="checkmark">&#10003;</span>
                                <span className="checkmark">&#10003;</span>
                                <span className="checkmark">&#10003;</span>
                            </div>
                            <div className="flex justify-around mt-2">
                                <span className='text-2l font-bold'>Order Done</span>
                                <span className='text-2l font-bold'>Processing</span>
                                <span className='text-2l font-bold'>On Delivery</span>
                                <span className='text-2l font-bold'>Delivered</span>
                            </div>
                        </div>
                    </div>

                    {/* Seller Bidding List */}
                    <div className='bg-white p-5 rounded-3xl shadow' style={{ borderBottom: '6px solid #8006be' }}>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                            {/* Seller Cards */}
                            {[
                                { seller: 'Starlin - #980156', price: '179500.00', save: '6,000', delivery: '500' },
                            ].map((item, index) => (
                                <div key={index} className='bg-light p-4 rounded-3xl shadow'>
                                    <div className='font-bold text-lg mb-2'>{item.seller}</div>
                                    <div className='flex justify-between mt-2'>
                                        <div>Method for Get</div>
                                        <div className='font-bold'>Delivery</div>
                                    </div>
                                    <div className='flex justify-between mt-2'>
                                        <div>Payment</div>
                                        <div className='font-bold'>Cash-On-Delivery</div>
                                    </div>
                                    <div className='flex justify-between mt-2'>
                                        <div>Unit </div>
                                        <div className='font-bold'>1</div>
                                    </div>
                                    <div className='flex justify-between mt-2'>
                                        <div>Total amount</div>
                                        <div className='font-bold'>{item.price}</div>
                                    </div>
                                    <button onClick={handleButtonClick} className='btn p-2 rounded-full border-dark rounded-pill btn-primary'>
                                        Confirm Received
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
<Footer />

        </div>
    );
}

export default Pages;
