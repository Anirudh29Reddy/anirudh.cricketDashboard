import { useState } from 'react';
import { useRouter } from "next/router";

const faqs = [
  {
    question: 'Step 1: Sign Up',
    answer: 'Create your personalized account to access tailored features and resources.'
  },
  {
    question: 'Step 2: Upload Performance',
    answer: 'Cricketers can upload their performance history for better coaching insights.'
  },
  {
    question: 'Step 3: Connect with Coaches',
    answer: 'Request coaching from professionals and track your progress through your dashboard.'
  }
];

const OurProcesss = () => {
  // Track expanded state for each step
  const [expanded, setExpanded] = useState(faqs.map(() => false));

  // Toggle expansion
  const handleShow = (index) => {
    setExpanded(expanded.map((item, i) => (i === index ? !item : item)));
  };
  const router = useRouter();
  const GetStarted=()=>{
    router.push('/SignUpoptions')
  }

  return (
    <div style={{ width: '90%', margin: '0 auto', fontFamily: 'sans-serif' }}>
      {/* Heading Section */}
      <div style={{ marginBottom: '50px', textAlign: 'left' }}>
        <h2 style={{ margin: 0 ,fontSize:'40px'}}>Our Process</h2>
        <p style={{ margin: '5px 0 0' }}>
          Discover how CricketConnect empowers cricketers and coaches to enhance their skills
          and connect seamlessly.
        </p>
      </div>

      {/* FAQ Steps (Top Section) */}
      <div>
        {faqs.map((step, index) => (
          <div
            key={index}
            style={{
              borderBottom: '1px solid black',
              padding: '10px 0',
              marginBottom: '10px'
            }}
          >
            {/* Step Question & Toggle Icon */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                cursor: 'pointer'
              }}
              onClick={() => handleShow(index)}
            >
              <h5
                style={{
                  margin: 0,
                  fontWeight: 'normal',
                  color: expanded[index] ? 'blue' : 'inherit'
                }}
              >
                {step.question}
              </h5>
              {/* Simple Square Icon - replace with an <img> or any other icon if desired */}
              <span style={{ fontSize: '2rem' }}>
                {expanded[index] ? '□' : '□'}
              </span>
            </div>

            {/* Step Answer (shown only if expanded) */}
            {expanded[index] && (
              <p style={{ marginTop: '10px', marginBottom: 0 }}>
                {step.answer}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* "Get Started Now" Section (Next Row) */}
      <div style={{ marginTop: '60px', textAlign: 'left',marginBottom:'50px' }}>
        <h2 style={{ margin: '0 0 10px',fontSize:'40px', }}>Get Started Now</h2>
        <p style={{ margin: '0 0 20px' }}>
          Join CricketConnect and elevate your game today!
        </p>
        <button
          style={{
            backgroundColor: '#3456da',
            color: '#fff',
            border: 'none',
            padding: '10px 20px',
            cursor: 'pointer',
          
          }}  onClick={GetStarted}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default OurProcesss;