import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const CasinoGamesInterface = () => {
  const recommendedGames = [
    { 
      id: 1, 
      title: 'LUCKY 5', 
      image: '/api/placeholder/150/200', 
      brand: '',
      bgColor: 'from-yellow-500 to-orange-600'
    },
    { 
      id: 2, 
      title: 'ANDAR BAHAR', 
      image: '/api/placeholder/150/200', 
      brand: 'MACH8 GAMING',
      bgColor: 'from-purple-600 to-purple-800'
    },
    { 
      id: 3, 
      title: 'BACCARAT', 
      image: '/api/placeholder/150/200', 
      brand: 'MACH8 GAMING',
      bgColor: 'from-blue-500 to-blue-700'
    },
    { 
      id: 4, 
      title: 'MUFLIS TEENPATTI', 
      image: '/api/placeholder/150/200', 
      brand: 'MACH8 GAMING',
      bgColor: 'from-red-500 to-red-700'
    },
    { 
      id: 5, 
      title: 'BOLLYWOOD CASINO', 
      image: '/api/placeholder/150/200', 
      brand: '',
      bgColor: 'from-blue-600 to-blue-800'
    },
    { 
      id: 6, 
      title: 'DRAGON TIGER', 
      image: '/api/placeholder/150/200', 
      brand: 'MACH8 GAMING',
      bgColor: 'from-red-500 to-pink-600'
    },
    { 
      id: 7, 
      title: 'DRAGON TIGER 2', 
      image: '/api/placeholder/150/200', 
      brand: 'MACH8 GAMING',
      bgColor: 'from-green-500 to-emerald-600'
    },
    { 
      id: 8, 
      title: 'INSTANT 2 CARDS TEENPATTI', 
      image: '/api/placeholder/150/200', 
      brand: 'MACH8 GAMING',
      bgColor: 'from-purple-600 to-indigo-700'
    },
    { 
      id: 9, 
      title: 'LUCK', 
      image: '/api/placeholder/150/200', 
      brand: 'MACH8 GAMING',
      bgColor: 'from-indigo-500 to-purple-700'
    },
  ];

  const liveCasinoGames = [
    { 
      id: 1, 
      title: 'AUTO-ROULETTE', 
      image: '/api/placeholder/150/200', 
      brand: 'EVOLUTION',
      bgColor: 'from-red-800 to-red-900'
    },
    { 
      id: 2, 
      title: 'CRAZY TIME', 
      image: '/api/placeholder/150/200', 
      brand: 'EVOLUTION',
      bgColor: 'from-green-600 to-green-800'
    },
    { 
      id: 3, 
      title: 'DRAGON TIGER', 
      image: '/api/placeholder/150/200', 
      brand: 'EVOLUTION',
      bgColor: 'from-orange-500 to-red-600'
    },
    { 
      id: 4, 
      title: 'LIGHTNING DICE', 
      image: '/api/placeholder/150/200', 
      brand: 'EVOLUTION',
      bgColor: 'from-blue-500 to-blue-700'
    },
    { 
      id: 5, 
      title: 'LIGHTNING ROULETTE', 
      image: '/api/placeholder/150/200', 
      brand: 'EVOLUTION',
      bgColor: 'from-teal-500 to-cyan-600'
    },
    { 
      id: 6, 
      title: 'RED DOOR ROULETTE', 
      image: '/api/placeholder/150/200', 
      brand: 'EVOLUTION',
      bgColor: 'from-red-600 to-red-800'
    },
    { 
      id: 7, 
      title: 'SPEED BACCARAT A', 
      image: '/api/placeholder/150/200', 
      brand: 'EVOLUTION',
      bgColor: 'from-yellow-600 to-orange-700'
    },
    { 
      id: 8, 
      title: 'SUPER SIC BO', 
      image: '/api/placeholder/150/200', 
      brand: 'EVOLUTION',
      bgColor: 'from-purple-600 to-purple-800'
    },
    { 
      id: 9, 
      title: 'LIGHTNING', 
      image: '/api/placeholder/150/200', 
      brand: 'EVOLUTION',
      bgColor: 'from-blue-400 to-blue-600'
    },
  ];

  return (
    <div className="bg-slate-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        <GameSection 
          title="Recommended Games" 
          games={recommendedGames} 
        />
        
        <GameSection 
          title="Live Casino Games" 
          games={liveCasinoGames} 
        />
      </div>
    </div>
  );
};

