import React, { useRef } from "react";
import ReactDom from "react-dom";

export const Modal = ({ setShowModal, callBackFunction }) => {
  // close the modal when clicking outside the modal.
  const modalRef = useRef();
  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      setShowModal(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    callBackFunction("Form submitted");
    closeModal?.();
  };

  // render the modal JSX in the portal div.
  return ReactDom.createPortal(
    <div className="container" ref={modalRef} onClick={closeModal}>
      <div className="modal">
        <form onSubmit={handleSubmit}>
          <div>
            <label for="Name">Name: </label>
            <input name="name" placeholder="Name" type="text" required />
          </div>
          <div>
            <label for="rotation_period">rotation_period: </label>
            <input name="rotation_period" type="number" required />
          </div>
          <div>
            <label for="orbital_period">orbital_period: </label>
            <input name="orbital_period" type="number" required />
          </div>
          <div>
            <label for="diameter">diameter: </label>
            <input name="diameter" type="number" required />
          </div>
          <div>
            <label for="climate">climate: </label>
            <input name="climate" type="text" required />
          </div>
          <div>
            <label for="gravity">gravity: </label>
            <input name="gravity" type="text" required />
          </div>
          <div>
            <label for="surface_water">surface_water: </label>
            <input name="surface_water" type="number" required />
          </div>
          <input type="submit" value="Submit" required />
        </form>
        <button onClick={() => setShowModal(false)}>X</button>
      </div>
    </div>,
    document.getElementById("portal")
  );
};
