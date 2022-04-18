import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import s1 from "../../images/services/service-1.jpg";
import s2 from "../../images/services/service-2.jpg";
import s3 from "../../images/services/service-3.jpg";

const Services = () => {
  const navigate = useNavigate();
  const handleCheckout = () => {
    navigate("/checkout");
  };
  return (
    <div>
      <h1 className=" mt-5 mb-2 py-3">Services</h1>
      <CardGroup>
        <Card>
          <Card.Img variant="top" src={s2} />
          <Card.Body>
            <Card.Title>Anneversary Package</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.{" "}
            </Card.Text>
            <Card.Text>
              Price: <b>$100</b>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <button onClick={handleCheckout} className="btn btn-dark w-100">
              CheckOut
            </button>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={s1} />
          <Card.Body>
            <Card.Title>Wedding Package</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
            <Card.Text>
              Price: <b>$100</b>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <button onClick={handleCheckout} className="btn btn-dark w-100">
              CheckOut
            </button>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={s3} />
          <Card.Body>
            <Card.Title>BirthDay Package</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
            <Card.Text>
              Price: <b>$100</b>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <button onClick={handleCheckout} className="btn btn-dark w-100">
              CheckOut
            </button>
          </Card.Footer>
        </Card>
      </CardGroup>
    </div>
  );
};

export default Services;
