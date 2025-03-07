import React from 'react';

const ContactSection = () => {
  return (
    <>
      {/* Contact Info Section */}
      <section className="contact-section" id='ContactsSection'>
        <div className="contact-container">
          <div className="contact-item">
            <div className="icon">✉</div>
            <h3>Email Us</h3>
            <p>For any inquiries or support, please reach out to us at <a href="mailto:support@cricketconnect.com">support@cricketconnect.com</a>. Our team is here to assist you with any questions you may have regarding our platform or services.</p>
          </div>

          <div className="contact-item">
            <div className="icon">📞</div>
            <h3>Call Us</h3>
            <p>You can contact us directly at <strong>+1 (555) 123-4567</strong>. We are available to take your calls and provide assistance during our business hours.</p>
          </div>

          <div className="contact-item">
            <div className="icon">📍</div>
            <h3>Visit Us</h3>
            <p>We welcome you to visit us at our office located at <strong>The Yorkshire County Cricket Club Limited,Headingley Stadium,Leeds,LS6 3DP,United Kingdom</strong>. Feel free to stop by for any inquiries or to learn more about our services.</p>
          </div>
        </div>

        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2355.414167226775!2d-1.5868871570306957!3d53.81770740134214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48795935cb42fba3%3A0x3025f506d8ec0c67!2sYorkshire%20Cricket%20Ground%2C%20Headingley%2C%20Leeds%2C%20UK!5e0!3m2!1sen!2sin!4v1740103323221!5m2!1sen!2sin" 
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          />
          {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9584843.531718284!2d-14.999924678711045!3d54.090594349302606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x25a3b1142c791a9%3A0xc4f8a0433288257a!2sUnited%20Kingdom!5e0!3m2!1sen!2sin!4v1740103190725!5m2!1sen!2sin" 
          width="100%" 
          height="450" 
          style={{border:0}}
          allowfullscreen="" 
          loading="lazy" >

          </iframe> */}

        
       
        </div>
      </section>



      
    </>
  );
};

export default ContactSection;