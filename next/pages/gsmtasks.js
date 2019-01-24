import React from 'react';
import Link from 'next/link';
import Head from '../components/head';
import Footer from '../components/footer';
import Navidation from '../components/navigation';

class GSMtasks extends React.Component {
  componentDidMount () {
    
  }

  render() {
    return (
      <div>
        <Head title="Home" />
        <Navidation />

        <div
          className="hero project-hero"
          style={{
            background: "url('/static/images/tasks-hero.jpg') #20222E no-repeat center",
            backgroundSize: 'cover',
          }}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-12">
                <div className="text-center taglines">
                  <h1>GSMtasks tracking system</h1>
                  <h2 className="subtitle">
                    GSMtasks is a fleet and field service management solution with route optimization capabilities that
                    helps companies manage and analyze their mobile workforce.
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container content-container project-content-container">
          <div className="background" />
          <div className="inner row">
            <div className="col">
              <div className="text-row">
                <div className="row">
                  <div className="col">
                    <h5>Context</h5>
                    <p>
                      In May 2015, we commenced work on our biggest data-focused project to date. The World Bank’s data
                      team hired us to rebuild their open data site, which is a repository and visualization engine for
                      all of the Bank’s data, covering the world’s economies, finance, development, and much, much more.
                    </p>
                    <p>
                      The World Bank Group is an international financial institution that provides loans to developing
                      countries for capital programs.
                    </p>
                  </div>
                </div>
              </div>
              <div className="full-image-row">
                <div className="row">
                  <div className="image">
                    <img src="https://placehold.it/1140x346" className="img-fluid" alt="" />
                  </div>
                </div>
              </div>
              <div className="text-row">
                <div className="row">
                  <div className="col">
                    <h5>Challenges & Goals</h5>
                    <p>
                      <strong>Huge reams of data:</strong> the Bank continually collects an incredible amount of data
                      and it all needs to be accessible on-demand
                    </p>
                    <p>
                      <strong>Accessibility:</strong> this is an open data site, so the goal is to provide access to
                      everyone
                    </p>
                    <p>
                      <strong>Mobile:</strong> an increasing number of people are coming online for the first time using
                      a mobile device
                    </p>
                    <p>
                      <strong>Low bandwidth:</strong> an enormous amount of potential users live in areas without access
                      to high-speed internet
                    </p>
                    <p>
                      <strong>Multilingual:</strong> five core languages for the whole site and provide as many country
                      pages as feasible in the native language
                    </p>
                    <p>
                      <strong>Dynamic visualization:</strong> the charts and graphs aren’t universal, so we needed to
                      find solutions to accurately present all of the data
                    </p>
                  </div>
                </div>
              </div>
              <div className="image-row">
                <div className="image">
                  <img src="https://placehold.it/780x521" className="img-fluid" alt="" />
                </div>
              </div>
              <div className="text-row">
                <div className="row">
                  <div className="col">
                    <h5>Design Process</h5>
                    <p>
                      Due to the scale and importance of this project, the Wiredcraft team took its time thinking
                      through designing the product. After hosting workshops with the World Bank’s team, we established
                      a need for feature parity with the previous version of the website and key integration points with
                      some of the World Bank’s other services (<Link to="#">databank.worldbank.org</Link> &{' '}
                      <Link to="#">datacatalog.worldbank.org</Link>).
                    </p>
                    <p>
                      The key user personas for designing this product were: - Academics - Journalists - International
                      development staff
                    </p>
                    <p>
                      This is one of our initial wireframes, highlighting our core approach of building the site as a
                      single-page, search-based app.
                    </p>
                  </div>
                </div>
              </div>
              <div className="image-row">
                <div className="image">
                  <img src="https://placehold.it/780x440" className="img-fluid" alt="" />
                </div>
              </div>
              <div className="text-row">
                <div className="row">
                  <div className="col">
                    <h5>Takeaways</h5>
                    <p>
                      We learned how work with a client quite literally on the other side of the world. World Bank HQ is
                      in DC, which is 12 hours behind our Shanghai team. We’re old hands with data viz, but we learned a
                      ton about accessibility and reducing load times and data requests Integrating new tech and
                      practices isn’t easy, especially on the fly, but we identified good processes for testing new
                      things and implementing them smoothly.
                    </p>
                  </div>
                </div>
              </div>

              <div className="visit-project">
                <div className="text-center">
                  <div className="visit-title">Visit project at</div>
                  <div className="link">
                    <Link to="#">gsmtasks.com</Link>
                  </div>
                </div>
                <div className="next-project">
                  <Link to="#">
                    <span className="text">Parcelfellows</span>
                    <img src="{{ '/images/arrow-right.svg'|asseturl }}" alt="" />
                  </Link>
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

export default GSMtasks;
