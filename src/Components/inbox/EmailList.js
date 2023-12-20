import React, { useEffect, useState } from "react";
import { db } from "./Firebase";
import "./EmailList.css";
import EmailRow from "./EmailRow";
const EmailList = () => {
  const [emails, setEmails] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      await db
        .collection("emails")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            setEmails((prev) => [...prev,doc.data()]);
          });
        });
    };
    fetchData();
  }, []);
  let newArray = [];
  const removeDuplicates=()=> {
    let uniqueObject = {};
    for (let i in emails) {
      let objTitle = emails[i]["subject"];
      uniqueObject[objTitle] = emails[i];
    }
    for (let i in uniqueObject) {
      newArray.push(uniqueObject[i]);
    }
    console.log(newArray);
  }
  removeDuplicates();
  
  return (
    <div className="app-container">
      <table>
        <thead>
          <tr>
            <th>From</th>
            <th>Subject</th>
            <th>Description</th>
          </tr>
        </thead>
        {newArray != undefined &&
          newArray.map((data, index) => (
            <EmailRow
              id={index}
              key={index}
              email={data.email}
              subject={data.subject}
              Message={data.Message}
            />
          ))}
      </table>
    </div>
  );
};

export default EmailList;
