import React, { useRef, useState } from "react";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { db } from "./Firebase";
const Modal = (props) => {
  const toEmail = useRef();
  const subject = useRef();
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const email = toEmail.current.value;
    const Subject = subject.current.value;
    const plainText = editorState.getCurrentContent().getPlainText();
    props.closeModal();
    console.log(email, Subject, plainText);
    db.collection("emails")
      .doc(email)
      .set({
        email: email,
        subject: Subject,
        Message: plainText,
      })
      .then(() => {
        console.log("Document successfully written!");
        window.location.reload ();
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
  };
  return (
    <form onSubmit={submitHandler}>
      <div>
        <div className="modal-wrapper" onClick={props.closeModal}></div>
        <div className="modal-container">
          <button
            style={{
              float: "right",
              width: 35,
              height: 30,
              marginBottom: 25,
              background: "red",
              border: "none",
              borderRadius: "4px",
              color: "white",
            }}
            onClick={props.closeModal}
          >
            X
          </button>
          <div>
            <input
              type="email"
              style={{
                width: "100%",
                height: 35,
                borderRadius: "4px",
                fontSize: 14,
                border: "2px solid #d3d3d3",
              }}
              placeholder="To:"
              ref={toEmail}
            />
            <input
              type="text"
              style={{
                width: "100%",
                height: 35,
                borderRadius: "4px",
                fontSize: 14,
                border: "2px solid #d3d3d3",
                marginTop: 8,
              }}
              placeholder="Subject:"
              ref={subject}
            />
          </div>

          <div style={{ height: 300, color: "black", marginTop: 25 }}>
            <Editor
              editorState={editorState}
              toolbarClassName="toolbarClassName"
              wrapperClassName="wrapperClassName"
              editorClassName="editorClassName"
              onEditorStateChange={onEditorStateChange}
            />
          </div>
          <button className="modal-btn">Send</button>
        </div>
      </div>
    </form>
  );
};
export default Modal;
