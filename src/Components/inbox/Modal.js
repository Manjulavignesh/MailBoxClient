const Modal = (props) => {
    return (
      <div>
        <div className="modal-wrapper" onClick={props.closeModal} ></div>
        <div className="modal-container">
        <h1 style={{color:"black"}}>helloWorld</h1>
        <button className="modal-btn"onClick={props.closeModal}>Send</button>
        </div>
      </div>
    );
  };
  export default Modal;