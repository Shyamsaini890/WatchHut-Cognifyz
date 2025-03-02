import React from "react";
import { BiSearch } from "react-icons/bi";
import "./Home.css";
import watch from "./images/watch.png";

const Home = () => {
  return (
    <div className="background">
      <div className="left">
        <h1 style={{ margin: "0", width: "400px", fontSize: "55px" }}>
          Discover <br></br>Most Suitable Watches
        </h1>
        <p style={{ width: "370px", fontSize: "15px", color: "#8B8E99" }}>
          Find the best, reliable, and cheap smart watches here. We focus on
          product quality. Here you can find smart watches of almost all brands.
          So why you are waiting? Just order now!
        </p>
        <div className="searchbar">
          <div style={{ display: "flex", alignItems: "center" }}>
            <BiSearch />
            <input
              placeholder="Find the best brands"
              style={{
                border: "none",
                marginLeft: "10px",
                marginLeft: "0",
                color: "8B8E99",
              }}
            />
          </div>
          <button
            style={{
              border: "none",
              width: "100px",
              height: "40px",
              background: "#3858D6",
              borderRadius: "15px",
              color: "white",
              fontWeight: "bold",
              marginRight: "5px",
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div className="right">
        <img src={watch} />
      </div>
    </div>
  );
};

export default Home;
