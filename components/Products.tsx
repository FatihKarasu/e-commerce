import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "./ProductCard";

let BASE_API_URI = process.env.NEXT_PUBLIC_BASE_API_URI as string;

export default function Products() {
  const [products, setProducts] = useState<Product[]>();

  const fetchProducts = async () => {
    const response = await fetch(BASE_API_URI + "/categories/women/products?start=0&limit=12");
    const data: Product[] = await response.json();
    setProducts(data);
  };

  useEffect(() => {
    setTimeout(() => {
      fetchProducts();
    }, 1000);
  }, []);
  return (
    <section className="products">
      <Container>
        <Row>
          {products != undefined || products != null
            ? products.map((product: Product) => (
                <Col key={product.id} sm={6} md={4} lg={3} className="mb-4">
                  <ProductCard product={product} />
                </Col>
              ))
            : "Loading"}
        </Row>
      </Container>
    </section>
  );
}
