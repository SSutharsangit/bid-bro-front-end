// "use client"
// import Image from 'next/image';
// import React, { useState } from 'react';
// import { AddAuctionMethod } from '../../../../redux/action/auction'

// const AuctionModal = ({ setShowModal, product}) => {
//     const [isButtonDisabled, setIsButtonDisabled] = useState(false);
//     const [formData, setFormData] = useState({
//         price: "",
//         description: ""
//     });
//     const [count, setCount] = useState(1);
//     const [sucess, setsucess] = useState("");
//     const [errormsg, seterrormsg] = useState("");
//     const [error, seterror] = useState({
//         price: false,
//         description: false
//     });
//     console.log("Product details", product);
    

//     const handleButtonClick = () => {
//         seterror({
//             price: false,
//             description: false,
//         });

//         if (formData.price === "" || formData.description === "") {
//             seterror({
//                 ...error,
//                 price: formData.price === "",
//                 description: formData.description === "",
//             });
//             console.log("Price or description is empty");
//             return;
//         }

//         const data = {
//             productName,
//             expectedPrice: formData.price,
//             noOfUnits: count,
//             description: formData.description
//         };

//         AddAuctionMethod(data, (res) => {
//             if (res?.status >= 200 && res?.status < 300) {
//                 setsucess("Successfully added");
//                 setIsButtonDisabled(true); 
//             } else {
//                 seterrormsg("Failed to add auction");
//             }
//         });
//     };

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setFormData((prevData) => ({ ...prevData, [name]: value }));
//         seterror((prevData) => ({ ...prevData, [name]: false }));
//     };

//     const handleIncrement = () => {
//         setCount((prevCount) => (prevCount < 20 ? prevCount + 1 : prevCount));
//     };

//     const handleDecrement = () => {
//         setCount((prevCount) => (prevCount > 1 ? prevCount - 1 : prevCount));
//     };

//     return (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
//             <div className="bg-white w-full max-w-4xl mx-auto p-8 rounded-3xl shadow-xl">
//                 <div className="flex justify-between items-center mb-6">
//                     <h2 className="text-2xl font-bold">Auction</h2>
//                     <button
//                         className="text-2xl font-bold text-red-500"
//                         onClick={() => setShowModal(false)}
//                     >
//                         &times;
//                     </button>
//                 </div>

//                 <div className="flex flex-col md:flex-row gap-8">
//                 {product.map((pro, index) => (
//                     <div key={index} className="flex flex-col w-full md:w-1/3 gap-8 align-items-center">
//                         <div className="text-3xl font-bold">{pro}</div>
//                         <div className="flex w-150 h-270">
//                             <Image
//                                 src="/images/product_1.webp"
//                                 alt="gg"
//                                 width={350}
//                                 height={900}
//                                 className="bg-purple-50 rounded-3xl p-2.5"
//                             />
//                         </div>
//                     </div>
//                 ))}
//                     <div className="flex flex-col w-full md:w-2/3 gap-8">
//                         <div className="flex justify-around items-center gap-8">
//                             <div className="p-5 rounded-3xl shadow-xl">
//                                 <div className="font-bold text-2xl">No of Units</div>
//                                 <div className='bg-white rounded-3xl'>
//                                     <div className="font-bold text-2xl flex justify-evenly">
//                                         <span className="minus font-bold text-2xl" onClick={handleDecrement}>
//                                             -
//                                         </span>
//                                         <span className="num font-bold text-2xl">{count}</span>
//                                         <span className="plus font-bold text-2xl" onClick={handleIncrement}>
//                                             +
//                                         </span>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="p-5 rounded-3xl shadow-xl">
//                                 <div className="font-bold text-2xl">Define</div>
//                                 <input
//                                     type="number"
//                                     name="price"
//                                     placeholder="Expected Price"
//                                     value={formData.price}
//                                     onChange={handleInputChange}
//                                     className={`block w-full py-1.5 pl-1 text-gray-900 rounded-3xl shadow-xl border ${error.price ? 'bg-danger' : ''}`}
//                                 />
//                                 {error.price && (
//                                     <div className="invalid-feedback text-red-500">This field is required.</div>
//                                 )}
//                                 <input
//                                     type="text"
//                                     name="description"
//                                     placeholder="Description"
//                                     value={formData.description}
//                                     onChange={handleInputChange}
//                                     className={`block w-full py-1.5 pl-1 text-gray-900 rounded-3xl shadow-xl border ${error.description ? 'bg-danger' : ''}`}
//                                 />
//                                 {error.description && (
//                                     <div className="invalid-feedback text-red-500">This field is required.</div>
//                                 )}
//                             </div>
//                         </div>
//                         <div className="flex justify-around items-center gap-8">
//                             <button onClick={handleButtonClick} className='btn btn-primary rounded-3xl p-2 font-bold' disabled={isButtonDisabled}>
//                                 Start Auction
//                             </button>
//                         </div>
//                         <div className='text-green-500'>{sucess}</div>
//                         <div className='text-red-500'>{errormsg}</div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AuctionModal;



