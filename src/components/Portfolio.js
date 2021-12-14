import React from "react";

import portfolio_01 from "../img/portfolio-01.jpg";
import portfolio_02 from "../img/portfolio-02.jpg";
import portfolio_03 from "../img/portfolio-03.jpg";
import portfolio_04 from "../img/portfolio-04.jpg";
import portfolio_05 from "../img/portfolio-05.jpg";
import portfolio_06 from "../img/portfolio-06.jpg";
import portfolio_07 from "../img/portfolio-07.jpg";
import portfolio_08 from "../img/portfolio-08.jpg";
import portfolio_09 from "../img/portfolio-09.jpg";
// import portfolio_10 from "../img/portfolio-10.jpg";

export default function Portfolio() {
  return (
    <section className="my-work" id="work">
      <h2 className="section__title">My work</h2>
      <p className="section__subtitle"></p>

      <div className="portfolio">
        <a
          href="https://medium.com/@saibalaji4/event-driven-video-transcoding-using-google-app-engine-cloud-pubsub-and-cloud-data-store-935de1492f35"
          className="portfolio__item"
        >
          <img src={portfolio_01} alt="" className="portfolio__img" />
          {/* <div>
            <h2 className="workTitle"> Transcoding </h2>
          </div> */}
          <span> Event Driven Transcoding </span>
        </a>

        <a
          href="https://medium.com/@saibalaji4/build-your-own-highly-scalable-h-264-transcoder-on-gcp-e2834acf1535"
          className="portfolio__item"
        >
          <img src={portfolio_02} alt="" className="portfolio__img" />
          <span> Cloud Native Transcoding </span>
        </a>

        <a
          href="https://medium.com/@saibalaji4/just-in-time-video-packaging-on-gcp-using-kalturas-nginx-module-2ac40ab9a36b"
          className="portfolio__item"
        >
          <img src={portfolio_03} alt="" className="portfolio__img" />
          <span> Just in Time Packaging </span>
        </a>

        <a
          href="https://github.com/couchrishi/diy-encoder-dashboard"
          className="portfolio__item"
        >
          <img src={portfolio_04} alt="" className="portfolio__img" />
          <span> Transcoding Jobs Dashboard using React </span>
        </a>

        <a
          href="https://couchrishi.hashnode.dev/voting-dapp-series-a-gentle-introduction-to-web3"
          className="portfolio__item"
        >
          <img src={portfolio_05} alt="" className="portfolio__img" />
          <span> Ethereum based Voting dApp using Solidity </span>
        </a>

        <a
          href="https://github.com/couchrishi/quiz-app"
          className="portfolio__item"
        >
          <img src={portfolio_06} alt="" className="portfolio__img" />
          <span> Interactive Quiz App using React </span>
        </a>

        <a
          href="https://github.com/couchrishi/ethereum-wave-portal"
          className="portfolio__item"
        >
          <img src={portfolio_07} alt="" className="portfolio__img" />
          <span> Send messages on the Ethereum Blockchain </span>
        </a>

        <a
          href="https://medium.com/@saibalaji4/bigquery-and-datastudio-for-understanding-the-state-of-the-web-c6224f3e60f5"
          className="portfolio__item"
        >
          <img src={portfolio_09} alt="" className="portfolio__img" />
          <span> Understand the state of web using BigQuery </span>
        </a>
      </div>
    </section>
  );
}
