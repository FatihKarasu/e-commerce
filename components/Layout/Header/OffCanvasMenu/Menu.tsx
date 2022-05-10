import React, { useRef, useState } from "react";
import { Offcanvas } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
interface Item {
  id: number;
  title: string;
}
export default function Menu({
  title = "E-Commerce",
  menuItems,
}: {
  title: any;
  menuItems: Array<Item>;
}) {
  let menu = useRef<HTMLDivElement>(null);
  const [nextMenu, setNextMenu] = useState<React.ReactNode>();

  const onClickHandler = (item: Item) => {
    setNextMenu(
      <Menu
        title={
          <div className="d-flex gap-2 align-items-center">
            <FontAwesomeIcon
              onClick={() => goBack()}
              size="lg"
              icon={faArrowLeft}
            />
            <div>{item.title}</div>
          </div>
        }
        menuItems={menuItems}
      />
    );
    menu.current?.classList.add(`show-next-menu`);
  };
  const goBack = () => {
    setNextMenu(undefined)
    menu.current?.classList.remove(`show-next-menu`);
  };

  return (
    <div className="menu-container" ref={menu}>
      <div className="menu">
        {nextMenu == undefined ? (
          <>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>{title}</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              {menuItems.map((item) => (
                <div key={item.id} onClick={() => onClickHandler(item)}>
                  {item.title}
                </div>
              ))}
            </Offcanvas.Body>
          </>
        ) : null}
      </div>
      <div className="menu">{nextMenu!=undefined?nextMenu:null}</div>
    </div>
  );
}
