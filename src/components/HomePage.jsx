import React from 'react';
    import { TrendingUp } from 'lucide-react';
    import CasinoGamesSwiper from '../page/CasinoGamesSwiper';
    import { Swiper, SwiperSlide } from 'swiper/react';

    // Import Swiper styles
    import 'swiper/css';
    import 'swiper/css/free-mode';
    import 'swiper/css/pagination';

    import './homePage.css';
    import img1 from '../assets/HeroSection/img1.png'
    import img2 from '../assets/HeroSection/img2.png'

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
        { name: 'Limbo', color: 'from-orange-500 to-red-500' },
        { name: 'Plinko', color: 'from-green-500 to-green-600' },
        { name: 'Limbo', color: 'from-orange-500 to-red-500' },
        { name: 'Plinko', color: 'from-green-500 to-green-600' },
        { name: 'Limbo', color: 'from-orange-500 to-red-500' },
        { name: 'Plinko', color: 'from-green-500 to-green-600' },
        { name: 'Limbo', color: 'from-orange-500 to-red-500' },
        { name: 'Plinko', color: 'from-green-500 to-green-600' },
        { name: 'Crash', color: 'from-purple-500 to-pink-500' }
      ];

      // Top Matches Data
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
  },
  {
    teams: [
      { label: 'P', color: 'bg-purple-500' },
      { label: 'MO', color: 'bg-blue-600' }
    ],
    live: false,
    sport: 'CRICKET',
    event: 'The Hundred - Womens',
    match: 'The Hundred - Womens',
    time: '06 Aug 05:30 PM',
    odds: ['', '']
  },
  {
    teams: [
      { label: 'MO', color: 'bg-blue-500' },
      { label: 'BM', color: 'bg-blue-600' }
    ],
    live: true,
    sport: 'CRICKET',
    event: 'International Twenty20 Matches',
    match: 'Australia V South Africa',
    time: 'Today 02:45 PM',
    odds: ['1.36', '1.37']
  },
  {
    teams: [
      { label: 'MO', color: 'bg-blue-500' },
      { label: 'BM', color: 'bg-blue-600' }
    ],
    live: true,
    sport: 'CRICKET',
    event: 'International Twenty20 Matches',
    match: 'Australia V South Africa',
    time: 'Today 02:45 PM',
    odds: ['1.36', '1.37']
  },
  {
    teams: [
      { label: 'MC', color: 'bg-sky-500' },
      { label: 'CHE', color: 'bg-blue-800' }
    ],
    live: true,
    sport: 'FOOTBALL',
    event: 'Premier League',
    match: 'Manchester City V Chelsea',
    time: 'Today 09:00 PM',
    odds: ['2.10', '3.40', '3.20', '1.85', '1.90']
  },
  {
    teams: [
      { label: 'IND', color: 'bg-orange-500' },
      { label: 'PAK', color: 'bg-green-600' }
    ],
    live: false,
    sport: 'CRICKET',
    event: 'Asia Cup 2024',
    match: 'India V Pakistan',
    time: 'Tomorrow 02:30 PM',
    odds: ['1.45', '2.85']
  },
  {
    teams: [
      { label: 'LAL', color: 'bg-purple-600' },
      { label: 'GSW', color: 'bg-yellow-500' }
    ],
    live: true,
    sport: 'BASKETBALL',
    event: 'NBA Regular Season',
    match: 'Los Angeles Lakers V Golden State Warriors',
    time: 'Today 11:30 PM',
    odds: ['1.95', '1.85', '2.10', '1.75']
  },
  {
    teams: [
      { label: 'RM', color: 'bg-white' },
      { label: 'BAR', color: 'bg-red-600' }
    ],
    live: false,
    sport: 'FOOTBALL',
    event: 'La Liga',
    match: 'Real Madrid V Barcelona',
    time: 'Aug 15 08:15 PM',
    odds: ['2.25', '3.10', '3.40', '1.80', '2.00']
  },
  {
    teams: [
      { label: 'ENG', color: 'bg-red-500' },
      { label: 'AUS', color: 'bg-yellow-600' }
    ],
    live: false,
    sport: 'CRICKET',
    event: 'Ashes Series',
    match: 'England V Australia',
    time: 'Aug 20 03:30 PM',
    odds: ['2.10', '1.75']
  },
  {
    teams: [
      { label: 'NOV', color: 'bg-blue-600' },
      { label: 'FED', color: 'bg-red-500' }
    ],
    live: true,
    sport: 'TENNIS',
    event: 'US Open 2024',
    match: 'Novak Djokovic V Roger Federer',
    time: 'Today 06:00 PM',
    odds: ['1.55', '2.45']
  },
  {
    teams: [
      { label: 'PSG', color: 'bg-blue-700' },
      { label: 'MUN', color: 'bg-red-600' }
    ],
    live: false,
    sport: 'FOOTBALL',
    event: 'Champions League',
    match: 'Paris Saint-Germain V Manchester United',
    time: 'Aug 18 12:45 AM',
    odds: ['2.05', '3.25', '3.50', '1.88', '1.92']
  },
  {
    teams: [
      { label: 'WI', color: 'bg-red-700' },
      { label: 'NZ', color: 'bg-black' }
    ],
    live: true,
    sport: 'CRICKET',
    event: 'T20 World Cup',
    match: 'West Indies V New Zealand',
    time: 'Today 04:15 PM',
    odds: ['1.95', '1.85']
  },
  {
    teams: [
      { label: 'BOS', color: 'bg-green-600' },
      { label: 'MIA', color: 'bg-red-500' }
    ],
    live: false,
    sport: 'BASKETBALL',
    event: 'NBA Playoffs',
    match: 'Boston Celtics V Miami Heat',
    time: 'Aug 22 09:30 PM',
    odds: ['1.70', '2.15', '1.90', '1.95']
  },
  {
    teams: [
      { label: 'ARG', color: 'bg-sky-400' },
      { label: 'BRA', color: 'bg-yellow-400' }
    ],
    live: false,
    sport: 'FOOTBALL',
    event: 'Copa America Final',
    match: 'Argentina V Brazil',
    time: 'Aug 25 11:00 PM',
    odds: ['2.40', '2.80', '3.60', '1.85', '1.95']
  },
  {
    teams: [
      { label: 'SER', color: 'bg-red-600' },
      { label: 'NAD', color: 'bg-green-500' }
    ],
    live: true,
    sport: 'TENNIS',
    event: 'Wimbledon 2024',
    match: 'Serena Williams V Rafael Nadal',
    time: 'Today 08:45 PM',
    odds: ['1.85', '1.95']
  }
];


      return (
        <>
          {/* Hero Banners */}
          <div className="grid lg:grid-cols-2 gap-6 mb-8">
            <div className="relative rounded-2xl overflow-hidden h-56 md:h-64" style={{  backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <div className="absolute inset-0 "></div>
           <img src={img1} alt="" />
            </div>

            {/* Second Hero Banner remains unchanged, but height matches first */}
            <div className="relative  rounded-2xl overflow-hidden h-56 md:h-64" style={{  backgroundSize: 'cover', backgroundPosition: 'center' }} >
              <div className="absolute inset-0 "></div>
              <img src={img2} alt="" />
            </div>
          </div>

          {/* Sports Section */}
       {/* Sports Section */}
<div className="mb-8">
  <h2 className="text-2xl font-bold mb-6 text-cyan-400">Sports</h2>
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
    480: { slidesPerView: 3, spaceBetween: 12 },
    640: { slidesPerView: 4, spaceBetween: 15 },
    768: { slidesPerView: 5, spaceBetween: 16 },
    1024: { slidesPerView: 6, spaceBetween: 18 },
    1280: { slidesPerView: 8, spaceBetween: 20 }
  }}
  modules={[FreeMode, Autoplay]}
  className="sportsSwiper"
>
  {[
    { 
      name: 'CRICKET', 
      bgImage: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=300&fit=crop&crop=center',
      overlayColor: 'from-red-600/80 to-red-800/80'
    },
    { 
      name: 'FOOTBALL', 
      bgImage: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=400&h=300&fit=crop&crop=center',
      overlayColor: 'from-blue-600/80 to-blue-800/80'
    },
    { 
      name: 'TENNIS', 
      bgImage: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=400&h=300&fit=crop&crop=center',
      overlayColor: 'from-green-600/80 to-green-800/80'
    },
    { 
      name: 'KABADDI', 
      bgImage: 'https://images.unsplash.com/photo-1594736797933-d0301ba2fe65?w=400&h=300&fit=crop&crop=center',
      overlayColor: 'from-orange-600/80 to-orange-800/80'
    },
    { 
      name: 'BASKETBALL', 
      bgImage: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=300&fit=crop&crop=center',
      overlayColor: 'from-amber-600/80 to-orange-800/80'
    },
    { 
      name: 'VOLLEYBALL', 
      bgImage: 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=400&h=300&fit=crop&crop=center',
      overlayColor: 'from-yellow-600/80 to-yellow-800/80'
    },
    { 
      name: 'HOCKEY', 
      bgImage: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=center',
      overlayColor: 'from-indigo-600/80 to-indigo-800/80'
    },
    { 
      name: 'BASEBALL', 
      bgImage: 'https://images.unsplash.com/photo-1566577739112-5180d4bf9390?w=400&h=300&fit=crop&crop=center',
      overlayColor: 'from-gray-600/80 to-gray-800/80'
    },
    { 
      name: 'BADMINTON', 
      bgImage: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=400&h=300&fit=crop&crop=center',
      overlayColor: 'from-pink-600/80 to-pink-800/80'
    },
    { 
      name: 'TABLE TENNIS', 
      bgImage: 'https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?w=400&h=300&fit=crop&crop=center',
      overlayColor: 'from-cyan-600/80 to-cyan-800/80'
    },
    { 
      name: 'BOXING', 
      bgImage: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=400&h=300&fit=crop&crop=center',
      overlayColor: 'from-red-700/80 to-red-900/80'
    },
    { 
      name: 'SWIMMING', 
      bgImage: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?w=400&h=300&fit=crop&crop=center',
      overlayColor: 'from-blue-500/80 to-blue-700/80'
    },
    { 
      name: 'RACING', 
      bgImage: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop&crop=center',
      overlayColor: 'from-black/80 to-gray-800/80'
    },
    { 
      name: 'MORE', 
      bgImage: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&h=300&fit=crop&crop=center',
      overlayColor: 'from-purple-600/80 to-purple-800/80'
    }
  ].map((sport, index) => (
    <SwiperSlide key={index} className='mySwiper2'>
      <div className="group relative">
        {/* Card Container */}
        <div className="w-full min-w-[6rem] max-w-[8rem] aspect-[4/5] rounded-2xl overflow-hidden 
          cursor-pointer transform transition-all duration-300 ease-out
          hover:scale-105 hover:shadow-2xl hover:-translate-y-1
          shadow-lg border border-white/20 relative">
          
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src={sport.bgImage} 
              alt={sport.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              onError={(e) => {
                // Fallback gradient if image fails to load
                e.target.style.display = 'none';
                // e.target.nextSibling.style.background = `linear-gradient(135deg, ${sport.overlayColor.split(' ')[1]}, ${sport.overlayColor.split(' ')[3]})`;
              }}
            />
            {/* Fallback gradient background */}
            <div className={`absolute inset-0 `} 
                 style={{ display: 'none' }}></div>
          </div>
          
          {/* Color Overlay for better text readability */}
          <div className={`absolute inset-0 bg-gradient-to-br
            group-hover:opacity-70 transition-opacity duration-300`}></div>
          
          {/* Content Container */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-3 sm:p-4 text-center z-10">
            
            {/* Sport Name */}
            <div className="text-[0.65rem] sm:text-xs font-bold text-white uppercase tracking-wider 
              leading-tight drop-shadow-lg text-shadow-lg transform transition-transform duration-300 
              group-hover:scale-110">
              {sport.name}
            </div>
            
            {/* Subtitle for context */}
            <div className="text-[0.55rem] text-white/80 mt-1 opacity-0 group-hover:opacity-100 
              transition-opacity duration-300 uppercase tracking-wide">
              SPORTS
            </div>
          </div>
          
          {/* Hover Glow Effect */}
          <div className="absolute inset-0 rounded-2xl bg-white opacity-0 group-hover:opacity-20 
            transition-opacity duration-300"></div>
          
          {/* Active Indicator for Popular Sports */}
          {['CRICKET', 'FOOTBALL', 'TENNIS'].includes(sport.name) && (
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full 
              border-2 border-white shadow-lg z-20 animate-pulse"></div>
          )}
          
          {/* Bottom Shine Effect */}
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t 
            from-white/10 to-transparent opacity-0 group-hover:opacity-100 
            transition-opacity duration-300"></div>
        </div>
        
        {/* Bottom Glow Effect */}
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-2 
          bg-white/50 rounded-full blur-md opacity-0 group-hover:opacity-60 
          transition-opacity duration-300"></div>
      </div>
    </SwiperSlide>
  ))}
</Swiper>

  </div>
</div>


          {/* Top Matches */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-6 text-cyan-400">Top Matches</h2>
            <div className='grid'>
    <Swiper
  slidesPerView={1.1}
  spaceBetween={15}
  autoplay={{
    delay: 5000,
    disableOnInteraction: false,
  }}
  loop={true}
  freeMode={true}
  breakpoints={{
    480: { 
      slidesPerView: 1.5, 
      spaceBetween: 15 
    },
    640: { 
      slidesPerView: 2, 
      spaceBetween: 20 
    },
    768: { 
      slidesPerView: 2.5, 
      spaceBetween: 25 
    },
    1024: { 
      slidesPerView: 3, 
      spaceBetween: 30 
    },
    1280: { 
      slidesPerView: 3.5, 
      spaceBetween: 30 
    }
  }}
  modules={[FreeMode, Autoplay]}
  className="mySwiper"
>
  {topMatches.map((match, idx) => (
    <SwiperSlide key={idx} className="mySwiper2">
      <div className="group relative w-full max-w-80 h-full min-h-[300px] cursor-pointer">
        {/* Card Container with background image */}
        <div className="relative h-full rounded-2xl overflow-hidden shadow-xl border border-white/10 
          transform transition-all duration-300 ease-out hover:scale-105 hover:shadow-2xl">
          
          {/* Background Image based on sport */}
          <div className="absolute inset-0">
            <img 
              src={
                match.sport === 'FOOTBALL' 
                  ? 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=400&h=300&fit=crop&crop=center'
                  : match.sport === 'CRICKET'
                  ? 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=300&fit=crop&crop=center'
                  : 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&h=300&fit=crop&crop=center'
              }
              alt={match.sport}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            {/* Fallback gradient */}
            <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900" 
                 style={{ display: 'none' }}></div>
          </div>
          
          {/* Dark overlay for better readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/80 
            group-hover:from-black/60 group-hover:via-black/50 group-hover:to-black/70 
            transition-all duration-300"></div>
          
          {/* Content Container */}
          <div className="relative z-10 h-full p-4 sm:p-6 flex flex-col">
            
            {/* Top Section - Teams and Live Badge */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex space-x-2">
                {match.teams.map((team, i) => (
                  <div 
                    key={i} 
                    className={`w-8 h-8 sm:w-9 sm:h-9 ${team.color} rounded-full flex items-center 
                      justify-center text-xs sm:text-sm font-bold text-white shadow-lg
                      border-2 border-white/20 backdrop-blur-sm`}
                  >
                    {team.label}
                  </div>
                ))}
              </div>
              {match.live && (
                <div className="bg-red-500 px-3 py-1 rounded-full text-xs font-bold animate-pulse 
                  shadow-lg border border-red-400 text-white">
                  🔴 LIVE
                </div>
              )}
            </div>

            {/* Match Information - Flexible grow area */}
            <div className="mb-4 flex-grow">
              {/* Sport Badge */}
              <div className="inline-block bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full 
                text-xs font-bold text-white uppercase tracking-wider mb-3 border border-white/20">
                {match.sport}
              </div>
              
              {/* Event */}
              <div className="text-xs sm:text-sm mb-2 text-gray-300 font-medium">
                {match.event}
              </div>
              
              {/* Match Title */}
              <div className="font-bold text-sm sm:text-base text-white mb-3 leading-tight 
                drop-shadow-lg">
                {match.match}
              </div>
              
              {/* Time with icon */}
              <div className="flex items-center text-xs text-gray-400">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                {match.time}
              </div>
            </div>

            {/* Odds Section */}
            <div className="mt-auto">
              <div className="text-xs text-gray-400 mb-2 font-medium">Betting Odds</div>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                {match.odds.map((odd, i) => (
                  odd && (
                    <div 
                      key={i} 
                      className={`px-3 py-2 rounded-lg text-xs sm:text-sm text-center font-bold 
                        cursor-pointer backdrop-blur-sm border transition-all duration-200
                        hover:scale-105 hover:shadow-lg ${
                        i % 2 === 0 
                          ? 'bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 border-pink-400/50' 
                          : 'bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 border-purple-400/50'
                      } text-white shadow-lg`}
                    >
                      {odd}
                    </div>
                  )
                ))}
              </div>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/5 to-transparent 
            rounded-bl-full"></div>
          <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-white/5 to-transparent 
            rounded-tr-full"></div>
          
          {/* Hover Glow Effect */}
          <div className="absolute inset-0 rounded-2xl bg-white opacity-0 group-hover:opacity-10 
            transition-opacity duration-300"></div>
        </div>
        
        {/* Bottom Glow Effect */}
        <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-16 h-3 
          bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full blur-md 
          opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    </SwiperSlide>
  ))}
</Swiper>


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
                 <div className='grid'>
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
    480: { slidesPerView: 3, spaceBetween: 12 },
    640: { slidesPerView: 4, spaceBetween: 15 },
    768: { slidesPerView: 5, spaceBetween: 16 },
    1024: { slidesPerView: 6, spaceBetween: 18 },
    1280: { slidesPerView: 8, spaceBetween: 20 }
  }}
  modules={[FreeMode, Autoplay]}
  className="mySwiper"
>
  {[
    { 
      name: 'Fortune Wheel', 
      bgImage: 'https://images.unsplash.com/photo-1596838132731-3301c3fd4317?w=400&h=300&fit=crop&crop=center',
      overlayColor: 'from-purple-600/80 to-blue-600/80'
    },
    { 
      name: 'Twist X', 
      bgImage: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=300&fit=crop&crop=center',
      overlayColor: 'from-blue-600/80 to-purple-600/80'
    },
    { 
      name: 'Lucky 5', 
      bgImage: 'https://images.unsplash.com/photo-1541019415-e31e2a4e7e0e?w=400&h=300&fit=crop&crop=center',
      overlayColor: 'from-yellow-500/80 to-orange-500/80'
    },
    { 
      name: 'Rock Paper Scissors', 
      bgImage: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=300&fit=crop&crop=center',
      overlayColor: 'from-gray-600/80 to-gray-800/80'
    },
    { 
      name: 'Limbo', 
      bgImage: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=center',
      overlayColor: 'from-orange-500/80 to-red-500/80'
    },
    { 
      name: 'Plinko', 
      bgImage: 'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=400&h=300&fit=crop&crop=center',
      overlayColor: 'from-green-500/80 to-green-600/80'
    },
    { 
      name: 'Crash', 
      bgImage: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=center',
      overlayColor: 'from-purple-500/80 to-pink-500/80'
    }
  ].map((game, index) => (
    <SwiperSlide key={index} className="mySwiper2">
      <div className="group relative">
        <div className="w-full h-32 rounded-xl overflow-hidden cursor-pointer 
          transform transition-all duration-300 ease-out hover:scale-105 hover:shadow-xl 
          shadow-lg border border-white/10 relative">
          
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src={game.bgImage} 
              alt={game.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              onError={(e) => {
                // Fallback gradient if image fails to load
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            {/* Fallback gradient background */}
            <div className={`w-full h-full bg-gradient-to-br ${game.overlayColor.replace('/80', '')}`} 
                 style={{ display: 'none' }}></div>
          </div>
          
          {/* Color Overlay for better text readability */}
          <div className={`absolute inset-0 bg-gradient-to-br ${game.overlayColor} 
            group-hover:opacity-70 transition-opacity duration-300`}></div>
          
          {/* Content Container */}
          <div className="absolute inset-0 p-4 flex flex-col justify-between z-10">
            
            {/* Game Name */}
            <div className="text-white font-bold text-sm drop-shadow-lg transform 
              transition-transform duration-300 group-hover:scale-105">
              {game.name}
            </div>
            
            {/* Game Icon/Button */}
            <div className="self-end flex items-center space-x-2">
              <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full backdrop-blur-sm 
                flex items-center justify-center hover:bg-opacity-30 transition-all duration-200
                group-hover:scale-110">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
          
          {/* Hover Glow Effect */}
          <div className="absolute inset-0 rounded-xl bg-white opacity-0 group-hover:opacity-20 
            transition-opacity duration-300"></div>
          
          {/* Popular Game Indicator */}
          {['Fortune Wheel', 'Lucky 5', 'Crash'].includes(game.name) && (
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full 
              border-2 border-white shadow-lg z-20 animate-pulse"></div>
          )}
          
          {/* Bottom Shine Effect */}
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t 
            from-white/10 to-transparent opacity-0 group-hover:opacity-100 
            transition-opacity duration-300"></div>
        </div>
        
        {/* Bottom Glow Effect */}
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-2 
          bg-white/50 rounded-full blur-md opacity-0 group-hover:opacity-60 
          transition-opacity duration-300"></div>
      </div>
    </SwiperSlide>
  ))}
</Swiper>

            </div>
          </div>

      
        
        </>
      );
    };

    export default HomePage;
