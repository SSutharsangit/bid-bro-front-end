// project-root/pages/address/page.js

"use client";
import React from 'react';
import Navbar from '../../widgets/navbar/navbar'; // Adjusted path to navbar component
import Footer from '@/app/widgets/footer/footer';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Chatbot from '@/app/widgets/chatbot/page';



function Pages() {
    const router = useRouter();
    

    return (
        <div className='h-full w-full' >
            <Navbar />
            <div className='p-10 flex flex-col md:flex-row'>
        <Chatbot />

                <div className='flex mt-10 mb-12 flex-col w-full  pt-10'>
                    <div className='text-3xl font-bold'>Your Details</div>
                    <br />
                    <div className='grid grid-cols-1  gap-4'>
                        <div className="  via-white  p-5 bg-white rounded-3xl shadow-xl" style={{ borderBottom: '6px solid  #8006be' }}>
                            <div className='flex justify-start gap-2'>
                                <div className='font-bold'>Name :</div>
                                <div> Jacky</div>
                            </div>
                            <div className='flex justify-start gap-2'>
                                <div className='font-bold'>email :</div>
                                <div>broo1998@gmail.com</div>
                            </div>
                            <div className='flex justify-start gap-2'>
                                <div className='font-bold'>Mobile Num :</div>
                                <div>+94123456789</div>
                            </div>
                            <div className='flex justify-start gap-2'>
                                <div className='font-bold'>Address :</div>
                                <div>48A , passera road, Badulla</div>
                            </div>
                            <div className='flex justify-start gap-2'>
                                <div className='font-bold'>City :</div>
                                <div>Badulla</div>
                            </div>
                            <div className='flex justify-start gap-2'>
                                <div className='font-bold'>Zip Code :</div>
                                <div>20000</div>
                            </div>
                            <br />
                            <button className='btn rounded-full border-dark rounded-pill btn-primary' onClick={() => router.push("/customer/editprofile")}>
                                Edit Profile
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
