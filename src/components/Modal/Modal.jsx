import React from "react";
import "./Modal.css";
import { handleModal } from "../Modal/handleModal";

const Modal = () => {
  return (
    <div className="modal">
      <div class="modal__container">
        <div class="cookiesContent" id="cookiesPopup">
          <button class="close" onClick={() => handleModal("none")}>
            ✖
          </button>
          <p>Coming Soon !!</p>
          <button class="accept" onClick={() => handleModal("none")}>
            That's fine!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
