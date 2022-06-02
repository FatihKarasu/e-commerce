import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket, faHeart } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
import Link from "next/link";

export default function ProductCard({ product }: { product: Product }) {
  const [productColors, setProductColors] = useState<Color[]>([]);
  useEffect(() => {
    let colors: Color[] = [];
    product.variants.forEach((v) => {
      if (colors.findIndex((c) => c.id === v.color.id) === -1) {
        colors.push(v.color);
      }
    });
    setProductColors(colors);
  }, []);


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
        <div className="colors">
          {productColors.slice(0, 3).map((color, index) => (
            <div
              key={color.id}
              className="color"
              style={{ backgroundColor: color.hexCode }}
              title={color.name}
            ></div>
          ))}
          {productColors.length > 3 ? (
            <div className="color" title={`${productColors.length - 3} more`} >
              +{productColors.length - 3}
            </div>
          ) : null}
        </div>
      </div>
      <div className="product-content">
        <h3 className="title">
          <Link href={product.categoryId + "/" + product.id}>
            <a>
              {product.detail.title}
            </a>
          </Link>

        </h3>
        <div className="price">
          {product.detail.old_price !== "" ? (
            <span>{product.detail.old_price} TL</span>
          ) : null}
          {product.detail.price} TL
        </div>

      </div>
    </div>
  );
}
