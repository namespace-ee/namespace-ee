import React from 'react';
import { Fork, Star } from 'react-github-buttons';

import Head from '../components/head';
import Footer from '../components/footer';
import Navidation from '../components/navigation';
import Particles from '../components/particles';

const GSMtasks = () => (
  <div id="open-source">
    <Head />
    <Navidation />

    <div className="hero open-source-hero">
      <div id="particles-background">
        <Particles />
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-7">
            <div className="text-center taglines">
              <h1>GSMtasks tracking system</h1>
              <h2 className="subtitle">
                GSMtasks is a fleet and field service management solution with route optimization capabilities that
                helps companies manage and analyze their mobile workforce.
              </h2>
              <div className="cta">
                <a href="https://github.com/namespace-ee" className="btn btn-lg grad-btn btn-rounded follow-btn">
                  <img src="/images/octocat.svg" alt="Octocat" />
                  <span className="text">Follow @namespace-ee</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container open-source-container">
      <div className="row">
        <div className="col">
          <div className="row">
            <div className="col-md-6">
              <div className="open-source-item">
                <div className="inner">
                  <h5>react-calendar-timeline</h5>
                  <p>A modern and responsive react timeline component.</p>
                </div>
                <div className="actions">
                  <a href="https://github.com/namespace-ee/react-calendar-timeline" className="help-link">
                    Like to help?
                  </a>
                  <br />
                  <Star owner="namespace-ee" repo="react-calendar-timeline" />
                  <Fork owner="namespace-ee" repo="react-calendar-timeline" />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="open-source-item">
                <div className="inner">
                  <h5>django-rest-framework-sso</h5>
                  <p>
                    Django REST Framework SSO is an extension to Django REST Framework that enables Single sign-on in a
                    microservice-oriented environment using the JWT standard.
                  </p>
                </div>
                <div className="actions">
                  <a href="https://github.com/namespace-ee/django-rest-framework-sso" className="help-link">
                    Like to help? Fork on Github!
                  </a>
                  <br />
                  <Star owner="namespace-ee" repo="django-rest-framework-sso" />
                  <Fork owner="namespace-ee" repo="django-rest-framework-sso" />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="open-source-item">
                <div className="inner">
                  <h5>django-rest-framework-sideloading</h5>
                  <p>Extention for Django Rest Framework to enable simple sideloading.</p>
                </div>
                <div className="actions">
                  <a href="https://github.com/namespace-ee/django-rest-framework-sideloading" className="help-link">
                    Like to help?
                  </a>
                  <br />
                  <Star owner="namespace-ee" repo="django-rest-framework-sideloading" />
                  <Fork owner="namespace-ee" repo="django-rest-framework-sideloading" />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="open-source-item">
                <div className="inner">
                  <h5>django-electron-pdf</h5>
                  <p>A Django wrapper to generate PDF from URL, HTML or Markdown files.</p>
                </div>
                <div className="actions">
                  <a href="https://github.com/namespace-ee/django-electron-pdf" className="help-link">
                    Like to help?
                  </a>
                  <br />
                  <Star owner="namespace-ee" repo="django-electron-pdf" />
                  <Fork owner="namespace-ee" repo="django-electron-pdf" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="text-center your-ideas">
            <h2>We would love to hear your ideas.</h2>
            <div className="subtitle">We have the team, the knowledge and the experience.</div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default GSMtasks;
