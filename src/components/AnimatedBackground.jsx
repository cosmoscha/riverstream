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
    const petalColors = [
    'bg-pink-400',
    'bg-pink-300',
    'bg-rose-300',
    'bg-pink-200',
    'bg-blue-400',
    'bg-blue-300',
    'bg-violet-400',
    'bg-violet-300',
  ];
    const randomColor = () => petalColors[Math.floor(Math.random() * petalColors.length)];

  return (
    <div
      className="absolute w-1 h-16 bg-green-700 origin-bottom animate-sway"
      style={{
        animationDelay: `${index * 0.2}s`,
      }}
    >
      <div className="absolute -left-4 -top-4 w-8 h-8">
        {[...Array(5)].map((_, i) => (
          <div
            key={`inner-${i}`}
            className={`absolute w-5 h-5 ${randomColor()} rounded-full animate-petal-sway`}
            style={{
              transform: `rotate(${i * 72}deg) translateY(-6px)`,
              animationDelay: `${i * 0.1}s`,
              zIndex: 2,
            }}
          />
        ))}

        {[...Array(8)].map((_, i) => (
          <div
            key={`outer-${i}`}
            className={`absolute w-6 h-6 ${randomColor()} rounded-full animate-petal-sway`}
            style={{
              transform: `rotate(${i * 45}deg) translateY(-8px)`,
              animationDelay: `${i * 0.1 + 0.05}s`,
              zIndex: 1,
            }}
          />
        ))}

        <div className="absolute left-2 top-2 w-4 h-4 bg-yellow-300 rounded-full z-10" />
      </div>
    </div>
  );
};


