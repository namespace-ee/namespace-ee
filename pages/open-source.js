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
                  <h5>
                    <a href="https://github.com/namespace-ee/react-calendar-timeline">react-calendar-timeline</a>
                  </h5>
                  <p>
                    <Trans>A modern and responsive react timeline component.</Trans>
                  </p>
                </div>
                <div className="actions">
                  <a href="https://github.com/namespace-ee/react-calendar-timeline" className="help-link">
                    <Trans>Like to help?</Trans>
                  </a>
                  <br />
                  <iframe
                    src="https://ghbtns.com/github-btn.html?user=namespace-ee&repo=react-calendar-timeline&type=star&count=true"
                    frameborder="0"
                    scrolling="0"
                    width="130"
                    height="20"
                    title="GitHub"
                  ></iframe>
                  <iframe
                    src="https://ghbtns.com/github-btn.html?user=namespace-ee&repo=react-calendar-timeline&type=fork&count=true"
                    frameborder="0"
                    scrolling="0"
                    width="130"
                    height="20"
                    title="GitHub"
                  ></iframe>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="open-source-item">
                <div className="inner">
                  <h5>
                    <a href="https://github.com/namespace-ee/django-rest-framework-sso">django-rest-framework-sso</a>
                  </h5>
                  <p>
                    <Trans>
                      Django REST Framework SSO is an extension to Django REST Framework that enables Single sign-on in
                      a microservice-oriented environment using the JWT standard.
                    </Trans>
                  </p>
                </div>
                <div className="actions">
                  <a href="https://github.com/namespace-ee/django-rest-framework-sso" className="help-link">
                    <Trans>Like to help?</Trans>
                  </a>
                  <br />
                  <iframe
                    src="https://ghbtns.com/github-btn.html?user=namespace-ee&repo=django-rest-framework-sso&type=star&count=true"
                    frameborder="0"
                    scrolling="0"
                    width="130"
                    height="20"
                    title="GitHub"
                  ></iframe>
                  <iframe
                    src="https://ghbtns.com/github-btn.html?user=namespace-ee&repo=django-rest-framework-sso&type=fork&count=true"
                    frameborder="0"
                    scrolling="0"
                    width="130"
                    height="20"
                    title="GitHub"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="open-source-item">
                <div className="inner">
                  <h5>
                    <a href="https://github.com/namespace-ee/django-datadog-logger">django-datadog-logger</a>
                  </h5>
                  <p>
                    <Trans>Django DataDog Logger integration package.</Trans>
                  </p>
                </div>
                <div className="actions">
                  <a href="https://github.com/namespace-ee/django-datadog-logger" className="help-link">
                    <Trans>Like to help?</Trans>
                  </a>
                  <br />
                  <iframe
                    src="https://ghbtns.com/github-btn.html?user=namespace-ee&repo=django-datadog-logger&type=star&count=true"
                    frameborder="0"
                    scrolling="0"
                    width="130"
                    height="20"
                    title="GitHub"
                  ></iframe>
                  <iframe
                    src="https://ghbtns.com/github-btn.html?user=namespace-ee&repo=django-datadog-logger&type=fork&count=true"
                    frameborder="0"
                    scrolling="0"
                    width="130"
                    height="20"
                    title="GitHub"
                  ></iframe>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="open-source-item">
                <div className="inner">
                  <h5>
                    <a href="https://github.com/namespace-ee/django-rest-framework-sideloading">
                      django-rest-framework-sideloading
                    </a>
                  </h5>
                  <p>
                    <Trans>Extention for Django Rest Framework to enable simple sideloading.</Trans>
                  </p>
                </div>
                <div className="actions">
                  <a href="https://github.com/namespace-ee/django-rest-framework-sideloading" className="help-link">
                    <Trans>Like to help?</Trans>
                  </a>
                  <br />
                  <iframe
                    src="https://ghbtns.com/github-btn.html?user=namespace-ee&repo=django-rest-framework-sideloading&type=star&count=true"
                    frameborder="0"
                    scrolling="0"
                    width="130"
                    height="20"
                    title="GitHub"
                  ></iframe>
                  <iframe
                    src="https://ghbtns.com/github-btn.html?user=namespace-ee&repo=django-rest-framework-sideloading&type=fork&count=true"
                    frameborder="0"
                    scrolling="0"
                    width="130"
                    height="20"
                    title="GitHub"
                  ></iframe>
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
