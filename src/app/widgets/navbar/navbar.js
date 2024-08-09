"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { HomeIcon, ShoppingCartIcon, UserGroupIcon, SupportIcon, LogoutIcon, HeartIcon, BellIcon, UserIcon } from '@heroicons/react/outline';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  return (
    <div>
      <nav className="relative flex items-center justify-between flex-wrap p-6">
        <div className="flex items-center flex-shrink-0 mr-6 sm:mr-4">
          <Link href="/customer/home">
            <div className='flex space-x-4'>
              <Image
                src="/images/logo.png"
                alt="Profile Photo"
                width={80}
                height={80}
              />
            </div>
          </Link>
          <h1 className="text-2xl text-[#180533] font-bold italic">
            Welcome,Broo
          </h1>
        </div>
        <div className="flex items-center sm:mr-2 relative">
          <div className="px-1 py-1 border border-gray-300 rounded-md flex items-center focus-within:ring-2 focus-within:ring-blue-500 transition-all duration-300">
            <input
              type="text"
              placeholder="Search..."
              className="px-1 py-1.5 w-full outline-none"
            />
            <FontAwesomeIcon icon={faSearch} className="text-gray-400 ml-2" />
          </div>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="flex items-center px-3 py-2 border rounded border-gray-400 hover:border-white"
          >
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? 'block' : 'hidden'}`}>
          <div className="text-sm lg:flex-grow">

            <div className="container mx-auto px-4 py-6 flex items-center">
              <Link
                href="/customer/home"
                className="flex items-center space-x-2 mt-4  lg:mt-0 transition-all no-underline hover:bg-[#8006be] duration-300 hover:text-white rounded-md p-1">
                <HomeIcon className="w-6 h-6" />
                <span>Home</span>
              </Link>
              
              <Link
                href="/customer/order"
                className="flex items-center space-x-2 mt-4  lg:mt-0 transition-all no-underline hover:bg-[#8006be] duration-300 hover:text-white rounded-md p-1">
                <ShoppingCartIcon className="w-6 h-6" />
                <span>Order History</span>
              </Link>
              <Link
                href="/customer/notiproductbid"
                className="flex items-center space-x-2 mt-4  lg:mt-0 transition-all no-underline hover:bg-[#8006be] duration-300 hover:text-white rounded-md p-1">
                <BellIcon className="w-6 h-6" />
                <span>Bid Notification</span>
              </Link>
              <Link
                href="/customer/trackingorder"
                className="flex items-center space-x-2 mt-4  lg:mt-0 transition-all no-underline hover:bg-[#8006be] duration-300 hover:text-white rounded-md p-1">
                <ShoppingCartIcon className="w-6 h-6" />
                <span>Tracking Order</span>
              </Link>

              <Link
                href="/customer/aboutus"
                className="flex items-center space-x-2 mt-4  lg:mt-0 transition-all no-underline hover:bg-[#8006be] duration-300 hover:text-white rounded-md p-1">
                <SupportIcon className="w-6 h-6" />
                <span>AboutUs</span>
              </Link>
              <div className="flex items-center space-x-4 ml-auto">
                <Link href="/customer/favorites" className="text-gray-600 cursor-pointer">
                  <HeartIcon className="w-6 h-6" />
                </Link>
                <Link href="/customer/notiproductbid" className="text-gray-600 cursor-pointer">
                  <BellIcon className="w-6 h-6" />
                </Link>
                <Link href="/customer/profile" className="text-gray-600 cursor-pointer">
                  <UserIcon className="w-6 h-6" />
                </Link>
                <Link href="/customer/signin" className="text-purple-800 font-bold text-lg flex items-center space-x-2 italic">
                  <LogoutIcon className="w-6 h-6" />
                  <span></span>
                </Link>
              </div>
            </div>
            <nav className="flex space-x-4 items-center   justify-between">
            </nav>
          </div>

          <div className="relative">
            <button
              type="button"
              className="flex text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              id="user-menu-button"
              onClick={toggleUserMenu}
            >
              <span className="sr-only">Open user menu</span>
              <div className='flex justify-between items-center'>
                <div className='flex space-x-4' style={{
                  width: '70px',
                  height: '70px',
                  borderRadius: '50%',
                  border: '3px solid #8006be',
                  overflow: 'hidden',
                }}>
                  <Image
                    src="/images/profile.jpg"
                    alt="Profile"
                    width={80}
                    height={80}
                  />
                </div>
              </div>
            </button>
            <div className={`absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 ${isUserMenuOpen ? 'block' : 'hidden'} transition-all duration-300`} id="user-dropdown">
              <div className="px-4 py-3">
                <span className="block text-sm">Pirashoban kulam</span>
                <span className="block text-sm truncate">pirasho23@gmail.com</span>
              </div>
              <ul className="py-2" aria-labelledby="user-menu-button">
                {/* <li>
                  <Link href="/customer/product_details" className="block px-4 py-2 text-sm hover:bg-[#8006be] transition-all duration-300 rounded-md p-1">
                    Product Details
                  </Link>
                </li> */}
                <li>
                  <Link href="/customer/changepass"
                    className="block px-4 py-2 text-sm hover:bg-[#8006be] transition-all duration-300 rounded-md p-1">
                    Settings
                  </Link>
                </li>
                <li>
                  <Link href="/customer/profile"
                    className="no-underline px-4 py-2 flex items-center space-x-2 mt-4   text-sm hover:bg-[#8006be] transition-all duration-300 rounded-md p-1">
                    <UserGroupIcon className="w-6 h-6" />
                    Profile
                  </Link>
                </li>
                <li>
                  <Link href="/customer/signin"
                    className="block px-4 py-2 text-sm hover:bg-[#8006be] transition-all duration-300 rounded-md p-1">
                    Sign out
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <hr />
    </div>
  );
};

export default Navbar;
