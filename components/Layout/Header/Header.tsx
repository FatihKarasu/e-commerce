import React, { useRef, useState } from "react";
import { Badge, Container, Nav, Navbar } from "react-bootstrap";
import Link from "next/link";
import Menu from "./Menu/Menu";
import Search from "./Search/Search";
import OffCanvasMenu from "./OffCanvasMenu/OffCanvasMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faShoppingBasket,
  faHeart,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import Cart from "./Cart/Cart";
let menuTimeout: ReturnType<typeof setTimeout>;
export default function Header() {
  const [searchModal, setSearchModal] = useState(false);
  const [offcanvas, setOffcanvas] = useState(false);
  const [cartOffCanvas, setCartOffCanvas] = useState(false);
  const [categoryId, setCategoryId] = useState("");
  const menuRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const [showMenu, setShowMenu] = useState(false);
  const openMenu = () => {
    clearTimeout(menuTimeout);
    menuTimeout = setTimeout(() => {
      setShowMenu(true);
    }, 500);
  };

  const closeMenu = () => {
    clearTimeout(menuTimeout);
    if (menuRef.current) {
      menuRef.current.onmouseleave = () => {
        closeMenu();
      };
    }
    if (
      menuRef.current?.matches(":hover") ||
      navRef.current?.matches(":hover")
    ) {
      return;
    }
    menuTimeout = setTimeout(() => {
      if (
        menuRef.current?.matches(":hover") ||
        navRef.current?.matches(":hover")
      ) {
        return;
      }
      setCategoryId("");
      setShowMenu(false);
    }, 250);
  };

  return (
    <header className="sticky-top bg-dark position-relative">
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="p-0"
      >
        <Container>
          <div className="d-flex gap-2 order-0">
            <Navbar.Toggle
              onClick={() => setOffcanvas(true)}
              className="p-1"
              aria-controls="responsive-navbar-nav"
            />
            <Navbar.Brand href="#home">E-Commerce</Navbar.Brand>
          </div>
          <Nav className="gap-3 gap-lg-1 flex-row order-lg-2 py-3">
            <Nav.Link onClick={() => setSearchModal(true)}>
              <FontAwesomeIcon size="lg" icon={faSearch} />
            </Nav.Link>
            <Nav.Link>
              <FontAwesomeIcon size="lg" icon={faHeart} />
            </Nav.Link>
            <Nav.Link
              className="icon-container"
              onClick={() => setCartOffCanvas(true)}
            >
              <FontAwesomeIcon size="lg" icon={faShoppingBasket} />
              <Badge className="c-badge" pill bg="danger">
                3
              </Badge>
            </Nav.Link>
            <Nav.Link>
              <FontAwesomeIcon size="lg" icon={faUser} />
            </Nav.Link>
          </Nav>
          <Nav
            ref={navRef}
            className="mx-auto  gap-0 gap-lg-5 d-none d-lg-flex categories align-self-end"
            onMouseEnter={() => openMenu()}
            onMouseLeave={() => closeMenu()}
          >
            <Link href="/products">
              <a
                className={`navlink-white ${
                  categoryId === "Women" && showMenu ? "active" : ""
                }`}
                onMouseEnter={() => setCategoryId("Women")}
              >
                Women
              </a>
            </Link>
            <Link href="#pricing">
              <a
                className={`navlink-white ${
                  categoryId === "Men" && showMenu ? "active" : ""
                }`}
                onMouseEnter={() => setCategoryId("Men")}
              >
                Men
              </a>
            </Link>
            <Link href="#baby">
              <a
                className={`navlink-white ${
                  categoryId === "Baby" && showMenu ? "active" : ""
                }`}
                onMouseEnter={() => setCategoryId("Baby")}
              >
                Baby
              </a>
            </Link>
          </Nav>
        </Container>
      </Navbar>
      {showMenu ? <Menu categoryId={categoryId} menuRef={menuRef} /> : null}
      <Search show={searchModal} handleClose={() => setSearchModal(false)} />
      <OffCanvasMenu show={offcanvas} handleClose={() => setOffcanvas(false)} />
      <Cart show={cartOffCanvas} handleClose={() => setCartOffCanvas(false)} />
    </header>
  );
}