const renderSunOrMoon = (isDarkMode) => {
  const sizeMultiplier = 9.0; // 900% scale
  const baseSize = 16;
  const largerSize = baseSize * sizeMultiplier;

  if (isDarkMode) {
    // Render the moon
    return (
      <div
        className="absolute right-12 top-12 z-30"
        style={{
          width: `${largerSize}px`,
          height: `${largerSize}px`,
        }}
      >
        <div
          className="relative w-full h-full bg-gray-300 rounded-full overflow-hidden"
          style={{
            boxShadow: "0 0 40px rgba(255, 255, 255, 0.5)",
          }}
        >
          {/* Irregular Edges - Craters */}
          {Array.from({ length: 20 }).map((_, i) => {
            const size = Math.random() * 0.1 * largerSize; // Crater size
            const x = Math.random() * 100; // Random position within the moon
            const y = Math.random() * 100; // Random position within the moon
            return (
              <div
                key={`moon-crater-${i}`}
                className="absolute bg-gray-400 rounded-full"
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  top: `${y}%`,
                  left: `${x}%`,
                  transform: `translate(-50%, -50%)`,
                  opacity: 0.6,
                }}
              />
            );
          })}

          {/* Dark Crescent for the Moon */}
          <div
            className="absolute bg-gray-900 rounded-full"
            style={{
              width: `${largerSize * 0.9}px`,
              height: `${largerSize * 0.9}px`,
              top: "10%",
              left: "15%",
            }}
          />
        </div>
      </div>
    );
  }

  // Render the sun
  return (
    <div
      className="absolute right-12 top-12"
      style={{
        width: `${largerSize}px`,
        height: `${largerSize}px`,
      }}
    >
      <div className="relative">
        {/* Main Sun Shape */}
        <div
          className="w-full h-full bg-yellow-400 rounded-full animate-spin-slow"
          style={{
            boxShadow: "0 0 120px rgba(255, 223, 0, 0.8)", // Glow effect
          }}
        />

        {/* Radiation Animation */}
        <div className="absolute inset-0">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={`radiation-${i}`}
              className="absolute w-full h-full border border-yellow-300 rounded-full opacity-50"
              style={{
                animation: `radiate ${4 + i}s infinite`,
                transform: `scale(${1.5 + i * 0.5})`,
                zIndex: -1,
              }}
            />
          ))}
        </div>

        {/* Sun Rays */}
        <div className="absolute inset-0">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="absolute bg-yellow-400 left-1/2 -ml-0.5 origin-bottom"
              style={{
                width: `${largerSize * 0.06}px`,
                height: `${largerSize * 0.5}px`,
                transform: `rotate(${i * 30}deg)`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};




  const renderMeadow = () => (
  <div className="absolute inset-0">
    <div className="absolute inset-0 bg-gradient-to-b from-blue-300 to-blue-200" />
    {renderClouds()}
    {renderSunOrMoon(isDarkMode)}
    <div className="absolute bottom-0 w-full h-[30vh] bg-gradient-to-t from-green-600 to-green-500" />
    <div className="absolute bottom-0 w-full">
      {Array.from({ length: 30 }).map((_, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            bottom: `${15 + Math.random() * 15}vh`, // Random vertical placement
            left: `${(i * 6) + Math.random() * 5}%`, // Adjust horizontal spacing
            zIndex: Math.floor(Math.random() * 10),
          }}
        >
          {renderFlower(i)}
        </div>
      ))}
    </div>
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
    <div className="absolute inset-0 overflow-hidden z-20">
      {[...Array(100)].map((_, i) => {
        const baseSize = 1;
        const sizeVariation = baseSize * 0.2;
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

const renderMountains = () => (
 <div className="absolute inset-0" style={{ zIndex: -1000 }}>
   <div className="absolute bottom-0 w-full h-[75vh]">
     {/* Far Mountains */}
     {[...Array(4)].map((_, i) => (
       <div key={`mountain-${i}`}
            className="absolute bottom-0"
            style={{
              left: `${-10 + (i * 30)}%`,
              width: '60%',
              height: '95%',
              zIndex: 1
            }}>
         <div className="w-full h-full bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 clip-mountain transform -skew-x-3 shadow-2xl">
           <div className="absolute inset-0 bg-pattern opacity-30" />
           <div className="absolute top-0 left-0 right-0 h-[25%] bg-gradient-to-b from-white via-slate-100 to-transparent" />
           {[...Array(12)].map((_, j) => (
             <div key={`ridge-${j}`}
                  className="absolute bg-gradient-to-b from-slate-600 to-transparent blur-[0.5px]"
                  style={{
                    width: '2px',
                    left: `${10 + (j * 8)}%`,
                    height: `${40 + Math.random() * 30}%`,
                    top: '30%',
                    transform: `rotate(${80 + Math.random() * 20}deg)`
                  }} />
           ))}
         </div>
       </div>
     ))}

     {/* Middle Range */}
     {[...Array(3)].map((_, i) => (
       <div key={`mid-mountain-${i}`}
            className="absolute bottom-0"
            style={{
              left: `${20 + (i * 35)}%`,
              width: '50%',
              height: '85%',
              zIndex: 2
            }}>
         <div className="w-full h-full bg-gradient-to-br from-slate-600 via-slate-700 to-slate-800 clip-mountain transform skew-x-2 shadow-xl">
           <div className="absolute inset-0 bg-pattern opacity-30" />
           <div className="absolute top-0 left-0 right-0 h-[20%] bg-gradient-to-b from-white via-slate-100 to-transparent" />
           {[...Array(10)].map((_, j) => (
             <div key={`ridge-${j}`}
                  className="absolute bg-gradient-to-b from-slate-500 to-transparent blur-[0.5px]"
                  style={{
                    width: '2px',
                    left: `${15 + (j * 9)}%`,
                    height: `${35 + Math.random() * 35}%`,
                    top: '25%',
                    transform: `rotate(${75 + Math.random() * 25}deg)`
                  }} />
           ))}
         </div>
       </div>
     ))}

     {/* Front Mountains */}
     {[...Array(3)].map((_, i) => (
       <div key={`front-mountain-${i}`}
            className="absolute bottom-0"
            style={{
              left: `${15 + (i * 40)}%`,
              width: '45%',
              height: '70%',
              zIndex: 3
            }}>
         <div className="w-full h-full bg-gradient-to-br from-slate-500 via-slate-600 to-slate-700 clip-mountain shadow-lg">
           <div className="absolute inset-0 bg-pattern opacity-30" />
           <div className="absolute top-0 left-0 right-0 h-[15%] bg-gradient-to-b from-white via-slate-100 to-transparent" />
           {[...Array(8)].map((_, j) => (
             <div key={`ridge-${j}`}
                  className="absolute bg-gradient-to-b from-slate-400 to-transparent blur-[0.5px]"
                  style={{
                    width: '2px',
                    left: `${20 + (j * 10)}%`,
                    height: `${30 + Math.random() * 40}%`,
                    top: '20%',
                    transform: `rotate(${70 + Math.random() * 30}deg)`
                  }} />
           ))}
         </div>
       </div>
     ))}
   </div>
 </div>
);


 const renderTree = (x, height, variation) => (
 <div
   className="absolute origin-bottom animate-tree-sway"
   style={{
     left: `${x}%`,
     bottom: `${25 + Math.random() * 10}vh`,
     animationDelay: `${Math.random() * 4}s`,
     zIndex: 999
   }}
 >
   {[...Array(5)].map((_, i) => (
     <div key={i}>
       {/* Centered trunk */}
       <div
         style={{
           position: 'absolute',
           bottom: 0,
           left: '50%',
           width: '4px',
           height: `${height * 0.4}px`,
           transform: `translateX(-50%) rotate(${-2 + Math.random() * 4}deg)`,
           background: 'linear-gradient(to right, #2d3320, #3d4427, #2d3320)',
           zIndex: 5 - i
         }}
       />
       {/* Tree sections */}
       {[...Array(4)].map((_, j) => {
         const sectionWidth = (20 + variation) * (1 - j * 0.1);
         return (
           <div
             key={`section-${j}`}
             style={{
               position: 'absolute',
               bottom: `${height * (0.2 + j * 0.2)}px`,
               left: '50%',
               width: 0,
               height: 0,
               borderBottom: `${height * (0.3 - j * 0.05)}px solid`,
               borderLeft: `${sectionWidth}px solid transparent`,
               borderRight: `${sectionWidth}px solid transparent`,
               borderBottomColor: `rgba(${30 + i * 5}, ${70 + i * 8}, ${30 + i * 3}, ${1 - i * 0.15})`,
               transform: `translateX(-50%) rotate(${-1 + Math.random() * 2}deg)`,
               filter: `brightness(${1 - j * 0.1})`,
               zIndex: 4 - i
             }}
           />
         );
       })}
       {/* Detail lines */}
       {[...Array(3)].map((_, k) => (
         <div
           key={`detail-${k}`}
           style={{
             position: 'absolute',
             bottom: `${height * 0.4 + k * height * 0.2}px`,
             left: '50%',
             width: '1px',
             height: `${20 + Math.random() * 30}px`,
             background: 'rgba(35, 60, 35, 0.4)',
             transform: `translateX(-50%) rotate(${60 + Math.random() * 60}deg)`,
             zIndex: 6 - i
           }}
         />
       ))}
     </div>
   ))}
 </div>
);


const renderNightScene = () => (
  <div className="relative w-full h-full bg-gray-900" style={{ isolation: 'isolate' }}>
    {/* Replace the moon with the sun */}
    {renderSunOrMoon(isDarkMode)}

    {renderMountains()}
    {renderShootingStars()}

    <div className="absolute inset-0" style={{ zIndex: 4 }}>
      {[...Array(10)].map((_, i) => renderTree(
        Math.random() * 30,
        80 + Math.random() * 60,
        Math.random() * 15
      ))}
      {[...Array(12)].map((_, i) => renderTree(
        30 + Math.random() * 40,
        70 + Math.random() * 50,
        Math.random() * 20
      ))}
      {[...Array(10)].map((_, i) => renderTree(
        70 + Math.random() * 30,
        75 + Math.random() * 55,
        Math.random() * 15
      ))}
    </div>

    <div className="absolute bottom-0 w-full h-[30vh] bg-gradient-to-t from-gray-800 to-gray-900 z-2" />
  </div>
);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {isDarkMode ? renderNightScene() : renderMeadow()}
    </div>
  );
};

export default AnimatedBackground;