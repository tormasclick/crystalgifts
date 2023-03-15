const Footer = () => {
  return (
    <div id="fh5co-footer" role="contentinfo">
      <div className="container">
        <div className="row">
          <div className="col-md-4 to-animate">
            <h3 className="section-title">About Us</h3>
            <p>
              We are a company that specializes in creating, processing and
              delivering digital gifts to your loved ones. Whether you&apos;re
              looking to surprise a friend, family member, or colleague, we&apos;ve
              got you covered with a wide range of digital gift options to
              choose from.
            </p>
          </div>

          <div className="col-md-4 to-animate">
            <h3 className="section-title">Our Address</h3>
            <ul className="contact-info">
              <li>
                <i className="icon-map-marker"></i>198 Westlands, Suite 10
                Nairobi
              </li>
              <li>
                <i className="icon-phone"></i>+ 254 071 234 597 98
              </li>
              <li>
                <i className="icon-envelope"></i>
                <a href="#">info@crystalgift.com</a>
              </li>
            </ul>
          </div>

          <div className="col-md-4 to-animate">
            <h3 className="section-title">Connect with Us</h3>
            <ul className="social-media">
              <li>
                <a href="#" className="facebook">
                  <i className="icon-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#" className="twitter">
                  <i className="icon-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#" className="dribbble">
                  <i className="icon-dribbble"></i>
                </a>
              </li>
              <li>
                <a href="#" className="github">
                  <i className="icon-github-alt"></i>
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-12 to-animate">
            <p className="copy-right">&copy;Crystal Gift. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
