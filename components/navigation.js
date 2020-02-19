import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navigation = () => {
  const router = useRouter();

  return (
    <div className="main-navigation">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-faded">
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <Link href="/">
            <a className="navbar-brand">
              <img src="/static/images/logo.svg" alt="Namespace" />
            </a>
          </Link>
          <div className="collapse navbar-collapse no-transition" id="navbarNav">
            <div className="d-lg-none small-brand">
              <a className="navbar-brand" href="/">
                <img src="/static/images/logo.svg" alt="Namespace" />
              </a>
            </div>
            <button
              className="navbar-toggler navbar-toggler-right d-lg-none"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-close-icon" />
            </button>
            <ul className="navbar-nav">
              <li className={`nav-item ${router.pathname == '/' ? 'active' : null}`}>
                <Link href="/">
                  <a className="nav-link">What we do</a>
                </Link>
              </li>
              <li className={`nav-item ${router.pathname == '/open-source' ? 'active' : null}`}>
                <Link href="/open-source">
                  <a className="nav-link">Open Source</a>
                </Link>
              </li>
              <li className="nav-item right-item">
                <a href="mailto:info@namespace.ee" className="nav-link fancy-link">
                  <span className="inner">Contact us</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
