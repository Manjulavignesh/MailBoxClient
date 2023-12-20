import React from "react";
import "./EmailList.css";
const EmailRow = (props) => {
  return (
    <tbody>
      {console.log(props.email)}
      <tr>
        <td>{props.email}</td>
        <td>{props.subject}</td>
        <td>{props.Message}</td>
      </tr>
    </tbody>
  );
};

export default EmailRow;
