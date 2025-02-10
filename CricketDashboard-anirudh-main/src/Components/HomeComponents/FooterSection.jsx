

const FooterSection = () => {

    return (   
      <>
      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-links">
            <div className="footer-column">
              <h4 >Cricketers</h4>
              <ul>
                <li><a href="#">Cricketers</a></li>
                <li><a href="#">Gallery</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Coaches</h4>
              <ul>
                <li><a href="#">Coaches</a></li>
                <li><a href="#">Blog</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Contact</h4>
              <ul>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>

            <div className="footer-subscribe">
              <h4>Subscribe to Updates</h4>
              <p>Stay informed with the latest cricket news and updates from CricketConnect.</p>
              <div className="subscribe-form">
                <input type="email" placeholder="Enter your email" />
                <button type="submit">Subscribe</button>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© 2025 CricketConnect. All rights reserved.</p>
            <div className="footer-legal">
              <a href="#">Terms and Conditions</a>
              <a href="#">Privacy Policy</a>
            </div>
            <div className="social-links">
              <a href="#" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
      </>
    );
};
export default FooterSection;
