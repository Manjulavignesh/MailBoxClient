import { useRef, useState } from "react";
import { Card, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const navigate=useNavigate();
  const [newUser, setNewUser] = useState(false);
  const emailInput = useRef();
  const passwordInput = useRef();
  const confirmPassword = useRef();
  const LoginHandler = () => {
    setNewUser(false);
  };
  const signUpHandler = () => {
    setNewUser(true);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const Email = emailInput.current.value;
    const Password = passwordInput.current.value;
    if (newUser) {
      if (
        Email.includes("@") != true ||
        Password.length < 4 ||
        confirmPassword.current.value < 4
      ) {
        let message1 = "1.Email must includes-@ symbol";
        let message2 = "2.password & confirm password must contain 4 charcters";

        alert(`Please Enter Valid User Details \n ${message1}\n ${message2}`);
      } else {
        fetch(
          "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA5Bb4tXZJ4LJeJt46O9B3xwuI7UPpGNuE",
          {
            method: "POST",
            body: JSON.stringify({
              email: Email,
              password: Password,
              returnSecureToken: true,
            }),
            headers: { "content-type": "application/json" },
          }
        )
          .then((res) => {
            if (res.ok) {
              console.log("User has successfully signed up");
            } else {
              throw new Error("Authentication Failed");
            }
          })
          .catch((err) => {
            alert(err);
          });
      }
    } else {
      fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA5Bb4tXZJ4LJeJt46O9B3xwuI7UPpGNuE",
        {
          method: "POST",
          body: JSON.stringify({
            email: Email,
            password: Password,
            returnSecureToken: true,
          }),
          headers: { "content-type": "application/json" },
        }
      )
        .then((res) => {
          if (res.ok) {
            navigate("/WelcomePage")
        return res.json();
          } else {
            return res.json().then((data) => {
              let errorMessage =
                "Wrong credential...Please check entered user details";
              throw new Error(errorMessage);
            });
          }
        })
        .then((data) => {
          localStorage.setItem("token",data.idToken)
        })
        .catch((err) => {
          alert(err.message);
        });
       
    }
  };
  return (
    <div>
        <div style={{background:"black",height:50,color:"white",fontSize:20,fontWeight:50}}>
        <Navbar>
        <h1 style={{fontFamily:"revert-layer",fontStyle:"italic"}}>Mail Box Client</h1>
        </Navbar>
        </div>
        
      <Card
        style={{
          background: "black",
          width: 350,
          height: 450,
          marginLeft: 600,
          marginTop: 100,
          borderRadius: "8px",
        }}
      >
        <Card.Title style={{ textAlign: "center", padding: 5 }}>
          {!newUser && <h2 style={{ fontSize: 35,color:"white" }} role="login"> LogIn </h2>}
          {newUser && <h2 style={{ fontSize: 35 ,color:"white"}}> SignUp</h2>}
        </Card.Title>
        <Card.Body>
          <form onSubmit={submitHandler}>
            <input
              type="text"
              ref={emailInput}
              placeholder="Email"
              style={{
                width: "75%",
                height: 25,
                padding: "6px 20px",
                border: "2px solid #dedede",
                borderRadius: "10px",
                marginLeft: 25,
              }}
            />
            <input
              type="Password"
              placeholder="Password"
              ref={passwordInput}
              style={{
                width: "75%",
                height: 25,
                padding: "6px 20px",
                border: "2px solid #dedede",
                borderRadius: "10px",
                marginLeft: 25,
                marginTop: 25,
              }}
            />
            {newUser && (
              <input
                type="Password"
                ref={confirmPassword}
                placeholder="Confirm Password"
                style={{
                  width: "75%",
                  height: 25,
                  padding: "6px 20px",
                  border: "2px solid #dedede",
                  borderRadius: "10px",
                  marginLeft: 25,
                  marginTop: 25,
                }}
              />
            )}
            {!newUser && (
              <button
                style={{
                  width: "75%",
                  marginTop: 40,
                  padding: "12px 20px",
                  marginLeft: 45,
                  borderRadius: "75px",
                  background: "#0f66ef",
                  border: "white",
                  color: "white",
                  fontSize: 17,
                }}
              >
                LogIn
              </button>
            )}
            {!newUser && (
              <a
                href="http://localhost:3000/forgotpassword"
                style={{ padding: "0px 115px" ,color:"white"}}
              >
                Forgot password
              </a>
            )}
            {newUser && (
              <button
                style={{
                  width: "75%",
                  marginTop: 40,
                  padding: "12px 20px",
                  marginLeft: 45,
                  borderRadius: "75px",
                  background: "#0f66ef",
                  border: "white",
                  color: "white",
                  fontSize: 17,
                }}
              >
                SignUp
              </button>
            )}
            {!newUser && (
              <div style={{ marginTop: 30 }}>
                <button
                  onClick={signUpHandler}
                  style={{
                    width: "95%",
                    marginTop: 40,
                    padding: "12px 20px",
                    marginLeft: 10,
                    borderRadius: "4px",
                    background: "#83f28f",
                    border: "black",
                    color: "black",
                    fontSize: 17,
                  }}
                >
                  NewUser ? CreateAccount
                </button>
              </div>
            )}
            {newUser && (
              <div style={{ marginTop: 30 }}>
                <button
                  onClick={LoginHandler}
                  style={{
                    width: "95%",
                    marginTop: 0,
                    padding: "12px 20px",
                    marginLeft: 10,
                    borderRadius: "4px",
                    background: "#83f28f",
                    border: "black",
                    color: "black",
                    fontSize: 17,
                  }}
                >
                  Have an account ? Login
                </button>
              </div>
            )}
          </form>
        </Card.Body>
      </Card>
      
    </div>
    
  );
};
export default Login;
