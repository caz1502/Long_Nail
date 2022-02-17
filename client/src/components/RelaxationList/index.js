import React from "react";
import { Container, Row, Table } from "react-bootstrap";
import "../RelaxationList/relaxation.css";

const RelaxationList = ({ relaxations}) => {
  return (
    <Container>
      <Row className="justify-space-around">
        <span className="relaxation">Relaxation</span>
      </Row>

      {relaxations &&
        relaxations.map((relaxation) => (
          <Table style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}} key={relaxation._id}>
            {/* name of service */}
            <ul>{relaxation.name}</ul>
            {/* price of service */}
            
          </Table>
        ))}
    </Container>
  );
};

export default RelaxationList;
