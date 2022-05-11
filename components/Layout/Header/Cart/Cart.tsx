import React from 'react'
import { Offcanvas } from 'react-bootstrap';

export default function Cart({
    show,
    handleClose,
}: {
    show: boolean;
    handleClose: Function;
}) {
    return (
        <Offcanvas placement="end" show={show} onHide={handleClose} >
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>My Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
               
            </Offcanvas.Body>
        </Offcanvas>
    )
}
