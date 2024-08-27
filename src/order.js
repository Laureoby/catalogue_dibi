import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const OrderSection = () => {
const phoneNumber = "+237677315284";
  return (
    <Container fluid className='text-center py-5' style={{backgroundColor: '#f8f9fa'}}>
        <Row>
            <Col>
                <h3 className='mb-3'>Vous pouvez avoir un travail personnalisé et adapté à vos besoins</h3>
            </Col>
            <Col>
                <Button 
                variant='primary' 
                className='fs-3 mb-3'
                href={`tel:${phoneNumber}`}
                as="a"
                >Contactez-nous
                </Button>
            </Col>
        </Row>
    </Container>
  );
}

export default OrderSection;