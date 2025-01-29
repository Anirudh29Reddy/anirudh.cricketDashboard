import React, { useState, useEffect, useRef } from 'react';

const CricketStats = (options = {}) => {
    const statNumbersRef = useRef([]);
    
    const animateValue = (obj, start, end, duration) => {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            obj.innerHTML = Math.floor(progress * (end - start) + start);
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    };

    useEffect(() => {
        // Intersection Observer for triggering animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = entry.target;
                    const value = parseInt(target.getAttribute('data-value'));
                    animateValue(target, 0, value, 2000);
                    observer.unobserve(target);
                }
            });
        }, { threshold: 0.5 });

        // Observe all number elements
        statNumbersRef.current.forEach(number => {
            observer.observe(number);
        });

        // Cleanup observer on component unmount
        return () => {
            statNumbersRef.current.forEach(number => {
                observer.unobserve(number);
            });
        };
    }, []);

    return (
        <div className="stats-container">
            <div className="stats-content-grid">
                {/* Left side - Image */}
                <div className="col-6">
                    <div className="stats-image-section">
                        <img src="/api/placeholder/600/400" alt="Cricket players celebrating" className="stats-hero-image" />
                    </div>
                </div>

                {/* Right side - Content */}
                <div className="col-6">
                    <div className="stats-content-section">
                        <h1 className="stats-main-title">Connecting Cricketers and Coaches</h1>

                        <p className="stats-description">
                            At CricketConnect, we are dedicated to enhancing the performance
                            of cricketers and coaches through our innovative platform. Our
                            mission is to empower users with personalized tools and resources
                            for growth and success.
                        </p>

                        <div className="stats-grid">
                            {/* Users */}
                            <div className="stat-card">
                                <div
                                    ref={(el) => statNumbersRef.current[0] = el}
                                    className="stat-number"
                                    data-value="5000">5000</div>
                                <h3 className="stat-title">Users</h3>
                                <p className="stat-description">
                                    Join our community of over 5,000 users who are transforming
                                    their cricketing journey.
                                </p>
                            </div>

                            {/* Coaches */}
                            <div className="stat-card">
                                <div
                                    ref={(el) => statNumbersRef.current[1] = el}
                                    className="stat-number"
                                    data-value="200">200</div>
                                <h3 className="stat-title">Coaches</h3>
                                <p className="stat-description">
                                    We proudly feature 200 experienced coaches ready to guide you
                                    in your cricketing endeavors.
                                </p>
                            </div>

                            {/* Matches */}
                            <div className="stat-card">
                                <div
                                    ref={(el) => statNumbersRef.current[2] = el}
                                    className="stat-number"
                                    data-value="100">100</div>
                                <h3 className="stat-title">Matches</h3>
                                <p className="stat-description">
                                    CricketConnect has facilitated over 100 matches and training
                                    sessions, bridging the gap between aspiring players and
                                    seasoned professionals.
                                </p>
                            </div>

                            {/* Years */}
                            <div className="stat-card">
                                <div
                                    ref={(el) => statNumbersRef.current[3] = el}
                                    className="stat-number"
                                    data-value="5">5</div>
                                <h3 className="stat-title">Years</h3>
                                <p className="stat-description">
                                    Founded in 2023, we have quickly established ourselves as a
                                    trusted platform in the cricket community.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CricketStats;
