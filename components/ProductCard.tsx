import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingBasket,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="product-grid">
      <div className="product-image">
        <img className="img-1" src={product.image} />
        <img className="img-2" src={product.image} />
        <span className="product-discount-label">-33%</span>
      </div>
      <div className="product-content">
        <h3 className="title"><a href="#">{product.title}</a></h3>
        <div className="price"><span>{product.old_price}</span> {product.price}</div>
        <Button variant="success" className="add-cart-btn mt-2">
          <div className="me-2 d-inline-block"><FontAwesomeIcon size="md" icon={faShoppingBasket} /></div>
          ADD TO CART
        </Button>
      </div>
    </div>
  );
}
