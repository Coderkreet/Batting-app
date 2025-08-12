import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

import img1 from '../assets/Treanding Sedction/img1.gif'
import img2 from '../assets/Treanding Sedction/img2.gif'
import img3 from '../assets/Treanding Sedction/img3.gif'
import img4 from '../assets/Treanding Sedction/img4.gif'
import img5 from '../assets/Treanding Sedction/img5.gif'
import img6 from '../assets/Treanding Sedction/img6.gif'

const TrendingGamesSection = () => {
  const trendingGames = [
    {
      id: 1,
      title: 'AVIATOR',
      subtitle: 'Crash Game',
      image: img1,
      bgColor: 'from-red-600 to-red-800',
      glowColor: 'shadow-red-500/50',
      borderColor: 'border-red-500/30',
      icon: '✈️',
      isLarge: true
    },
    {
      id: 2,
      title: 'LIVE PREDICTION',
      subtitle: 'Market Trading',
      image: img2,
      bgColor: 'from-green-600 to-green-800',
      glowColor: 'shadow-green-500/50',
      borderColor: 'border-green-500/30',
      icon: '📈',
      isLarge: true
    },
    {
      id: 3,
      title: 'LUCKY LACE',
      subtitle: 'Live Casino',
      image: img3,
      bgColor: 'from-purple-600 to-purple-800',
      glowColor: 'shadow-purple-500/50',
      borderColor: 'border-purple-500/30',
      icon: '💎',
      isLarge: true
    },
    {
      id: 4,
      title: 'COLOR PREDICTION',
      subtitle: 'Color Game',
      image: img4,
      bgColor: 'from-blue-600 to-blue-800',
      glowColor: 'shadow-blue-500/50',
      borderColor: 'border-blue-500/30',
      icon: '🎨',
      isSmall: true
    },
    {
      id: 5,
      title: 'MARBLE RACE',
      subtitle: 'Racing Game',
      image: img5,
      bgColor: 'from-orange-600 to-orange-800',
      glowColor: 'shadow-orange-500/50',
      borderColor: 'border-orange-500/30',
      icon: '🏁',
      isSmall: true
    },
    {
      id: 6,
      title: 'MINES',
      subtitle: 'Strategy Game',
      image: img6,
      bgColor: 'from-teal-600 to-teal-800',
      glowColor: 'shadow-teal-500/50',
      borderColor: 'border-teal-500/30',
      icon: '💣',
      isSmall: true
    }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-4 sm:py-8 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-20 right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-36 h-36 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 relative z-10">
        <TrendingHeader />
        <TrendingGrid games={trendingGames} />
      </div>
    </div>
  );
};

const TrendingHeader = () => {
  return (
    <div className="flex items-center mb-6 sm:mb-8">
      <div className="relative">
        <h2 className="text-white text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
          Trending Games
        </h2>
        <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
      </div>
      <div className="ml-4 sm:ml-6 h-px bg-gradient-to-r from-cyan-400 via-purple-400 to-transparent flex-1 max-w-60"></div>
    </div>
  );
};

