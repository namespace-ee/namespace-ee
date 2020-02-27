import React from 'react';
import Head from '../components/head';
import Footer from '../components/footer';
import Navidation from '../components/navigation';
import Particles from '../components/particles';

class BackendDeveloper extends React.Component {
  render() {
    return (
      <div id="backend-developer">
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
                  <h2 className="subtitle">Namespace is looking for a</h2>
                  <h1>Skilled Back-End Developer</h1>
                  <div className="cta">
                    <a href="mailto:lenno@namespace.ee" className="btn btn-lg btn-success btn-rounded">
                      Apply for this position
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
                  <div className="col-lg-8 mx-auto">
                    <div className="text-content">
                      <p>
                        We are a small agile team of software developers who builds and delivers quality business
                        software for fleet- and workforce management, online sales and order fulfillment services. We
                        create well-designed interactive web applications that our users trust and enjoy working with.
                      </p>
                      <p style={{ marginTop: 40 }}>
                        We are looking for a new member to join our team:
                        <br />
                        <ul>
                          <li>You are competent in modern Python</li>
                          <li>You share our enthusiasm for Django, PostgreSQL and automated deployments</li>
                          <li>You love well-designed RESTful API’s and you have experience building them</li>
                          <li>Experience with stream-based tools is a plus: WebSockets, Kafka, Spark etc</li>
                          <li>You enjoy discussing solutions and creating a roadmap as a team</li>
                          <li>You work independently to implement features and solve problems as you go</li>
                        </ul>
                      </p>

                      <p>
                        Ideally you will have a few years of experience working as a backend-end developer. Your code is
                        well structured and easy to understand as you know the importance of code readability,
                        maintainability and re-usability.
                      </p>

                      <p>
                        You would work in a dynamic team of developers at our modern office space in Telliskivi. We will
                        provide a laptop and other tools needed for the job and offer a salary that matches your skills
                        and experience.
                      </p>

                      <br />
                      <br />
                      <div className="buttons text-center">
                        Apply for this position
                        <br />
                        <br />
                        <a href="mailto:lenno@namespace.ee" className="btn btn-lg btn-primary grad-btn">
                          lenno@namespace.ee
                        </a>
                      </div>
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

export default BackendDeveloper;
