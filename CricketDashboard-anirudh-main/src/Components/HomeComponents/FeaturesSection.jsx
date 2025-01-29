import React from 'react';

const FeaturesSection = () => {
  return (
    <section className="features-section">
      <div className="features-container">
        <div className="features-row">
          {/* Feature 1 */}
          <div className="feature-card">
            <div className="image-wrapper">
              <img
                src="/dashboard-image.jpg" 
                alt="Cricketer using dashboard"
                className="feature-image"
              />
            </div>
            <h3>Personalized Dashboards for Cricketers</h3>
            <p>Cricketers can access tailored dashboards to track their performance, view upcoming matches, and manage coaching requests efficiently.</p>
          </div>

          {/* Feature 2 */}
          <div className="feature-card">
            <div className="image-wrapper">
              <img
                src="/performance-tracking.jpg"
                alt="Performance tracking interface"
                className="feature-image"
              />
            </div>
            <h3>Comprehensive Performance Tracking</h3>
            <p>Coaches and cricketers can analyze performance data through detailed charts, helping to identify strengths and areas for improvement.</p>
          </div>

          {/* Feature 3 */}
          <div className="feature-card">
            <div className="image-wrapper">
              <img
                src="/coaching-session.jpg"
                alt="Coach and player interaction"
                className="feature-image"
              />
            </div>
            <h3>Seamless Coaching Requests</h3>
            <p>Cricketers can easily request coaching sessions from a network of experienced coaches, ensuring personalized training tailored to their needs.</p>
          </div>

          {/* Feature 4 */}
          <div className="feature-card">
            <div className="image-wrapper">
              <img
                src="/progress-report.jpg"
                alt="Detailed progress report"
                className="feature-image"
              />
            </div>
            <h3>Detailed Progress Reports</h3>
            <p>Users receive comprehensive progress reports monthly, quarterly, and annually, providing insights into their development and achievements.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;