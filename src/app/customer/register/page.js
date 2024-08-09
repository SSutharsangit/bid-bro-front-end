"use client";
import React, { useState } from "react";
import Image from 'next/image';
import Link from 'next/link';
import Startnav from "@/app/widgets/startnav/page";
import Startfooter from "@/app/widgets/startfooter/page";

export default function Checkout() {
  const [details, setdetails] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    country: "Sri Lanka",
    zip: "",
    password: "",
    confirmPassword: "",
  });

  const [item, setItem] = useState({
    id: 1,
    order_id: "OrderNo12345",
    name: "iPhone 15 265GB",
    price: 25656.00,
    image: "/images/iphone15.webp",
    description: "The latest iPhone model with 265GB storage.",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setdetails((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const { phone, password, confirmPassword } = details;

    if (Object.values(details).some((x) => x === "")) {
      alert("Please fill in all the fields.");
      return false;
    }
    if (!/^\d{11}$/.test(phone)) {
      alert("Please enter a valid 9-digit phone number with +94.");
      return false;
    }
    if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)
    ) {
      alert(
        "Password must be at least 8 characters long and include uppercase, lowercase letters, numbers, and symbols."
      );
      return false;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const encryptedPhone = `+94${details.phone}`;
      console.log("Billing Details:", { ...details, phone: encryptedPhone });
      startPayment({ ...details, phone: encryptedPhone });
    }
  };

  async function startPayment(paymentDetails) {
    if (typeof payhere === 'undefined') {
      console.error("PayHere script is not loaded");
      return;
    }

    payhere.onCompleted = function onCompleted(orderId) {
      console.log("Payment completed. OrderID:" + orderId);
    };

    payhere.onDismissed = function onDismissed() {
      console.log("Payment dismissed");
    };

    payhere.onError = function onError(error) {
      console.log("Error:" + error);
    };

    const { phone, password, confirmPassword, ...rest } = paymentDetails;
    const order_id = item.order_id;
    const amount = item.price;
    const currency = "LKR";
    const { hash, merchant_id } = await createHash(order_id, amount, currency);
    console.log("Hash:", hash, merchant_id);

    const payment = {
      sandbox: true,
      merchant_id,
      return_url: "http://localhost:3000",
      cancel_url: "http://localhost:3000",
      notify_url: "http://sample.com/notify",
      order_id,
      items: item.name,
      amount: amount.toFixed(2),
      currency,
      name: details.name,
      email: details.email,
      phone,
      address: details.address,
      city: details.city,
      country: details.country,
      delivery_address: details.address,
      delivery_city: details.city,
      delivery_country: details.country,
      custom_1: "",
      custom_2: "",
      hash,
    };

    payhere.startPayment(payment);
  }

  return (
    <div className='h-full w-full'>
      <Startnav />
      <div className="container mx-auto p-10">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8">
          <div className="bg-white shadow-md rounded-lg p-8">
            <h1 className="text-2xl font-bold mb-4">Register</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
              {[
                { label: "Name", type: "text", id: "name" },
                { label: "Email", type: "email", id: "email" },
                { label: "Phone", type: "number", id: "phone" },
                { label: "Address", type: "text", id: "address" },
                { label: "City", type: "text", id: "city" },
                { label: "Zip Code", type: "number", id: "zip" },
                { label: "Password", type: "password", id: "password" },
                { label: "Re-enter Password", type: "password", id: "confirmPassword" },
              ].map(({ label, type, id }) => (
                <div key={id} className="form-group">
                  <label htmlFor={id} className="block text-sm font-medium text-black">{label}</label>
                  <input
                    type={type}
                    id={id}
                    name={id}
                    value={details[id]}
                    onChange={handleInputChange}
                    className="form-control block w-full bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 rounded-3xl shadow-xl border border-gray-300"
                    required
                  />
                </div>
              ))}
              <button type="submit" className="btn btn-primary w-full font-bold py-2 px-4 rounded">
                Sign-Up
              </button>
              <div className="flex justify-between items-center">
                <div>If you have an account</div>
                <Link
                  href="/customer/signin"
                  className="text-primary mt-7 transition-all">
                  <span className="font-bold text-purple-900">Log-In</span>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Startfooter />
    </div>
  );
}
