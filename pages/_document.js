import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charset="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <title>Crystal Gift</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="Crystal GIFT" />
          <meta name="keywords" content="Gifts, present, sure, kenya, christmas, Crystal" />
          <meta name="author" content="slashdots labs" />

          <meta property="og:title" content="" />
          <meta property="og:image" content="" />
          <meta property="og:url" content="" />
          <meta property="og:site_name" content="" />
          <meta property="og:description" content="" />
          <meta name="twitter:title" content="" />
          <meta name="twitter:image" content="" />
          <meta name="twitter:url" content="" />
          <meta name="twitter:card" content="" /> 
          <link rel="shortcut icon" href="favicon.ico" />
          <link rel="stylesheet" href="css/animate.css" />
          <link rel="stylesheet" href="css/icomoon.css" />
          <link rel="stylesheet" href="css/simple-line-icons.css" /> 
          <link rel="stylesheet" href="css/bootstrap.css" /> 
          <link rel="stylesheet" href="css/owl.carousel.min.css" />
          <link rel="stylesheet" href="css/owl.theme.default.min.css" />
          <link rel="stylesheet" href="css/style.css" />
          <script src="js/modernizr-2.6.2.min.js"></script>
          <script src="js/respond.min.js"></script>

          
	<script src="js/jquery.min.js"></script>
	
	<script src="js/jquery.easing.1.3.js"></script>
	
	<script src="js/bootstrap.min.js"></script>
	
	<script src="js/jquery.waypoints.min.js"></script>
	
	<script src="js/jquery.stellar.min.js"></script>
	
	<script src="js/owl.carousel.min.js"></script>
	
	<script src="js/jquery.countTo.js"></script>
	
	<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCefOgb1ZWqYtj7raVSmN4PL2WkTrc-KyA&sensor=false"></script>
	<script src="js/google_map.js"></script>
	
	<script src="js/main.js"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
