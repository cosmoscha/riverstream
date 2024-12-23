import React, { useState, useEffect } from 'react';
import { useTheme } from '../ThemeContext';

const AnimatedBackground = () => {
  const { isDarkMode } = useTheme();
  const [sunPosition, setSunPosition] = useState('top');

  useEffect(() => {
    const positions = ['top', 'left', 'right'];
    setSunPosition(positions[Math.floor(Math.random() * positions.length)]);
  }, []);

  const renderClouds = () => (
    <div className="absolute inset-0 overflow-hidden">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={`cloud-${i}`}
          className="absolute bg-white opacity-90 animate-cloud-drift"
          style={{
            width: `${80 + Math.random() * 60}px`,
            height: `${50 + Math.random() * 30}px`,
            top: `${10 + Math.random() * 20}%`,
            left: `${-20 + (i * 30)}%`,
            animationDelay: `${i * 10}s`,
            animationDuration: `${60 + Math.random() * 30}s`,
            borderRadius: '40px',
            filter: 'blur(4px)'
          }}
        />
      ))}
    </div>
  );

  const renderFlower = (index) => {
    const petalColors = ['bg-pink-400', 'bg-pink-300', 'bg-rose-300', 'bg-pink-200'];
    const randomColor = () => petalColors[Math.floor(Math.random() * petalColors.length)];

    return (
      <div
        className="absolute w-1 h-16 bg-green-700 origin-bottom animate-sway"
        style={{
          animationDelay: `${index * 0.2}s`,
        }}
      >
        <div className="absolute -left-4 -top-4 w-8 h-8">
          {/* Inner Petal Layer (5 petals) */}
          {[...Array(5)].map((_, i) => (
            <div
              key={`inner-${i}`}
              className={`absolute w-5 h-5 ${randomColor()} rounded-full animate-petal-sway`}
              style={{
                transform: `rotate(${i * 72}deg) translateY(-6px)`,
                animationDelay: `${i * 0.1}s`,
                zIndex: 2
              }}
            />
          ))}

          {/* Outer Petal Layer (8 petals) */}
          {[...Array(8)].map((_, i) => (
            <div
              key={`outer-${i}`}
              className={`absolute w-6 h-6 ${randomColor()} rounded-full animate-petal-sway`}
              style={{
                transform: `rotate(${i * 45}deg) translateY(-8px)`,
                animationDelay: `${i * 0.1 + 0.05}s`,
                zIndex: 1
              }}
            />
          ))}

          {/* Flower Center */}
          <div className="absolute left-2 top-2 w-4 h-4 bg-yellow-300 rounded-full z-10" />
        </div>
      </div>
    );
  };

  const renderSun = () => (
    <div className="absolute right-12 top-12">
      <div className="relative">
        <div className="w-16 h-16 bg-yellow-400 rounded-full animate-sun-pulse" />
        <div className="absolute inset-0 animate-spin-slow">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-8 bg-yellow-400 left-1/2 -ml-0.5 origin-bottom"
              style={{ transform: `rotate(${i * 30}deg)` }}
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-yellow-400 rounded-full opacity-30 animate-sun-glow" />
      </div>
    </div>
  );

  const renderMeadow = () => (
    <div className="absolute inset-0">
      {/* Sky Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-300 to-blue-200" />

      {/* Clouds */}
      {renderClouds()}

      {/* Sun */}
      {renderSun()}

      {/* Ground/Grass Base */}
      <div className="absolute bottom-0 w-full h-[30vh] bg-gradient-to-t from-green-600 to-green-500" />

      {/* Flowers */}
      <div className="absolute bottom-0 w-full">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute bottom-[15vh]"
            style={{
              left: `${(i * 8) + Math.random() * 5}%`,
              zIndex: Math.floor(Math.random() * 10)
            }}
          >
            {renderFlower(i)}
          </div>
        ))}
      </div>

      {/* Small Grass Blades */}
      {Array.from({ length: 50 }).map((_, i) => (
        <div
          key={`grass-${i}`}
          className="absolute bottom-0 w-1 bg-green-700 origin-bottom animate-grass-sway"
          style={{
            left: `${Math.random() * 100}%`,
            height: `${6 + Math.random() * 8}vh`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  );

const renderShootingStars = () => (
  <div className="absolute inset-0 overflow-hidden">
    {/* Background static stars */}
    {[...Array(100)].map((_, i) => {
      const baseSize = 1;
      const sizeVariation = baseSize * 0.2; // 20% variation
      const size = baseSize + (Math.random() * sizeVariation);

      return (
        <div
          key={`star-${i}`}
          className="absolute bg-white rounded-full animate-twinkle"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${size}px`,
            height: `${size}px`,
            opacity: Math.random() * 0.7 + 0.3,
            animationDelay: `${Math.random() * 4}s`,
          }}
        />
      );
    })}

    {/* Shooting stars */}
    {[...Array(20)].map((_, i) => {
      const startX = Math.random() * 100;
      const startY = Math.random() * 40;
      const baseSize = 2;
      const sizeVariation = baseSize * 0.2;
      const size = baseSize + (Math.random() * sizeVariation);

      return (
        <div
          key={`shooting-${i}`}
          className="absolute"
          style={{
            top: `${startY}%`,
            left: `${startX}%`,
            width: `${size}px`,
            height: `${size}px`,
            transform: 'rotate(45deg)',
            animation: `shooting-star ${3 + Math.random() * 4}s linear infinite`,
            animationDelay: `${Math.random() * 15}s`,
          }}
        >
          <div
            className="w-full h-full bg-white rounded-full"
            style={{
              boxShadow: `
                0 0 0 ${size}px rgba(255,255,255,0.1),
                0 0 0 ${size * 1.5}px rgba(255,255,255,0.05),
                0 0 ${size * 4}px rgba(255,255,255,0.9),
                0 0 ${size * 8}px rgba(255,255,255,0.5),
                0 0 ${size * 12}px rgba(255,255,255,0.3)
              `
            }}
          />
        </div>
      );
    })}
  </div>
);

  const renderNightScene = () => {
    const renderTree = (x, height, variation) => (
      <div
        className="absolute bottom-[30vh] origin-bottom animate-tree-sway"
        style={{
          left: `${x}%`,
          animationDelay: `${Math.random() * 4}s`
        }}
      >
        <div
          style={{
            width: 0,
            height: 0,
            borderBottom: `${height}px solid rgba(26, 71, 42, 0.4)`,
            borderLeft: `${30 + variation}px solid transparent`,
            borderRight: `${30 + variation}px solid transparent`,
            filter: 'brightness(0.7)',
            transformOrigin: 'bottom'
          }}
        />
      </div>
    );

    return (
      <div className="relative w-full h-full bg-gray-900">
        {/* Crescent Moon */}
        <div className="absolute right-12 top-12">
          <div className="relative w-24 h-24">
            <div className="absolute w-24 h-24 bg-gray-300 rounded-full" />
            <div
              className="absolute w-20 h-20 bg-gray-900 rounded-full"
              style={{
                top: '4px',
                left: '8px'
              }}
            />
          </div>
        </div>

        {/* Shooting Stars */}
        {renderShootingStars()}

        {/* Forest */}
        {/* Dense left forest group */}
        {[...Array(15)].map((_, i) =>
          renderTree(
            5 + (i * 3),
            100 + Math.random() * 80,
            Math.random() * 20
          )
        )}
        {/* Middle scattered group */}
        {[...Array(20)].map((_, i) =>
          renderTree(
            35 + (i * 2),
            80 + Math.random() * 100,
            Math.random() * 25
          )
        )}
        {/* Dense right forest group */}
        {[...Array(15)].map((_, i) =>
          renderTree(
            70 + (i * 3),
            90 + Math.random() * 90,
            Math.random() * 20
          )
        )}

        {/* Ground */}
        <div className="absolute bottom-0 w-full h-[30vh] bg-gradient-to-t from-gray-800 to-gray-900" />
      </div>
    );
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {isDarkMode ? renderNightScene() : renderMeadow()}
    </div>
  );
};

export default AnimatedBackground;