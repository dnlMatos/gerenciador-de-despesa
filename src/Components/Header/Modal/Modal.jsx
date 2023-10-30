import React from "react";
import Button from "react-bootstrap/Button";
import Modall from "react-bootstrap/Modal";

export default function Modal(props) {
  return (
    <Modall
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modall.Header closeButton>
        <Modall.Title id="contained-modal-title-vcenter">
          Cadastrar Despesa
        </Modall.Title>
      </Modall.Header>
      <Modall.Body>
        <h4>Centered Modall</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modall.Body>
      <Modall.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modall.Footer>
    </Modall>
  );
}
