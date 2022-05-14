import React from 'react'
import { Card, Button } from 'react-bootstrap'

export default function ProductCard({product}) {
    console.log(product);
    return (
        <Card className='product-card'>
            <Card.Img className='product-image' variant="top" src={product?.image} />
            <Card.Body>
                <Card.Title>{product?.title}</Card.Title>
                <Card.Text>
                    {product?.description}
                </Card.Text>
                <h3 className='product-price'>{product?.price} $</h3>
                <Button variant="success">Add To Basket</Button>
            </Card.Body>
        </Card>
    )
}
