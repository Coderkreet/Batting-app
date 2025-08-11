import React, { useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800 border-b border-gray-700 sticky top-0 z-40">
        <div className="flex items-center justify-between px-1 sm:px-4 py-1.5 sm:py-3">
          {/* Left Section - Logo and Menu */}
          <div className="flex items-center space-x-1 sm:space-x-4">
            <button 
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden text-white hover:text-cyan-400 p-0.5 sm:p-1"
            >
              <Menu size={25} className="sm:w-6 ml-3 sm:h-6" />
            </button>
            <div className="flex items-center space-x-1 sm:space-x-2">
              <div className="w-6 h-6 sm:w-10 sm:h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xs sm:text-lg">U</span>
              </div>
              {/* Hide text on very small screens */}
              <span className="text-xs sm:text-xl font-bold text-cyan-400 hidden min-[320px]:block xs:hidden sm:block">
                UW
              </span>
              <span className="text-sm sm:text-xl font-bold text-cyan-400 hidden xs:block sm:block">
                ULTRAWIN
              </span>
            </div>
          </div>

          {/* Center Navigation - Hidden on mobile */}
          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            <a href="#" className="bg-cyan-500 px-3 xl:px-4 py-2 rounded-lg font-medium hover:bg-cyan-600 transition-colors text-sm xl:text-base">
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
          <div className="flex items-center space-x-0.5 sm:space-x-2 lg:space-x-3">
            {/* WhatsApp Button */}
            <div className="hidden xl:flex items-center space-x-2 bg-green-600 px-3 py-2 rounded-lg hover:bg-green-700 transition-colors">
              <MessageCircle size={20} />
              <span className="text-sm">WhatsApp</span>
            </div>
            
            {/* WhatsApp Icon Only for medium screens */}
            <button className="hidden md:flex xl:hidden items-center justify-center bg-green-600 p-2 rounded-lg hover:bg-green-700 transition-colors">
              <MessageCircle size={18} />
            </button>

            {/* Auth Buttons */}
            <div className="flex m-4  items-center space-x-1 sm:space-x-2">
              <button className="bg-cyan-500 px-1.5 sm:px-3 lg:px-4 py-1 sm:py-2 rounded text-xs sm:text-sm font-medium hover:bg-cyan-600 transition-colors min-w-0">
                <span className="hidden min-[350px]:inline">Login</span>
                <span className="min-[350px]:hidden">L</span>
              </button>
              <button className="bg-green-500 px-1.5 sm:px-3 lg:px-4 py-1 sm:py-2 rounded text-xs sm:text-sm font-medium hover:bg-green-600 transition-colors min-w-0">
                <span className="hidden min-[350px]:inline">Signup</span>
                <span className="min-[350px]:hidden">S</span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className="lg:hidden border-t border-gray-700">
          <nav className="flex items-center justify-between px-1 sm:px-2 py-1 sm:py-2 overflow-x-auto scrollbar-hide">
            <a href="#" className="bg-cyan-500 px-1.5 sm:px-3 py-1 sm:py-1.5 rounded text-xs font-medium hover:bg-cyan-600 transition-colors whitespace-nowrap flex-shrink-0">
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
            <button className="md:hidden bg-green-600 p-1 sm:p-1.5 rounded hover:bg-green-700 transition-colors flex-shrink-0 ml-1">
              <MessageCircle size={14} className="sm:w-4 sm:h-4" />
            </button>
          </nav>
        </div>
      </header>

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
          <div className="p-2 sm:p-6">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
