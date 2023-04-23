import React from "react";
import "./Work.css";
import Works from "./Works";
import { useState } from "react";

const Work = () => {
  // const [more, setMore] = useState(true);
  // const handleMore = () => {
  //   const container = document.querySelector(".work__container");
  //   if (more) {
  //     container.style.height = "hidden";
  //     container.style.overflow = "326px";
  //   } else {
  //     container.style.height = "max-content";
  //     container.style.overflow = "auto";
  //   }
  //   setMore(!more);
  // };
  return (
    <section className="work section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Most recent works</span>
      <Works />
      {/* <a href="##" className="more__btn">
        Show More
      </a> */}
    </section>
  );
};

export default Work;
