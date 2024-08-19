"use client"
import React, { useEffect, useState } from 'react';
import Navbar from '@/app/widgets/navbar/navbar';
import Footer from '@/app/widgets/footer/footer';
import { useParams, useRouter } from 'next/navigation';
import Chatbot from '@/app/widgets/chatbot/page';
import { GetAuctionDetails } from '../../../../redux/action/bidding_details';


function Pages() {
    const router = useRouter();
    const [auction, setAuction] = useState([]);
    useEffect(() => {
        GetAuctionDetails((response) => {
            if (response.status === 200) {
                setAuction(response.data);
            } else {
                console.error("Failed to fetch seller bids", response);
            }
        });
    }, []);

    return (
        <div className='h-full w-full' >
            <Navbar />
            <div className='p-28 flex'>
                <Chatbot />
                <div className='flex flex-col  gap-8 items-center'>
                    <div className='text-3xl font-bold'>Notifications</div>
                </div>
                <div className='flex flex-col  pt-20 gap-5'>
                    <div className=' rounded-3xl flex m-1 p-2'>
                        {auction.map((auct, index) => (
                            <div key={index} className=" p-5 flex flex-col items-center justify-center bg-white rounded-3xl shadow-xl" style={{ borderBottom: '6px solid  #8006be' }}>
                                <div className='text-2xl font-bold'>{auct.productName} </div>
                                <div className='flex justify-start gap-2'>
                                    <div className='font-bold'>Expected Price :</div>
                                    <div>{auct.expectedPrice}</div>
                                </div>
                                <button className='btn p-2  btn-primary' onClick={() => router.push("/customer/bidding_details")}>
                                    Show bids
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Pages;