import React from "react";
import { Card } from "react-bootstrap";
import ComposeEmail from "./ComposeEmail";
import EmailList from "./EmailList";

const LeftBar = () => {
  return (
    <div>
      <Card
        style={{ background: "black", width: 300, height: 750, color: "white" }}
      >
        <ComposeEmail />
        <a href="" style={{ textDecoration: "none" }}>
          <h4 style={{ marginLeft: 35, color: "white", marginTop: 35 }}>
            Inbox
          </h4>
        </a>
        
        <a href="" style={{ textDecoration: "none" }}>
          <h4 style={{ marginLeft: 35, color: "white", marginTop: 25 }}>
            Sent
          </h4>
        </a>
        
        <EmailList />
      </Card>
    </div>
  );
};

export default LeftBar;
