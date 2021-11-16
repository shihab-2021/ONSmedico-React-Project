import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import "./Details.css";

const Details = () => {
  const { key } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const itemDetail = data.filter((td) => td.key === key);
  return (
    <div>
      <section
        id="show"
        style={{
          minHeight: "500px",
          backgroundImage: `url(${itemDetail[0]?.image})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      >
        <Container className="d-flex align-items-center">
          <div>
            <h1 className="logo">
              <span className="text-danger">O</span>
              <span className="text-warning">N</span>
              <span className="text-info">S</span>
              <span className="text-success">medico</span>
            </h1>
            <h4 className="slogan">Your best care begins with us...</h4>
            <br />
            <h1 className="text-danger tw-bold">{itemDetail[0]?.name}</h1>
            <ul>
              <li>
                <h4>{itemDetail[0]?.subServices[0]}</h4>
              </li>
              <li>
                <h4>{itemDetail[0]?.subServices[1]}</h4>
              </li>
              <li>
                <h4>{itemDetail[0]?.subServices[2]}</h4>
              </li>
              <li>
                <h4>{itemDetail[0]?.subServices[3]}</h4>
              </li>
            </ul>
          </div>
        </Container>
      </section>
      <section className="container py-5 my-5">
        <Row className="align-items-center">
          <Col sm={12} md={7}>
            <div className="slogan">
              <h1 className="text-success">{itemDetail[0]?.name}</h1>
              <h5 className="text-secondary">{itemDetail[0]?.detail1}</h5>
              <br />
              <h5 className="text-secondary">{itemDetail[0]?.detail2}</h5>
              <br />
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
              <button className="btn btn-outline-info mb-2">
                See locations
              </button>
            </div>
          </Col>
          <Col md={5}>
            <div className="card shadow">
              <div className="card-body">
                <h1 className="card-title">Contact Us</h1>
                <hr className="w-50 text-danger p-1 rounded-pill" />
                <br />
                <h5 className="card-text">Phone : +(143) 1846-367</h5>
                <br />
                <h5 className="card-text">Office : +(423) 4805-567</h5>
                <br />
                <h5 className="card-text">E-mail : ONSmedico@yahoo.com</h5>
                <br />
                <h5>
                  Social :
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
                </h5>
                <br />
              </div>
            </div>
            <div className="p-4 bgBlue mt-5 d-flex">
              <div className="imgIcon me-4">
                <i className="fa fa-phone" aria-hidden="true"></i>
              </div>
              <div className="text-light">
                <h3>Emergency Cases</h3>
                <p>+003856543746</p>
              </div>
            </div>
          </Col>
        </Row>
      </section>
    </div>
  );
};

export default Details;
