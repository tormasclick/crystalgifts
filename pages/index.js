import Footer from './component/footer.js';
import FrontContent from './component/frontcontent.js';
import Headercomp from './component/header.js';
import Shops from './component/shop.js';
import Slider from './component/slider.js';

const Home = () => {
  return (
    <div>
      <Headercomp />
      <Slider />
      <Shops />
      <FrontContent />
      <Footer />
    </div>
  );
};

export default Home;
