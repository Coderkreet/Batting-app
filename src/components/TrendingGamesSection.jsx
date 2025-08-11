import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const TrendingGamesSection = () => {
  const trendingGames = [
    {
      id: 1,
      title: 'AVIATOR',
      subtitle: 'Crash Game',
      image: '/api/placeholder/300/200',
      bgColor: 'from-red-600 to-red-800',
      icon: '✈️',
      isLarge: true
    },
    {
      id: 2,
      title: 'LIVE PREDICTION',
      subtitle: 'Market Trading',
      image: '/api/placeholder/300/200',
      bgColor: 'from-green-600 to-green-800',
      icon: '📈',
      isLarge: true
    },
    {
      id: 3,
      title: 'LUCKY LACE',
      subtitle: 'Live Casino',
      image: '/api/placeholder/300/200',
      bgColor: 'from-purple-600 to-purple-800',
      icon: '💎',
      isLarge: true
    },
    {
      id: 4,
      title: 'COLOR PREDICTION',
      subtitle: 'Color Game',
      image: '/api/placeholder/150/150',
      bgColor: 'from-blue-600 to-blue-800',
      icon: '🎨',
      isSmall: true
    },
    {
      id: 5,
      title: 'MARBLE RACE',
      subtitle: 'Racing Game',
      image: '/api/placeholder/150/150',
      bgColor: 'from-orange-600 to-orange-800',
      icon: '🏁',
      isSmall: true
    },
    {
      id: 6,
      title: 'MINES',
      subtitle: 'Strategy Game',
      image: '/api/placeholder/150/150',
      bgColor: 'from-teal-600 to-teal-800',
      icon: '💣',
      isSmall: true
    }
  ];

  return (
    <div className="bg-slate-900 py-4 sm:py-8">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        <TrendingHeader />
        <TrendingGrid games={trendingGames} />
      </div>
    </div>
  );
};

