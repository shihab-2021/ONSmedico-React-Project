import React from "react";
import { Link } from "react-router-dom";
import "./Service.css";

const Service = (props) => {
  const { name, image, subServices, key } = props.service;
  return (
    <>
      <div className="col">
        <div className="card mb-3 shadow" style={{ minHeight: "630px"}}>
          <img className="card-img-top product-image" src={image} alt="..." />
          <div className="card-body">
            <h4 className="card-title text-primary">{name}</h4>
            <br />
            <h5>Facilities :</h5>
              <ul className="text-secondary">
                <li>{subServices[0]}</li>
                <li>{subServices[1]}</li>
                <li>{subServices[2]}</li>
                <li>{subServices[3]}</li>
              </ul>
          </div>
            <div className="card-footer">
            <Link to={`/details/${key}`} className="btn btn-outline-primary"><i className="fa fa-info-circle" aria-hidden="true"></i> Detail
            </Link>
            </div>
        </div>
      </div>
    </>
  );
};

export default Service;
