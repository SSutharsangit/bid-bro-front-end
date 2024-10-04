"use client";
import React, { useState, useEffect } from 'react';

const RegistrationModal = ({ isOpen, onClose, onSwitchToSignIn }) => {
  const [registrationDetails, setRegistrationDetails] = useState({
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
    setRegistrationDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Perform validation and submit the form
    try {
      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registrationDetails),
      });

      // Handle non-200 responses
      if (!response.ok) {
        const errorData = await response.json(); // Parse error response if available
        throw new Error(errorData.message || 'Registration failed');
      }

      const result = await response.json();
      alert('Registration successful!');
      onClose(); // Close the modal after successful registration
    } catch (error) {
      console.error('Error:', error.message);
      alert(`Registration failed: ${error.message}`);
    }
  };

//   if (!isOpen) return null; // Ensure the modal renders only when `isOpen` is true

  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose(); // Close modal when clicking outside the modal content
    }
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose(); // Close the modal when 'Escape' key is pressed
      }
    };

    // if (isOpen) {
    //   document.addEventListener('keydown', handleEscape);
    // }

    // Cleanup the event listener when the modal is closed or unmounted
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]); // Ensure `onClose` and `isOpen` are part of the dependency array
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50" onClick={handleBackgroundClick}>
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500">X</button>
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium">Email</label>

            
            <input
              type="email"
              id="email"
              name="email"
              value={registrationDetails.email}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={registrationDetails.password}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-lg w-full"
            disabled={!registrationDetails.email || !registrationDetails.password} // Disable button when fields are empty
          >
            Register
          </button>
        </form>

        {/* Prompt to sign in */}
        <p className="mt-4 text-sm text-center">
          Already have an account?{' '}
          <button onClick={onSwitchToSignIn} className="text-blue-500 underline">
            Sign In
          </button>
        </p>
      </div>
    </div>
  );
};

export default RegistrationModal;
