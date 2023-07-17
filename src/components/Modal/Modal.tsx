import React from "react";
import { Modal as BSModal } from "react-bootstrap";
export const Modal = () => {
  return (
    <BSModal className="customize-className" size="lg" show={false}>
      {/* <BSModal.Dialog>
        <BSModal.Header closeButton>
          <BSModal.Title id="contained-modal-title-vcenter">
            Product Has Been Success
          </BSModal.Title>
        </BSModal.Header>
        <BSModal.Body>
          <h4>Centered BSModal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p>
        </BSModal.Body>
        <BSModal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </BSModal.Footer>
      </BSModal.Dialog> */}
    </BSModal>
  );
};
