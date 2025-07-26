import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { getMenuData } from '../data/menuData';

const Menu = () => {
  const [menu, setMenu] = useState({ desserts: [], drinks: [] });

  useEffect(() => {
    getMenuData().then(setMenu);
  }, []);

  const renderItems = (items) =>
    items.map((item, idx) => (
      <Col md={6} lg={4} key={idx} className="mb-4">
        <Card className="h-100 shadow-sm">
          <Card.Img
            variant="top"
            src={item.image}
            alt={item.name}
            style={{ height: '200px', objectFit: 'cover' }}
          />
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>{item.description}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    ));

  return (
    <section id="menu" style={{ backgroundColor: '#fff8f2', padding: '60px 0' }}>
      <Container>
        <h2 className="text-center mb-4">Desserts</h2>
        <Row>{renderItems(menu.desserts)}</Row>

        <h2 className="text-center mt-5 mb-4">Drinks</h2>
        <Row>{renderItems(menu.drinks)}</Row>
      </Container>
    </section>
  );
};

export default Menu;
