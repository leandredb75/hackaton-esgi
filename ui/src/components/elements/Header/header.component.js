import React, { Component } from "react";
import { useForm } from "react-hook-form";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";
// import "./navbar.component.css";
import logo from "../../../assets/images/v7_40.png";
import Header from "../../elements/Header/header.component.js";
import { useTranslation } from "react-i18next";

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
  const [t, i18n] = useTranslation();
  const ChangeLanguage = (lang) => {
    console.log(lang);
    i18n.changeLanguage(lang);
  };

  return (
    <div className="container">
      <Line className="header">
        <Link to={"/login"}>Login</Link>
        <Link to={"/register"}>Register</Link>
      </Line>
      <button onClick={() => ChangeLanguage("en")}>English</button>

      <button onClick={() => ChangeLanguage("de")}>Deutsch</button>

      <button onClick={() => ChangeLanguage("fr")}>Francais</button>

      <button onClick={() => ChangeLanguage("ch")}>Chinese</button>

      <p>{t("please_enter_name")}</p>
    </div>
  );
}
