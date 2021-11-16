import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Doctor.css";

const Doctor = () => {
  return (
    <div>
      {/* section for showcase */}
      <section className="py-3 bg-dark">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-6 mb-2">
              <img
                src="https://image.freepik.com/free-photo/medium-shot-smiley-doctor-with-coat_23-2148814212.jpg"
                alt="/"
                className="img-fluid teamImg"
              />
            </div>

            <div className="col-12 col-md-6 team">
              <h1 className="text-light tw-bold">Find a Provider</h1>
              <h3 className="text-warning tw-bold">
                Find a ONSmedico doctor who’s the perfect fit
              </h3>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search by location or name"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
                <button
                  className="btn btn-success"
                  type="button"
                  id="button-addon2"
                >
                  <i className="fa fa-search" aria-hidden="true"></i>
                </button>
              </div>

              <div className="row pt-5">
                <div className="col-sm-6 mb-2 rounder">
                  <div className="card text-center" style={{height: "250px"}}>
                    <div className="card-body">
                      <h2 className="card-title">Book an Appointment</h2>
                      <p className="card-text my-auto py-auto">
                        See a doctor, virtually or in-person, with our easy
                        online booking options.
                      </p>
                      <button className="btn btn-success mt-2">
                        Schedule now
                      </button>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6 mb-2 rounder">
                  <div className="card text-center" style={{height: "250px"}}>
                    <div className="card-body">
                      <h2 className="card-title">Find a Primary Care Doctor</h2>
                      <p className="card-text my-auto py-auto">
                        Looking for a primary physician for yourself or your
                        family? Start here.
                      </p>
                      <button className="btn btn-success mt-2">
                        See our doctors
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section for other things */}
      <section className="container py-5 my-5">
        <Row className="align-items-center">
          <Col sm={12} md={7}>
            <div>
              <h1>Why Choose ONSmedico?</h1>
              <p>
                When you visit ONSmedico, you can feel confident you’re being
                treated by expert doctors, nurses and other care providers who
                are innovative leaders in their chosen disciplines. Plus, you
                get all the benefits of an academic medical center, which means
                that you’ll gain access to advanced technology, treatments and
                research that may not be available elsewhere.
                <br />
                <br />
                Need help finding a doctor who’s right for you? Connect with a
                customer care specialist Monday to Friday, 7 am - 7 pm (PST).
              </p>
              <button className="btn btn-outline-info">
                Call 543-837-2436
              </button>
            </div>
            <div className="pt-5">
              <h1>Immediate Care</h1>
              <p>
                If you're sick or injured and your primary care office isn't
                open, we're here when you need us, with walk-in appointments and
                outstanding customer service.
              </p>
              <button className="btn btn-outline-info mb-3">See locations</button>
            </div>
          </Col>
          <Col md={4}>
            <div className="card mx-auto shadow">
              <div className="card-body">
                <h2 className="card-title">Newsroom</h2>
                <h5>Stay in touch</h5>
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
      </section>
    </div>
  );
};

export default Doctor;