const TrendingGrid = ({ games }) => {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current.children,
        { opacity: 0, y: 40, scale: 0.8 },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1,
          duration: 1,
          stagger: 0.15,
          ease: "back.out(1.7)"
        }
      );
    }
  }, []);

  const largeGames = games.filter(game => game.isLarge);
  const smallGames = games.filter(game => game.isSmall);

  if (isMobile) {
    return (
      <div ref={containerRef} className="space-y-4">
        {games.map((game, index) => (
          <TrendingGameCard 
            key={game.id} 
            game={game} 
            isMobile={true}
            className="w-full"
          />
        ))}
      </div>
    );
  }

  return (
    <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      {largeGames.map((game, index) => (
        <TrendingGameCard 
          key={game.id} 
          game={game} 
          className="col-span-1"
        />
      ))}
      
      <div className="col-span-1 md:col-span-2 lg:col-span-3">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
          {smallGames.map((game, index) => (
            <TrendingGameCard 
              key={game.id} 
              game={game} 
              isSmall={true}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const TrendingGameCard = ({ game, isSmall = false, isMobile = false, className = "" }) => {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    if (isMobile) return;
    setIsHovered(true);
    if (cardRef.current) {
      gsap.to(cardRef.current, {
        scale: 1.05,
        y: -12,
        rotationX: 5,
        duration: 0.4,
        ease: "power2.out"
      });
    }
  };

  const handleMouseLeave = () => {
    if (isMobile) return;
    setIsHovered(false);
    if (cardRef.current) {
      gsap.to(cardRef.current, {
        scale: 1,
        y: 0,
        rotationX: 0,
        duration: 0.4,
        ease: "power2.out"
      });
    }
  };

  const cardHeight = isMobile ? 'h-28' : isSmall ? 'h-36 sm:h-44' : 'h-44 sm:h-52 lg:h-60';

  return (
    <div 
      ref={cardRef}
      className={`relative group cursor-pointer ${cardHeight} ${className} perspective-1000`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`w-full h-full rounded-2xl overflow-hidden relative transition-all duration-500
        ${game.glowColor} ${isHovered ? 'shadow-2xl' : 'shadow-lg'}
        border ${game.borderColor} bg-gradient-to-br from-slate-800/80 to-slate-900/90 backdrop-blur-sm`}>
        
        {/* Animated GIF Background */}
        <div className="absolute inset-0">
          <img 
            src={game.image} 
            alt={game.title}
            className={`w-full h-full object-cover transition-all duration-700 ${
              isHovered ? 'opacity-40 scale-110' : 'opacity-25'
            }`}
          />
          {/* Dynamic Color Overlay */}
          <div className={`absolute inset-0  duration-500 ${
            isHovered ? 'opacity-60' : 'opacity-70'
          }`}></div>
        </div>

        {/* Neon Border Effect */}
        <div className={`absolute inset-0 rounded-2xl transition-opacity duration-500 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className={`absolute inset-0 rounded-2xl border-2 ${game.borderColor} animate-pulse`}></div>
          <div className={`absolute inset-1 rounded-2xl border ${game.borderColor} opacity-50`}></div>
        </div>

        {/* Lighting Effects */}
        <div className="absolute inset-0 opacity-30">
          <div className={`absolute top-0 left-1/4 w-32 h-32 bg-white/10 rounded-full blur-2xl 
            transition-transform duration-700 ${isHovered ? 'scale-150' : 'scale-100'}`}></div>
          <div className={`absolute bottom-0 right-1/4 w-24 h-24 bg-white/5 rounded-full blur-xl 
            transition-transform duration-700 ${isHovered ? 'scale-150' : 'scale-100'}`}></div>
        </div>

        {/* Game Icon with Glow */}
        <div className={`absolute ${isMobile ? 'top-3 right-3' : isSmall ? 'top-4 right-4' : 'top-5 right-5'} z-20`}>
          <div className={`${isMobile ? 'w-9 h-9 text-lg' : isSmall ? 'w-11 h-11 text-xl' : 'w-14 h-14 text-2xl'} 
            bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center
            border border-white/20 transition-all duration-300 ${
            isHovered ? 'bg-white/20 scale-110 shadow-lg' : ''
          }`}>
            <span className="drop-shadow-lg">{game.icon}</span>
          </div>
        </div>

        {/* Special Features Badges with Neon Effects */}
        {game.title === 'AVIATOR' && (
          <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-20">
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-3 py-1.5 rounded-full 
              text-xs font-bold flex items-center space-x-1 shadow-lg border border-yellow-300
              animate-pulse hover:animate-none transition-all duration-300">
              <span>💰</span>
              <span>MULTIPLIER</span>
            </div>
          </div>
        )}

        {game.title === 'LIVE PREDICTION' && (
          <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-20">
            <div className="bg-gradient-to-r from-green-400 to-green-500 text-black px-3 py-1.5 rounded-full 
              text-xs font-bold animate-pulse shadow-lg border border-green-300">
              <span>🔴 LIVE</span>
            </div>
          </div>
        )}

        {game.title === 'LUCKY LACE' && (
          <div className="absolute top-3 sm:top-4 left-3 sm:left-4 flex space-x-2 z-20">
            {['🎯', '🎲', '🎪'].map((emoji, i) => (
              <div key={i} className={`w-9 h-9 sm:w-11 sm:h-11 bg-white/10 rounded-xl backdrop-blur-md 
                flex items-center justify-center border border-white/20 transition-all duration-300 hover:scale-105
                ${isHovered ? 'bg-white/20' : ''}`}>
                <span className="text-xs sm:text-sm">{emoji}</span>
              </div>
            ))}
          </div>
        )}

        {/* Enhanced Content Area */}
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 z-20">
          <div className="bg-gradient-to-t from-black/90 via-black/70 to-transparent rounded-t-xl p-4 -m-4 
            backdrop-blur-sm border-t border-white/10">
            
            <div className="flex items-center justify-between">
              <div className="flex-1 min-w-0">
                <h3 className={`text-white font-bold uppercase leading-tight mb-1 ${
                  isMobile ? 'text-sm' : isSmall ? 'text-sm lg:text-base' : 'text-lg lg:text-xl'
                } bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent drop-shadow-lg`}>
                  {game.title}
                </h3>
                {!isMobile && (
                  <p className={`text-gray-300 ${isSmall ? 'text-xs' : 'text-sm'} mt-1`}>
                    {game.subtitle}
                  </p>
                )}
              </div>

              {/* Enhanced Play Button */}
              {!isMobile && (
                <div className={`${isSmall ? 'w-10 h-10' : 'w-12 h-12'} 
                  bg-gradient-to-r from-white/90 to-white/80 hover:from-white hover:to-white/95
                  rounded-full flex items-center justify-center transition-all duration-300 
                  hover:scale-110 ml-3 shadow-lg border border-white/20 group-hover:shadow-xl`}>
                  <svg className={`${isSmall ? 'w-4 h-4' : 'w-5 h-5'} text-gray-800`} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </div>

            {/* Enhanced Special Game Features */}
            {game.title === 'COLOR PREDICTION' && (
              <div className="flex space-x-2 mt-3">
                {['bg-red-500', 'bg-green-500', 'bg-blue-500', 'bg-yellow-500'].map((color, i) => (
                  <div key={i} className={`w-5 h-5  rounded-full border-2 border-white/30 
                    shadow-lg transition-transform duration-300 hover:scale-110`}></div>
                ))}
              </div>
            )}

            {game.title === 'MARBLE RACE' && (
              <div className="flex items-center space-x-3 mt-3">
                <div className="flex space-x-1">
                  {['bg-blue-400', 'bg-red-400', 'bg-yellow-400'].map((color, i) => (
                    <div key={i} className={`w-4 h-4  rounded-full shadow-lg border border-white/20`}></div>
                  ))}
                </div>
                <span className="text-white/60 text-sm">🏁</span>
              </div>
            )}
          </div>
        </div>

        {/* Enhanced Hover Overlay */}
        {!isMobile && isHovered && (
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 
            backdrop-blur-sm flex items-center justify-center z-30 transition-all duration-300">
            <div className="bg-white/10 border border-white/30 rounded-xl px-6 py-3 backdrop-blur-md
              shadow-2xl transform scale-95 hover:scale-100 transition-transform duration-200">
              <span className="text-white font-bold text-lg">Play Now</span>
            </div>
          </div>
        )}

        {/* Mobile Touch Indicator */}
        {isMobile && (
          <div className="absolute top-3 right-3 z-20">
            <div className="w-7 h-7 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm
              border border-white/20">
              <svg className="w-4 h-4 text-white/80" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrendingGamesSection;
