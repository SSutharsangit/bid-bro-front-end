import React from 'react'
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/solid';


function Review() {
    const reviews = { href: '#', average: 4 }
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }
    return (
        <div>
                <div className=' flex align-items-center gap-2'>
                    <div className=' space-x-4' style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        border: '2px solid #fff',
                        overflow: 'hidden'
                    }}>
                        <Image
                            src="/images/8.jpg"
                            alt="Profile Photo"
                            width={80}
                            height={80}
                        />
                    </div>
                    <div className=''>
                        <div className='fw-bold'>
                            Shoo
                        </div>
                        <div className="">
                            <h3 className="sr-only">Reviews</h3>
                            <div className="flex items-center">
                                <div className="flex items-center">
                                    {[0, 1, 2, 3, 4].map((rating) => (
                                        <StarIcon
                                            key={rating}
                                            className={classNames(
                                                reviews.average > rating ? 'text-yellow-300' : 'text-gray-200',
                                                'h-5 w-5 flex-shrink-0'
                                            )}
                                            aria-hidden="true"
                                        />
                                    ))}
                                </div>
                                <p className="sr-only">{reviews.average} out of 5 stars</p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div>
                    <div>
                        is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                    </div>
                </div>

        </div>
    )
}

export default Review