import Link from "next/link";
import React, { useEffect, useState } from "react";

let BASE_API_URI = process.env.NEXT_PUBLIC_BASE_API_URI as string;

export default function Menu({
  subCategories,
  menuRef,
}: {
  subCategories: Category[];
  menuRef: React.RefObject<HTMLDivElement>;
}) {
  let col1: Category[] = [],
    col2: Category[] = [];
  for (
    let index = 0;
    subCategories !== undefined && index < subCategories.length;
    index++
  ) {
    if (index < subCategories.length / 2) {
      col1.push(subCategories[index]);
    } else col2.push(subCategories[index]);
  }
  return (
    <div className="main-menu shadow container" ref={menuRef}>
      <div className="row">
        <div className="col-2">
          <div className="d-flex flex-column gap-2">
            {col1.map((c) => (
              <Link key={c.id} href={c.id}>
                <a className="menu-link">{c.title}</a>
              </Link>
            ))}
          </div>
        </div>
        <div className="col-2">
          <div className="d-flex flex-column gap-2">
            {col2.map((c) => (
              <Link key={c.id} href={c.id}>
                <a className="menu-link">{c.title}</a>
              </Link>
            ))}
          </div>
        </div>
        <div className="col-4">
          <img
            className="d-block w-100 "
            style={{ aspectRatio: "16/9", objectFit: "cover" }}
            src="https://cdn.dsmcdn.com/ty423/campaign/banners/original/605258/a1d1256a19_0_new.jpg"
            alt="Second slide"
          />
        </div>
        <div className="col-4">
          <img
            className="d-block w-100"
            style={{ aspectRatio: "16/9", objectFit: "cover" }}
            src="https://cdn.dsmcdn.com/ty423/campaign/banners/original/605258/a1d1256a19_0_new.jpg"
            alt="Second slide"
          />
        </div>
      </div>
    </div>
  );
}
