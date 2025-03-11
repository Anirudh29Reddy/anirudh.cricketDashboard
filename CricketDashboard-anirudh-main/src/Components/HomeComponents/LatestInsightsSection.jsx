import React from 'react';

const LatestInsightsSection = () => {
  const articles = [
    {
      category: 'Training Techniques',
      title: 'Maximizing Performance: The Role of Data in Cricket Training',
      description: 'Discover how data analytics can transform cricket training for players and coaches.',
      image: 'MaximizePerformance.png'
    },
    {
      category: 'Performance Analysis',
      title: 'The Importance of Mental Toughness in Cricket',
      description: 'Explore the significance of mental resilience for cricketers and how to develop it.',
      image: 'MentalThoughts.png'
    },
    {
      category: 'Coaching',
      title: 'Effective Coaching Strategies for Young Cricketers',
      description: 'Learn about coaching techniques that can inspire and develop young cricket talent.',
      image: 'EffectiveCoaching.png'
    },
    {
      category: 'Technology in Sports',
      title: 'The Evolution of Cricket Technology: A Game Changer',
      description: 'Explore how technology is reshaping the landscape of cricket training and performance.',
      image: 'EvolutionOfCricket.png'
    }
  ];

  return (
    <div className="insights-section" id='LatestInsightsSection'>
      <div className="Insights-header">
      <div className="Insights-header1">
      <h2>Latest Insights</h2>
      <p>Discover how CricketConnect empowers cricketers and coaches to enhance their skills and connect seamlessly.</p>
      </div>
       
        <button className="read-more-btn">Read More</button>
      </div>

      <div className="articles-grid">
        {articles.map((article, index) => (
          <div key={index} className="article-card">
            <div className="image-container">
              <img src={article.image} alt={article.title} />
              <div className="overlay"></div>
            </div>
            
            <div className="content">
              <p className="category">{article.category}</p>
              <h3 className="title">{article.title}</h3>
              <p className="description">{article.description}</p>
              <button className="article-btn">Read More →</button>
            </div>
          </div>
        ))}
      </div>

     
    </div>
  );
};

export default LatestInsightsSection;