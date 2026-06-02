import React, { useState, useEffect } from 'react';

const AnimatedImageGrid: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const images = [
    {
      src: '/romantic/romantic-1.jpg',
      caption: 'You Make My Heart Smile',
      delay: 0
    },
    {
      src: '/romantic/romantic-2.jpg',
      caption: 'Every Moment Feels Warm',
      delay: 0.2
    },
    {
      src: '/romantic/romantic-3.jpg',
      caption: 'Forever In My Heart',
      delay: 0.4
    },
    {
      src: '/romantic/romantic-4.jpg',
      caption: 'You Are My Everything',
      delay: 0.6
    },
    {
      src: '/romantic/romantic-5.jpg',
      caption: 'Love Beyond Words',
      delay: 0.8
    },
    {
      src: '/romantic/romantic-6.jpg',
      caption: 'Beautiful Like You',
      delay: 1.0
    }
  ];

  const decorativeElements = [
    { emoji: '🌸', top: '10%', left: '5%', delay: 0 },
    { emoji: '💕', top: '15%', left: '85%', delay: 0.5 },
    { emoji: '🦋', top: '25%', left: '15%', delay: 1 },
    { emoji: '✨', top: '35%', left: '90%', delay: 1.5 },
    { emoji: '🌺', top: '45%', left: '8%', delay: 2 },
    { emoji: '💖', top: '55%', left: '92%', delay: 2.5 },
    { emoji: '🌹', top: '65%', left: '12%', delay: 3 },
    { emoji: '🎀', top: '75%', left: '88%', delay: 3.5 },
    { emoji: '🍓', top: '85%', left: '10%', delay: 4 },
    { emoji: '🌟', top: '95%', left: '85%', delay: 4.5 }
  ];

  return (
    <div className="animated-image-grid-container">
      <div className="grid-background-decoration">
        {decorativeElements.map((element, index) => (
          <div
            key={index}
            className="floating-decoration"
            style={{
              top: element.top,
              left: element.left,
              animationDelay: `${element.delay}s`
            }}
          >
            {element.emoji}
          </div>
        ))}
      </div>

      <div className="grid-header">
        <h2 className="grid-title">
          <span className="title-line">You Made</span>
          <span className="title-line">My World</span>
          <span className="title-line">Even More</span>
          <span className="title-line">Beautiful</span>
        </h2>
      </div>

      <div className="image-grid">
        {images.map((image, index) => (
          <div
            key={index}
            className={`grid-item ${hoveredIndex === index ? 'hovered' : ''}`}
            style={{ animationDelay: `${image.delay}s` }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="image-container">
              <img
                src={image.src}
                alt={image.caption}
                className="grid-image"
                loading="eager"
                onError={(event) => {
                  event.currentTarget.src = '/placeholder.svg';
                }}
              />
              <div className="image-overlay">
                <div className="image-hearts">
                  <span className="heart-1">💕</span>
                  <span className="heart-2">💖</span>
                  <span className="heart-3">💕</span>
                </div>
                <p className="image-caption">{image.caption}</p>
              </div>
            </div>
            <div className="item-border"></div>
          </div>
        ))}
      </div>

      
    </div>
  );
};

export default AnimatedImageGrid;