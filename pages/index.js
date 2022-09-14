import React from 'react';
import Image from 'next/image';
import { Trans } from '@lingui/macro';

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
                  <h1>
                    <Trans>Creating applications that matter</Trans>
                  </h1>
                  <h2 className="subtitle">
                    <Trans>
                      We are a full service digital agency based in Tallinn. We are Python, API and React.js experts.
                    </Trans>
                  </h2>
                  <div className="cta">
                    <a href="mailto:info@namespace.ee" className="btn btn-lg btn-success btn-rounded">
                      <Trans>Work with us</Trans>
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
                      <Image layout="responsive" width={1138} height={1002} src="/images/gsmtasks.png" alt="GSMtasks" />
                    </div>
                  </div>
                  <div className="col-lg-4 mx-auto">
                    <h3>Navirec</h3>
                    <div className="subtitle">
                      <Trans>GPS Fleet Tracking Software and Solutions</Trans>
                    </div>
                    <div className="text-content">
                      <p>
                        <Trans>
                          Monitor and manage everything related to your company's vehicles conveniently on a computer
                          screen or your cell phone!
                        </Trans>
                      </p>
                      <div className="buttons">
                        <a href="https://navirec.com/" className="btn btn-lg btn-primary grad-btn">
                          navirec.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="project-item">
                <div className="row align-items-center">
                  <div className="col-lg-4 mx-auto">
                    <h3>GSMtasks</h3>
                    <div className="subtitle">
                      <Trans>Mobile fleet management</Trans>
                    </div>
                    <div className="text-content">
                      <p>
                        <Trans>
                          A solution to efficiently manage and analyze your mobile workforce through GPS tracking and
                          geospatial data analysis. With a modern React.js interface and React Native mobile application
                          for iOS and Android.
                        </Trans>
                      </p>
                      <div className="buttons">
                        <a href="https://www.gsmtasks.com/" className="btn btn-lg btn-primary grad-btn">
                          gsmtasks.com
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 mx-auto">
                    <div className="image align-right">
                      <Image layout="responsive" width={1138} height={1002} src="/images/gsmtasks.png" alt="GSMtasks" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="project-item">
                <div className="row align-items-center">
                  <div className="col-lg-6 mx-auto">
                    <div className="image">
                      <Image
                        layout="responsive"
                        width={1328}
                        height={998}
                        src="/images/parcelfellows.png"
                        alt="Parcelfellows"
                      />
                    </div>
                  </div>
                  <div className="col-lg-4 mx-auto">
                    <h3>Parcelfellows</h3>
                    <div className="subtitle">
                      <Trans>Shipping & Order fulfillment service</Trans>
                    </div>
                    <div className="text-content">
                      <p>
                        <Trans>
                          Parcelfellows offers a public parcel shipping service at very competetive prices. Pakipoint
                          offers an extensive order fulfillment & warehousing service for online merchants with support
                          for platforms such as Shopify, Magento, WooCommerce, Prestashop and custom solutions.
                        </Trans>
                      </p>
                      <div className="buttons">
                        <a href="https://www.parcelfellows.com/" className="btn btn-lg btn-primary grad-btn">
                          parcelfellows.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="project-item">
                <div className="row align-items-center">
                  <div className="col-lg-4 mx-auto">
                    <h3>Ticketing by Namespace</h3>
                    <div className="subtitle">
                      <Trans>Ticket sales and event management</Trans>
                    </div>
                    <div className="text-content">
                      <p>
                        <Trans>
                          We offer an advanced ticket sales system that is also embeddable to your own website. Create
                          an interactive shopping cart that matches your site's design and build upon our reliable
                          backend. Receive payments directly to your own account via PayPal, EveryPay, Maksekeskus
                          (others on request).
                        </Trans>
                      </p>
                      {/*<div className="buttons">
                        <a href="https://tickets.namespace.ee/" className="btn btn-lg btn-primary grad-btn">
                          tickets.namespace.ee
                        </a>
                      </div>*/}
                    </div>
                  </div>
                  <div className="col-lg-6 mx-autp">
                    <div className="image align-right">
                      <Image layout="responsive" width={994} height={1160} src="/images/tickets.png" alt="Ticketing" />
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
