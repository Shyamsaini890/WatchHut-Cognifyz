import React, { useRef, useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import google from "./images/flat-color-icons_google.svg";
import git from "./images/akar-icons_github-fill.svg";
import fb from "./images/bi_facebook.svg";
import motu from "./images/89e31fb982e6d87f239196db2b3e9ccc copy 1.png";
import bg from "./images/bg.png";
import { Field, Form, ErrorMessage, Formik } from "formik";
import { collection, setDoc, doc, getDoc } from "firebase/firestore";
import { db } from "../FirebaseConfig";
import { object, string } from "yup";
import { useNavigate, Link } from "react-router-dom";
import watch from "./images/watch.png";

const Login = () => {
  console.log("It works");
  const [passState, setPassState] = useState("password");
  const usersCollectionRef = collection(db, "task4");
  const navigate = useNavigate();

  const validate = object({
    email: string()
      .email("Enter a valid E-mail address")
      .required("Please enter Email"),
    password: string()
      .min(8, "Password must be atleast 8 character")
      .required("Please enter Password"),
  });

  const loginUser = async ({ email, password }) => {
    const userRef = doc(usersCollectionRef, email);
    const userData = await getDoc(userRef);
    if (userData.exists() && userData.data().password == password) {
      navigate("/");
    } else {
      console.log("Un-authenticated User");
    }
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validate}
      onSubmit={loginUser}
    >
      <Form
        style={{
          background: "linear-gradient(170deg, #1d1d1d, #000000)",
          height: "89vh",
          width: "100%",
          display: "flex",
          // backgroundImage: `url(${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center left",
        }}
      >
        <div style={{ width: "40%" }}>
          <div
            style={{
              display: "flex",
              // justifyContent: "center",
              flexDirection: "column",
              // border: "2px solid black",
              width: "47%",
              height: "540px",
              marginLeft: "25%",
              marginTop: "5%",
              // alignItems: "center",
              paddingLeft: "70px",
              paddingRight: "30px",
              background: "rgba(255, 255, 255, 0.30)",
              backdropFilter: "blur(5px)",
              borderRadius: "30px",
            }}
          >
            {/* <h3
              style={{
                margin: "0",
                marginTop: "50px",
                marginBottom: "5px",
                color: "#F25019",
              }}
            >
              Your Logo
            </h3> */}
            <h1
              style={{
                padding: "0",
                margin: "0",
                marginBottom: "20px",
                marginTop: "50px",
              }}
            >
              Login
            </h1>
            <label>Email</label>
            <Field
              name="email"
              type="email"
              placeholder="username@gmail.com"
              style={{
                width: "250px",
                height: "40px",
                borderRadius: "5px",
                border: "none",
                marginBottom: "10px",
              }}
            />
            <ErrorMessage component="div" name="email" />
            <label>Password</label>
            <div
              style={{
                width: "250px",
                position: "relative",
                height: "40px",
              }}
            >
              <Field
                name="password"
                type={passState}
                placeholder="password"
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "5px",
                  border: "none",
                  marginBottom: "10px",
                }}
              />
              {passState == "password" ? (
                <AiFillEyeInvisible
                  style={{
                    position: "absolute",
                    right: "2%",
                    top: "20%",
                    height: "70%",
                    color: "black",
                    cursor: "pointer",
                  }}
                  onClick={(e) => {
                    setPassState((currState) => {
                      return currState == "password" ? "text" : "password";
                    });
                  }}
                />
              ) : (
                <AiFillEye
                  style={{
                    position: "absolute",
                    right: "2%",
                    top: "20%",
                    height: "70%",
                    color: "black",
                    cursor: "pointer",
                  }}
                  onClick={(e) => {
                    setPassState((currState) => {
                      return currState == "password" ? "text" : "password";
                    });
                  }}
                />
              )}
            </div>
            <ErrorMessage component="div" name="password" />
            <a>Forgot Password?</a>
            <button
              type="submit"
              style={{
                width: "250px",
                height: "40px",
                borderRadius: "5px",
                border: "none",
                background: "#F25019",
                color: "white",
                fontWeight: "bold",
                marginTop: "30px",
                background: "linear-gradient(170deg, #1d1d1d, #000000)",
              }}
            >
              Sign in
            </button>
            <p
              style={{
                fontSize: "12px",
                display: "flex",
                justifyContent: "center",
                width: "250px",
              }}
            >
              or continue with
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                //   marginLeft: "0px",
                width: "250px",
              }}
            >
              <button
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "70px",
                  height: "40px",
                  background: "white",
                  border: "none",
                  borderRadius: "25px",
                }}
              >
                <img src={google} />
              </button>
              <button
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "70px",
                  height: "40px",
                  background: "white",
                  border: "none",
                  borderRadius: "25px",
                }}
              >
                <img src={git} />
              </button>
              <button
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "70px",
                  height: "40px",
                  background: "white",
                  border: "none",
                  borderRadius: "25px",
                }}
              >
                <img src={fb} />
              </button>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "20px",
              }}
            >
              <p style={{ fontSize: "12px" }}> Don't have an account yet?</p>
              <Link
                style={{
                  fontSize: "14px",
                  fontWeight: "600",
                  textDecoration: "none",
                  color: "black",
                }}
                to="/signup"
              >
                Register for Free
              </Link>
            </div>
          </div>
        </div>
        <div style={{ width: "60%" }}>
          <img src={watch} style={{ width: "500px", marginLeft: "200px" }} />
        </div>
      </Form>
    </Formik>
  );
};

export default Login;