const GameSection = ({ title, games }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const containerRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const [cardsPerRow, setCardsPerRow] = useState(9);
  
  // Touch/Swipe state
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  // Enhanced responsive cards per row
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const mobile = width < 768;
      const touch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      
      setIsMobile(mobile);
      setIsTouch(touch);
      
      if (width < 360) {
        setCardsPerRow(2);
      } else if (width < 480) {
        setCardsPerRow(2);
      } else if (width < 640) {
        setCardsPerRow(3);
      } else if (width < 768) {
        setCardsPerRow(4);
      } else if (width < 1024) {
        setCardsPerRow(5);
      } else if (width < 1280) {
        setCardsPerRow(7);
      } else {
        setCardsPerRow(9);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(games.length / cardsPerRow);
  const currentGames = games.slice(
    currentPage * cardsPerRow,
    (currentPage + 1) * cardsPerRow
  );

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    } else if (isMobile || isTouch) {
      // Loop back to first page on mobile/touch devices
      setCurrentPage(0);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    } else if (isMobile || isTouch) {
      // Loop to last page on mobile/touch devices
      setCurrentPage(totalPages - 1);
    }
  };

  // Touch handlers
  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setIsDragging(false);
  };

  const handleTouchMove = (e) => {
    if (!touchStart) return;
    setTouchEnd(e.targetTouches[0].clientX);
    setIsDragging(true);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && currentPage < totalPages - 1) {
      nextPage();
    } else if (isLeftSwipe && currentPage === totalPages - 1) {
      setCurrentPage(0); // Loop to first
    } else if (isRightSwipe && currentPage > 0) {
      prevPage();
    } else if (isRightSwipe && currentPage === 0) {
      setCurrentPage(totalPages - 1); // Loop to last
    }

    setIsDragging(false);
    setTouchStart(null);
    setTouchEnd(null);
  };

  // Mouse drag handlers for desktop
  const handleMouseDown = (e) => {
    if (isMobile) return;
    setTouchStart(e.clientX);
    setTouchEnd(null);
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!touchStart || isMobile) return;
    setTouchEnd(e.clientX);
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    if (isMobile) return;
    handleTouchEnd();
  };

  // Prevent click events when dragging
  const handleCardClick = (e) => {
    if (isDragging) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  // GSAP Animation for page transitions
  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current.children,
        { opacity: 0, y: 20, scale: 0.9 },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1,
          duration: 0.6,
          stagger: 0.05,
          ease: "power2.out"
        }
      );
    }
  }, [currentPage]);

  return (
    <div className="py-4 sm:py-8">
      {/* Section Header */}
      <div className={`flex items-center justify-between mb-4 sm:mb-8 ${isMobile ? 'px-1' : ''}`}>
        <div className="flex items-center flex-1 min-w-0">
          <h2 className="text-white text-lg sm:text-xl lg:text-2xl font-bold truncate">
            {title}
          </h2>
          <div className="ml-2 sm:ml-4 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent flex-1 max-w-32"></div>
        </div>

        {/* Navigation Arrows */}
        {totalPages > 1 && (
          <div className="flex space-x-1 sm:space-x-2 ml-2">
            <button
              onClick={prevPage}
              className="p-1.5 sm:p-2 rounded-full transition-all duration-300 bg-gray-700 hover:bg-gray-600 text-white hover:scale-110"
            >
              <ChevronLeftIcon className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            
            <button
              onClick={nextPage}
              className="p-1.5 sm:p-2 rounded-full transition-all duration-300 bg-gray-700 hover:bg-gray-600 text-white hover:scale-110"
            >
              <ChevronRightIcon className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        )}
      </div>

      {/* Swipeable Container */}
      <div 
        ref={scrollContainerRef}
        className="relative overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        style={{ 
          cursor: isDragging ? 'grabbing' : 'grab',
          touchAction: 'pan-y pinch-zoom',
          userSelect: 'none'
        }}
      >
        {/* Swipe Indicator */}
        {(isMobile || isTouch) && (
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 z-10">
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-2">
              <div className="flex space-x-1">
                <div className="w-1 h-1 bg-white/60 rounded-full"></div>
                <div className="w-1 h-1 bg-white/60 rounded-full"></div>
                <div className="w-1 h-1 bg-white/60 rounded-full"></div>
              </div>
              <span className="text-white/60 text-xs">Swipe</span>
            </div>
          </div>
        )}

        {/* Games Grid */}
        <div 
          ref={containerRef}
          className={`grid ${
            isMobile 
              ? 'gap-2 grid-cols-2 sm:grid-cols-3' 
              : 'gap-3 sm:gap-4'
          }`}
          style={!isMobile ? {
            gridTemplateColumns: `repeat(${Math.min(cardsPerRow, currentGames.length)}, 1fr)`
          } : {}}
          onClick={handleCardClick}
        >
          {currentGames.map((game, index) => (
            <GameCard 
              key={`${game.id}-${currentPage}`}
              game={game} 
              index={index}
              isMobile={isMobile}
              isDragging={isDragging}
            />
          ))}
        </div>
      </div>

      {/* Page Indicators */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-4 sm:mt-8 space-x-1.5 sm:space-x-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                currentPage === index 
                  ? 'bg-cyan-400 scale-125' 
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>
      )}

      {/* Touch Instructions for first time users */}
      {(isMobile || isTouch) && currentPage === 0 && (
        <div className="text-center mt-4">
          <p className="text-white/60 text-xs">
            👆 Swipe left or right to browse games
          </p>
        </div>
      )}
    </div>
  );
};

