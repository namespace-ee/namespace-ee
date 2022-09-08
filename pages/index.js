import React from 'react';
import Head from '../components/head';
import Footer from '../components/footer';
import Navidation from '../components/navigation';
import Particles from '../components/particles';

class Index extends React.Component {
  render() {
    return (
      <div id="index">
        <Head />
        <Navidation />

        <div className="hero home-hero">
          <div id="particles-background">
            <Particles />
          </div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-7 col-12">
                <div className="text-center taglines">
                  <h1>Creating applications that matter</h1>
                  <h2 className="subtitle">
                    We are a full service digital agency based in Tallinn. We are Python, API and React.js experts.
                  </h2>
                  <div className="cta">
                    <a href="mailto:info@namespace.ee" className="btn btn-lg btn-success btn-rounded">
                      Work with us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container content-container">
          <div className="background" />
          <div className="inner row">
            <div className="col">
              <div className="project-item">
                <div className="row align-items-center">
                  <div className="col-lg-6 mx-auto">
                    <div className="image align-right">
                      <img className="img-fluid" src="images/gsmtasks.png" alt="GSMtasks" />
                    </div>
                  </div>
                  <div className="col-lg-4 mx-auto">
                    <h3>GSMtasks</h3>
                    <div className="subtitle">Mobile fleet management</div>
                    <div className="text-content">
                      <p>
                        A solution to efficiently manage and analyze your mobile workforce through GPS tracking and
                        geospatial data analysis. With a modern React.js interface and React Native mobile application
                        for iOS and Android.
                      </p>
                      <div className="buttons">
                        <a href="https://www.gsmtasks.com/" className="btn btn-lg btn-primary grad-btn">
                          gsmtasks.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="project-item">
                <div className="row align-items-center">
                  <div className="col-lg-4 mx-auto">
                    <h3>Parcelfellows / Pakipoint</h3>
                    <div className="subtitle">Shipping & Order fulfillment services</div>
                    <div className="text-content">
                      <p>
                        Parcelfellows offers a public parcel shipping service at very competetive prices. Pakipoint
                        offers an extensive order fulfillment & warehousing service for online merchants with support
                        for platforms such as Shopify, Magento, WooCommerce, Prestashop and custom solutions.
                      </p>
                      <div className="buttons">
                        <a href="https://www.parcelfellows.com/" className="btn btn-lg btn-primary grad-btn">
                          parcelfellows.com
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 mx-auto">
                    <div className="image">
                      <img className="img-fluid" src="/images/parcelfellows.png" alt="Parcelfellows" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="project-item">
                <div className="row align-items-center">
                  <div className="col-lg-6 mx-autp">
                    <div className="image align-right">
                      <img className="img-fluid" src="/images/tickets.png" alt="Ticketing" />
                    </div>
                  </div>
                  <div className="col-lg-4 mx-auto">
                    <h3>Ticketing by Namespace</h3>
                    <div className="subtitle">TICKETING SYSTEM</div>
                    <div className="text-content">
                      <p>
                        We offer an advanced ticket sales system that is also embeddable to your own website. Create an
                        interactive shopping cart that matches your site's design and build upon our reliable backend.
                        Receive payments directly to your own account via PayPal, EveryPay, Maksekeskus (others on
                        request).
                      </p>
                      <div className="buttons">
                        <a href="https://tickets.namespace.ee/" className="btn btn-lg btn-primary grad-btn">
                          tickets.namespace.ee
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Index;
