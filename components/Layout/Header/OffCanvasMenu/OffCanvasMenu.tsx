import React from "react";
import { Offcanvas } from "react-bootstrap";
import Menu from "./Menu";
export default function OffCanvasMenu({
  show,
  handleClose,
}: {
  show: boolean;
  handleClose: Function;
}) {
  let items = [
    { id: 1, title: "Women" },
    { id: 2, title: "Men" },
    { id: 3, title: "Baby" },
  ];
  return (
    <Offcanvas show={show} onHide={handleClose} >
      <div style={{overflow:"hidden"}}>
        <Menu title="E-Commerce" menuItems={items}></Menu>
      </div>
    </Offcanvas>
  );
}
