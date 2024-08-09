// components/ChatbotWidget.js
"use client";
import Image from 'next/image';
import React, { useState } from 'react';







const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            {/* Chatbot Button */}
            <div
                className="fixed bottom-4 right-4"
                onClick={toggleChat}
                style={{ cursor: 'pointer', zIndex: 1000 }}
            >
                <button className="bg-[#8006be] text-white p-3 rounded-full shadow-lg hover:bg-black transition duration-300 ">
                    <div className='flex items-center text-bold text-2l justify-center'>
                    <Image
                        src="/images/chat.png"
                        alt="Profile"
                        width={40}
                        height={40}
                    />
                    ChatBot
                    </div>
                </button>
            </div>

            {/* Chat Window */}
            {isOpen && (
                <div
                    className="fixed bottom-16 right-4 w-80 h-96 bg-white rounded-lg shadow-lg flex flex-col"
                    style={{ zIndex: 1000 }}
                >
                    <div className="bg-blue-500 text-white p-2 rounded-t-lg flex justify-between items-center">
                        <span>Chat with us</span>
                        <button onClick={toggleChat} className="text-xl font-bold">✕</button>
                    </div>
                    <div className="p-4 flex-1 overflow-y-auto">
                        {/* Chat messages will appear here */}
                        <div className="text-gray-500">This is a demo chat window.</div>
                    </div>
                    <div className="p-2 border-t">
                        <input
                            type="text"
                            placeholder="Type a message..."
                            className="w-full p-2 border rounded-lg focus:outline-none"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Chatbot;
