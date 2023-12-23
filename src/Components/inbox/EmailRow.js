import React, { useState } from "react";
import "./EmailList.css";
import { BsBookmarkFill } from "react-icons/bs/index.esm.js";
import { useSelector } from "react-redux";
const EmailRow = (props) => {
  const read = useSelector((state) => state.mails.rcvdMessage);
  const [red, setRed] = useState(true);
  const clickHandler = () => {
    for (let i = 0; i < read[read.length - 1].length; i++) {
      if (read[read.length - 1][i].email == props.email) {
        setRed(false);
      }
    }
  };

  return (
    <tbody>
      <tr>
        {red && (
          <td>
            <BsBookmarkFill />
          </td>
        )}
        {!red && <td></td>}
        <td onClick={clickHandler}>{props.email}</td>
        <td>{props.subject}</td>
        <td>{props.Message}</td>
      </tr>
    </tbody>
  );
};

export default EmailRow;
