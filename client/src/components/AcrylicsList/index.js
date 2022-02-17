import React from "react";
import { Table, Container, Row } from "react-bootstrap";

const AcrylicList = ({ acrylics }) =>{

  return (
    <Container>
      <Row className=" justify-space-around ">
        <h1>Acrylic Nails</h1>
      </Row>
      {acrylics &&
        acrylics.map((acrylic) => (
          <Table  key={acrylic._id}>
            {/* name of service */}
            <th>{acrylic.name}</th>
            {/* description of service */}
            <th>{acrylic.price}</th>
          </Table>
        ))}
    </Container>
  );
};

export default AcrylicList;
