import React from 'react';

const CricketMoments = () => {
  const images = [
    {
      src: 'Moment1.png',
      alt: 'Team celebration',
      className: 'top-wide'
    },
    {
      src: 'Moment2.png',
      alt: 'Training session',
      className: 'middle'
    },
    {
      src: 'Moment3.png',
      alt: 'Cricket ball close-up',
      className: 'middle'
    },
    {
      src: 'Moment4.png',
      alt: 'Stadium night match',
      className: 'bottom-wide'
    }
  ];

  return (
    <div className="moments-container">
      <div className="moments-header">
        <h2>Cricket Moments</h2>
        <p>Explore our collection of memorable cricketing events and achievements.</p>
      </div>

      <div className="moments-grid">
        {/* Top wide image */}
        <div className="image-container top-wide">
          <img src={`/images/${images[0].src}`} alt={images[0].alt} />
          <div className="overlay"></div>
        </div>

        {/* Middle row images */}
        <div className="middle-row">
          <div className="image-container middle">
            <img src={`/images/${images[1].src}`} alt={images[1].alt} />
            <div className="overlay"></div>
          </div>
          <div className="image-container middle">
            <img src={`/images/${images[2].src}`} alt={images[2].alt} />
            <div className="overlay"></div>
          </div>
        </div>

        {/* Bottom wide image */}
        <div className="image-container bottom-wide">
          <img src={`/images/${images[3].src}`} alt={images[3].alt} />
          <div className="overlay"></div>
        </div>
      </div>

     
    </div>
  );
};

export default CricketMoments;