import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket, faHeart } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="product-grid">
      <div className="product-image">
        <img className="img-1" src={product.detail.image} />
        <img className="img-2" src={product.detail.image} />
        {product.detail.old_price !== "" ? (
          <span className="product-discount-label">
            %
            {Math.ceil(
              100 -
                (parseInt(product.detail.price) * 100) /
                  parseInt(product.detail.old_price)
            )}
          </span>
        ) : null}
      </div>
      <div className="product-content">
        <h3 className="title">
          <a href={product.categoryId + "/" + product.id}>
            {product.detail.title}
          </a>
        </h3>
        <div className="price">
          {product.detail.old_price !== "" ? (
            <span>{product.detail.old_price} TL</span>
          ) : null}
          {product.detail.price} TL
        </div>
        <Button variant="success" className="add-cart-btn mt-2">
          <div className="me-2 d-inline-block">
            <FontAwesomeIcon icon={faShoppingBasket} />
          </div>
          ADD TO CART
        </Button>
      </div>
    </div>
  );
}
