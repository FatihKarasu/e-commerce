import React, { useState } from "react";
import { Badge, Container, Nav, Navbar } from "react-bootstrap";
import Link from "next/link";
import SearchBar from "./SearchBar";
import OffCanvasMenu from "./OffCanvasMenu/OffCanvasMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faShoppingBasket,
  faHeart,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
export default function Header() {
  const [show, setShow] = useState(false);
  return (
    <header className="sticky-top bg-dark">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <div className="d-flex gap-2 order-0">
            <Navbar.Toggle
              onClick={() => setShow(true)}
              className="p-1"
              aria-controls="responsive-navbar-nav"
            />
            <Navbar.Brand href="#home">E-Commerce</Navbar.Brand>
          </div>
          <Nav className="gap-3 gap-lg-1 flex-row order-lg-2">
            <Nav.Link className="d-none d-md-block" href="#1">
              <FontAwesomeIcon size="lg" icon={faSearch} />
            </Nav.Link>
            <Nav.Link href="#2">
              <FontAwesomeIcon size="lg" icon={faHeart} />
            </Nav.Link>
            <Nav.Link className="icon-container" href="#4">
              <FontAwesomeIcon size="lg" icon={faShoppingBasket} />
              <Badge className="c-badge" pill bg="danger">
                3
              </Badge>
            </Nav.Link>
            <Nav.Link href="#3">
              <FontAwesomeIcon size="lg" icon={faUser} />
            </Nav.Link>
          </Nav>
          <Nav className="mx-auto gap-0 gap-lg-5 d-none d-lg-flex">
            <Nav.Link href="#features">Women</Nav.Link>
            <Nav.Link href="#pricing">Men</Nav.Link>
            <Nav.Link href="#baby">Baby</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <OffCanvasMenu show={show} handleClose={() => setShow(false)} />
    </header>
  );
}

