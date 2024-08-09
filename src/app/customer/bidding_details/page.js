"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { GetAuctionDetails } from '../../../../redux/action/bidnotification';
import { useRouter } from 'next/navigation';
import Footer from '@/app/widgets/footer/footer';
import Navbar from '@/app/widgets/navbar/navbar';
import Chatbot from '@/app/widgets/chatbot/page';

function Pages() {
  const router=useRouter();

  const [auction, setAuction] = useState({});

  useEffect(() => {
    GetAuctionDetails((response) => {
      if (response.status === 200) {
        const auctions = response.data; // Assuming response.data is an array of auctions
        if (auctions.length > 0) {
          const lastAuction = auctions[auctions.length - 1];
          setAuction(lastAuction);
        }
      } else {
        console.error("Failed to fetch auction details", response);
      }
    });
  }, []);

  return (
    <div className='h-full w-full' >
      <Navbar />
      <div className='p-24 flex flex-col md:flex-row'>
      <Chatbot />

        {/* Product Details */}
        <div className='flex flex-col w-full md:w-1/3 gap-8 items-center'>
          <div className='text-3xl font-bold'>{auction.productName}</div>
          <Image
            src="/images/iphone.jpg" // Replace with dynamic image if available
            alt={auction.productName}
            width={250}
            height={250}
            className=' rounded-3xl p-2.5'
          />
        </div>
        <div className='flex flex-col w-full md:w-2/3 pt-10'>
          <div className=' rounded-3xl flex flex-col m-3 p-5'>
            <div className='grid grid-cols-1 md:grid-cols-2 bg-white p-5 rounded-3xl lg:grid-cols-3 gap-6'style={{ borderBottom: '6px solid  #8006be' }}>
              <div className='flex justify-start gap-2'>
                <div className='font-bold'>No of Units:-</div>
                <div>{auction.noOfUnits}</div>
              </div>
              <div className='flex justify-start gap-2'>
                <div className='font-bold'>Expected Price:-</div>
                <div>{auction.startingPrice}</div>
              </div>
              <div className='flex justify-start gap-2'>
                <div className='font-bold'>Description:-</div>
                <div>{auction.description}</div>
              </div>
            </div>
          </div>
          <div className='bg-white p-5 rounded-3xl shadow'style={{ borderBottom: '6px solid  #8006be' }}>
            <div className='flex justify-between items-center mb-4'>
              <div>
                <div className='text-2xl font-bold'>SELLER BIDDING LIST</div>
                <div className='text-primary'>Sellers with 4+ ratings are 80% more likely to win a bid.</div>
              </div>
              <button type="button" className="btn btn-primary rounded-3xl">Cancel</button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {/* Seller Cards */}
              {[
                { seller: 'Seller 1', price: '179,000', save: '6,000', mrp: '185,000.00' }
              ].map((item, index) => (
                <div key={index} className='bg-light p-4 rounded-3xl shadow'style={{ borderBottom: '6px solid  #8006be' }}>
                  <div className='font-bold text-lg mb-2'>{item.seller}</div>
                  <div className='font-bold text-lg'>Rs.{item.price}</div>
                  <div className='flex justify-content-between mt-2'>
                    <div>MRP</div>
                    <div>Rs.{item.mrp}</div>
                  </div>
                  <div className='flex justify-content-between mt-2'>
                    <div>You save</div>
                    <div>Rs.{item.save}</div>
                  </div>
                  {/* <a href="http://localhost:3001/place_order" className="btn btn-primary rounded-3xl w-full mt-3">Accept</a> */}
                  <button className='btn btn-primary' onClick={()=>router.push("/customer/place_order")}>Accept</button>
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
