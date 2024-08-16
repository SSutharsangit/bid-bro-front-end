"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Navbar from '@/app/widgets/navbar/navbar';
import Review from '../../widgets/review/review';
import Footer from '@/app/widgets/footer/footer';
import Chatbot from '@/app/widgets/chatbot/page';
import { GetSellerbids } from '../../../../redux/action/bidding_details';
import { useRouter } from 'next/navigation';

function Pages() {

  const [sellerBids, setSellerBids] = useState({});
  const router = useRouter();

  // useEffect(() => {
  //   GetSellerbids((response) => {
  //     if (response.status === 200) {
  //       setSellerBids(response.data); // Assuming response.data is an array of seller bids
  //     } else {
  //       console.error("Failed to fetch seller bids", response);
  //     }
  //   });
  // }, []);

  useEffect(() => {
    GetSellerbids((response) => {
      if (response.status === 200) {
        const sellerBids = response.data;
        if (sellerBids.length > 0) {
          setSellerBids(sellerBids[sellerBids.length - 1]); // Get the latest auction
        }
      } else {
        console.error("Failed to fetch seller bids", response);
      }
    });
  }, []);

  return (
    <div className=''>
      <Navbar />
      <div className='p-2' style={{ position: '' }} >
        <Chatbot />
        <div className='font-bold fs-2 text-3xl ml-12 mt-3 ms-3'>iPhone 12</div>

        <div className=' row p-8'>

          <div className='flex'>
            <div className='w-5/12 flex flex-col gap-5 m-2'>
              <div className='col-5'>
                <Image
                  src="/images/2.png"
                  alt="Profile Photo"
                  width={250}
                  height={160}
                />
              </div>
              <div className='grid grid-cols-1  gap-6'>
                {/* {sellerBids.map((bid, index) => ( */}
                  <div className='bg-light p-4 rounded-3xl shadow'>
                    <div className='font-bold text-lg mb-2'>Price Details</div>
                    <div className='flex justify-between mt-2'>

                      <div>Bid Price :</div>
                      <div className='font-bold'>{sellerBids.bidprice}</div>
                    </div>
                    <div className='flex justify-between mt-2'>
                      <div>Delivery Charge :</div>
                      <div className='font-bold'> {sellerBids.deliveryCharge}</div>
                    </div>
                    <div className='flex justify-between mt-2'>
                      <div>Warranty Months :</div>
                      <div className='font-bold'> {sellerBids.warrantymonths}</div>
                    </div>
                    <div className='flex justify-between mt-2'>
                      <div>Total Amount :</div>
                      <div className='font-bold'>{sellerBids.total}</div>
                    </div>
                    <div className='flex justify-between mt-2'>
                      <div>Special note :</div>
                      <div className='font-bold'>{sellerBids.specialnote}</div>
                    </div>
                    <button className='btn p-2 rounded-full border-dark rounded-pill btn-primary'>
                      Accept Bid
                    </button>
                  </div>
                {/* ))} */}
              </div>
              <div>
              </div>
            </div>
            <div className='w-7/12 p-5'>
              <Review />
              <Review />
            </div>
          </div>
        </div>
        <div className='flex justify-between items-center   border border-dark' style={{ borderRadius: '25px', }}>
          <div className=' ' style={{
            width: '200px',
            borderRadius: '25px',
            margin: '8px',
            height: '100px',
            border: '3px solid #fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around'
          }}>
            <div className='flex space-x-4' style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              border: '3px solid #fff',
              overflow: 'hidden',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              80%
            </div>
            <div className='h-10 w-10'>Customers Rating</div>
          </div>
          <div className=' ' style={{
            width: '300px',
            borderRadius: '25px',
            height: '100px',
            border: '3px solid #fff',
            display: 'flex',
            margin: '8px',

            alignItems: 'center',
            justifyContent: 'space-evenly'
          }}>
            <div>
              <div className='flex space-x-4' style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                border: '3px solid #fff',
                overflow: 'hidden',
              }}>
                <Image
                  src="/images/1.jpg"
                  alt="Profile Photo"
                  width={80}
                  height={80}
                />
              </div>
            </div>
            <div>
              <div>{sellerBids.sellerName}</div>
              <div>{sellerBids.city}</div>
            </div>

          </div>
          <div className=' ' style={{
            width: '200px',
            borderRadius: '25px',
            height: '100px',
            border: '3px solid #fff',
            margin: '8px',

            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-evenly'
          }}>
            <div>
              <div className='flex space-x-4' style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                border: '3px solid #fff',
                overflow: 'hidden',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                88%
              </div>
            </div>
            <div>
              <div>Sucessfull Complete Orders</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />

    </div>
  )
}

export default Pages;