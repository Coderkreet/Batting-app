import React, { useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import Sidebar from './Sidebar';
import Logo from '../assets/Logo/Logo.png'
import Footer from './Footer';
const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}



      <div className="flex">
        {/* Sidebar */}
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          ></div>
        )}

        {/* Main Content */}
        <div className="flex-1 min-h-screen">
            <header className="bg-gray-800 border-b border-gray-700 sticky top-0 z-40">
  <div className="flex items-center justify-between px-1 sm:px-4 py-1 sm:py-2"> {/* Reduced padding */}
    {/* Left Section - Logo and Menu */}
    <div className="flex items-center space-x-1 sm:space-x-3">
      <button 
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="lg:hidden text-white hover:text-cyan-400 p-0.5"
      >
        <Menu size={20} className="sm:w-5 ml-2 sm:h-5" /> {/* Reduced icon size */}
      </button>
      <div className="flex items-center space-x-1 sm:space-x-2">
        

        <span className="text-sm sm:text-lg font-bold text-cyan-400 hidden xs:block sm:block">
          <img src={Logo} width={100} height={50} alt="" />
        </span>
      </div>
    </div>

    {/* Center Navigation - Hidden on mobile */}
    <nav className="hidden lg:flex items-center space-x-3 xl:space-x-5"> {/* Reduced spacing */}
      <a href="#" className="bg-cyan-500 px-2 xl:px-3 py-1.5 rounded-lg font-medium hover:bg-cyan-600 transition-colors text-sm xl:text-base"> {/* Reduced padding */}
        Home
      </a>
      <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm xl:text-base">
        Inplay
      </a>
      <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm xl:text-base">
        Sportsbook
      </a>
      <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm xl:text-base">
        Casino
      </a>
      <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm xl:text-base">
        Multi Markets
      </a>
    </nav>

    {/* Right Section - Actions */}
    <div className="flex items-center space-x-0.5 sm:space-x-2 lg:space-x-2"> {/* Reduced spacing */}
      {/* WhatsApp Button */}
      <div className="hidden xl:flex items-center space-x-2 bg-green-600 px-2 py-1.5 rounded-lg hover:bg-green-700 transition-colors"> {/* Reduced padding */}
        <MessageCircle size={16} /> {/* Reduced icon size */}
        <span className="text-sm">WhatsApp</span>
      </div>
      
      {/* WhatsApp Icon Only for medium screens */}
      <button className="hidden md:flex xl:hidden items-center justify-center bg-green-600 p-1.5 rounded-lg hover:bg-green-700 transition-colors"> {/* Reduced padding */}
        <MessageCircle size={16} /> {/* Reduced icon size */}
      </button>

      {/* Auth Buttons */}
      <div className="flex items-center space-x-1 sm:space-x-2">
        <button className="bg-cyan-500 px-1.5 sm:px-3 lg:px-3 py-1 sm:py-1.5 rounded text-xs sm:text-sm font-medium hover:bg-cyan-600 transition-colors min-w-0"> {/* Reduced padding */}
          <span className="hidden min-[350px]:inline">Login</span>
          <span className="min-[350px]:hidden">L</span>
        </button>
        <button className="bg-green-500 px-1.5 sm:px-3 lg:px-3 py-1 sm:py-1.5 rounded text-xs sm:text-sm font-medium hover:bg-green-600 transition-colors min-w-0"> {/* Reduced padding */}
          <span className="hidden min-[350px]:inline">Signup</span>
          <span className="min-[350px]:hidden">S</span>
        </button>
      </div>
    </div>
  </div>

  {/* Mobile Navigation Menu */}
  <div className="lg:hidden border-t border-gray-700">
    <nav className="flex items-center justify-between px-1 sm:px-2 py-0.5 sm:py-1 overflow-x-auto scrollbar-hide"> {/* Reduced padding */}
      <a href="#" className="bg-cyan-500 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-xs font-medium hover:bg-cyan-600 transition-colors whitespace-nowrap flex-shrink-0"> {/* Reduced padding */}
        Home
      </a>
      <a href="#" className="text-gray-300 hover:text-white transition-colors text-xs px-1 sm:px-2 whitespace-nowrap flex-shrink-0">
        Inplay
      </a>
      <a href="#" className="text-gray-300 hover:text-white transition-colors text-xs px-1 sm:px-2 whitespace-nowrap flex-shrink-0">
        <span className="hidden min-[350px]:inline">Sports</span>
        <span className="min-[350px]:hidden">Sport</span>
      </a>
      <a href="#" className="text-gray-300 hover:text-white transition-colors text-xs px-1 sm:px-2 whitespace-nowrap flex-shrink-0">
        Casino
      </a>
      <a href="#" className="text-gray-300 hover:text-white transition-colors text-xs px-1 sm:px-2 whitespace-nowrap flex-shrink-0">
        <span className="hidden min-[380px]:inline">Markets</span>
        <span className="min-[380px]:hidden">Mark</span>
      </a>
      
      {/* Mobile WhatsApp */}
      <button className="md:hidden bg-green-600 p-0.5 sm:p-1 rounded hover:bg-green-700 transition-colors flex-shrink-0 ml-1"> {/* Reduced padding */}
        <MessageCircle size={12} className="sm:w-3.5 sm:h-3.5" /> {/* Reduced icon size */}
      </button>
    </nav>
  </div>
</header>
          <div className="p-2 sm:p-6">
            {children}
          </div>
          <Footer/>
        </div>
      </div>
    </div>
  );
};

export default Layout;
