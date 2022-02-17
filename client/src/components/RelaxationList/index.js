import React from "react";
import { Container, Row, Table } from "react-bootstrap";
import "../RelaxationList/relaxation.css";

const RelaxationList = ({ relaxations}) => {
  return (
    <Container >
      <Row className=" justify-space-around ">
         <span className="relaxation">Relaxation</span>
      </Row>

      {relaxations &&
        relaxations.map((relaxation) => (
          <Table key={relaxation._id}>
            {/* name of service */}
            <th>{relaxation.name}</th>
            <th>${relaxation.price}</th>
          </Table>
        ))}
    </Container>
  );
};

export default RelaxationList;
