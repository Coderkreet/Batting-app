import React from 'react';
import { X, MessageCircle } from 'lucide-react';

const Sidebar = ({ isOpen, onClose }) => {
  const sportsCategories = [
    { name: 'Cricket', icon: '🏏', active: false },
    { name: 'Football', icon: '⚽', active: false },
    { name: 'Tennis', icon: '🎾', active: true },
    { name: 'Kabaddi', icon: '🤼', active: false },
    { name: 'Basketball', icon: '🏀', active: false },
    { name: 'Baseball', icon: '⚾', active: false },
    { name: 'GreyHound', icon: '🐕', active: false },
    { name: 'Horse Race', icon: '🐎', active: false },
    { name: 'Volleyball', icon: '🏐', active: false },
    { name: 'Darts', icon: '🎯', active: false },
    { name: 'Futsal', icon: '⚽', active: false },
    { name: 'Table Tennis', icon: '🏓', active: false },
    { name: 'Binary', icon: '📊', active: false },
    { name: 'Politics', icon: '🏛️', active: false },
    { name: 'Ice Hockey', icon: '🏒', active: false },
    { name: 'MMA', icon: '🥊', active: false },
    { name: 'Rugby', icon: '🏉', active: false },
    { name: 'Multi Markets', icon: '📈', active: false }
  ];

  const otherMenuItems = [
    { name: 'Promotions', icon: '🎁' },
    { name: 'My Transaction', icon: '💰' },
    { name: 'Game Rules', icon: '📋' },
    { name: 'Language : EN', icon: '🌐' },
    { name: 'Theme', icon: '🎨' }
  ];

  const securityItems = [
    { name: 'Terms & Policy', icon: '📄' }
  ];

  return (
    <>
      {/* Mobile Sidebar */}
      <div className={`fixed lg:hidden inset-y-0 left-0 z-50 w-64 bg-gray-800 border-r border-gray-700 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4">
            <span className="text-lg font-semibold">Menu</span>
            <button onClick={onClose}>
              <X size={24} />
            </button>
          </div>
          <SidebarContent />
        </div>
      </div>

      {/* Desktop Sidebar - Sticky */}
      <div className="hidden lg:block w-64 flex-shrink-0">
        <div className="sticky top-20 h-[calc(100vh-5rem)] overflow-hidden">
          <div className="bg-gray-800 border-r border-gray-700 h-full flex flex-col">
            <SidebarContent />
          </div>
        </div>
      </div>
    </>
  );
};

const SidebarContent = () => {
  const sportsCategories = [
    { name: 'Cricket', icon: '🏏', active: false },
    { name: 'Football', icon: '⚽', active: false },
    { name: 'Tennis', icon: '🎾', active: true },
    { name: 'Kabaddi', icon: '🤼', active: false },
    { name: 'Basketball', icon: '🏀', active: false },
    { name: 'Baseball', icon: '⚾', active: false },
    { name: 'GreyHound', icon: '🐕', active: false },
    { name: 'Horse Race', icon: '🐎', active: false },
    { name: 'Volleyball', icon: '🏐', active: false },
    { name: 'Darts', icon: '🎯', active: false },
    { name: 'Futsal', icon: '⚽', active: false },
    { name: 'Table Tennis', icon: '🏓', active: false },
    { name: 'Binary', icon: '📊', active: false },
    { name: 'Politics', icon: '🏛️', active: false },
    { name: 'Ice Hockey', icon: '🏒', active: false },
    { name: 'MMA', icon: '🥊', active: false },
    { name: 'Rugby', icon: '🏉', active: false },
    { name: 'Multi Markets', icon: '📈', active: false }
  ];

  const otherMenuItems = [
    { name: 'Promotions', icon: '🎁' },
    { name: 'My Transaction', icon: '💰' },
    { name: 'Game Rules', icon: '📋' },
    { name: 'Language : EN', icon: '🌐' },
    { name: 'Theme', icon: '🎨' }
  ];

  const securityItems = [
    { name: 'Terms & Policy', icon: '📄' }
  ];

  return (
    <>
      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto px-4 py-2">
        <div className="space-y-2">
          {sportsCategories.map((sport, index) => (
            <div key={index} className={`flex items-center space-x-3 px-3 py-2 rounded-lg cursor-pointer transition-colors ${
              sport.active ? 'bg-green-600' : 'hover:bg-gray-700'
            }`}>
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <span className="text-xs">{sport.icon}</span>
              </div>
              <span className="text-sm">{sport.name}</span>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <h3 className="text-gray-400 text-xs uppercase tracking-wide mb-3">Other Menu</h3>
          <div className="space-y-2">
            {otherMenuItems.map((item, index) => (
              <div key={index} className="flex items-center space-x-3 px-3 py-2 rounded-lg cursor-pointer hover:bg-gray-700 transition-colors">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <span className="text-xs">{item.icon}</span>
                </div>
                <span className="text-sm">{item.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-gray-400 text-xs uppercase tracking-wide mb-3">Security & Logout</h3>
          <div className="space-y-2">
            {securityItems.map((item, index) => (
              <div key={index} className="flex items-center space-x-3 px-3 py-2 rounded-lg cursor-pointer hover:bg-gray-700 transition-colors">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <span className="text-xs">{item.icon}</span>
                </div>
                <span className="text-sm">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fixed Bottom Button */}
      <div className="p-4 border-t border-gray-700">
        <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg flex items-center justify-center space-x-2 hover:bg-green-700 transition-colors">
          <MessageCircle size={20} />
          <span>Follow on WhatsApp</span>
        </button>
      </div>
    </>
  );
};

export default Sidebar;
