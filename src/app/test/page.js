"use client";

import React, { useState, useEffect } from "react";

const Page = () => {
  const [payment, setPayment] = useState({
    sandbox: true, // if the account is sandbox or real
    merchant_id: '1227920', // Replace with your Merchant ID
    return_url: 'http://sample.com/return',
    cancel_url: 'http://sample.com/cancel',
    notify_url: 'http://sample.com/notify',
    order_id: 123,
    items: "AAsath",
    amount: 100, 
    currency: 'LKR',
    first_name: 'Saman',
    last_name: 'Perera',
    email: 'samanp@gmail.com',
    phone: '0771234567',
    address: 'No.1, Galle Road',
    city: 'Colombo',
    country: 'Sri Lanka',
    delivery_address: 'No. 46, Galle road, Kalutara South', // optional field
    delivery_city: 'Kalutara', // optional field
    delivery_country: 'Sri Lanka', // optional field
    custom_1: '', // optional field
    custom_2: '', // optional field
    hash:'MjI5NzkwMjgxODE1NTY5OTAyNjQ1MjA0OTI2OTUzMjk4OTIzNjEx'
    
  });

  useEffect(() => {
    if (typeof window !== 'undefined' && window.payhere) {
      // Called when user completed the payment. It can be a successful payment or failure
      window.payhere.onCompleted = function (orderId) {
        console.log("Payment completed. OrderID:" + orderId);
        // Note: validate the payment and show success or failure page to the customer
      };

      // Called when user closes the payment without completing
      window.payhere.onDismissed = function () {
        console.log("Payment dismissed");
      };

      // Called when error happens when initializing payment such as invalid parameters
      window.payhere.onError = function (error) {
        console.log("Error:" + error);
      };
    }
  }, []);

  const pay = () => {
    if (window.payhere) {
      window.payhere.startPayment(payment);
    } else {
      console.error("PayHere SDK not loaded");
    }
  };

  return <button onClick={pay}>Pay with Payhere</button>;
};

export default Page;
