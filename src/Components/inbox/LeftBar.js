import React from "react";
import { Card } from "react-bootstrap";
import ComposeEmail from "./ComposeEmail";

const LeftBar = () => {
  return (
    <div>
    <Card
      style={{ background: "black", width: 350, height: 750, color: "white" }}
    >
      <ComposeEmail/>
      <a href="" style={{textDecoration:"none"}}>
        {" "}
        <h2 style={{ marginLeft: 35,color:"white",marginTop:25 }}>Inbox</h2>
      </a>
      <a href="" style={{textDecoration:"none"}}>
        {" "}
        <h2 style={{ marginLeft: 35,color:"white",marginTop:25 }}>Important</h2>
      </a>
      <a href="" style={{textDecoration:"none"}}>
        {" "}
        <h2 style={{ marginLeft: 35,color:"white",marginTop:25 }}>Sent</h2>
      </a>
      <a href="" style={{textDecoration:"none"}}>
        {" "}
        <h2 style={{ marginLeft: 35,color:"white",marginTop:25 }}>Draft</h2>
      </a>
    </Card>
    
      </div>
  );
};

export default LeftBar;
