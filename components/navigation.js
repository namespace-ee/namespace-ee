import React, { useState } from 'react';
import Link from 'next/link';
import nookies from 'nookies';
import { Trans } from '@lingui/macro';
import { useLingui } from '@lingui/react';
import { useRouter } from 'next/router';
import { toUpper } from 'lodash';

import Logo from '../public/images/logo.svg';
import ETFlag from '../public/flags/et.svg';
import ENFlag from '../public/flags/en.svg';

const Navigation = () => {
  const router = useRouter();
  const [isHovering, setIsHovering] = useState(false);

  const { i18n } = useLingui();

  const setLanguage = language => {
    nookies.set(null, 'language', language, {
      maxAge: 30 * 24 * 60 * 60,
      path: '/',
    });
    i18n.activate(language);
  };

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
              <Logo />
            </a>
          </Link>
          <div className="collapse navbar-collapse no-transition" id="navbarNav">
            <div className="d-lg-none small-brand">
              <a className="navbar-brand" href="/">
                <Logo />
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
                  <a className="nav-link">
                    <Trans>What we do</Trans>
                  </a>
                </Link>
              </li>
              <li className={`nav-item ${router.pathname == '/open-source' ? 'active' : null}`}>
                <Link href="/open-source">
                  <a className="nav-link">
                    <Trans>Open Source</Trans>
                  </a>
                </Link>
              </li>

              <li className="nav-item right-item minimal">
                <div
                  className="dropdown"
                  onMouseOver={() => setIsHovering(true)}
                  onMouseOut={() => setIsHovering(false)}
                >
                  <a href="#" className="nav-link">
                    {i18n.locale === 'et' ? (
                      <ETFlag style={{ marginTop: -1, marginRight: 8 }} />
                    ) : (
                      <ENFlag style={{ marginTop: -1, marginRight: 8 }} />
                    )}
                    {toUpper(i18n.locale)}
                  </a>
                  <div
                    className={`dropdown-menu ${isHovering ? 'show' : ''}`}
                    aria-labelledby="dropdownMenuLink"
                    style={{ minWidth: 0 }}
                  >
                    <a className="dropdown-item" href="#" onClick={() => setLanguage('et')}>
                      <ETFlag style={{ marginTop: -1, marginRight: 8 }} />
                      ET
                    </a>
                    <a className="dropdown-item" href="#" onClick={() => setLanguage('en')}>
                      <ENFlag style={{ marginTop: -1, marginRight: 8 }} />
                      EN
                    </a>
                  </div>
                </div>
              </li>
              <li className="nav-item right-item">
                <Link href="/contact">
                  <a className="nav-link fancy-link">
                    <span className="inner">Contact us</span>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
