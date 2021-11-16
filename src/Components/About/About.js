import React from "react";
import { Col, Row } from "react-bootstrap";
import './About.css';

const About = () => {
  return (
    <div>
      <div className="showcase">
      <section className="container py-5">
        <Row className="align-items-center">
          <Col sm={12} md={7}>
            <div>
              <h1 className="text-success team">
                Top Health Care Quality from Leading Physicians of the World
              </h1>
              <br />
              <h4 className="text-info">
                “Our goal is to provide the best patient experience with every
                patient, every encounter, every time."
              </h4>
              <br />
              <p className="text-secondary">
                For more than 60 years, ONSmedico Health has provided the best
                in health care and the latest in medical technology to the
                people of Los Angeles and throughout the world.
              </p>
              <br />
              <button className="btn btn-outline-info mb-3">
                Call 543-837-2436
              </button>
            </div>
          </Col>
          <Col md={5}>
            <div className="card mx-auto shadow">
              <div className="card-body">
                <h2 className="card-title">Newsroom</h2>
                <h5 className="text-danger">Stay in touch</h5>
                <br />
                <p className="card-text mb-4">
                  Subscribe to ONSmedico newsletters and publications to stay in
                  the know on the latest developments.
                </p>
                <button className="btn btn-danger mt-3">Subscribe</button>
              </div>
            </div>
          </Col>
        </Row>
      </section></div>

      <section className="container py-5">
        <Row className="align-items-center">
          <Col md={5}>
            <h3 className="text-warning">ONSmedico is comprised of:</h3>
            <ul className="text-primary">
              <li>Ronald Reagan ONSmedico Medical Center</li>
              <li>ONSmedico Santa Monica Medical Center</li>
              <li>ONSmedico Mattel Children’s Hospital</li>
              <li>
                Stewart and Lynda Resnick Neuropsychiatric Hospital at ONSmedico
              </li>
              <li>ONSmedico Health Clinics</li>
            </ul>
          </Col>
          <Col sm={12} md={7}>
            <div>
              <p>
                ONSmedico Health is among the most comprehensive and advanced
                health care systems in the world. Together, ONSmedico Health and
                the David Geffen School of Medicine at ONSmedico strive every
                day to be a model that redefines the standard of excellence in
                health care. It is our integrated mission to provide
                state-of-the-art patient care, to train top medical
                professionals and to support pioneering research and discovery.
              </p>
              <br />
              <p>
                Our physicians are world leaders in the diagnosis and treatment
                of complex illnesses, and our hospitals are consistently ranked
                among the best in the nation by U.S. News & World Report.
                ONSmedico Health is at the cutting edge of biomedical research,
                and our doctors and scientists are pioneering work across an
                astounding range of disciplines, from organ transplantation and
                cardiac surgery to neurosurgery and cancer treatment, and
                bringing the latest discoveries to virtually every field of
                medicine.
              </p>
            </div>
          </Col>
        </Row>
      </section>

      <section className="container text-center pb-5">
        <h1 className="text-danger">Mission and Vision</h1>
        <br />
        <h5>
          Our mission is to deliver leading-edge patient care, research, and
          education.
        </h5>
        <br />
        <h6>
          Our vision is to heal humankind, one patient at a time, by improving
          health, alleviating suffering and delivering acts of kindness.
        </h6>
        <div className="p-4 bgBlue mt-5 d-flex w-50 mx-auto justify-content-center">
              <div className="imgIcon me-4">
                <i className="fa fa-phone" aria-hidden="true"></i>
              </div>
              <div className="text-light">
                <h3>Emergency Cases</h3>
                <p>+003856543746</p>
              </div>
            </div>
      </section>
    </div>
  );
};

export default About;
