    import React from 'react';
    import { TrendingUp } from 'lucide-react';
    import CasinoGamesSwiper from '../page/CasinoGamesSwiper';
    import { Swiper, SwiperSlide } from 'swiper/react';

    // Import Swiper styles
    import 'swiper/css';
    import 'swiper/css/free-mode';
    import 'swiper/css/pagination';

    import './homePage.css';

    // import required modules
    import { Autoplay, FreeMode, Pagination } from 'swiper/modules';

    const HomePage = () => {
      const games = [
        { name: 'Fortune Wheel', color: 'from-purple-600 to-blue-600' },
        { name: 'Twist X', color: 'from-blue-600 to-purple-600' },
        { name: 'Lucky 5', color: 'from-yellow-500 to-orange-500' },
        { name: 'Rock Paper Scissors', color: 'from-gray-600 to-gray-800' },
        { name: 'Limbo', color: 'from-orange-500 to-red-500' },
        { name: 'Plinko', color: 'from-green-500 to-green-600' },
        { name: 'Crash', color: 'from-purple-500 to-pink-500' }
      ];

      return (
        <>
          {/* Hero Banners */}
          <div className="grid lg:grid-cols-2 gap-6 mb-8">
            <div className="relative bg-gradient-to-r from-red-900 via-red-800 to-purple-900 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-black bg-opacity-30"></div>
              <div className="relative z-10 p-8 flex items-center">
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-yellow-400 mb-2">Get 500%</h2>
                  <h3 className="text-2xl font-bold mb-6">Joining Bonus</h3>
                  <button className="bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                    Deposit Now
                  </button>
                </div>
                <div className="flex-1 flex justify-end">
                  <div className="w-32 h-40 bg-gradient-to-b from-red-600 to-red-800 rounded-lg flex items-center justify-center">
                    <div className="text-4xl">🎰</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative bg-gradient-to-r from-teal-900 via-teal-800 to-green-900 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-black bg-opacity-20"></div>
              <div className="relative z-10 p-8 flex items-center">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-2">Join Our Affiliate</h2>
                  <h3 className="text-2xl font-bold mb-4">Program</h3>
                  <div className="text-sm mb-6 bg-teal-700 px-3 py-1 rounded-full inline-block">
                    💰 Earn daily commission
                  </div>
                  <button className="bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                    Join Now
                  </button>
                </div>
                <div className="flex-1 flex justify-end">
                  <div className="w-32 h-40 bg-gradient-to-b from-green-600 to-teal-800 rounded-lg flex items-center justify-center">
                    <div className="text-4xl">💎</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sports Section */}
       {/* Sports Section */}
<div className="mb-8">
  <h2 className="text-2xl font-bold mb-6 text-cyan-400">Sports</h2>
  <div className="grid">
    <Swiper
      slidesPerView={3.5}
      spaceBetween={30} // Reduced from 30 to 10 for closer cards
      autoplay={true} 
      loop ={true}
      freeMode={true}
       breakpoints={{
              640: { slidesPerView: 5, spaceBetween: 20 }, // tablet
              1024: { slidesPerView: 10, spaceBetween: 30 } // large screen
            }}
      // pagination={{
      //   clickable: true,
      // }}
      modules={[FreeMode, Pagination, Autoplay]}
      className="mySwiper mySwiper2"
    >
      {[
        { name: 'CRICKET', icon: '🏏', color: 'bg-red-600' },
        { name: 'FOOTBALL', icon: '⚽', color: 'bg-blue-600' },
        { name: 'TENNIS', icon: '🎾', color: 'bg-green-600' },
        { name: 'KABADDI', icon: '🤼', color: 'bg-orange-600' },
        { name: 'BASKETBALL', icon: '🏀', color: 'bg-orange-700' },
        { name: 'BASKETBALL', icon: '🏀', color: 'bg-orange-700' },
        { name: 'BASKETBALL', icon: '🏀', color: 'bg-orange-700' },
        { name: 'BASEBALL', icon: '⚾', color: 'bg-gray-600' },
        { name: 'GREYHOUND', icon: '🐕', color: 'bg-blue-700' },
        { name: 'GREYHOUND', icon: '🐕', color: 'bg-blue-700' },
        { name: 'GREYHOUND', icon: '🐕', color: 'bg-blue-700' },
        { name: 'GREYHOUND', icon: '🐕', color: 'bg-blue-700' },
        { name: 'GREYHOUND', icon: '🐕', color: 'bg-blue-700' },
        { name: 'More', icon: '➡️', color: 'bg-purple-600' }
      ].map((sport, index) => (
        <SwiperSlide key={index} className='mySwiper2'>
          <div className={`${sport.color} w-[7rem] rounded-xl p-4 text-center cursor-pointer hover:opacity-80 transition-opacity`}>
            <div className="text-3xl mb-2">{sport.icon}</div>
            <div className="text-xs font-medium">{sport.name}</div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</div>


          {/* Top Matches */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-6 text-cyan-400">Top Matches</h2>
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="flex space-x-1">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-xs">MO</div>
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-xs">BM</div>
                    <div className="w-6 h-6 bg-blue-700 rounded-full flex items-center justify-center text-xs">F</div>
                  </div>
                  <div className="bg-red-500 px-2 py-1 rounded text-xs">LIVE</div>
                </div>
                <div className="mb-4">
                  <div className="text-sm text-gray-400 mb-1">FOOTBALL</div>
                  <div className="text-sm mb-1">English Community Shield</div>
                  <div className="font-medium">Crystal Palace V Liverpool</div>
                  <div className="text-xs text-gray-400">Today 07:30 PM</div>
                </div>
                <div className="flex space-x-2">
                  <div className="bg-pink-500 px-3 py-2 rounded text-sm">5.90</div>
                  <div className="bg-pink-400 px-3 py-2 rounded text-sm">6.40</div>
                  <div className="bg-pink-500 px-3 py-2 rounded text-sm">4.70</div>
                  <div className="bg-gray-600 px-3 py-2 rounded text-sm">1.62</div>
                  <div className="bg-gray-600 px-3 py-2 rounded text-sm">1.63</div>
                </div>
              </div>

              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="flex space-x-1">
                    <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-xs">P</div>
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-xs">MO</div>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="text-sm text-gray-400 mb-1">CRICKET</div>
                  <div className="text-sm mb-1">The Hundred - Womens</div>
                  <div className="font-medium">The Hundred - Womens</div>
                  <div className="text-xs text-gray-400">06 Aug 05:30 PM</div>
                </div>
                <div className="flex space-x-2">
                  <div className="bg-pink-500 px-3 py-2 rounded text-sm"></div>
                  <div className="bg-pink-400 px-3 py-2 rounded text-sm"></div>
                </div>
              </div>

              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="flex space-x-1">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-xs">MO</div>
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-xs">BM</div>
                  </div>
                  <div className="bg-red-500 px-2 py-1 rounded text-xs">LIVE</div>
                </div>
                <div className="mb-4">
                  <div className="text-sm text-gray-400 mb-1">CRICKET</div>
                  <div className="text-sm mb-1">International Twenty20 Matches</div>
                  <div className="font-medium">Australia V South Africa</div>
                  <div className="text-xs text-gray-400">Today 02:45 PM</div>
                </div>
                <div className="flex space-x-2">
                  <div className="bg-pink-500 px-3 py-2 rounded text-sm">1.36</div>
                  <div className="bg-pink-400 px-3 py-2 rounded text-sm">1.37</div>
                </div>
              </div>
            </div>
          </div>

          {/* New Launch Games */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-cyan-400">New Launch</h2>
              <div className="flex space-x-2">
                <button className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600">‹</button>
                <button className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600">›</button>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {games.map((game, index) => (
                <div key={index} className={`bg-gradient-to-br ${game.color} rounded-xl p-4 h-32 flex flex-col justify-between cursor-pointer hover:scale-105 transition-transform`}>
                  <div className="text-white font-bold text-sm">{game.name}</div>
                  <div className="self-end">
                    <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

      
        
        </>
      );
    };

    export default HomePage;
