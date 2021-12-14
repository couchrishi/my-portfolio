import React from "react";
import profilePic from "../img/sai.jpg";

export default function Intro() {
  return (
    <section className="intro" id="home">
      <h1 className="section__title section__title--intro">
        Hi, I am <strong>Sai Balaji</strong>
      </h1>

      <p className="section__subtitle section__subtitle--intro">
        Solutions Architect
      </p>
      <img src={profilePic} alt="" className="intro__img" />
    </section>
  );
}
