import React from "react";
import { Row, Col, Card, CardBody, CardHeader, CardText } from "reactstrap";

export default function Alt(props) {
  return (
    <div>
      <Row>
        <h5>Üç birimde sıcaklık ölçümü</h5>
      </Row>
      <Row>
        <Col>
          <Card
            className="my-2 text-center"
            color="dark"
            outline
            style={{
              width: "18rem",
            }}
          >
            <CardHeader>Celcius</CardHeader>
            <CardBody>
              <CardText>{props.sicaklik} derece</CardText>
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card
            className="my-2 text-center"
            color="dark"
            outline
            style={{
              width: "18rem",
            }}
          >
            <CardHeader>Fahrenheit</CardHeader>
            <CardBody>
              <CardText>{(props.sicaklik * 9) / 5 + 32} derece</CardText>
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card
            className="my-2 text-center"
            color="dark"
            outline
            style={{
              width: "18rem",
            }}
          >
            <CardHeader>Kelvin</CardHeader>
            <CardBody>
              <CardText>{props.sicaklik + 273.15} derece</CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
