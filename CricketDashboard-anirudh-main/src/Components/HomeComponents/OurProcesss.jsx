import { useState } from 'react';

const OurProcesss = () => {
    const [activeStep, setActiveStep] = useState(null);

    const handleStepClick = (stepIndex) => {
        setActiveStep(activeStep === stepIndex ? null : stepIndex);
    };

    return (
        <section className="process-section">
            <h1 className="section-title">Our Process</h1>
            <p className="section-description">
                Discover how CricketConnect empowers cricketers and coaches to enhance their skills and connect seamlessly.
            </p>

            <div className="steps-container">
                <div className="step">
                    <button className="step-button" onClick={() => handleStepClick(0)}>
                        <span className="step-title">Step 1: Sign Up</span>
                        <svg className={`step-icon ${activeStep === 0 ? 'active' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M19 9l-7 7-7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                    <div className={`step-content ${activeStep === 0 ? 'active' : ''}`}>
                        <p>Create your account and get started with CricketConnect. Fill in your details and preferences to begin your journey.</p>
                    </div>
                </div>

                <div className="step">
                    <button className="step-button" onClick={() => handleStepClick(1)}>
                        <span className="step-title">Step 2: Upload Performance</span>
                        <svg className={`step-icon ${activeStep === 1 ? 'active' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M19 9l-7 7-7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                    <div className={`step-content ${activeStep === 1 ? 'active' : ''}`}>
                        <p>Share your cricket performances through videos and statistics. Track your progress and showcase your skills.</p>
                    </div>
                </div>

                <div className="step">
                    <button className="step-button" onClick={() => handleStepClick(2)}>
                        <span className="step-title">Step 3: Connect with Coaches</span>
                        <svg className={`step-icon ${activeStep === 2 ? 'active' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M19 9l-7 7-7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                    <div className={`step-content ${activeStep === 2 ? 'active' : ''}`}>
                        <p>Find and connect with experienced coaches who can help you improve your game and reach your goals.</p>
                    </div>
                </div>
            </div>

            <div className="get-started">
                <h2 className="get-started-title">Get Started Now</h2>
                <p className="get-started-description">Join CricketConnect and elevate your game today!</p>
                <button className="signup-button">Sign Up</button>
            </div>
        </section>
    );
};

export default OurProcesss;