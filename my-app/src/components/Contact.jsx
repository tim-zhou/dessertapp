import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ContactUs = () => {
  return (
    <section
      id="contact"
      className="d-flex align-items-center justify-content-center"
      style={{
        minHeight: '100vh',
        width: '100%',
        backgroundColor: '#ffeef5',
        padding: '60px 0',
      }}
    >
      <div className="w-100">
        <Container>
          <h2 className="text-center mb-5">Contact Us</h2>
          <Row className="mb-4 text-center">
            <Col md={4}>
              <h5>📍 Address</h5>
              <p>123 Sweet Street<br />Dessert City, DC 45678</p>
            </Col>
            <Col md={4}>
              <h5>🕒 Hours</h5>
              <p>Mon–Sat: 10am – 8pm<br />Sun: 12pm – 6pm</p>
            </Col>
            <Col md={4}>
              <h5>📞 Phone</h5>
              <p>(123) 456-7890</p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col md={10}>
              <div className="map-responsive">
                <iframe
                  title="Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.7032568772137!2d-74.00594128459414!3d40.71277597933161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjAiTiA3NMKwMDAnMjEuMiJX!5e0!3m2!1sen!2sus!4v1614098700324!5m2!1sen!2sus"
                  width="100%"
                  height="400"
                  frameBorder="0"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default ContactUs;
