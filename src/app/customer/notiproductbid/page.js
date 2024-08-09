"use client"
import React from 'react';
// import /Image from 'next/image';
import Navbar from '@/app/widgets/navbar/navbar';
import Footer from '@/app/widgets/footer/footer';
import { useRouter } from 'next/navigation';
import Chatbot from '@/app/widgets/chatbot/page';


function Pages() {
    const router = useRouter();


    return (

        <div className='h-full w-full' >
            <Navbar />
            <div className='p-28 flex'>
        <Chatbot />

                <div className='flex flex-col  gap-8 items-center'>
                    <div className='text-3xl font-bold'>Notifications</div>
                </div>
                <div className='flex flex-col  pt-20 gap-5'>
                    <div className=' rounded-3xl flex flex-col m-1 p-2'>
                        <div className='text-2xl font-bold'>iphone 12</div>
                        <br />

                        <div className="b p-5 bg-white rounded-3xl shadow-xl" style={{ borderBottom: '6px solid  #8006be' }}>
                            <div className='flex justify-start gap-2'>
                                <div className='font-bold'>Expected Price :</div>
                                <div>180000</div>
                            </div>
                            <div className='flex justify-start gap-2'>
                                <div className='font-bold'>Per / MRP :</div>
                                <div>185000</div>
                            </div>
                            <button className='btn rounded-full border-dark rounded-pill btn-primary' onClick={() => router.push("/customer/bidding_details")}>
                            Show Bids
                        </button>
                        </div>
                    </div>
                    <div className=' rounded-3xl flex flex-col m-1 p-2'>
                        <div className='text-2xl font-bold'>iphone 14 pro</div>
                        <br />
                        <div className=" p-5 bg-white rounded-3xl shadow-xl" style={{ borderBottom: '6px solid  #8006be' }}>
                            <div className='flex justify-start gap-2'>
                                <div className='font-bold'>Expected Price :</div>
                                <div>220000</div>
                            </div>
                            <div className='flex justify-start gap-2'>
                                <div className='font-bold'>Per / MRP :</div>
                                <div>240000</div>
                            </div>
                            <button className='btn  btn-primary' onClick={() => router.push("/customer/bidding_details")}>
                            Show bids
                        </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />

        </div>
    );
}

export default Pages;



