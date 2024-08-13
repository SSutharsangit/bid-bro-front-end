"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import { AddAuctionMethod } from '../../../../redux/action/auction'
// import { toast } from 'react-hot-toast';

const AuctionModal = ({ setShowModal }) => {
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    const handleButtonClick = () => {
        seterror({
            price: false,
            description: false,
        })
        if (formData.price == "" || formData.description == "") {
            seterror({
                ...error,
                price: true,
                description: true,
            });
            console.log("price is emty")
            return;
        } else {
            const data = {
                "productName": "iPhone",
                "expectedPrice": formData.price,
                "noOfUnits": count,
                "description": formData.description
            }
            AddAuctionMethod(data, (res) => {
                if (res?.status == 200) {
                    setsucess("sucessfully added")
                    setIsButtonDisabled(true); // Disable the button on success
                } else {
                    seterrormsg("Added fail")
                }
            })
        }
    };
    const [formData, setFormData] = useState({
        price: "",
        description: ""
    });
    const [sucess, setsucess] = useState("");
    const [errormsg, seterrormsg] = useState("");
    const [error, seterror] = useState({
        price: false,
        description: false
    });
    const  handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
        seterror((prevData) => ({ ...prevData, [name]: false }));
    };
    const [count, setCount] = useState(1);
    const handleIncrement = () => {
        setCount(prevCount => (prevCount < 20 ? prevCount + 1 : prevCount));
    };
    const handleDecrement = () => {
        setCount(prevCount => (prevCount > 1 ? prevCount - 1 : prevCount));
    };
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white w-full max-w-4xl mx-auto p-8 rounded-3xl shadow-xl">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold">Auction</h2>
                    <button
                        className="text-2xl font-bold text-red-500"
                        onClick={() => setShowModal(false)}
                    >
                        &times;
                    </button>
                </div>
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex flex-col w-full md:w-1/3 gap-8 align-items-center">
                        <div className="text-3xl font-bold">iPhone</div>
                        <div className="flex w-150 h-270">
                            <Image
                                src="/images/product_1.webp"
                                alt="Profile Photo"
                                width={350}
                                height={900}
                                className="bg-purple-50 rounded-3xl p-2.5"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col w-full md:w-2/3 gap-8">
                        <div className="flex justify-around items-center gap-8">
                            <div className=" p-5 rounded-3xl shadow-xl">
                                <div className="font-bold text-2xl">No of Units</div>
                                <div className='bg-white rounded-3xl'>
                                    <div className="font-bold text-2xl flex justify-evenly " style={{
                                        border_radius: '20px',
                                        box_shadow: '0 5px 10px rgba(0,0,0,0.2)'
                                    }}>
                                        <span className="minus font-bold text-2xl" onClick={handleDecrement} style={{
                                            text_align: 'center',
                                            cursor: 'pointer',
                                            user_select: 'none'
                                        }}>-</span>
                                        <span className="num font-bold text-2xl" style={{
                                            border_right: '2px solid rgba(0,0,0,0.2)',
                                            border_left: '2px solid rgba(0,0,0,0.2)',
                                            pointer_events: 'none'
                                        }}>{count < 20 ? `${count}` : count}</span>
                                        <span className="plus" onClick={handleIncrement} style={{
                                            text_align: 'center',
                                            cursor: 'pointer',
                                            user_select: 'none'
                                        }}>+</span>
                                    </div>
                                </div>
                            </div>
                            <div className=" p-5 rounded-3xl shadow-xl">
                                <div className="font-bold text-2xl">Define</div>
                                <input
                                    type="number"
                                    name="price"
                                    placeholder="Expected Price"
                                    value={formData.price}
                                    onChange={handleInputChange}
                                    className={`block w-full bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 rounded-3xl shadow-xl border border-gray-300 mb-2 ${error.price ? 'bg-danger' : ''}`}
                                />
                                {
                                    error.price ? (
                                        <div class="invalid-feedback text-red-500">
                                            This field is required.
                                        </div>
                                    ) : null
                                }
                                <input
                                    type="text"
                                    name="description"
                                    placeholder="Description"
                                    onChange={handleInputChange}
                                    className="form-control block w-full bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 rounded-3xl shadow-xl border border-gray-300"
                                />
                                {
                                    error.description ? (
                                        <div class="invalid-feedback   text-red-500">
                                            This field is required.
                                        </div>
                                    ) : null
                                }
                            </div>
                        </div>
                        <div className="flex justify-around items-center gap-8">
                            <button onClick={handleButtonClick} className=' btn btn-primary rounded-3xl p-2 font-bold'
                                disabled={isButtonDisabled}
                            >
                                Start Auction
                                <br />
                            </button>
                        </div>
                        <div className=' text-green-500'>
                            {sucess}
                        </div>
                        <div className=' text-red-500'>
                            {errormsg}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuctionModal;