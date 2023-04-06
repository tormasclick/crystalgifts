import Link from 'next/link';
import Image from 'next/image';

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
            <Link className="navbar-brand" href="/#home">
              <img src="/images/logo2.jpg" alt="Logo" width={200}  />
            </Link>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav navbar-right">
              <li className="active"><Link href="/#home"><span>Home</span></Link></li>
              <li><Link href="/#fh5co-services"><span>Services</span></Link></li>
              {/* <li><Link href="/#pricing"><span>Pricing</span></Link></li> */}
              <li className="call-to-action"><Link className="sign-up" href="https://dashboard.crystalgift.co.ke/index.php/registration"><span>Sign Up</span></Link></li>
              <li className="call-to-action"><Link className="log-in" href="https://dashboard.crystalgift.co.ke/index.php/login"><span>Login</span></Link></li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Headercomp;