const GameCard = ({ game, index, isMobile, isDragging }) => {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (cardRef.current) {
      gsap.set(cardRef.current, { opacity: 0, y: 30, scale: 0.8 });
    }
  }, []);

  const handleMouseEnter = () => {
    if (isMobile || isDragging) return;
    setIsHovered(true);
    if (cardRef.current) {
      gsap.to(cardRef.current, {
        scale: 1.05,
        y: -5,
        boxShadow: "0 15px 30px rgba(0,0,0,0.4)",
        duration: 0.3,
        ease: "power2.out"
      });
    }
  };

  const handleMouseLeave = () => {
    if (isMobile || isDragging) return;
    setIsHovered(false);
    if (cardRef.current) {
      gsap.to(cardRef.current, {
        scale: 1,
        y: 0,
        boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
        duration: 0.3,
        ease: "power2.out"
      });
    }
  };

  const handleCardClick = (e) => {
    if (isDragging) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    // Handle game selection here
    console.log('Game selected:', game.title);
  };

  return (
    <div 
      ref={cardRef}
      className={`relative group cursor-pointer ${
        isMobile ? 'aspect-[4/5]' : 'aspect-[3/4]'
      } ${isDragging ? 'pointer-events-none' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleCardClick}
    >
      <div className={`w-full h-full bg-gradient-to-br ${game.bgColor} rounded-lg overflow-hidden shadow-lg transition-transform duration-200`}>
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={game.image}
            alt={game.title}
            className="w-full h-full object-cover opacity-20"
            draggable="false"
          />
        </div>

        {/* Character/Model Image Placeholder */}
        <div className={`absolute top-2 sm:top-4 left-1/2 transform -translate-x-1/2 ${
          isMobile ? 'w-12 h-16' : 'w-16 h-20'
        } bg-white/10 rounded-lg backdrop-blur-sm flex items-center justify-center`}>
          <div className="text-white/60 text-xs">CHAR</div>
        </div>

        {/* Brand Badge */}
        {game.brand && (
          <div className="absolute top-1 sm:top-2 left-1 sm:left-2">
            <span className={`bg-black/60 text-white px-1.5 sm:px-2 py-0.5 sm:py-1 rounded backdrop-blur-sm ${
              isMobile ? 'text-xs' : 'text-xs'
            }`}>
              {isMobile ? game.brand.split(' ')[0] : game.brand}
            </span>
          </div>
        )}

        {/* Game Title */}
        <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
          <h3 className={`text-white font-bold text-center leading-tight uppercase ${
            isMobile ? 'text-xs' : 'text-sm'
          }`}>
            {isMobile && game.title.length > 12 
              ? game.title.substring(0, 12) + '...' 
              : game.title
            }
          </h3>
        </div>

        {/* Hover Play Button - Only on desktop */}
        {!isMobile && !isDragging && (
          <div 
            className={`absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm transition-all duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="bg-white/90 text-gray-800 rounded-full p-3 hover:bg-white transition-colors duration-200 transform hover:scale-110">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        )}

        {/* Mobile Touch Indicator */}
        {isMobile && (
          <div className="absolute top-1 right-1">
            <div className="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
              <svg className="w-3 h-3 text-white/60" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        )}

        {/* Decorative corner elements */}
        <div className="absolute top-0 right-0 w-4 sm:w-8 h-4 sm:h-8 bg-gradient-to-bl from-white/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-4 sm:w-8 h-4 sm:h-8 bg-gradient-to-tr from-white/10 to-transparent"></div>
      </div>
    </div>
  );
};

export default CasinoGamesInterface;
