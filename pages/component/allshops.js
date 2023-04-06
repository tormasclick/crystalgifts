import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';

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

  return (
    <section id="fh5co-pricing" data-section="pricing">
      <div className="fh5co-pricing">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2>Crystal Gifts Shops</h2>
              <p>Showing {shops.length} shops</p>
            </div>
          </div>
          <div className="row">
            {shops.map(shop => (
              <div key={shop.id} className="col-md-3 col-sm-6">
                <div className="price-box to-animate">
                  <div className="price"><sup className="currency"></sup></div>
                  <p className="business_name">{shop.business_name}</p>
                  <hr />
                  <span className="business_logo">
                    <img 
                      src={shop.business_logo} 
                      alt="Business Logo" 
                      width={200} 
                      height={200} 
                    />
                  </span>
                  <hr />
                  <p><a href="#" className="btn btn-primary">Explore Gifts</a></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Shops;
