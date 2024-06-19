import React from 'react'
import Button from 'react-bootstrap/Button';
import { Card, Row, Col} from 'react-bootstrap';


function Products({products}) {

  return (
    <div>
        <Row>
            {products.map(product => (
                <Col md={3} className='d-flex justify-content-center my-2' key={product._id}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={product.imageURL} />
                        <Card.Body>
                            <Card.Title>{product.name}</Card.Title>
                            <Card.Text>{product.description}</Card.Text>
                            <Card.Text><b>Price: </b>₹ {product.price}</Card.Text>
                            <Card.Text><b>Rating: </b>{product.rating}</Card.Text>
                            <Button variant="primary">Buy Now</Button>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    </div>
  )
}

export default Products
