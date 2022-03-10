import React, { Component } from "react";
import logo from "./logo.svg";
import axios from "axios";
// import Login from "./components/login.component";
// import Register from "./components/register.component";
// import Home from "./components/Home/home.component";
import Navbar from "./components/elements/Navbar/navbar.component";
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
`;

const Onglet = styled.div`
  flex-grow: column nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin: 50px;
`;

const Wiredbeauty = styled.div`
  display: flex;
  flex-grow: row wrap;
  width: 100%;
  height: 100%;
  /* justify-content: center; */
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
`;

const Right = styled.div`
  display: flex;
  flex-grow: column wrap;
  justify-content: flex-start;

  width: 100%;
`;

const BannerMarque = styled.div`
  display: flex;
  flex-grow: row wrap;
  justify-content: center;
  align-items: center;
  background-color: #f0f0ee;
`;
class App extends Component {
  render() {
    return (
      <div className="App">
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
            <h3>Biology</h3>
          </Onglet>
          <Onglet>
            <img src={Nomadic} style={{ height: "158px", width: "158px" }} />
            <h3>IOT Nomadic Lab</h3>
          </Onglet>
          <Onglet>
            <img src={Consumer} style={{ height: "158px", width: "158px" }} />
            <h3>Consumer App</h3>
          </Onglet>
          <Onglet>
            <img src={Insanety} style={{ height: "158px", width: "158px" }} />
            <h3>Insanely Fast Algorythm</h3>
          </Onglet>
        </DivWithSpacing>

        <Wiredbeauty>
          <Left>
            <h3> WHAT IS WIRED BEAUTY ? </h3>
            <p>
              Wired Beauty as of today is a saas based start-up co-founded by
              Stanislas and Sophie, two beauty experts who become friends while
              working toghether at l’Oréal.
            </p>{" "}
            <br />
            <p>
              Stanislas initiated the scientific research on electrochemistry
              and antiox measurement to develop a skincare prescription tool,
              and launched a first B2C sun prevention tool (mapo solar).
            </p>{" "}
            <br />
            <p>
              {" "}
              In 2021, considering the blue ocean of cosmetic market research
              and the latest demands of consumer on efficiency proofs especially
              in Asia, the two of them decided to pivot to a 100% B2B Saas
              company, convinced by the potential of this technology.
            </p>{" "}
            <br />
            <p>
              {" "}
              As of today, Wired Beauty Technologies has invested 1.3M€ in
              research on their exclusive IOT, mobile app, algorithand
              scientific exposome and suncare knowledge partnering with a
              top-notch consortium ( APHP et Qima lien a créer vers page
              scientific)
            </p>
          </Left>

          <Right>
            <img src={V48} style={{ height: "606px", width: "606px" }} />
          </Right>
        </Wiredbeauty>

        <BannerMarque>
          <img src={Landome} style={{ height: "384px", width: "217px" }} />

          <img src={Oreal} style={{ height: "606px", width: "64px" }} />
        </BannerMarque>
      </div>
    );
  }
}

function Home() {
  return <h2>Home</h2>;
}

export default App;