"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import { AddAuctionMethod } from '../../../../redux/action/auction'

const AuctionModal = ({ setShowModal, product }) => {
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    const [formData, setFormData] = useState({
        price: "",
        description: ""
    });
    const [count, setCount] = useState(1);
    const [sucess, setsucess] = useState("");
    const [errormsg, seterrormsg] = useState("");
    const [error, seterror] = useState({
        price: false,
        description: false
    });
    console.log("Product details", product);

    const handleButtonClick = () => {
        seterror({
            price: false,
            description: false,
        });

        if (formData.price === "" || formData.description === "") {
            seterror({
                ...error,
                price: formData.price === "",
                description: formData.description === "",
            });
            console.log("Price or description is empty");
            return;
        }

        const data = {
            productName: product.name, // Access product name here directly if it's not an array
            expectedPrice: formData.price,
            noOfUnits: count,
            description: formData.description
        };

        AddAuctionMethod(data, (res) => {
            if (res?.status >= 200 && res?.status < 300) {
                setsucess("Successfully added");
                setIsButtonDisabled(true); 
            } else {
                seterrormsg("Failed to add auction");
            }
        });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
        seterror((prevData) => ({ ...prevData, [name]: false }));
    };

    const handleIncrement = () => {
        setCount((prevCount) => (prevCount < 20 ? prevCount + 1 : prevCount));
    };

    const handleDecrement = () => {
        setCount((prevCount) => (prevCount > 1 ? prevCount - 1 : prevCount));
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
                    {Array.isArray(product) && product.length > 0 ? (
                        product.map((pro, index) => (
                            <div key={index} className="flex flex-col w-full md:w-1/3 gap-8 align-items-center">
                                <div className="text-3xl font-bold">{pro.name}</div>
                                <div className="flex w-150 h-270">
                                    <Image
                                        src="/images/product_1.webp"
                                        alt="gg"
                                        width={350}
                                        height={900}
                                        className="bg-purple-50 rounded-3xl p-2.5"
                                    />
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="flex flex-col w-full md:w-1/3 gap-8 align-items-center">
                            <div className="text-3xl font-bold">{product?.name || "No Product Found"}</div>
                            <div className="flex w-150 h-270">
                                <Image
                                    src="/images/product_1.webp"
                                    alt="gg"
                                    width={350}
                                    height={900}
                                    className="bg-purple-50 rounded-3xl p-2.5"
                                />
                            </div>
                        </div>
                    )}
                    <div className="flex flex-col w-full md:w-2/3 gap-8">
                        <div className="flex justify-around items-center gap-8">
                            <div className="p-5 rounded-3xl shadow-xl">
                                <div className="font-bold text-2xl">No of Units</div>
                                <div className='bg-white rounded-3xl'>
                                    <div className="font-bold text-2xl flex justify-evenly">
                                        <span className="minus font-bold text-2xl" onClick={handleDecrement}>
                                            -
                                        </span>
                                        <span className="num font-bold text-2xl">{count}</span>
                                        <span className="plus font-bold text-2xl" onClick={handleIncrement}>
                                            +
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="p-5 rounded-3xl shadow-xl">
                                <div className="font-bold text-2xl">Define</div>
                                <input
                                    type="number"
                                    name="price"
                                    placeholder="Expected Price"
                                    value={formData.price}
                                    onChange={handleInputChange}
                                    className={`block w-full py-1.5 pl-1 text-gray-900 rounded-3xl shadow-xl border ${error.price ? 'bg-danger' : ''}`}
                                />
                                {error.price && (
                                    <div className="invalid-feedback text-red-500">This field is required.</div>
                                )}
                                <input
                                    type="text"
                                    name="description"
                                    placeholder="Description"
                                    value={formData.description}
                                    onChange={handleInputChange}
                                    className={`block w-full py-1.5 pl-1 text-gray-900 rounded-3xl shadow-xl border ${error.description ? 'bg-danger' : ''}`}
                                />
                                {error.description && (
                                    <div className="invalid-feedback text-red-500">This field is required.</div>
                                )}
                            </div>
                        </div>
                        <div className="flex justify-around items-center gap-8">
                            <button onClick={handleButtonClick} className='btn btn-primary rounded-3xl p-2 font-bold' disabled={isButtonDisabled}>
                                Start Auction
                            </button>
                        </div>
                        <div className='text-green-500'>{sucess}</div>
                        <div className='text-red-500'>{errormsg}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuctionModal;
