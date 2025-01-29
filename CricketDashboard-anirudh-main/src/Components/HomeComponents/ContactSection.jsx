import React from 'react';

const ContactSection = () => {
  return (
    <>
      {/* Contact Info Section */}
      <section className="contact-section">
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
            <p>We welcome you to visit us at our office located at <strong>123 Cricket Lane, Los Angeles, CA 90001, United States</strong>. Feel free to stop by for any inquiries or to learn more about our services.</p>
          </div>
        </div>

        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26447.276407874!2d-118.24317!3d34.052235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA!5e0!3m2!1sen!2sus!4v1234567890"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          />
        </div>
      </section>



      
    </>
  );
};

export default ContactSection;