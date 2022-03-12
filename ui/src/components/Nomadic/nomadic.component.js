import React, { Component } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import Navbar from "../../components/elements/Navbar/navbar.component";
import Footer from "../../components/elements/Footer/footer.component";

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin: 50px;

  width: 410px;
  height: 254px;
  left: 112px;
  top: 677px;

  background: #3b3b40;
  border-radius: 25px;

  p {
    width: 348px;
    left: 143px;
    top: 754px;

    font-family: "Roboto";
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 28px;
    text-align: justify;
    color: white;
  }

  h5 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    line-height: 35px;
    text-align: center;

    color: white;
  }
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

const Underline = styled.span``;

export default function Login() {
  return (
    <div>
      <Navbar />
      <h1>Nomadic labgrade IOT device & smart app</h1>
      <Underline />
      <span>
        WIRED BEAUTY is a French beauty-tech market research company which
        invested 1,3M€ to develop a non invasive, portable lab connected device
        to deliver labgrade and real time measurements of skin markers to
        dermocosmetic lab as well as a smart app in order to also harvest
        consumer perception.
      </span>

      <Row>
        <Column>
          <h5>
            Wired Beauty is <span style={{ color: "red" }}> new</span>
          </h5>
          <p>
            Hybrid studies combining objective clinical results measurements &
            consumer perception.
          </p>
        </Column>

        <Column>
          <h5>
            Wired Beauty is <span style={{ color: "red" }}> different</span>
          </h5>
          <p>
            Proprietary IOT and Algorythm allowing decifering within minutes
            combined with a consumer app harvesting consumer opinions.
          </p>
        </Column>

        <Column>
          <h5>
            Wired Beauty is <span style={{ color: "red" }}> better</span>
          </h5>
          <p>
            Real World Evidence (link with pollution, UV and lifestyle) of
            skincare efficiency on large statistical basis (ex 1000 testers).
          </p>
        </Column>
      </Row>

      <Row>
        <Wiredbeauty>
          <Left>
            <h3> WHAT IS WIRED BEAUTY ? </h3>
            <Underline />
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
            {/* <img src={V48} style={{ height: "606px", width: "606px" }} /> */}
          </Right>
        </Wiredbeauty>
      </Row>
      <Footer />
    </div>
  );
}
