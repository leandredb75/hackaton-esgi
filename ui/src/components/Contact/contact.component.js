import React, { Component } from "react";
import Navbar from "../elements/Navbar/navbar.component";
import test from "../../assets/images/v7_40.png";
import styled from "styled-components";
import { Notyf } from "notyf";
import { useTranslation } from "react-i18next";

const Title = styled.h2`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 42px;
  text-align: center;

  color: #000000;
`;

const Input = styled.input`
  width: 694px;

  height: 73px;
  left: 418px;
  top: 2721px;

  border: 3px solid #f18e75;
  box-sizing: border-box;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 25px;

  margin-top: 20px;
  margin-bottom: 20px;
`;

const Textarea = styled.textarea`
  width: 694px;
  height: 191px;
  left: 418px;
  top: 2943px;

  border: 3px solid #f18e75;
  box-sizing: border-box;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 25px;
`;

const Submit = styled.button`
  width: 402px;
  height: 42px;
  background-color: #f18e75;
  border-radius: 25px;
  color: white;
  font-size: 22px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Underline = styled.span`
  width: 240px;
  height: 0px;

  border: 7px solid #f18e75;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export default function Contact() {
  const [t, i18n] = useTranslation();
  const Message = () => {
    const notyf = new Notyf({
      duration: 1000,
      position: {
        x: "right",
        y: "top",
      },
    });
    // notyf.success("Votre message a bien été envoyée ! ");
  };
  return (
    <div>
      <Title>{t("contact.title")}</Title>
      <Column>
        <Input type="text" name="nom" placeholder={t("contact.name")} />
        <Input type="text" name="email" placeholder={t("contact.email")} />
        <Textarea name="message" placeholder={t("contact.message")} />
      </Column>
      <Submit onClick={Message}>Submit</Submit>
    </div>
  );
}
