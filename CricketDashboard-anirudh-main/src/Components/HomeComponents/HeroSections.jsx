import React from "react";
import { useRouter } from "next/router";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap for layout


const HeroSection = () => {

  const router = useRouter();
  const handleLogin=()=>{
    router.push('/SignUpoptions')
  }
  return (
    <div className="hero-wrapper" id="hero-section">
      <div className="hero-content-box">
        
        {/* Left Section - Text */}
        <div className="hero-text">
          <h4 className="hero-title">
            Connect with 
          </h4>
          <h4 className="hero-highlight hero-title">Top Coaches</h4>
          <p className="hero-description">
            Join CricketConnect to enhance your cricket skills with personalized coaching and performance tracking. 
            Upload your history, request coaching, and visualize your progress.
          </p>
          <div className="hero-button-group">
            <button className="hero-btn-primary" onClick={handleLogin}>Get Started</button>
            <button className="hero-btn-outline">Learn More</button>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="hero-image-box">
          <img src="HeroSectionsImage.png" alt="Cricket Player" className="hero-image" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;