import React from 'react';
import Link from 'next/link';

const Footer = () => (
  <div class="main-footer">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 push-lg-1">
          <div class="contact">
            <h2>Let’s talk!</h2>

            <div class="contact-item">
              <h4>Contact</h4>
              <p>
                <Link to="tel:+3725013866">+372 501 3866</Link>
              </p>
              <p>
                <Link to="mailto:info@namespace.ee">
                  <a class="fancy-link">
                    <span class="inner">info@namespace.ee</span>
                  </a>
                </Link>
              </p>
            </div>

            <div class="contact-item">
              <h4>Location</h4>
              <p>Telliskivi 60</p>
              <p>Tallinn 10412</p>
              <p>Estonia</p>
            </div>

            <div class="get-directions">
              <Link to="https://www.google.ee/maps/place/ON-hoone/@59.4401833,24.7276245,17z/data=!3m1!4b1!4m5!3m4!1s0x4692937debffa363:0x8b51c1f5eb6c921!8m2!3d59.4401833!4d24.7298185">
                <a class="btn grad-btn btn-primary" target="_blank">
                  Get Directions
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div class="col-lg-7 push-lg-1 d-none d-lg-block">
          <div class="code-container">
            <div class="buttons">
              <img src="/static/images/footer-buttons.svg" alt="" />
            </div>
            <ol>
              <li>Beautiful is better than ugly.</li>
              <li>Explicit is better than implicit.</li>
              <li>Simple is better than complex.</li>
              <li>Complex is better than complicated.</li>
              <li>Flat is better than nested.</li>
              <li>Sparse is better than dense.</li>
              <li>Readability counts.</li>
              <li>Special cases aren’t special enough to break the rules.</li>
              <li>Although practicality beats purity.</li>
              <li>Errors should never pass silently.</li>
              <li>Unless explicitly silenced.</li>
              <li>In the face of ambiguity, refuse the temptation to guess.</li>
              <li>There should be one-- and preferably only one --obvious way to do it.</li>
              <li>Although that way may not be obvious at first unless you're Dutch.</li>
              <li>Now is better than never.</li>
              <li>Although never is often better than *right* now.</li>
              <li>If the implementation is hard to explain, it's a bad idea.</li>
              <li>If the implementation is easy to explain, it may be a good idea.</li>
              <li class="highlight">Namespaces are one honking great idea -- let's do more of those!</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
