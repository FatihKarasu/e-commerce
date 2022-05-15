import React from "react";

export default function Menu({
  categoryId,
  menuRef,
}: {
  categoryId: string;
  menuRef: React.RefObject<HTMLDivElement>;
}) {
  return (
    <div className="main-menu shadow container" ref={menuRef}>
      <div className="row">
        <div className="col-2">
          <div className="d-flex flex-column gap-2">
            <a className="menu-link" href="#">
              {categoryId + " Sub"}
            </a>
            <a className="menu-link" href="#">
              {categoryId + " Sub"}
            </a>
            <a className="menu-link" href="#">
              {categoryId + " Sub"}
            </a>
            <a className="menu-link" href="#">
              {categoryId + " Sub"}
            </a>
            <a className="menu-link" href="#">
              {categoryId + " Sub"}
            </a>
          </div>
        </div>
        <div className="col-2">
          <div className="d-flex flex-column gap-2">
            <a className="menu-link" href="#">
              {categoryId + " Sub"}
            </a>
            <a className="menu-link" href="#">
              {categoryId + " Sub"}
            </a>
            <a className="menu-link" href="#">
              {categoryId + " Sub"}
            </a>
            <a className="menu-link" href="#">
              {categoryId + " Sub"}
            </a>
            <a className="menu-link" href="#">
              {categoryId + " Sub"}
            </a>
          </div>
        </div>
        <div className="col-4">
          <img
            className="d-block w-100 "
            style={{aspectRatio:"16/9",objectFit:"cover"}}
            src="https://cdn.dsmcdn.com/ty423/campaign/banners/original/605258/a1d1256a19_0_new.jpg"
            alt="Second slide"
          />
        </div>
        <div className="col-4">
          <img
            className="d-block w-100"
            style={{aspectRatio:"16/9",objectFit:"cover"}}
            src="https://cdn.dsmcdn.com/ty423/campaign/banners/original/605258/a1d1256a19_0_new.jpg"
            alt="Second slide"
          />
        </div>
      </div>
    </div>
  );
}
