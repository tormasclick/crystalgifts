import styles from './Slider.module.css';

const Slider = () => {
  return (
    <section
      id="fh5co-home"
      data-section="home"
      style={{
        backgroundImage: "url('/images/full_image_3.jpg')",
      }}
      data-stellar-background-ratio="0.5"
      className={styles.slider}
    >
      <div className={styles.gradient}></div>
      <div className="container">
        <div className="text-wrap">
          <div className="text-inner">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 text-center">
                <div className="caption">
                <h1 className="to-animate">
                  Each day provides its own <span>Gifts</span>
                </h1>
                <h2 className="to-animate">
                  100% Digital Gifting{' '}
                  <a href="#" target="_blank">
                    CORPORATE GIFTING SEASON IS
                  </a>{' '}
                  <br /> HERE WITH US!{' '}
                </h2>
                </div>
                <div className="call-to-action">
                  <a
                    href="https://shop.crystalgift.co.ke/index.php/login"
                    className="demo to-animate"
                  >
                    <i className="icon-login"></i> login
                  </a>
                  <a
                    href="https://shop.crystalgift.co.ke/index.php/registration"
                    className="download to-animate"
                  >
                    <i className="icon-registered"></i> Sign up
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
