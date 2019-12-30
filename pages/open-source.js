import React from 'react';
import Link from 'next/link';
import Head from '../components/head';
import Footer from '../components/footer';
import Navidation from '../components/navigation';

const OpenSource = () => (
  <div>
    <Head title="Home" />
    <Navidation />

    <div className="hero open-source-hero">
      <div id="particles-background" />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-7">
            <div className="text-center taglines">
              <h1>Giving back</h1>
              <h2 className="subtitle">
                We build upon tools and libraries that have received the love and work of several thousands of
                enthusiasts around the world. We want to contibute to those efforts, while also sharing some of the
                tools we have envisioned and built to help us deliver great apps for our customers.
              </h2>
              <div className="cta">
                <a href="https://github.com/namespace-ee" className="btn btn-lg grad-btn btn-rounded follow-btn">
                  <img src="/static/images/octocat.svg" alt="Octocat" />
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
                <div className="help-link">
                  <a href="https://github.com/namespace-ee/react-calendar-timeline">Like to help?</a>
                  <br />
                  <a
                    className="github-button"
                    href="https://github.com/namespace-ee/react-calendar-timeline"
                    data-icon="octicon-star"
                    data-size="large"
                    data-show-count="true"
                    aria-label="Star namespace-ee/react-calendar-timeline on GitHub"
                  >
                    Star
                  </a>
                  <a
                    className="github-button"
                    href="https://github.com/namespace-ee/react-calendar-timeline/fork"
                    data-icon="octicon-repo-forked"
                    data-size="large"
                    data-show-count="true"
                    aria-label="Fork namespace-ee/react-calendar-timeline on GitHub"
                  >
                    Fork
                  </a>
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
                <div className="help-link">
                  <a href="https://github.com/namespace-ee/django-rest-framework-sso">Like to help? Fork on Github!</a>
                  <br />
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <a
                        className="github-button"
                        href="https://github.com/namespace-ee/django-rest-framework-sso"
                        data-icon="octicon-star"
                        data-size="large"
                        data-show-count="true"
                        aria-label="Star namespace-ee/django-rest-framework-sso on GitHub"
                      >
                        Star
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        className="github-button"
                        href="https://github.com/namespace-ee/django-rest-framework-sso/fork"
                        data-icon="octicon-repo-forked"
                        data-size="large"
                        data-show-count="true"
                        aria-label="Fork namespace-ee/django-rest-framework-sso on GitHub"
                      >
                        Fork
                      </a>
                    </li>
                  </ul>
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
                <div className="help-link">
                  <a href="https://github.com/namespace-ee/django-rest-framework-sideloading">Like to help?</a>
                  <br />
                  <a
                    className="github-button"
                    href="https://github.com/namespace-ee/django-rest-framework-sideloading"
                    data-icon="octicon-star"
                    data-size="large"
                    data-show-count="true"
                    aria-label="Star namespace-ee/django-rest-framework-sideloading on GitHub"
                  >
                    Star
                  </a>
                  <a
                    className="github-button"
                    href="https://github.com/namespace-ee/django-rest-framework-sideloading/fork"
                    data-icon="octicon-repo-forked"
                    data-size="large"
                    data-show-count="true"
                    aria-label="Fork namespace-ee/django-rest-framework-sideloading on GitHub"
                  >
                    Fork
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="open-source-item">
                <div className="inner">
                  <h5>django-electron-pdf</h5>
                  <p>A Django wrapper to generate PDF from URL, HTML or Markdown files.</p>
                </div>
                <div className="help-link">
                  <a href="https://github.com/namespace-ee/django-electron-pdf">Like to help?</a>
                  <br />
                  <a
                    className="github-button"
                    href="https://github.com/namespace-ee/django-electron-pdf"
                    data-icon="octicon-star"
                    data-size="large"
                    data-show-count="true"
                    aria-label="Star namespace-ee/django-electron-pdf on GitHub"
                  >
                    Star
                  </a>
                  <a
                    className="github-button"
                    href="https://github.com/namespace-ee/django-electron-pdf/fork"
                    data-icon="octicon-repo-forked"
                    data-size="large"
                    data-show-count="true"
                    aria-label="Fork namespace-ee/django-electron-pdf on GitHub"
                  >
                    Fork
                  </a>
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

    <script async defer src="https://buttons.github.io/buttons.js" />
    <Footer />
  </div>
);

export default OpenSource;
