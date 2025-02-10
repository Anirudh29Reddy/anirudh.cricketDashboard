import React from 'react';

const CricketMoments = () => {
  const images = [
    {
      src: '/Moment1.png',
      alt: 'Team celebration',
      className: 'top-wide'
    },
    {
      src: '/Moment2.png',
      alt: 'Training session',
      className: 'middle'
    },
    {
      src: '/Moment3.png',
      alt: 'Cricket ball close-up',
      className: 'middle'
    },
    {
      src: '/Moment4.png',
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

      <div className="moments-gallery">
        <div className="row">
          {/* <div className='col-0'></div> */}
          <div className='col-8'>
             {/* Top wide image */}
            <div className="moments-image-container top-wide">
              <img src={images[0].src} alt={images[0].alt} loading="lazy" />
              <div className="overlay"></div>
            </div>
          </div>
          <div className='col-4'>
             {/* top Middle 1 image */}
            <div className="moments-image-container middle">
              <img src={images[1].src} alt={images[1].alt} loading="lazy" />
              <div className="overlay"></div>
            </div>
          </div>
          {/* <div className='col-1'></div> */}
         
        </div>


        <div className="row">
          {/* <div className='col-1'></div> */}
          <div className='col-4'>
            {/* Middle 2 image */}
          <div className="moments-image-container middle">
            <img src={images[2].src} alt={images[2].alt} loading="lazy" />
            <div className="overlay"></div>
          </div>
          </div>
          <div className='col-8'>
             {/* Bottom wide image */}
          <div className="moments-image-container bottom-wide">
            <img src={images[3].src} alt={images[3].alt} loading="lazy" />
            <div className="overlay"></div>
          </div>
          </div>
          {/* <div className='col-1'></div> */}
         
        </div>

      </div>
    </div>
  );
};

export default CricketMoments;
