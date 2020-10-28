import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";
import Search from "./Search";

function Home() {
  return (
    <div className="home">
      <div className="home_header">
        <div className="home_headerLeft">
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
        </div>
        <div className="home_headerRight">
          <a href="https://www.google.com/gmail">Gmail</a>
          {/* <Link to="gmail.com">Gmail</Link> */}
          <a href="https://www.google.com/imghp?hl=EN">Images</a>
          {/* <Link to="/images">Images</Link> */}
          <AppsIcon />
          <Avatar />
        </div>
      </div>
      <div className="home_body">
        <img src="https://cdn.freebiesupply.com/images/large/2x/google-logo-transparent.png" />
        <div className="home_Inputcontainer">
          <Search />
        </div>
      </div>
    </div>
  );
}

export default Home;
