import React from 'react';
import { Fork, Star } from 'react-github-buttons';
import { Trans } from '@lingui/macro';

import Head from '../components/head';
import Footer from '../components/footer';
import Navidation from '../components/navigation';
import Particles from '../components/particles';

const OpenSource = () => (
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
              <h1>
                <Trans>Giving back</Trans>
              </h1>
              <h2 className="subtitle">
                <Trans>
                  We build upon tools and libraries that have received the love and work of several thousands of
                  enthusiasts around the world. We want to contibute to those efforts, while also sharing some of the
                  tools we have envisioned and built to help us deliver great apps for our customers.
                </Trans>
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
                  <p>
                    <Trans>A modern and responsive react timeline component.</Trans>
                  </p>
                </div>
                <div className="actions">
                  <a href="https://github.com/namespace-ee/react-calendar-timeline" className="help-link">
                    <Trans>Like to help?</Trans>
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
                    <Trans>
                      Django REST Framework SSO is an extension to Django REST Framework that enables Single sign-on in
                      a microservice-oriented environment using the JWT standard.
                    </Trans>
                  </p>
                </div>
                <div className="actions">
                  <a href="https://github.com/namespace-ee/django-rest-framework-sso" className="help-link">
                    <Trans>Like to help? Fork on Github!</Trans>
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
                  <p>
                    <Trans>Extention for Django Rest Framework to enable simple sideloading.</Trans>
                  </p>
                </div>
                <div className="actions">
                  <a href="https://github.com/namespace-ee/django-rest-framework-sideloading" className="help-link">
                    <Trans>Like to help?</Trans>
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
                  <p>
                    <Trans>A Django wrapper to generate PDF from URL, HTML or Markdown files.</Trans>
                  </p>
                </div>
                <div className="actions">
                  <a href="https://github.com/namespace-ee/django-electron-pdf" className="help-link">
                    <Trans>Like to help?</Trans>
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
            <h2>
              <Trans>We would love to hear your ideas.</Trans>
            </h2>
            <div className="subtitle">
              <Trans>We have the team, the knowledge and the experience to build them.</Trans>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default OpenSource;
