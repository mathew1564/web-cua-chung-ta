import React from 'react'
import  {Container,Row,Col} from 'react-bootstrap'
export default function Gird() {
  return (
    <Container>
        <Row>
            <Col xs md={4}>
            <Row>
                <Col>HI</Col>
                <Col>HELLO</Col>
                <Col> How</Col>
            </Row>
            </Col>
            <Col>Truong Trung Nguyen</Col>
            <Col>Truong Trung Nguyen</Col>
            <Col> Truong Trung Nguyen</Col>

        </Row>
    </Container>
  )
}
