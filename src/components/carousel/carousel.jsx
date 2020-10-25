import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import Bathroom1 from '../../assests/Bathroom1.png';
import './carousel.scss';

const Slider = () => {
    return <Container>
        <Row>
            <Col>
                <Card bg="warning" text="dark" >
                    
                    <Card.Body>
                        <Card.Img src={Bathroom1} />
                        <Card.ImgOverlay>
                            <h5>Offer</h5>
                            <p>hhaahahah</p>
                            </Card.ImgOverlay>     
                     </Card.Body>

                </Card >
            </Col>

            <Col>
                   <Card bg="info">
                    <Card.Body>
                    <Card.Img src={Bathroom1} />     
                    </Card.Body>
                    </Card>
            </Col>
            
            <Col>
                <Card>
                
                </Card>
            </Col>
            
            <Col><Card></Card></Col>
        </Row>
    </Container>

}
export default Slider;