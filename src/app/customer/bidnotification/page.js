"use client"
import React, { useEffect, useState } from 'react';
import Navbar from '@/app/widgets/navbar/navbar';
import Footer from '@/app/widgets/footer/footer';
import { useRouter } from 'next/navigation';
import Chatbot from '@/app/widgets/chatbot/page';
// import { GetAuctionDetails } from '../../../../redux/action/bidding_details'; // Assuming this is your API call function

function Pages() {
    const router = useRouter();
    const [auctions, setAuctions] = useState([]);


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
                            <button className='btn p-2  btn-primary' onClick={() => router.push("/customer/bidding_details")}>
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

// "use client"
// import React, { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';
// import Navbar from '@/app/widgets/navbar/navbar';
// import Footer from '@/app/widgets/footer/footer';
// import Chatbot from '@/app/widgets/chatbot/page';
// import { GetAuctionDetails } from '../../../../redux/action/bidding_details'; // Assuming this is your API call function

// function Pages() {
//     const router = useRouter();
//     const [auctions, setAuctions] = useState([]);

//     useEffect(() => {
//         GetAuctionDetails((response) => {
//             if (response.status === 200) {
//                 setAuctions(response.data); // Assuming response.data is an array of auction objects
//             } else {
//                 console.error("Failed to fetch auction details", response);
//             }
//         });
//     }, []);

//     return (
//         <div className='h-full w-full'>
//             <Navbar />
//             <div className='p-28 flex'>
//                 <Chatbot />
//                 <div className='flex flex-col gap-8 items-center'>
//                     <div className='text-3xl font-bold'>Notifications</div>
//                 </div>
//                 <div className='flex flex-col pt-20 gap-5'>
//                     {auctions.map((auction, index) => (
//                         <div key={index} className='rounded-3xl flex flex-col m-1 p-2'>
//                             <div className='text-2xl font-bold'>{auction.productName}</div>
//                             <br />
//                             <div className="p-5 bg-white rounded-3xl shadow-xl" style={{ borderBottom: '6px solid #8006be' }}>
//                                 <div className='flex justify-start gap-2'>
//                                     <div className='font-bold'>Expected Price:</div>
//                                     <div>{auction.expectedPrice}</div>
//                                 </div>
//                                 <div className='flex justify-start gap-2'>
//                                     <div className='font-bold'>Per / MRP:</div>
//                                     <div>{auction.mrp}</div>
//                                 </div>
//                                 <button className='btn p-2 rounded-full border-dark rounded-pill btn-primary' onClick={() => router.push("/customer/bidding_details")}>
//                                     Show Bids
//                                 </button>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//             <Footer />
//         </div>
//     );
// }

// export default Pages;


