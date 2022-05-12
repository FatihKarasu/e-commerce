import React, { useRef } from "react";
import { Button, Modal } from "react-bootstrap";
import SearchBar from "./SearchBar";
export default function Search({
  show,
  handleClose,
}: {
  show: boolean;
  handleClose: VoidFunction;
}) {
  const modalWrapper = useRef<HTMLDivElement>(null);

  if (show) {
    modalWrapper.current?.classList.add("show");
  } else {
    modalWrapper.current?.classList.remove("show");
  }
  return (
    <Modal show={show} onHide={handleClose} className="search-modal">
      <div className="search-modal" onClick={(e)=>e.stopPropagation()}><SearchBar/></div>
    </Modal>
    // <div
    //   className="search-modal-wrapper"
    //   ref={modalWrapper}
    //   onClick={handleClose}
    // >
    //   <div className="search-modal" onClick={(e)=>e.stopPropagation()}><SearchBar/></div>
    // </div>
  );
}
