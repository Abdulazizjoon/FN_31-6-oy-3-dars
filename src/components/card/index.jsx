import React from "react";
import "./index.css";

function Card({ data }) {
  const { firstName, lastName, image, phone, email, cars, address } = data;

  return (
    <div className="card">
      <img src={image} alt={`${firstName} ${lastName}`} className="card-image" />
      <div className="card-content">
        <h2 className="card-name">
          {firstName} {lastName}
        </h2>
        <p className="card-info">
          <strong>Phone:</strong> {phone}
        </p>
        <p className="card-info">
          <strong>Email:</strong> {email}
        </p>
        <div className="address">
          <p>
            <strong>Region:</strong> <span className="region">{address.region}</span>
          </p>
          <p>
            <strong>Zip:</strong> <span className="region">{address.zip}</span>
          </p>
        </div>
        <div className="cars">
          <strong>Cars:</strong>
          {cars.map((car, index) => (
            <span key={index} className="car">
              {car}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card;

