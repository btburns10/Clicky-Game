import React from "react";
import "./Modal.css";

const Modal = () => (

      <div className="row">
      <div className="col s12 m4 lg3">
        <div onClick={() => props.handleClick(props.id)} className="card grow">
          <img src={props.image} alt={props.name} />
        </div>
      </div>
      </div>

);

export default Modal;