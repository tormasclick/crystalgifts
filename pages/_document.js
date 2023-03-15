import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
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
          <link rel="stylesheet" href="/css/animate.css" />
          <link rel="stylesheet" href="/css/icomoon.css" />
          <link rel="stylesheet" href="/css/simple-line-icons.css" /> 
          <link rel="stylesheet" href="/css/bootstrap.css" /> 
          <link rel="stylesheet" href="/css/owl.carousel.min.css" />
          <link rel="stylesheet" href="/css/owl.theme.default.min.css" />
          <link rel="stylesheet" href="/css/style.css" />
          <script src="/js/modernizr-2.6.2.min.js" async></script>
          <script src="/js/respond.min.js" async></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="/js/jquery.easing.1.3.js" defer></script>
          <script src="/js/bootstrap.min.js" defer></script>
          <script src="/js/jquery.waypoints.min.js" defer></script>
          <script src="/js/jquery.stellar.min.js" defer></script>
          <script src="/js/owl.carousel.min.js" defer></script>
          <script src="/js/main.js" defer></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
