import React, { useEffect, useState } from "react";
import { Carousel, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Contact from "../Contact/Contact";
import Service from "../Service/Service";
import "./Home.css";

const Home = () => {
  const [services, SetServices] = useState([]);
  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => SetServices(data));
  }, []);
  return (
    <div>
      {/* Showcase section start */}
      <section id="showcase">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-6">
              <div className="container">
                <h1 className="logo mt-2">
                  <span className="text-danger">O</span>
                  <span className="text-warning">N</span>
                  <span className="text-info">S</span>
                  <span className="text-success">medico</span>
                </h1>
                <h4 className="slogan">Your best care begins with us...</h4>
                <h6 className="text-info tw-bold pe-5 me-5">
                  Located right in your neighborhood, ONSmedico medical offices
                  and clinics offer you convenient access to world-class care
                  for your entire family.
                </h6>
              </div>
            </div>
            <div className="col-12 col-md-6 py-3">
              <Carousel fade className="carousel">
                <Carousel.Item className="carouselItem">
                  <img
                    className="img-fluid w-100 d-block carouselImg rounded"
                    src="https://image.freepik.com/free-photo/nurse-measuring-patient-blood-pressure_53876-14933.jpg"
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="img-fluid w-100 d-block carouselImg rounded"
                    src="https://res.cloudinary.com/lowellgeneral/image/upload/c_fill,w_400,g_faces,q_auto,dpr_3.0,f_auto/surgical-services1_1EFA8C80-FC15-11E9-92C400218628D024.jpg"
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="img-fluid w-100 d-block carouselImg rounded"
                    src="https://wp02-media.cdn.ihealthspot.com/wp-content/uploads/sites/520/2020/03/19155512/iStock-1094357906.jpg"
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="img-fluid w-100 d-block carouselImg rounded"
                    src="https://i2.wp.com/edumantra.net/wp-content/uploads/2019/12/COPD-6-edumantra.net_.jpg?resize=423%2C238&ssl=1"
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="img-fluid w-100 d-block carouselImg rounded"
                    src="https://image.freepik.com/free-photo/top-view-world-heart-day-concept-with-stethoscope_23-2148630994.jpg"
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </section>
      {/* Showcase section end */}
      <section className="py-5 my-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-6 mb-2">
              <img
                src="https://news.christianacare.org/wp-content/uploads/2017/04/PACT-team-with-patient.jpg"
                alt="/"
                className="img-fluid teamImg"
              />
            </div>
            <div className="col-12 col-md-6 team">
              <h1 className="text-info">
                Your best life is powered by your personalized primary care
                team.
              </h1>
              <h5 className="text-secondary py-3 lh-base">
                The primary care physicians at ONSmedico are here for you in all
                stages of your life. Whether you are sick or injured or have a
                general health concern, your primary care doctor is your point
                person for connecting you to our network of specialists.
              </h5>
              <Link to="/doctor">
                <button className="btn btn-success">
                  <i className="fa fa-user-md" aria-hidden="true"></i> Choose
                  Your Doctor
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* services section  */}
      <section className="pb-4">
        <Container>
          <h1 className="text-center text-success team">Our Services</h1>
          <hr className="p-1 w-25 mx-auto mb-5 rounded-pill text-info" />
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {services.map((service) => (
              <Service service={service} key={service.key}></Service>
            ))}
          </div>
        </Container>
      </section>
      {/* section for Specialist Doctors */}
      <section className="pb-5">
        <Container className="py-5">
          <h1 className="text-center text-success pt-5 team">
            Our Specialist Doctors
          </h1>
          <hr className="p-1 w-25 mx-auto mb-5 rounded-pill text-danger" />
          <div>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
              <div className="col">
                <div className="card shadow">
                  <div className="text-center">
                    <img
                      src="https://yt3.ggpht.com/ytc/AKedOLQ-TfQ3t1-kxvAZ1P7eg7eS78fYMHfgiuFwbbph=s900-c-k-c0x00ffffff-no-rj"
                      className="card-img-top img-fluid rounded-circle p-2 doctorImg"
                      alt="..."
                    />
                  </div>
                  <div className="card-body text-center">
                    <h5 className="card-title">Dr. Sahadat Hosain</h5>
                    <p className="card-text">FCBS, M. D of Medical</p>
                    <p>
                      <i
                        className="fa fa-facebook mx-2 text-primary"
                        aria-hidden="true"
                      ></i>
                      <i
                        className="fa fa-twitter mx-2 text-info"
                        aria-hidden="true"
                      ></i>
                      <i
                        className="fa fa-instagram mx-2 text-danger"
                        aria-hidden="true"
                      ></i>
                      <i className="fa fa-envelope mx-2" aria-hidden="true"></i>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow">
                  <div className="text-center">
                    <img
                      src="https://post.healthline.com/wp-content/uploads/2019/01/Male_Doctor_732x549-thumbnail.jpg"
                      className="card-img-top img-fluid rounded-circle p-2 doctorImg"
                      alt="..."
                    />
                  </div>
                  <div className="card-body text-center">
                    <h5 className="card-title">Dr. Mokhes Datta</h5>
                    <p className="card-text">MBBS, M. D of Medical</p>
                    <p>
                      <i
                        className="fa fa-facebook mx-2 text-primary"
                        aria-hidden="true"
                      ></i>
                      <i
                        className="fa fa-twitter mx-2 text-info"
                        aria-hidden="true"
                      ></i>
                      <i
                        className="fa fa-instagram mx-2 text-danger"
                        aria-hidden="true"
                      ></i>
                      <i className="fa fa-envelope mx-2" aria-hidden="true"></i>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow">
                  <div className="text-center">
                    <img
                      src="https://img.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg?size=626&ext=jpg"
                      className="card-img-top img-fluid rounded-circle p-2 doctorImg"
                      alt="..."
                    />
                  </div>
                  <div className="card-body text-center">
                    <h5 className="card-title">Dr. Sofia Karim</h5>
                    <p className="card-text">MBBS, M. D of Medical</p>
                    <p>
                      <i
                        className="fa fa-facebook mx-2 text-primary"
                        aria-hidden="true"
                      ></i>
                      <i
                        className="fa fa-twitter mx-2 text-info"
                        aria-hidden="true"
                      ></i>
                      <i
                        className="fa fa-instagram mx-2 text-danger"
                        aria-hidden="true"
                      ></i>
                      <i className="fa fa-envelope mx-2" aria-hidden="true"></i>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow">
                  <div className="text-center">
                    <img
                      src="https://www.independent.ie/irish-news/education/671f1/40328133.ece/AUTOCROP/w620/A%20young%20caring%20doctor"
                      className="card-img-top img-fluid rounded-circle p-2 doctorImg"
                      alt="..."
                    />
                  </div>
                  <div className="card-body text-center">
                    <h5 className="card-title">Dr. Cyalo Sahia</h5>
                    <p className="card-text">FCBS, M. D of Medical</p>
                    <p>
                      <i
                        className="fa fa-facebook mx-2 text-primary"
                        aria-hidden="true"
                      ></i>
                      <i
                        className="fa fa-twitter mx-2 text-info"
                        aria-hidden="true"
                      ></i>
                      <i
                        className="fa fa-instagram mx-2 text-danger"
                        aria-hidden="true"
                      ></i>
                      <i className="fa fa-envelope mx-2" aria-hidden="true"></i>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      {/* contact section  */}
      <section className="py-3 mt-3">
        <Contact></Contact>
      </section>
    </div>
  );
};

export default Home;
