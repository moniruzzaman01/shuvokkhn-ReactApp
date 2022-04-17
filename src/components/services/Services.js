import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import s1 from "../../images/services/service-1.jpg";
import s2 from "../../images/services/service-2.jpg";
import s3 from "../../images/services/service-3.jpg";

const Services = () => {
  return (
    <div>
      <h1 className="bg-dark my-5 py-3" style={{ color: "white" }}>
        Our Services
      </h1>
      <CardGroup>
        <Card>
          <Card.Img variant="top" src={s1} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
            <Card.Text>Price: $100</Card.Text>
          </Card.Body>
          <Card.Footer>
            <button className="btn btn-dark w-100">CheckOut</button>
          </Card.Footer>
        </Card>

        <Card>
          <Card.Img variant="top" src={s2} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.{" "}
            </Card.Text>
            <Card.Text>Price: $100</Card.Text>
          </Card.Body>
          <Card.Footer>
            <button className="btn btn-dark w-100">CheckOut</button>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={s1} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
            <Card.Text>Price: $100</Card.Text>
          </Card.Body>
          <Card.Footer>
            <button className="btn btn-dark w-100">CheckOut</button>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={s3} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
            <Card.Text>Price: $100</Card.Text>
          </Card.Body>
          <Card.Footer>
            <button className="btn btn-dark w-100">CheckOut</button>
          </Card.Footer>
        </Card>
      </CardGroup>
    </div>
  );
};

export default Services;
