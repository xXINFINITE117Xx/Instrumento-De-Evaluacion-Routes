import React from "react";
import "./Card.css";
import imgCard from "../assets/images/Photo.png";
import { useState } from "react";

export const Card = () => {
  const [Color, setColor] = useState("");
  onclick[input] = (Color) => {
    HashChangeEvent, setColor, Color;
  };

  return (
    <>
      <label htmlFor="">Elige el color de la card</label>
      <input type="color" />
      <div className="card">
        <div className="header-card"></div>
        <div className="main-card">
          <img src={imgCard} alt="Photo" />
        </div>
        <div className="footer-card"></div>
      </div>
    </>
  );
};
