import React from "react";
import aboutMePic from "../img/aboutme.jpg";

export default function Aboutme() {
  return (
    <section className="about-me" id="about">
      <h2 className="section__title section__title--about">Who I am</h2>
      <p className="section__subtitle section__subtitle--about"></p>

      <div className="about-me__body">
        <p>
          I'm a self-taught developer with 10+ years of tech consulting &
          operations background. My dev name is <strong>couchrishi</strong>.
          I've worked for some of the top web2 companies in the last decade
          including Microsoft, Oracle & Google (currently). I've been helping
          startups & enterprises embrace emerging technologies to solve their
          business & operational challenges.
        </p>
        <p>
          I'm an Internet optimist with some extra passion for data-heavy
          verticals such as video streaming & gaming. I've represented Google in
          the India Gaming Summit 2021 as an M&E specialist. I'm also part of
          the "Google for Startups" program where I mentor early stage startups
          in the areas of cloud tech, product growth & user engagement
          strategies.
        </p>
      </div>

      <img
        src={aboutMePic}
        alt="Jane leaning against a bus"
        className="about-me__img"
      />
    </section>
  );
}
