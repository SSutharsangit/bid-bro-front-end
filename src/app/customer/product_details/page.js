"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Navbar from '@/app/widgets/navbar/navbar';
import AuctionModal from '../auction/page'; // Adjust the path as needed
import { useRouter } from 'next/navigation';
import Footer from '@/app/widgets/footer/footer';
import Chatbot from '@/app/widgets/chatbot/page';

function Pages() {
  const router = useRouter();
  

  const [showModal, setShowModal] = useState(false);

  return (
    <div className='h-full w-full' >
      <Navbar />
      <div className='p-20 mt-28 flex'>
      <Chatbot />

        <div className='flex flex-col w-1/3 gap-8 items-center'>
          <div className='text-3xl font-bold'>iPhone</div>
          <div className='flex rounded-3xl shadow-xl '>
            <Image
              src="/images/product_1.webp"
              alt="iPhone"
              width={350}
              height={350}
              className=' p-2.5'
            />
          </div>
        </div>
        <div className='flex flex-col w-2/3 pt-10 gap-5'>
          <div className='flex gap-3 justify-between items-center'>
            <div className='bg-white flex flex-col justify-center items-center p-5 rounded-3xl shadow-xl border' style={{ borderBottom: '6px solid  #8006be' }}>
              <div className='font-bold text-2xl'>Price insights</div>
              <div>Mrp Price</div>
              <div className='font-bold text-xl'>RS.185,000.00</div>
            </div>
            <div className=' p-5 bg-white rounded-3xl shadow-xl border' style={{ borderBottom: '6px solid  #8006be' }}>
              <div className='flex flex-col justify-center items-center'>
                <div className='text-2xl font-bold'>Fast and Free</div>
                <div>Delivery</div>
              </div>
            </div>
            <div className='rounded-3xl shadow-xl'>
              <button onClick={() => setShowModal(true)} className='btn rounded-full border-dark rounded-pill btn-primary'>
                Get Best Price
              </button>

            </div>
          </div>
          <div className='bg-white rounded-3xl flex flex-col m-3 p-5' style={{ borderBottom: '6px solid  #8006be' }}>
            <div className='text-2xl font-bold'>Details</div>
            <div className='flex justify-start gap-2'>
              <div className='font-bold'>Warranty:</div>
              <div>12.Month</div>
            </div>
            <div className='flex justify-start gap-2'>
              <div className='font-bold'>Categery:</div>
              <div>Phone</div>
            </div>
            <div className='gap-10'>
              <hr />
              <div>
                <div className='font-bold'>Description</div>
                <div>It has blue, black colours</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showModal && <AuctionModal showModal={showModal} setShowModal={setShowModal} />}
<Footer />

    </div>
  );
}

export default Pages;



