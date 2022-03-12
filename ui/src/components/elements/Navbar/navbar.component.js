import React, { Component } from "react";
import { useForm } from "react-hook-form";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";
import "./navbar.component.css";
import logo from "../../../assets/images/LOGO.png";
import Header from "../../elements/Header/header.component.js";

const Banner = styled.div`
  width: 100%;
  height: 73px;
  background: rgba(241, 142, 117, 1);
  opacity: 1;
  /* position: absolute; */
  top: 208px;
  left: 0px;
  overflow: hidden;
`;

const Vignette = styled.span`
  width: 100px;
  height: 60px;
  display: flex;
  flex-grow: row nowrap;
  align-items: center;
`;

const Left = styled.div`
  display: flex;
  flex-grow: row nowrap;
  justify-content: space-around;
  width: 70%;
  font-size: 12px;
  color: white;
  a {
    color: white;
  }
`;

const Right = styled.div`
  display: flex;
  flex-grow: row nowrap;
  justify-content: center;
  width: 30%;
  a {
    color: white;
  }
`;

export default function Navbar() {
  return (
    <div className="container">
      <Header />
      <img src={logo} alt="Logo" style={{ margin: "20px" }} />;
      <Banner className="navbar">
        <Left>
          <Vignette>
            <Link to="/" style={{ textDecoration: "none" }}>
              HOME
            </Link>
          </Vignette>

          <Vignette>
            <Link to="/whatwedo" style={{ textDecoration: "none" }}>
              WHAT WE DO
            </Link>
          </Vignette>

          <Vignette>
            <Link to="/device" style={{ textDecoration: "none" }}>
              NEW NOMADIC LABGRADE DEVICE & APP
            </Link>
          </Vignette>

          <Vignette>
            <Link to="/whoweare" style={{ textDecoration: "none" }}>
              WHO WE ARE
            </Link>
          </Vignette>

          <Vignette>
            <Link to="/scientific" style={{ textDecoration: "none" }}>
              SCIENTIFIC VALIDATION
            </Link>
          </Vignette>

          <Vignette>
            <Link to="/studies" style={{ textDecoration: "none" }}>
              STUDIES & SERVICES
            </Link>
          </Vignette>
        </Left>

        {/* <Right>
          <Link
            to="/register"
            style={{ textDecoration: "none", marginRight: "115px" }}
          >
            Sign up
          </Link>

          <Link
            to="/login"
            className="navbar-link"
            style={{ textDecoration: "none" }}
          >
            Sign in
          </Link>
        </Right> */}
      </Banner>
    </div>
  );
}
