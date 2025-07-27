import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Menu = () => {
  const [desserts, setDesserts] = useState([]);
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    fetch('/api/menu')
      .then((res) => res.json())
      .then((data) => {
        setDesserts(data.desserts || []);
        setDrinks(data.drinks || []);
      })
      .catch((err) => console.error('Error fetching menu:', err));
  }, []);

  const renderCards = (items) =>
    items.map((item, index) => (
      <Col key={index} md={4} className="mb-4">
        <Card>
          <Card.Img variant="top" src={item.image} />
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>{item.description}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    ));

  return (
    <section id="menu" className="py-5 bg-white w-100">
      <Container className="text-center">
        <h2 className="mb-4">Menu</h2>

        <h4>Desserts</h4>
        <Row>{renderCards(desserts)}</Row>

        <h4 className="mt-5">Drinks</h4>
        <Row>{renderCards(drinks)}</Row>
      </Container>
    </section>
  );
};

export default Menu;
