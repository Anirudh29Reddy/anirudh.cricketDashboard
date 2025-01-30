import { useEffect, useState } from 'react';

const OurProcesss = (props) => {
    console.log("values",props.value)
    const [count,setCount] = useState(0);

    const handleShow= () =>{
        if(count)
        setCount(count+1);
        else setCount(count-1);

    }
    useEffect(()=>{

    },[count]);

    return <>
     {/* <div className='container-fluid ' >
        <div className='row'> */}
            <div className='container mt-2' style={{borderBottom:(count)?'' : '2px solid black'}}>
                <div className='row'>
                <div className='col-md-10' >
                    <h2 style={{padding:'1%',color:(count)?'blue':''}}>{props.value.question} 
                    </h2>
                </div>
                <div className='col-md-2 '  >
                    <div style={{marginTop:'0%',float:'right'}} onClick={handleShow}>
                        {(count)? <img src='up-arrow.png' width='25%' ></img> : <img src='down-arrow.png' width='25%' ></img>
                    }</div>
                </div>
                </div>
                


                {/* <h2 style={{borderTop:'2px solid black',borderBottom:(count)?'' : '2px solid black',padding:'1%',color:(count)?'blue':''}}>{props.value.question} 
                    <span style={{position:'absolute',marginTop:'-1.2%',float:'right',marginLeft:'40%'}} onClick={handleShow}>
                        {(count)? <img src='up-arrow.png' width='15%' ></img> : <img src='down-arrow.png' width='15%' ></img>
                    }</span>
                </h2> */}
                
                <p style={{marginTop:'0%',marginLeft:'0%',display:(count)?'':'none',borderBottom:(count)?'2px solid black':'',padding:(count)?'1%':'',backgroundColor:'rgb(242, 242, 242,0.2)'}}><span style={{marginLeft:'4%'}}>{props.value.answer}</span></p>
            </div>

            
        {/* </div>
     </div> */}
    </>
        // <section className="process-section">
        //     <h1 className="section-title">Our Process</h1>
        //     <p className="section-description">
        //         Discover how CricketConnect empowers cricketers and coaches to enhance their skills and connect seamlessly.
        //     </p>

        //     <div className="steps-container">
        //         <div className="step">
        //             <button className="step-button" onClick={() => handleStepClick(0)}>
        //                 <span className="step-title">Step 1: Sign Up</span>
        //                 <svg className={`step-icon ${activeStep === 0 ? 'active' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
        //                     <path d="M19 9l-7 7-7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        //                 </svg>
        //             </button>
        //             <div className={`step-content ${activeStep === 0 ? 'active' : ''}`}>
        //                 <p>Create your account and get started with CricketConnect. Fill in your details and preferences to begin your journey.</p>
        //             </div>
        //         </div>

        //         <div className="step">
        //             <button className="step-button" onClick={() => handleStepClick(1)}>
        //                 <span className="step-title">Step 2: Upload Performance</span>
        //                 <svg className={`step-icon ${activeStep === 1 ? 'active' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
        //                     <path d="M19 9l-7 7-7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        //                 </svg>
        //             </button>
        //             <div className={`step-content ${activeStep === 1 ? 'active' : ''}`}>
        //                 <p>Share your cricket performances through videos and statistics. Track your progress and showcase your skills.</p>
        //             </div>
        //         </div>

        //         <div className="step">
        //             <button className="step-button" onClick={() => handleStepClick(2)}>
        //                 <span className="step-title">Step 3: Connect with Coaches</span>
        //                 <svg className={`step-icon ${activeStep === 2 ? 'active' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
        //                     <path d="M19 9l-7 7-7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        //                 </svg>
        //             </button>
        //             <div className={`step-content ${activeStep === 2 ? 'active' : ''}`}>
        //                 <p>Find and connect with experienced coaches who can help you improve your game and reach your goals.</p>
        //             </div>
        //         </div>
        //     </div>

        //     <div className="get-started">
        //         <h2 className="get-started-title">Get Started Now</h2>
        //         <p className="get-started-description">Join CricketConnect and elevate your game today!</p>
        //         <button className="signup-button">Sign Up</button>
        //     </div>
        // </section>
    
};

export default OurProcesss;