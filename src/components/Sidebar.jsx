import React from 'react';
import { X, MessageCircle, ChevronRight, Gift, DollarSign, FileText, Globe, Palette, Shield } from 'lucide-react';
import Logo from '../assets/Logo/Logo.png'; // Adjust the path as necessary
const Sidebar = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Mobile Sidebar */}
      <div className={`fixed lg:hidden  inset-y-0 left-0 z-[1000] w-72 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 border-r border-slate-700/50 transform transition-all duration-300 ease-in-out shadow-2xl ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex flex-col h-full backdrop-blur-sm">
          <div className="flex items-center justify-between p-6 border-b border-slate-700/50">
            <div className="flex items-center space-x-3">
            
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                <img src={Logo} alt="" />
              </span>
            </div>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-slate-700/50 rounded-lg transition-colors"
            >
              <X size={24} className="text-slate-300" />
            </button>
          </div>
          <SidebarContent />
        </div>
      </div>

      {/* Desktop Sidebar - Sticky */}
      <div className="hidden lg:block w-72 flex-shrink-0">
        <div className="sticky top-0 h-[calc(100vh)] overflow-hidden">
          <div className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 border-r border-slate-700/50 h-full flex flex-col shadow-2xl">
            <div className="p-6 border-b border-slate-700/50">
              <div className="flex justify-center items-center space-x-3">
             
                <span className="flex justify-center w-auto items-center text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                   <img src={Logo} width={150} alt="" />
                </span>
              </div>
            </div>
            <SidebarContent />
          </div>
        </div>
      </div>
    </>
  );
};

const SidebarContent = () => {
  const sportsCategories = [
    { name: 'Cricket', icon: '🏏', active: false, color: 'from-orange-400 to-red-500' },
    { name: 'Football', icon: '⚽', active: false, color: 'from-green-400 to-blue-500' },
    { name: 'Tennis', icon: '🎾', active: false, color: 'from-cyan-400 to-blue-500' },
    { name: 'Kabaddi', icon: '🤼', active: false, color: 'from-purple-400 to-pink-500' },
    { name: 'Basketball', icon: '🏀', active: false, color: 'from-yellow-400 to-orange-500' },
    { name: 'Baseball', icon: '⚾', active: false, color: 'from-blue-400 to-purple-500' },
    { name: 'GreyHound', icon: '🐕', active: false, color: 'from-gray-400 to-slate-500' },
    { name: 'Horse Race', icon: '🐎', active: false, color: 'from-amber-400 to-yellow-500' },
    { name: 'Volleyball', icon: '🏐', active: false, color: 'from-indigo-400 to-purple-500' },
    { name: 'Darts', icon: '🎯', active: false, color: 'from-red-400 to-pink-500' },
    { name: 'Futsal', icon: '⚽', active: false, color: 'from-emerald-400 to-green-500' },
    { name: 'Table Tennis', icon: '🏓', active: false, color: 'from-teal-400 to-cyan-500' },
    { name: 'Binary', icon: '📊', active: false, color: 'from-violet-400 to-purple-500' },
    { name: 'Politics', icon: '🏛️', active: false, color: 'from-slate-400 to-gray-500' },
    { name: 'Ice Hockey', icon: '🏒', active: false, color: 'from-blue-400 to-indigo-500' },
    { name: 'MMA', icon: '🥊', active: false, color: 'from-red-500 to-orange-500' },
    { name: 'Rugby', icon: '🏉', active: false, color: 'from-green-500 to-teal-500' },
    { name: 'Multi Markets', icon: '📈', active: false, color: 'from-pink-400 to-rose-500' }
  ];

  const otherMenuItems = [
    { name: 'Promotions', icon: Gift, color: 'text-pink-400' },
    { name: 'My Transaction', icon: DollarSign, color: 'text-green-400' },
    { name: 'Game Rules', icon: FileText, color: 'text-blue-400' },
    { name: 'Language : EN', icon: Globe, color: 'text-cyan-400' },
    { name: 'Theme', icon: Palette, color: 'text-purple-400' }
  ];

  const securityItems = [
    { name: 'Terms & Policy', icon: Shield, color: 'text-orange-400' }
  ];

  return (
    <>
      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto px-4 py-4 custom-scrollbar">
        {/* Sports Categories */}
        <div className="space-y-1">
          <h3 className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-4 px-3">
            Sports Categories
          </h3>
          {sportsCategories.map((sport, index) => (
            <div 
              key={index} 
              className={`group flex items-center justify-between px-4 py-3 rounded-xl cursor-pointer transition-all duration-200 transform hover:scale-[1.02] ${
                sport.active 
                  ? `bg-gradient-to-r ${sport.color} shadow-lg shadow-cyan-500/25` 
                  : 'hover:bg-slate-700/50 hover:shadow-md'
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 ${
                  sport.active 
                    ? 'bg-white/20 backdrop-blur-sm' 
                    : 'bg-slate-600/50 group-hover:bg-slate-600'
                }`}>
                  <span className="text-sm">{sport.icon}</span>
                </div>
                <span className={`text-sm font-medium transition-colors ${
                  sport.active ? 'text-white' : 'text-slate-300 group-hover:text-white'
                }`}>
                  {sport.name}
                </span>
              </div>
              <ChevronRight 
                size={16} 
                className={`transition-all duration-200 ${
                  sport.active 
                    ? 'text-white opacity-100' 
                    : 'text-slate-400 opacity-0 group-hover:opacity-100'
                }`}
              />
            </div>
          ))}
        </div>

        {/* Other Menu Items */}
        <div className="mt-8">
          <h3 className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-4 px-3">
            Other Menu
          </h3>
          <div className="space-y-1">
            {otherMenuItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div 
                  key={index} 
                  className="group flex items-center justify-between px-4 py-3 rounded-xl cursor-pointer hover:bg-slate-700/50 transition-all duration-200 transform hover:scale-[1.02] hover:shadow-md"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-slate-600/50 rounded-lg flex items-center justify-center group-hover:bg-slate-600 transition-colors">
                      <IconComponent size={16} className={item.color} />
                    </div>
                    <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
                      {item.name}
                    </span>
                  </div>
                  <ChevronRight size={16} className="text-slate-400 opacity-0 group-hover:opacity-100 transition-all duration-200" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Security Items */}
        <div className="mt-8">
          <h3 className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-4 px-3">
            Security & Privacy
          </h3>
          <div className="space-y-1">
            {securityItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div 
                  key={index} 
                  className="group flex items-center justify-between px-4 py-3 rounded-xl cursor-pointer hover:bg-slate-700/50 transition-all duration-200 transform hover:scale-[1.02] hover:shadow-md"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-slate-600/50 rounded-lg flex items-center justify-center group-hover:bg-slate-600 transition-colors">
                      <IconComponent size={16} className={item.color} />
                    </div>
                    <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
                      {item.name}
                    </span>
                  </div>
                  <ChevronRight size={16} className="text-slate-400 opacity-0 group-hover:opacity-100 transition-all duration-200" />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Enhanced Bottom Section */}
      <div className="p-4 border-t border-slate-700/50 bg-slate-800/50">
        <button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white py-3 px-4 rounded-xl flex items-center justify-center space-x-3 transition-all duration-200 transform hover:scale-[1.02] shadow-lg hover:shadow-xl font-medium">
          <MessageCircle size={20} />
          <span>Follow on WhatsApp</span>
        </button>
        
        {/* Optional: Add a subtle stats or info section */}
        <div className="mt-4 text-center">
          <span className="text-xs text-slate-400">Online Players: </span>
          <span className="text-xs text-green-400 font-semibold">12,847</span>
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgb(30 41 59 / 0.3);
          border-radius: 3px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgb(71 85 105 / 0.8);
          border-radius: 3px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgb(71 85 105);
        }
      `}</style>
    </>
  );
};

export default Sidebar;
