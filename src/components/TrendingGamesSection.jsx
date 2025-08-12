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
      icon: '✈️',
      isLarge: true,
      category: 'Premium'
    },
    {
      id: 2,
      title: 'LIVE PREDICTION',
      subtitle: 'Market Trading',
      image: img2,
      icon: '📈',
      isLarge: true,
      category: 'Live'
    },
    {
      id: 3,
      title: 'LUCKY LACE',
      subtitle: 'Live Casino',
      image: img3,
      icon: '💎',
      isLarge: true,
      category: 'Casino'
    },
    {
      id: 4,
      title: 'COLOR PREDICTION',
      subtitle: 'Color Game',
      image: img4,
      icon: '🎨',
      isSmall: true,
      category: 'Quick'
    },
    {
      id: 5,
      title: 'MARBLE RACE',
      subtitle: 'Racing Game',
      image: img5,
      icon: '🏁',
      isSmall: true,
      category: 'Racing'
    },
    {
      id: 6,
      title: 'MINES',
      subtitle: 'Strategy Game',
      image: img6,
      icon: '💣',
      isSmall: true,
      category: 'Strategy'
    }
  ];

  return (
    <div className="bg-slate-900 py-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 relative z-10">
        <TrendingHeader />
        <TrendingGrid games={trendingGames} />
      </div>
    </div>
  );
};

const TrendingHeader = () => {
  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center space-x-4">
        <h2 className="text-white text-3xl font-bold">Trending Games</h2>
        <div className="px-3 py-1 bg-yellow-400/10 border border-yellow-400/30 rounded-full">
          <span className="text-yellow-400 text-sm font-medium">🔥 Hot</span>
        </div>
      </div>
      <button className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors">
        View All →
      </button>
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
          ease: "power3.out"
        }
      );
    }
  }, []);

  const largeGames = games.filter(game => game.isLarge);
  const smallGames = games.filter(game => game.isSmall);

  if (isMobile) {
    return (
      <div ref={containerRef} className="space-y-4">
        {games.map((game) => (
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
    <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {largeGames.map((game) => (
        <TrendingGameCard 
          key={game.id} 
          game={game} 
          className="col-span-1"
        />
      ))}
      
      <div className="col-span-1 md:col-span-2 lg:col-span-3">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {smallGames.map((game) => (
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
        duration: 0.3,
        ease: "power2.out"
      });
      
      gsap.to(cardRef.current.querySelector('.gif-overlay'), {
        opacity: 0,
        duration: 0.3
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
        duration: 0.3,
        ease: "power2.out"
      });
      
      gsap.to(cardRef.current.querySelector('.gif-overlay'), {
        opacity: 1,
        duration: 0.3
      });
    }
  };

  const cardHeight = isMobile ? 'h-32' : isSmall ? 'h-48' : 'h-64';

  return (
    <div 
      ref={cardRef}
      className={`relative group cursor-pointer ${cardHeight} ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="w-full h-full rounded-3xl overflow-hidden relative">
        
        {/* GIF Background - Full visibility */}
        <div className="absolute inset-0">
          <img 
            src={game.image} 
            alt={game.title}
            className="w-full h-full object-cover"
          />
          
          {/* Subtle dark overlay for text readability */}
          <div className="gif-overlay absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>
        </div>

        {/* Glass morphism border */}
        <div className="absolute inset-0 rounded-3xl border border-white/20 "></div>

        {/* Premium glow effect on hover */}
        <div className={`absolute -inset-1 rounded-3xl transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-400/20 via-purple-400/20 to-pink-400/20 blur-sm"></div>
        </div>

        {/* Category Badge */}
        <div className="absolute top-4 left-4 z-20">
          <div className="px-3 py-1.5 bg-black/40 backdrop-blur-md rounded-full border border-white/20">
            <span className="text-white/90 text-xs font-medium uppercase tracking-wider">
              {game.category}
            </span>
          </div>
        </div>

        {/* Game Icon */}
        <div className={`absolute ${isMobile ? 'top-4 right-4' : 'top-4 right-4'} z-20`}>
          <div className={`${isMobile ? 'w-10 h-10' : isSmall ? 'w-12 h-12' : 'w-14 h-14'} 
            bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center
            border border-white/20 transition-all duration-300 ${
            isHovered ? 'bg-white/20 scale-110' : ''
          }`}>
            <span className={`${isMobile ? 'text-lg' : isSmall ? 'text-xl' : 'text-2xl'}`}>
              {game.icon}
            </span>
          </div>
        </div>

        {/* Special Live Indicator for Live Prediction */}
        {game.title === 'LIVE PREDICTION' && (
          <div className="absolute top-4 right-20 z-20">
            <div className="flex items-center space-x-2 bg-red-500/90 px-3 py-1 rounded-full">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span className="text-white text-xs font-bold">LIVE</span>
            </div>
          </div>
        )}

        {/* Content Area */}
        <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
          <div className="space-y-3">
            
            {/* Title and Subtitle */}
            <div>
              <h3 className={`text-white font-bold uppercase leading-tight ${
                isMobile ? 'text-lg' : isSmall ? 'text-xl' : 'text-2xl'
              }`}>
                {game.title}
              </h3>
              {!isMobile && (
                <p className={`text-white/80 ${isSmall ? 'text-sm' : 'text-base'} mt-1`}>
                  {game.subtitle}
                </p>
              )}
            </div>

            {/* Action Row */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-1">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-6 h-6 bg-gradient-to-br from-white/20 to-white/10 
                      rounded-full border border-white/30 flex items-center justify-center">
                      <span className="text-xs text-white/80">👤</span>
                    </div>
                  ))}
                </div>
                <span className="text-white/60 text-sm font-medium">2.1k playing</span>
              </div>

              {/* Play Button */}
              <button className={`${isMobile ? 'w-10 h-10' : 'w-12 h-12'} 
                bg-white hover:bg-white/90 rounded-full flex items-center justify-center 
                transition-all duration-300 hover:scale-110 shadow-lg`}>
                <svg className={`${isMobile ? 'w-4 h-4' : 'w-5 h-5'} text-slate-900 ml-0.5`} 
                  fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Hover Play Overlay */}
        {!isMobile && isHovered && (
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-30 
            transition-all duration-300 rounded-3xl">
            <div className="bg-white/10 border border-white/30 rounded-2xl px-8 py-4 backdrop-blur-md
              shadow-2xl transform transition-all duration-200 hover:scale-105">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-slate-900 ml-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-white font-bold text-xl">Play Now</span>
              </div>
            </div>
          </div>
        )}

        {/* Corner Accent Lines */}
        <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-white/30 rounded-tl-3xl"></div>
        <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-white/30 rounded-br-3xl"></div>
      </div>
    </div>
  );
};

export default TrendingGamesSection;