const TrendingHeader = () => {
  return (
    <div className="flex items-center mb-4 sm:mb-6">
      <h2 className="text-white text-lg sm:text-xl lg:text-2xl font-bold">
        Trending Games
      </h2>
      <div className="ml-3 sm:ml-4 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent flex-1 max-w-40"></div>
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
        { opacity: 0, y: 30, scale: 0.9 },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out"
        }
      );
    }
  }, []);

  const largeGames = games.filter(game => game.isLarge);
  const smallGames = games.filter(game => game.isSmall);

  if (isMobile) {
    return (
      <div ref={containerRef} className="space-y-3">
        {/* Mobile: Stack all games vertically */}
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
    <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
      {/* Large Games - Top Row */}
      {largeGames.map((game, index) => (
        <TrendingGameCard 
          key={game.id} 
          game={game} 
          className="col-span-1"
        />
      ))}
      
      {/* Small Games - Bottom Row */}
      <div className="col-span-1 md:col-span-2 lg:col-span-3">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
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
        scale: 1.03,
        y: -8,
        boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
        duration: 0.3,
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
        boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
        duration: 0.3,
        ease: "power2.out"
      });
    }
  };

  const cardHeight = isMobile ? 'h-24' : isSmall ? 'h-32 sm:h-40' : 'h-40 sm:h-48 lg:h-56';

  return (
    <div 
      ref={cardRef}
      className={`relative group cursor-pointer ${cardHeight} ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`w-full h-full bg-gradient-to-br ${game.bgColor} rounded-xl overflow-hidden shadow-lg relative`}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full transform translate-x-16 -translate-y-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full transform -translate-x-12 translate-y-12"></div>
        </div>

        {/* Game Icon */}
        <div className={`absolute ${isMobile ? 'top-2 right-2' : isSmall ? 'top-3 right-3' : 'top-4 right-4'}`}>
          <div className={`${isMobile ? 'w-8 h-8 text-lg' : isSmall ? 'w-10 h-10 text-xl' : 'w-12 h-12 text-2xl'} 
            bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center`}>
            <span>{game.icon}</span>
          </div>
        </div>

        {/* Special Features Badges */}
        {game.title === 'AVIATOR' && (
          <div className="absolute top-2 sm:top-3 left-2 sm:left-3">
            <div className="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
              <span>💰</span>
              <span>MULTIPLIER</span>
            </div>
          </div>
        )}

        {game.title === 'LIVE PREDICTION' && (
          <div className="absolute top-2 sm:top-3 left-2 sm:left-3">
            <div className="bg-green-400 text-black px-2 py-1 rounded-full text-xs font-bold animate-pulse">
              <span>🔴 LIVE</span>
            </div>
          </div>
        )}

        {game.title === 'LUCKY LACE' && (
          <div className="absolute top-2 sm:top-3 left-2 sm:left-3 flex space-x-1">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-lg backdrop-blur-sm flex items-center justify-center">
              <span className="text-xs sm:text-sm">🎯</span>
            </div>
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-lg backdrop-blur-sm flex items-center justify-center">
              <span className="text-xs sm:text-sm">🎲</span>
            </div>
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-lg backdrop-blur-sm flex items-center justify-center">
              <span className="text-xs sm:text-sm">🎪</span>
            </div>
          </div>
        )}

        {/* Character/Model for large cards */}
        {!isSmall && !isMobile && (
          <div className="absolute bottom-16 right-4 w-20 h-24 lg:w-24 lg:h-28">
            <div className="w-full h-full bg-white/10 rounded-lg backdrop-blur-sm flex items-center justify-center">
              <span className="text-white/60 text-xs">MODEL</span>
            </div>
          </div>
        )}

        {/* Game Title and Info */}
        <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
          <div className="flex items-center justify-between">
            <div className="flex-1 min-w-0">
              <h3 className={`text-white font-bold uppercase leading-tight ${
                isMobile ? 'text-sm' : isSmall ? 'text-sm lg:text-base' : 'text-lg lg:text-xl'
              }`}>
                {game.title}
              </h3>
              {!isMobile && (
                <p className={`text-white/80 ${isSmall ? 'text-xs' : 'text-sm'} mt-1`}>
                  {game.subtitle}
                </p>
              )}
            </div>

            {/* Play Button */}
            {!isMobile && (
              <div className={`${isSmall ? 'w-8 h-8' : 'w-10 h-10'} 
                bg-white/90 hover:bg-white rounded-full flex items-center justify-center 
                transition-all duration-200 hover:scale-110 ml-2`}>
                <svg className={`${isSmall ? 'w-4 h-4' : 'w-5 h-5'} text-gray-800`} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </div>
            )}
          </div>

          {/* Special game features */}
          {game.title === 'COLOR PREDICTION' && (
            <div className="flex space-x-1 mt-2">
              <div className="w-4 h-4 bg-red-500 rounded-full border border-white/50"></div>
              <div className="w-4 h-4 bg-green-500 rounded-full border border-white/50"></div>
              <div className="w-4 h-4 bg-blue-500 rounded-full border border-white/50"></div>
              <div className="w-4 h-4 bg-yellow-500 rounded-full border border-white/50"></div>
            </div>
          )}

          {game.title === 'MARBLE RACE' && (
            <div className="flex items-center space-x-2 mt-2">
              <div className="flex space-x-1">
                <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              </div>
              <span className="text-white/60 text-xs">🏁</span>
            </div>
          )}
        </div>

        {/* Hover Overlay */}
        {!isMobile && isHovered && (
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center">
            <div className="bg-white/10 border border-white/30 rounded-lg px-4 py-2 backdrop-blur-sm">
              <span className="text-white font-medium">Play Now</span>
            </div>
          </div>
        )}

        {/* Mobile Touch Indicator */}
        {isMobile && (
          <div className="absolute top-2 right-2">
            <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <svg className="w-3 h-3 text-white/80" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        )}

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-white/10 to-transparent rounded-br-full"></div>
        <div className="absolute bottom-0 right-0 w-12 h-12 bg-gradient-to-tl from-white/5 to-transparent rounded-tl-full"></div>
      </div>
    </div>
  );
};

export default TrendingGamesSection;
