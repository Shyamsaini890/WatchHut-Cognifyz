import React from "react";
import firstimg from "./images/firstimg.png";
import { AiFillStar } from "react-icons/ai";

const About = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        paddingTop: "100px",
        background: "linear-gradient(170deg, #1d1d1d, #000000)",
      }}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <a
          href="#"
          style={{ textDecoration: "none", color: "white", fontSize: "20px" }}
        >
          Here are our some of the best clients.
        </a>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          color: "white",
          fontSize: "30px",
        }}
      >
        <h1>What People Say About Us</h1>
      </div>
      <div
        style={{
          width: "100%",
          height: "200px",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "500px",
            height: "150px",
            border: "2px solid black",
            marginLeft: "100px",
            borderRadius: "10px",
            background: "rgba(255, 255, 255, 0.30)",
          }}
        >
          <img
            src={firstimg}
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "10px",
              marginLeft: "50px",
              marginTop: "25px",
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h3
              style={{
                margin: "0",
                marginLeft: "20px",
                marginTop: "30px",
                color: "white",
              }}
            >
              Hamza Faizi
            </h3>
            <p
              style={{
                margin: "0",
                marginLeft: "20px",
                marginTop: "5px",
                color: "white",
              }}
            >
              Don’t waste time, just order! This is the best website to puschase
              smart watches.
            </p>
            <div
              style={{
                display: "flex",
                marginLeft: "19px",
                marginTop: "7px",
                color: "#a88932",
              }}
            >
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            width: "500px",
            height: "150px",
            border: "2px solid black",
            marginLeft: "100px",
            borderRadius: "10px",
            background: "rgba(255, 255, 255, 0.30)",
          }}
        >
          <img
            src={firstimg}
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "10px",
              marginLeft: "50px",
              marginTop: "25px",
            }}
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h3
              style={{
                margin: "0",
                marginLeft: "20px",
                marginTop: "30px",
                color: "white",
              }}
            >
              Hamza Faizi
            </h3>
            <p
              style={{
                margin: "0",
                marginLeft: "20px",
                marginTop: "5px",
                color: "white",
              }}
            >
              Don’t waste time, just order! This is the best website to puschase
              smart watches.
            </p>
            <div
              style={{
                display: "flex",
                marginLeft: "19px",
                marginTop: "7px",
                color: "#a88932",
              }}
            >
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default About;
