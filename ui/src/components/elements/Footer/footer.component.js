import React, { Component } from "react";
import { useForm } from "react-hook-form";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";
// import "./navbar.component.css";
import logo from "../../../assets/images/v7_40.png";
import Header from "../../elements/Header/header.component.js";

const Background = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: #f18e75;
  border-top-left-radius: 25%;
  border-top-right-radius: 25%;
  height: 347px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;
  color: white p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 28px;
  } ;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  span,
  h5 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 28px;
    /* width: 33.33.%; */

    color: #ffffff;
  }
`;

export default function Footer() {
  return (
    <div className="container">
      <Background>
        <Row>
          <Card>
            <h5>Nous Contacter</h5>
            <span>Tél : +33(0) 6 71 66 24 26 </span>
            <span>Mail : contact@wiredbeauty.fr</span>
          </Card>

          <Card>
            <h5>Mentions Légales</h5>
            <span>
              Règlement Intérieur <br />
              Politique de Confidentialité
              <br />
              Paramètre de cookies
            </span>
          </Card>

          <Card>
            <h5>Nous suivre</h5>
          </Card>
        </Row>
      </Background>
    </div>
  );
}
