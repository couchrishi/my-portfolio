import React from "react";

export default function MyServices() {
  return (
    <section className="my-services" id="services">
      <h2 className="section__title section__title--services">What I do</h2>
      <div className="services">
        <div className="service">
          <h3>Design + Development</h3>
          <p>
            I can help you design, implement, migrate & maintain cloud
            applications on top of cloud native and 12 factor app pricinples.
            Build a next-gen cloud strategy with all the right cost optimization
            levers in place. Run your services at scale with robust SLAs &
            uncompromising performance.
          </p>
        </div>

        <div className="service">
          <h3> Modernize your D2C platform </h3>
          <p>
            Do you run a D2C video streaming business or a UGC platform? I can
            help you mordernize your video processing stack using a combination
            of open-source + cloud native solutions. To track your key business
            KPIs, I also craft an integrated data strategy across subscription,
            Ads, YouTube, GA & other data sources.
          </p>
        </div>

        <div className="service">
          <h3>Web3</h3>
          <p>
            Let's identify the best Web3 use-cases for your online business.
            I'll help you design & acid-test some of the niche web3 use-cases
            and translate them to test-able prototypes. This includes building
            smart contracts on the Ethereum network and devising new business
            models using token-based incentivization layers.
          </p>
        </div>
      </div>
      <a href="#work" className="btn">
        My Work
      </a>
    </section>
  );
}
