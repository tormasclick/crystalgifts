import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';

const Shops = () => {
  const [shops, setShops] = useState([]);

  useEffect(() => {
    axios.get('https://www.crystalgift.co.ke/hook/connect.php')
      .then(response => {
        setShops(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const showMoreShops = () => {
    // TODO: Implement show more shops functionality
  }

  return (
    <section id="fh5co-pricing" data-section="pricing">
      <div className="fh5co-pricing">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2>Gift Shops</h2>
              <p>Showing {shops.slice(0, 4).length} out of {shops.length} shops</p>
            </div>
          </div>
          <div className="row">
            {shops.slice(0, 4).map(shop => (
              <div key={shop.id} className="col-md-3 col-sm-6">
                <div className="price-box to-animate">
                  <div className="price"><sup className="currency"></sup></div>
                  <p className="business_name">{shop.business_name}</p>
                  <hr />
                  <span className="business_logo"><img src={shop.business_logo} alt="" style={{maxWidth: '200px'}} /></span>
                  <hr />
                  <p><a href="#" className="btn btn-primary">Explore Gifts</a></p>
                </div>
              </div>
            ))}
          </div>
          <div className="row">
            <div className="col-md-6 col-md-offset-3 to-animate">
              <Link className="btn btn-primary" href="/shops">
                More Shops
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Shops;
