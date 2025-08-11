import React from 'react';
import { TrendingUp } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "../components/homePage.css"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import Rimg1 from '../assets/recomended section/LUCKY 5.jpeg'
import Rimg2 from '../assets/recomended section/ANDAR BAHAR.png'
import Rimg3 from '../assets/recomended section/BACCARAT.png'
import Rimg4 from '../assets/recomended section/MUFLIS TEENPATTI.png'
import Rimg5 from '../assets/recomended section/BOLLYWOOD CASINO.png'
import Rimg6 from '../assets/recomended section/DRAGON TIGER.png'
import Rimg7 from '../assets/recomended section/dRAGON TIGER 2.png'
import Rimg8 from '../assets/recomended section/INSTANT 2 CARDS TEENPATTI.png'
import Rimg9 from '../assets/recomended section/LUCKY.png'

// import required modules
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';

const CasinoGamesSwiper = () => {
  // Recommended Games Data (matching the image)
  const recommendedGames = [
    { 
      name: 'LUCKY 5', 
      image: Rimg1, 
      category: 'Slots',
      isNew: false 
    },
    { 
      name: 'ANDAR BAHAR', 
      image: Rimg2, 
      category: 'Card Games',
      isNew: false 
    },
    { 
      name: 'BACCARAT', 
      image: Rimg3, 
      category: 'Card Games',
      isNew: false 
    },
    { 
      name: 'MUFLIS TEENPATTI', 
      image: Rimg4, 
      category: 'Card Games',
      badge: 'MACES GAMING'
    },
    { 
      name: 'BOLLYWOOD CASINO', 
      image: Rimg5, 
      category: 'Themed Games',
      isNew: false 
    },
    { 
      name: 'DRAGON TIGER', 
      image: Rimg6, 
      category: 'Card Games',
      badge: 'MACES GAMING'
    },
    { 
      name: 'DRAGON TIGER 2', 
      image: Rimg7, 
      category: 'Card Games',
      badge: 'MACES GAMING'
    },
    { 
      name: 'INSTANT 2 CARDS TEENPATTI', 
      image: Rimg8, 
      category: 'Card Games',
      badge: 'MACES GAMING'
    },
    { 
      name: 'LUCKY', 
      image:Rimg9 , 
      category: 'Slots',
      isNew: false 
    }
  ];

    // Casino Lobby Games Data
    const casinoLobbyGames = [
      { name: 'Lobby 1', image: Rimg1, badge: 'LOBBY', isLive: false },
      { name: 'Lobby 2', image: Rimg2, badge: 'LOBBY', isLive: false },
      { name: 'Lobby 3', image: Rimg3, badge: 'LOBBY', isLive: false },
      { name: 'Lobby 4', image: Rimg4, badge: 'LOBBY', isLive: false },
      { name: 'Lobby 5', image: Rimg5, badge: 'LOBBY', isLive: false },
      { name: 'Lobby 6', image: Rimg6, badge: 'LOBBY', isLive: false },
    ];

    // Slots Games Data
    const slotsGames = [
      { name: 'Mega Slots', image: Rimg1, category: 'Slots', isNew: true },
      { name: 'Fruit Spin', image: Rimg1, category: 'Slots', isNew: false },
      { name: 'Starburst', image: Rimg1, category: 'Slots', isNew: false },
      { name: 'Book of Gold', image: Rimg1, category: 'Slots', isNew: false },
      { name: 'Lucky 7', image: Rimg1, category: 'Slots', isNew: true },
      { name: 'Wild Joker', image: Rimg1, category: 'Slots', isNew: false },
    ]
  // Live Casino Games Data
  const liveCasinoGames = [
    { 
      name: 'AUTO-ROULETTE', 
      image: Rimg1, 
      isLive: true 
    },
    { 
      name: 'CRAZY TIME', 
      image: Rimg2, 
      isLive: true 
    },
    { 
      name: 'DRAGON TIGER', 
      image: Rimg3, 
      isLive: true 
    },
    { 
      name: 'LIGHTNING DICE', 
      image: Rimg4, 
      isLive: true 
    },
    { 
      name: 'LIGHTNING ROULETTE', 
      image: Rimg5, 
      isLive: true 
    },
    { 
      name: 'RED DOOR ROULETTE', 
      image: Rimg6, 
      isLive: true 
    },
    { 
      name: 'SPEED BACCARAT A', 
      image: Rimg1, 
      isLive: true 
    },
    { 
      name: 'SUPER SIC BO', 
      image: Rimg2, 
      isLive: true 
    },
    { 
      name: 'LIGHTNING', 
      image: Rimg3, 
      isLive: true 
    }
  ];

  // Your existing games data
  const games = [
    { name: 'Fortune Wheel', color: 'from-purple-600 to-blue-600' },
    { name: 'Twist X', color: 'from-blue-600 to-purple-600' },
    { name: 'Lucky 5', color: 'from-yellow-500 to-orange-500' },
    { name: 'Rock Paper Scissors', color: 'from-gray-600 to-gray-800' },
    { name: 'Limbo', color: 'from-orange-500 to-red-500' },
    { name: 'Plinko', color: 'from-green-500 to-green-600' },
    { name: 'Crash', color: 'from-purple-500 to-pink-500' }
  ];

  // Your existing topMatches data
  const topMatches = [
    {
      teams: [
        { label: 'MO', color: 'bg-blue-500' },
        { label: 'BM', color: 'bg-blue-600' },
        { label: 'F', color: 'bg-blue-700' }
      ],
      live: true,
      sport: 'FOOTBALL',
      event: 'English Community Shield',
      match: 'Crystal Palace V Liverpool',
      time: 'Today 07:30 PM',
      odds: ['5.90', '6.40', '4.70', '1.62', '1.63']
    }
    // ... rest of your topMatches data
  ];

  return (
    <>
      {/* Your existing Hero Banners code */}
      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        {/* ... existing hero banners ... */}
      </div>

      {/* Your existing Sports Section */}
      <div className="mb-8">
        {/* ... existing sports section ... */}
      </div>

      {/* Your existing Top Matches */}
      <div className="mb-8">
        {/* ... existing top matches section ... */}
      </div>

      {/* NEW: Recommended Games Section - Matching the Image */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-6 text-white">Recommended Games</h2>
        <div className="grid">
          <Swiper
            slidesPerView={2.5}
            spaceBetween={15}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            freeMode={true}
            breakpoints={{
              640: { slidesPerView: 4, spaceBetween: 15 },
              1024: { slidesPerView: 6, spaceBetween: 20 },
              1280: { slidesPerView: 8, spaceBetween: 20 }
            }}
            modules={[FreeMode, Autoplay]}
            className="recommendedGamesSwiper"
          >
            {recommendedGames.map((game, index) => (
              <SwiperSlide key={index} className='mySwiper2'>
                <div className="relative bg-gray-800 rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-200 group">
                  {/* Game Image */}
                  <div className="relative h-32 bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
                    <img 
                      src={game.image} 
                      alt={game.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                    {/* Badge for special games */}
                    {game.badge && (
                      <div className="absolute top-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                        {game.badge}
                      </div>
                    )}
                    {/* Live indicator */}
                    {game.isLive && (
                      <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                        LIVE
                      </div>
                    )}
                  </div>
                  
                  {/* Game Name */}
                  <div className="p-3 text-center">
                    <h3 className="text-white font-bold text-sm uppercase tracking-wide">
                      {game.name}
                    </h3>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200"></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* NEW: Live Casino Games Section - Matching the Image */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-6 text-white">Live Casino Games</h2>
        <div className="grid">
          <Swiper
            slidesPerView={2.5}
            spaceBetween={15}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            loop={true}
            freeMode={true}
            breakpoints={{
              640: { slidesPerView: 4, spaceBetween: 15 },
              1024: { slidesPerView: 6, spaceBetween: 20 },
              1280: { slidesPerView: 8, spaceBetween: 20 }
            }}
            modules={[FreeMode, Autoplay]}
            className="liveCasinoSwiper"
          >
            {liveCasinoGames.map((game, index) => (
              <SwiperSlide key={index} className='mySwiper2'>
                <div className="relative bg-gray-800 rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-200 group">
                  {/* Game Image */}
                  <div className="relative h-32 bg-gradient-to-br from-red-600 to-purple-600 flex items-center justify-center">
                    <img 
                      src={game.image} 
                      alt={game.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                    {/* Live indicator - always shown for live games */}
                    <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">
                      LIVE
                    </div>
                  </div>
                  
                  {/* Game Name */}
                  <div className="p-3 text-center">
                    <h3 className="text-white font-bold text-sm uppercase tracking-wide">
                      {game.name}
                    </h3>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200"></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {/* NEW: Live Casino Games Section - Matching the Image */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-6 text-white">Slots </h2>
        <div className="grid">
          <Swiper
            slidesPerView={2.5}
            spaceBetween={15}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            loop={true}
            freeMode={true}
            breakpoints={{
              640: { slidesPerView: 4, spaceBetween: 15 },
              1024: { slidesPerView: 6, spaceBetween: 20 },
              1280: { slidesPerView: 8, spaceBetween: 20 }
            }}
            modules={[FreeMode, Autoplay]}
            className="liveCasinoSwiper"
          >
            {liveCasinoGames.map((game, index) => (
              <SwiperSlide key={index} className='mySwiper2'>
                <div className="relative bg-gray-800 rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-200 group">
                  {/* Game Image */}
                  <div className="relative h-32 bg-gradient-to-br from-red-600 to-purple-600 flex items-center justify-center">
                    <img 
                      src={game.image} 
                      alt={game.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                    {/* Live indicator - always shown for live games */}
                    <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">
                      LIVE
                    </div>
                  </div>
                  
                  {/* Game Name */}
                  <div className="p-3 text-center">
                    <h3 className="text-white font-bold text-sm uppercase tracking-wide">
                      {game.name}
                    </h3>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200"></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {/* NEW: Live Casino Games Section - Matching the Image */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-6 text-white">Casino Lobby
 </h2>
        <div className="grid">
          <Swiper
            slidesPerView={2.5}
            spaceBetween={15}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            loop={true}
            freeMode={true}
            breakpoints={{
              640: { slidesPerView: 4, spaceBetween: 15 },
              1024: { slidesPerView: 6, spaceBetween: 20 },
              1280: { slidesPerView: 8, spaceBetween: 20 }
            }}
            modules={[FreeMode, Autoplay]}
            className="liveCasinoSwiper"
          >
            {liveCasinoGames.map((game, index) => (
              <SwiperSlide key={index} className='mySwiper2'>
                <div className="relative bg-gray-800 rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-200 group">
                  {/* Game Image */}
                  <div className="relative h-32 bg-gradient-to-br from-red-600 to-purple-600 flex items-center justify-center">
                    <img 
                      src={game.image} 
                      alt={game.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                    {/* Live indicator - always shown for live games */}
                    <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">
                      LIVE
                    </div>
                  </div>
                  
                  {/* Game Name */}
                  <div className="p-3 text-center">
                    <h3 className="text-white font-bold text-sm uppercase tracking-wide">
                      {game.name}
                    </h3>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200"></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

     
    </>
  );
};

export default CasinoGamesSwiper;
