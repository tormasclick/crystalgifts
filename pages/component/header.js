import Link from 'next/link';

const Headercomp = () => {
  return (
    <header role="banner" id="fh5co-header">
      <div className="fluid-container">
        <nav className="navbar navbar-default">
          <div className="navbar-header">
            {/* Mobile Toggle Menu Button */}
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link className="navbar-brand" href="/">
              <img src="images/logo2.jpg" style={{ width: '30%' }} />
            </Link>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav navbar-right">
              <li className="active"><Link href="/#home"><span>Home</span></Link></li>
              <li><Link href="/#services"><span>Services</span></Link></li>
              <li><Link href="/#pricing"><span>Pricing</span></Link></li>
              <li className="call-to-action"><Link className="sign-up" href="https://slashdotlabsprojects.com/crystalgift/userapp/index.php/registration"><span>Sign Up</span></Link></li>
              <li className="call-to-action"><Link className="log-in" href="https://www.slashdotlabsprojects.com/crystalgift/userapp/index.php"><span>Login</span></Link></li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Headercomp;
