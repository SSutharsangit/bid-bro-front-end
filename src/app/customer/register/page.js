"use client";
import React, { useState } from "react";
import Link from 'next/link';

export default function Registration() {
  const [details, setDetails] = useState({
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDetails((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const { phone, password, confirmPassword } = details;

    if (Object.values(details).some((x) => x === "")) {
      alert("Please fill in all the fields.");
      return false;
    }
    if (!/^\d{10}$/.test(phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return false;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await fetch('http://localhost:5000/api/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(details),
        });
  
        if (!response.ok) {
          throw new Error('Registration failed');
        }
  
        const result = await response.json();
        console.log('Registration Successful:', result);
        alert('Registration successful!');
        // Optionally, redirect to login page or home page
        window.location.href = '/customer/signin';
      } catch (error) {
        console.error('Error:', error);
        alert('Registration failed. Please try again.');
      }
    }
  };

  return (
    <div className='h-full w-full'>
      <div className="container mx-auto p-10">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8">
          <div className="bg-white shadow-md rounded-lg p-8">
            <h1 className="text-2xl font-bold mb-4">Register</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
              {[
                { label: "Name", type: "text", id: "name" },
                { label: "Email", type: "email", id: "email" },
                { label: "Phone", type: "text", id: "phone" },
                { label: "Address", type: "text", id: "address" },
                { label: "City", type: "text", id: "city" },
                { label: "Zip Code", type: "text", id: "zip" },
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
              <button type="submit" className="btn p-2 btn-primary w-full font-bold py-2 px-4 rounded">
                Register
              </button>
              <div className="flex justify-between items-center">
                <div>Already have an account?</div>
                <Link
                  href="/customer/signin"
                  className="text-primary mt-7 transition-all">
                  <span className="font-bold text-purple-900">Log In</span>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
