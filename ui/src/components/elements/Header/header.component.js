import React, { Component } from "react";
import { useForm } from "react-hook-form";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";
// import "./navbar.component.css";
import logo from "../../../assets/images/v7_40.png";
import Header from "../../elements/Header/header.component.js";

const Line = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  opacity: 1;
  /* position: absolute; */
  top: 208px;
  left: 0px;
  overflow: hidden;
  a {
    margin: 10px;
  }
`;

export default function Navbar() {
  return (
    <div className="container">
      <Line className="header">
        <Link to={"/login"}>Login</Link>
        <Link to={"/register"}>Register</Link>
      </Line>
    </div>
  );
}
