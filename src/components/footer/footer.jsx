import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <p>
            Great platform for the job seeker that’s passionate about startups. Find your dream job easier.
          </p>
        </div>
        <div className="footer-section links">
          <h4>About</h4>
          <ul>
            <li><a href="#companies">Companies</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#terms">Terms</a></li>
            <li><a href="#advice">Advice</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="footer-section resources">
          <h4>Resources</h4>
          <ul>
            <li><a href="#help">Help Docs</a></li>
            <li><a href="#guide">Guide</a></li>
            <li><a href="#updates">Updates</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-section subscribe">
          <h4>Get job notifications</h4>
          <p>The latest job news, articles, sent to your inbox weekly.</p>
          <div className="subscribe-form">
            <input type="email" placeholder="Email Address" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="social-icons">
          <a href="#facebook"><i className="fab fa-facebook-f"></i></a>
          <a href="#instagram"><i className="fab fa-instagram"></i></a>
          <a href="#dribbble"><i className="fab fa-dribbble"></i></a>
          <a href="#linkedin"><i className="fab fa-linkedin-in"></i></a>
          <a href="#twitter"><i className="fab fa-twitter"></i></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
