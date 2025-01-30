import { useEffect, useState } from 'react';

export default function CricketConnect() {
    const [users, setUsers] = useState(0);
    const [coaches, setCoaches] = useState(0);
    const [matches, setMatches] = useState(0);
    const [years, setYears] = useState(0);

    useEffect(() => {
        const animateCount = (setter, target) => {
            let count = 0;
            const interval = setInterval(() => {
                if (count >= target) {
                    clearInterval(interval);
                } else {
                    count += Math.ceil(target / 100);
                    setter(count);
                }
            }, 20);
        };

        animateCount(setUsers, 5000);
        animateCount(setCoaches, 200);
        animateCount(setMatches, 100);
        animateCount(setYears, 5);
    }, []);

    return (
        <>
        

            <div className="statistic-container">
                <div className="statistic-image-container">
                    <img src="StstsImage.png" alt="Cricket" className="statistic-image" />
                </div>
                <div className="statistic-content">
                    <h1 className='statistic-content-Heading'>Connecting Cricketers and Coaches</h1>
                    <p className='statistic-content-para'>
                    At CricketConnect, we are dedicated to enhancing the performance of cricketers and coaches through our innovative platform. Our mission is to empower users with personalized tools and resources for growth and success.                        </p>
                    <div className="statistic-stats">
                        <div>
                            <h3 className="statistic-count">{users} Users</h3>
                            <p>Join our community of over 5, 000 users who are transforming their cricketing journey.</p>
                        </div>
                        <div>
                            <h3 className="statistic-count">{coaches} Coaches</h3>
                            <p>We proudly feature 200 experienced coaches ready to guide you in your cricketing endeavors.</p>
                        </div>
                        <div>
                            <h3 className="statistic-count">{matches} Matches</h3>
                            <p>CricketConnect has facilitated over 100 matches and training sessions, bridging the gap between aspiring players and seasoned professionals.</p>
                        </div>
                        <div>
                            <h3 className="statistic-count">{years} Years</h3>
                            <p>Founded in 2023, we have quickly established ourselves as a trusted platform in the cricket community.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
