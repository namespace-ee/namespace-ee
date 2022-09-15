import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { t, Trans } from '@lingui/macro';

import axios from 'axios';

import Head from '../components/head';
import Footer from '../components/footer';
import Navidation from '../components/navigation';
import Particles from '../components/particles';

const Contact = () => {
  const [sent, setSent] = useState(false);

  return (
    <div id="contact">
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
                  <Trans>Contact us</Trans>
                </h1>
                <h2 className="subtitle">
                  <Trans>
                    We build high performance, maintainable and business critical web applications and business
                    automation for companies around the world.
                  </Trans>
                  <br />
                  <br />
                  <Trans>And we would love to know more about your project!</Trans>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container contact-form-container">
        <div className="row">
          <div className="col-md-8 offset-md-2 content" style={{ minHeight: 400 }}>
            {sent ? (
              <>
                <h2 className="text-center">
                  <Trans>Message has been sent</Trans>
                </h2>
                <br />
                <br />
                <p className="text-center">
                  <Trans>We will get back to you within a few days.</Trans>
                  <br />
                  <Trans>If the matter is urgent then please call</Trans>{' '}
                  <a href="mobile:+3725013866">(+372) 50 13 866</a>
                </p>
              </>
            ) : (
              <Formik
                initialValues={{
                  name: '',
                  email: undefined,
                  phone: '',
                  message: '',
                }}
                validate={values => {
                  const errors = {};
                  if (!values.email) {
                    errors.email = 'Required field.';
                  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                    errors.email = 'Invalid email address.';
                  }
                  return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                  axios
                    .post('/api/contact', values)
                    .then(response => {
                      console.log(response);
                      setSent(true);
                    })
                    .then(error => {
                      console.log(error);
                    });
                  setSubmitting(false);
                }}
              >
                {({ isSubmitting, errors }) => (
                  <Form>
                    <div className="row">
                      <div className="col-12">
                        <div className="form-group">
                          <Field
                            type="name"
                            name="name"
                            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                            placeholder={t`Name`}
                          />
                          <ErrorMessage name="name" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                          <Field
                            type="text"
                            name="email"
                            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                            placeholder={t`E-mail`}
                          />
                          <ErrorMessage name="email" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                          <Field
                            type="text"
                            name="phone"
                            className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                            placeholder={t`Phone`}
                          />
                          <ErrorMessage name="phone" component="div" className="invalid-feedback" />
                        </div>
                      </div>
                      <div className="col-12 ">
                        <div className="form-group">
                          <Field
                            component="textarea"
                            name="message"
                            className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                            placeholder={t`Tell us about your project`}
                            rows="8"
                          />
                          <ErrorMessage name="message" component="div" className="invalid-feedback" />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 text-center">
                        <button
                          type="submit"
                          href="#contact"
                          className="btn btn-lg btn-success btn-rounded"
                          disabled={isSubmitting}
                        >
                          <Trans>Send message</Trans>
                        </button>
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            )}
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="text-center your-ideas">
              <div className="subtitle">
                <Trans>Let's engineer impressive digital products together.</Trans>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
