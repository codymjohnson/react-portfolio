import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {

    return (
        <footer className="mt-5">
            <Container fluid={true}>
                <Row className="border-top justify-content-between p-3">
                    <Col className="p-0" md={3} sm={12}>
                        <strong>View my <a href="https://github.com/codymjohnson" target="_blank" rel="noopener noreferrer">Github</a> and my <a href="https://www.linkedin.com/in/cody-johnson-876554a1/" target="_blank" rel="noopener noreferrer">LinkedIn</a></strong>
                    </Col>
                    <Col className="p-0 d-flex justify-content-center" md={3}>
                        <strong>I can also be reached via Email: cmichael.johnson@outlook.com or phone: 970-690-8959</strong>
                    </Col>
                </Row>
            </Container>
        </footer>
    );

}

export default Footer;