import React, { Component } from "react";
import { useTranslation } from "react-i18next";
import CookieConsent from "react-cookie-consent";

import logo from "./logo.svg";
import axios from "axios";
// import Login from "./components/login.component";
// import Register from "./components/register.component";
// import Home from "./components/Home/home.component";
import Navbar from "./components/elements/Navbar/navbar.component";
import Contact from "./components/Contact/contact.component";
import Footer from "./components/elements/Footer/footer.component";
import styled from "styled-components";
import Diaporama from "./assets/images/v7_40.png";

import Biology from "./assets/images/biology.JPG";
import Insanety from "./assets/images/insanety.JPG";
import Nomadic from "./assets/images/nomadic.JPG";
import Consumer from "./assets/images/consumer.JPG";
import V48 from "./assets/images/v48_11.png";
import Oreal from "./assets/images/v92_32.png";
import Landome from "./assets/images/v92_33.png";

import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

export const apiUrl = `http://localhost:8080`;

const DivWithSpacing = styled.div`
  display: flex;
  flex-grow: row nowrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-family: "Roboto";
`;

const Onglet = styled.div`
  flex-grow: column nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin: 50px;
  font-family: "Roboto";
`;

const Wiredbeauty = styled.div`
  display: flex;
  flex-grow: row nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 100%;
  height: 100%;
  font-family: "Roboto";
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;

  width: 678px;
  justify-content: center;
  margin: 50px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 28px;
  text-align: justify;
  font-family: "Roboto";
`;

const Right = styled.div`
  display: flex;
  margin: 50px;
  font-family: "Roboto";
`;

const BannerMarque = styled.div`
  display: flex;
  flex-grow: row wrap;
  justify-content: space-around;
  align-items: center;
  background-color: #f0f0ee;
  opacity: 0.5;
  height: 310px;
  font-family: "Roboto";

  div {
  }
`;

const Underline = styled.span`
  width: 363px;
  height: 0px;

  border: 7px solid #f18e75;
`;
export default function App() {
  const [t, i18n] = useTranslation();

  return (
    <div className="App">
      {/* <CookieConsent>Ce site utilise des cookies </CookieConsent> */}
      <CookieConsent
        enableDeclineButton
        flipButtons
        location="bottom"
        buttonText="Accepter les cookies"
        cookieName="userCookies"
        style={{ background: "#2B373B", fontFamily: "Roboto" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
      >
        {t("cookies.message")}
      </CookieConsent>
      <Navbar />

      {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <button onClick={() => this.createUser()}>Create User</button>
          <p>Users list:</p>
          <ul>
            {this.state.users.map((user) => (
              <li key={user._id}>id: {user._id}</li>
            ))}
          </ul>
        </header> */}
      <img src={Diaporama} style={{ height: "477px", width: "1205px" }} />

      <DivWithSpacing>
        <Onglet>
          <img src={Biology} style={{ height: "158px", width: "158px" }} />
          <h3>{t("biology")}</h3>
        </Onglet>
        <Onglet>
          <img src={Nomadic} style={{ height: "158px", width: "158px" }} />
          <h3>{t("nomadic")}</h3>
        </Onglet>
        <Onglet>
          <img src={Consumer} style={{ height: "158px", width: "158px" }} />
          <h3>{t("consumer")}</h3>
        </Onglet>
        <Onglet>
          <img src={Insanety} style={{ height: "158px", width: "158px" }} />
          <h3>{t("insanety")}</h3>
        </Onglet>
      </DivWithSpacing>

      <Wiredbeauty>
        <Left>
          <h3>{t("home.param.title")} </h3>
          <Underline />
          <p>{t("home.param1")}</p> <br />
          <p>{t("home.param2")}</p> <br />
          <p> {t("home.param3")}</p> <br />
          <p> {t("home.param4")}</p>
        </Left>

        <Right>
          <img src={V48} style={{ height: "606px", width: "606px" }} />
        </Right>
      </Wiredbeauty>

      <BannerMarque>
        <img src={Landome} style={{ height: "217px", width: "384px" }} />

        <img src={Oreal} style={{ height: "64px", width: "354px" }} />
      </BannerMarque>

      <Contact />

      <Footer />
    </div>
  );
}
