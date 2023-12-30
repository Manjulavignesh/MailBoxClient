import React, {  useState } from "react";
import "./EmailList.css";
import { BsBookmarkFill } from "react-icons/bs/index.esm.js";
import { HiArchiveBoxXMark } from "react-icons/hi2";
import { useSelector } from "react-redux";
import OpenInbox from "./OpenInbox";
import { db } from "./Firebase";
const EmailRow = (props) => {
  const read = useSelector((state) => state.mails.rcvdMessage);
  const [red, setRed] = useState(true);
  const [modal,setModal]=useState(true);
  const clickHandler = () => {
    for (let i = 0; i < read[read.length - 1].length; i++) {
      if (read[read.length - 1][i].email == props.email) {
        setRed(false);
        setModal(prev=>!prev);
      }
    }
  };
  const deleteHandler=()=>{
    db.collection("emails").doc(props.email).delete().then(() => {
      console.log("Document successfully deleted!");
      setTimeout (() => {
        window.location.reload ();
      });
  }).catch((error) => {
      console.error("Error removing document: ", error);
  });
 
  }

  return (
    <tbody>
      <tr>
        <td onClick={clickHandler}>{red &&
            <BsBookmarkFill />
        }{' '}{props.email}</td>
        <td>{props.subject}</td>
        <td>{props.Message}</td>
       {!modal &&  <OpenInbox  email={props.email} subject={props.subject} Message={props.Message} setModal={setModal}/>}
      <td> <HiArchiveBoxXMark onClick={deleteHandler} /> </td>
      </tr>
     
    </tbody>
    
  );
};

export default EmailRow;
